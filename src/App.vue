<template>
  <section class="container is-fluid">
    <navbar></navbar>
    <!-- <sidebar></sidebar> -->
    <!-- <homeview></homeview> -->
  </section>
</template>
<script>
import navbar from "./components/navBar.vue";
// import sidebar from "./components/sideBar.vue";
// import homeview from './views/HomeView.vue';

export default {
  components: {
    // sidebar,
    navbar,
    // homeview
  },
};
</script>
<style>
section{
  background-color: #F6F7FB;

}
</style>