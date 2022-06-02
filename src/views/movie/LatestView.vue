<template>
  <div class="container is-fluid" id="movie">
    <div class="column">
      <br />
      <div class="columns is-mobile">
        <div class="column" id="movie-col">
          <p class="title is-title">
            <strong
              ><span>{{ category }} Movie</span></strong
            >
          </p>
          <div v-if="movie">
            <p class="bd-notification is-info"></p>
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
              <strong>Audience: </strong>
              <div id="age">
                <p v-if="movie.adult === true" class="">
                  Adult Content. PG 21+
                </p>
                <p v-else>Suitable For General Family Viewing</p>
              </div>
              <small><strong>Released on: </strong></small
              >{{ movie.release_date }}
            </div>
          </div>
          <div v-else>
            <p>Loading movie details ...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Categoryview",
  props: ["category"],
  computed: {
    movie() {
      return this.$store.state.category;
    },
  },
  mounted() {
    this.$store.dispatch("getCategory", this.category);
  },
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Akshar:wght@300&family=Koulen&family=Macondo&family=Montserrat:wght@200;500&family=Nunito+Sans:wght@200&family=Pacifico&family=Poppins:ital,wght@0,100;0,200;0,300;1,300&family=Raleway:ital,wght@0,300;0,500;1,200&display=swap');
#movie {
  height: 100vh;
  text-align: center;
}

#movie-col{
  border: 1px solid #ccc;
 box-shadow: 1px 1px 1px rgb(7, 7, 7, 0.4);
}
</style>