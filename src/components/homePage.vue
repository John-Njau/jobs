<template>
  <div class="columns">
    <div class="column">
      <div>
        <b-field class="input p-5 is-center" id="search-bg">
          <div id="inputfield">
            <b-input
              placeholder="Search Movie ..."
              class="input"
              v-model="search"
            ></b-input>
            <b-button class="p-4" type="is-info" @click="searchmethod" >Search</b-button>
          </div>
        </b-field>
      </div>
      <div class="columns is-mobile">
        <div class="column is-one-third" id="cat">
          <p class="bd-notification is-info"></p>
          <sidebar></sidebar>
        </div>
        <div class="column">
          <p class="bd-notification is-info"></p>
          <jobCard
            v-for="movie in movies.results"
            :key="movie.id"
            :movie="movie"
          >
          </jobCard>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import sidebar from "./sideBar.vue";
import navbar from "./navBar.vue";
import jobCard from "./jobCard.vue";

// const moviesPages = [...Array(10).keys()].map(i => ({id: (i + 1), name: `Page ${i + 1}`}));

export default {
  name: "home",
  components: {
    sidebar,
    navbar,
    jobCard,
  },
  data() {
    return {
      search: "",
    };
  },
  computed: {
    movies() {
      return this.$store.state.movies;
    },
  },
  mounted() {
    this.$store.dispatch("getMovies");
  },
  methods: {
    searchmethod() {
      this.$store.dispatch("searchMovies", this.search);
    },
    moviecategory() {
      this.$store.dispatch("movieCategory", this.search);
    },
  },
};
</script>
<style scoped>
.column {
  border: 1px solid #dedede;
}

@media only screen and (max-width: 500px) {
 #cat{
   display: none;
  }
}
</style>