<template>
  <section id="cat">
    <div class="p-1">
      <br /><br />
      <h2 class="mb-4">Movie Category</h2>
      <div id="category">
        <div class="control is-flex-direction-row">
          <!-- latest -->
          <b-button
            tag="router-link"
            class="button is-rounded m-1"
            to="/movie/latest"
            >latest
          </b-button>
          <br />
          <!-- upcoming -->
          <b-button
            tag="router-link"
            class="button is-rounded m-1"
            to="/movie/upcoming"
          >
            Upcoming
          </b-button>
          <br />
          <!-- top_rated -->
          <b-button
            tag="router-link"
            class="button is-rounded m-1"
            to="/movie/top_rated"
          >
            Top Rated
          </b-button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>

<style>
</style>
