<template>
  <div class="columns">
    <div class="column ">
      <div>
        <b-field class="input p-5 is-center" id="search-bg">
          <div id="inputfield">
            <b-input
              placeholder="Search Movie ..."
              class="input"
              v-model="search"
            >
            </b-input>
            <b-button class="p-4" type="is-info" @click="searchmethod"
              >Search</b-button>
          </div>
        </b-field>
      </div>
      <div class="columns is-mobile">
        <div class="column is-one-third" id="cat">
          <p class="bd-notification is-info"></p>
          <sidebar></sidebar>
        </div>
        <div class="column">
         <p class="m-3" ><b> Ordered by Popularity</b></p> 
          <div
            class="content"
            v-for="movie in movies.results"
            :key="movie.id"
            id="main-card">
            <router-link
              :to="{ name: 'movie', params: { id: movie.id } }"
              id="link">
              <div class="media-left pt-5">
                <img
                  class="m-3"
                  :src="'https://image.tmdb.org/t/p/w200/' + movie.poster_path"
                  alt="Placeholder image"
                />
              </div>
              <div class="media-right">
                <div class="media-content">
                  <p class="title is-4">{{ movie.title }}</p>
                </div>
                <div class="overview-content">
                  {{ movie.overview }}
                  <br />
                  <div id="buttonloc">
                    <div>
                      <p class="">
                        lang:
                        {{ movie.original_language }}
                      </p>
                      <div id="age">
                        <p v-if="movie.adult === true" class="">
                          Adult Content. PG 21+
                        </p>
                        <p v-else>
                          Suitable For General Family Viewing
                        </p>
                      </div>
                      <div id="dates">
                        <b>
                          Rating: {{ movie.vote_average }}/10 <br> Votes:
                          {{ movie.vote_count }}
                          <span class="ml-4">
                            Released on: {{ movie.release_date }}</span
                          >
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import sidebar from "./sideBar.vue";
import navbar from "./navBar.vue";

export default {
  name: "home",
  components: {
    sidebar,
    navbar,
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
  },
};
</script>
<style scoped>
#main-card {
  border: 1px solid #dedede;
  background-color: rgb(255, 255, 255);
  text-decoration: none;
  max-width: 900px;
}

#link {
  color: #000000;
}

@media only screen and (max-width: 500px) {
  #cat {
    display: none;
  }
}
</style>