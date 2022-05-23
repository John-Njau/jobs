<template>
  <section id="cat">
    <div class="p-1">
      <div>
        <h2 class="mb-4">CATEGORY</h2>
        <input class="input is-normal mb-3" type="text" placeholder="category of movie">
      </div>
      <div id="category">
        <div class="control is-flex-direction-row">
          <div v-for="(category, index) in categories" :key="index">
            <label class="radio ml-3">
              <input type="radio" class="m-2" name="categorys" />
              {{ category}}
            </label>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      categories: ["Popular", "Upcoming", "Now Showing", "Action"]
    };
  },

  computed: {
    upCase() {
      return this.categories.toUpperCase()
    },
  },
};
</script>

<style>
.p-1 {
  padding: 1em;
}



</style>