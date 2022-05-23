<template>
  <section>
    <div class="content">
      <div class="media">
        <div class="media-left pt-5">
          <img
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
                <button class="button">{{ movie.original_language }}</button>
                <div id="dates">
                  <b>
                    Votes: {{ movie.vote_count }}
                    <span class="ml-4">
                      Released on: {{ movie.release_date }}</span
                    >
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>
<style>
.media {
  display: block !important;
}
#buttonloc {
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between !important;
  /* justify-content: space-between; */
}
#dates {
  justify-content: flex-end !important;
}
.card {
  /* background: #fff!important; */
  position: absolute;
  width: 790px;
  height: 114px;
  /* left: 531px; */
  /* top: 426px; */
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  /* height: 50px; */
  /* padding: 10px 15px; */
}
.media-left > img {
  /* width: 100px; */
  height: 150px;
  /* float:left!important; */
}

.content{
  border: 1px solid #e6e6e6;
  background: #fff;
  margin:0.5rem
}

@media screen and (max-width: 767px) {
  .media-left > img {
    /* width: 100px; */
    /* height: 150px; */
    /* float:left!important; */
    text-align: center;
  }
}
</style>