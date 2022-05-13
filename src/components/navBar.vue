<template>
  <div>
    <section class="container is-fluid">
      <div class="mb-5 p-3">
        <span class="title is-title mb-6">Github </span>
        <span class="is-size-6">jobs</span>
      </div>
    </section>
      <div class="m-0" id="navt">
      <router-link to="/"></router-link> 
      <router-link to="/jobs"></router-link>
    </div>
    <router-view :key="$route.name" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      // movies: [],
      // moviesPages: [],
      // page: 1,
      jobsearch: "",
    };
  },
  computed: {
    filteredMovies() {
      return this.$store.state.movies.filter((movie) => {
        return movie.title.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
};
</script>
<style>
#search-bg {
  background-image: url("../assets/backgroundImg.png");
  height: 20vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 5px;
}
#inputfield {
  text-align: center !important;
  display: flex;
  margin: auto auto;
  padding: 0.5em;
  width: 70%;
  background-color: #fff;
  border-radius: 3px;
}
.input {
  border: none !important;
}
</style>