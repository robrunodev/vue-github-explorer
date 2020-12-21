<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  background: #f2f2fa url('./assets/github-background.svg') no-repeat 70% top;
  -webkit-font-smoothing: antialiased;
}

body,
input,
button {
  font: 16px "Roboto", sans-serif;
}

#app {
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px;
}

button {
  cursor: pointer;
}
</style>
