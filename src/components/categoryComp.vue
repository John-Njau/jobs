<template>
  <div class="about container is-fluid">
    <div class="column">
      <br />
      <div class="columns is-mobile">
        <div class="column is-one-third">
          <router-link to="/" class="button"><a>Home</a> </router-link>
        </div>
        <router-link
          :to="{ name: 'category', params: { category: movie.category } }"
          class="">
          <div class="column">
            <p class="title is-title">
              <strong>About {{ movie.title }}</strong>
            </p>
            <div v-if="movie">
              <p class="bd-notification is-info">movie category {{ id }}</p>
              <small>Title</small>
              <span class="title is-title"> {{ movie.title }}</span>
              <div class="media-left pt-5">
                <img
                  :src="'https://image.tmdb.org/t/p/w200/' + movie.poster_path"
                  alt="Placeholder image"
                />
                <br />
                <small> <strong> Overview:</strong></small> <br />
                {{ movie.overview }} <br />
                <small><strong>Released on: </strong></small
                >{{ movie.release_date }}
              </div>
            </div>
            <div v-else>
              <p>Loading movie details ...</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Movieview",
  props: ["id"],
  computed: {
    movie() {
      return this.$store.state.movie;
    },
  },
  mounted() {
    this.$store.dispatch("movieDetails", this.id);
  },
};
</script>
