import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

// where we assemble modules and export the store

const state = {
  movies: [],
  movie: {},
  category: {}
};

const getters = {};

const actions = {
  getMovies({ commit}) {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=22f3e85e05becdb7e502c1f391dbd90d"
      )
      .then((response) => {
        commit("SET_Movies", response.data);
        console.log(response.data);
      });
  },
  searchMovies({commit}, payload) {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${payload}&api_key=22f3e85e05becdb7e502c1f391dbd90d`
      )
      .then((response) => {
        commit("SET_Movies", response.data);
      })
  },
  movieDetails({commit}, payload) {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${payload}?api_key=22f3e85e05becdb7e502c1f391dbd90d&language=en-US`
      )
      .then((response) => {
        commit("SET_MOVIE_DETAILS", response.data);
      })
  },
  getCategory({commit}, payload){
    axios.get(
      `https://api.themoviedb.org/3/movie/${payload}?api_key=22f3e85e05becdb7e502c1f391dbd90d&language=en-US`
    )
    .then((response) => {
      commit("SET_MOVIE_CATEGORY", response.data);
    })
  }

};

const mutations = {
  SET_Movies(state, movies) {
    state.movies = movies;
  },
  SET_MOVIE_DETAILS(state, movie) {
    state.movie = movie
  },
  SET_MOVIE_CATEGORY(state, category) {
    state.category = category
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
