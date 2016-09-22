<template lang="jade">
#app
  <img class="logo" src="./assets/logo.png">
  <hello></hello>

  table.table
    thead
      tr
        th #
        th First Name
        th Last Name
        th Username
    tbody
      tr
        td
          i.fa.fa-github
        td Mark
        td Otto
        td @mdo
      tr
        td
          i.fa.fa-apple
        td Jacob
        td Thornton
        td @fat
      tr
        td
          i.fa.fa-chrome
        td Larry
        td the Bird
        td @twitter
</template>

<script>
import Hello from './components/Hello'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  components: {
    Hello{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style>
html {
  height: 100%;
}

body {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
