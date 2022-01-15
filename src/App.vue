<template>
  <div id="app">
    <div id="nav" class="w-full flex justify-center p-8 bg-green">
      <router-link to="/" class="button">Home</router-link>
      <router-link to="/database">Words Database</router-link>
      <router-link to="/selectTest">Test</router-link>
      <router-link to="/categories">Categories</router-link>
    </div>
    <router-view/>
  </div>
</template>
<style lang="stylus">
@import 'assets/styles/tailwind.postcss';

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  a
    margin-right 20px
    font-size 1.25rem
    font-weight bold
    color #fff
    text-decoration none
    &.router-link-exact-active
      color #2C7A57
      text-decoration underline

</style>
<script>
import Question from "@/components/Question";
export default {
  components: {Question}
}
</script>