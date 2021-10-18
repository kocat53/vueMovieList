<template>
  <div id="wrap">
    <Header />
    <div class="container-md" id="container">
      <RouterView />
    </div>
    <Footer/>
  </div>
</template>
<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
export default {
  components: { Header,Footer }
}
</script>
<style lang="scss">
  html,body,#wrap,#app {
    height: 100%;
  }

  .blind {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
  }
</style>
<style lang="scss" scoped>
  

  #wrap {
    display: flex;
    flex-direction: column;

    #header,#footer {
      flex: none;
    }

    #container {
      flex: 1;
    }
  }
</style>