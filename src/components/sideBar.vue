<template>
  <section>
    <div class="p-1">
      <label class="checkbox mb-6">
        <input type="checkbox" />
        FULL TIME
      </label>
      <div>
        <h2 class="mb-4">CATEGORIES</h2>
        <input class="input is-normal mb-3" type="text" placeholder="category of movie">
      </div>
      <div id="location">
        <div class="control is-flex-direction-row">
          <div v-for="(location, index) in locations" :key="index">
            <label class="radio ml-3">
              <input type="radio" class="m-2" name="locations" />
              {{ location}}
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
      locations: ["Popular", "Upcoming", "Now Showing", "Action"],
      open: true,
      overlay: true,
      fullheight: true,
      fullwidth: false,
      right: false,
      uppercase: true,
    };
  },

  computed: {
    upCase() {
      return this.locations.toUpperCase()
    },
  },
};
</script>

<style>
.p-1 {
  padding: 1em;
}
</style>