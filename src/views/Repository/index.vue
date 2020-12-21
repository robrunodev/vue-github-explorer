<template>
  <div>
    <Header>
      <img :src="logo" alt="Github Explorer" />
      <router-link to="/">
        <span>voltar</span>
      </router-link>
    </Header>

    <RepositoryInfo v-if="repository">
      <header>
        <img :src="repository.owner.avatar_url" :alt="repository.owner.login" />
        <div>
          <strong>{{repository.full_name}}</strong>
          <p>{{repository.description}}</p>
        </div>
      </header>
      <ul>
        <li>
          <strong>{{repository.stargazers_count}}</strong>
          <span>Stars</span>
        </li>
        <li>
          <strong>{{repository.forks_count}}</strong>
          <span>Forks</span>
        </li>
        <li>
          <strong>{{repository.open_issues_count}}</strong>
          <span>Issues abertas</span>
        </li>
      </ul>
    </RepositoryInfo>

    <Issues v-if="issues.length">
      <a v-for="issue in issues" :key="issue.id" :href="issue.html_url">
        <div>
          <strong>{{ issue.title }}</strong>
          <p>{{ issue.user.login }}</p>
        </div>
      </a>
    </Issues>
  </div>
</template>

<script>
import logo from '@/assets/logo.svg';
import api from '../../services/api';
import { Header, RepositoryInfo, Issues } from './style';

export default {
  components: {
    Header,
    RepositoryInfo,
    Issues,
  },
  data() {
    return {
      logo,
      repository: null,
      issues: [],
    };
  },
  created() {
    const { params } = this.$route;

    api.get(`repos/${params.reponame}`).then((response) => {
      this.repository = response.data;
    });

    api.get(`repos/${params.reponame}/issues`).then((response) => {
      this.issues = response.data;
    });
  },
};
</script>
