<template>
  <div>
    <img :src="logo" alt="Github explorer logo" />
    <Title> Explore repositórios no Github. </Title>
    <Form @submit.prevent="handleSubmit" :hasError="hasError">
      <input placeholder="Digite o nome do repositório" v-model="search" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Error v-if="hasError"> {{ errors[0] }} </Error>

    <Repositories>
      <router-link
        v-for="repo in repositories"
        :to="{ name: 'Repository', params: { reponame: `${repo.full_name}` } }"
        :key="repo.id"
      >
        <img :src="repo.owner.avatar_url" :alt="repo.owner.login" />
        <div>
          <strong>{{ repo.full_name }}</strong>
          <p>{{ repo.description }}</p>
        </div>
      </router-link>
    </Repositories>
  </div>
</template>
<script>
import logo from '@/assets/logo.svg';
import {
  Title, Form, Repositories, Error,
} from './style';
import api from '../../services/api';

export default {
  components: {
    Title,
    Form,
    Repositories,
    Error,
  },
  data() {
    return {
      logo,
      errors: [],
      hasError: false,
      repositories: [],
      search: '',
    };
  },
  created() {
    const storagedRepos = localStorage.getItem('@GithubExplorer:repositories');
    if (storagedRepos) {
      this.repositories = JSON.parse(storagedRepos);
    }
  },
  methods: {
    async handleSubmit() {
      this.errors = [];

      if (!this.search) {
        this.errors.push('Digite o autor/nome do repositório');
        this.hasError = true;
        return;
      }

      try {
        const response = await api.get(`repos/${this.search}`);
        this.repositories = [...this.repositories, response.data];

        localStorage.setItem(
          '@GithubExplorer:repositories',
          JSON.stringify(this.repositories),
        );

        this.search = '';
      } catch (error) {
        this.errors.push('Erro na busca por este repositório');
        this.hasError = true;
      }
    },
  },
};
</script>
