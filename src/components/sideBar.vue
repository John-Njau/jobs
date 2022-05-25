<template>
  <section id="cat">
    <div class="p-1">
      <div>
        <h2 class="mb-4">CATEGORY</h2>
      </div>
      <div id="category">
        <div class="control is-flex-direction-row">
            <b-button
            tag="router-link"
            class="button is-rounded m-1"
            to="/latest"
          >
            Latest
          </b-button>  <br />
           <b-button
            tag="router-link"
            class="button is-rounded m-1"
            to="/nowshowing"
          >
            Now Showing
          </b-button>  <br />
          <b-button
            tag="router-link"
            class="button is-rounded m-1"
            to="/upcoming"
          >
            Upcoming
          </b-button> <br>
         
          
          <b-button
            tag="router-link"
            class="button is-rounded m-1"
            to="/popular"
          >
            Popular
          </b-button> <br>
          <b-button
            tag="router-link"
            class="button is-rounded m-1"
            to="/top_rated"
          >
            Top Rated
          </b-button>
        
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
};
</script>

<style>
</style>
