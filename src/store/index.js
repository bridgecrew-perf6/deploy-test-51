import Vue from "vue";
import Vuex from "vuex"
import axios from "axios"

import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

const persistedDataState = createPersistedState()

export default new Vuex.Store({
    plugins: [persistedDataState],
    state: {
        newsList: [],
        info: '',
      },
      getters: {
      },
      mutations: {
        setNewsList(state, playload) {
          state.newsList = playload;
        },
        setInfo(state, playload) {
          state.info = playload;
        }
      },
      actions: {
        fetchNews(store, {keyword}){
          axios
              .get(`https://api.themoviedb.org/3/search/movie?api_key=05393432969715caf794d0e7943379f0&query=${keyword}`)
              .then((response) => {store.commit('setNewsList', response.data.results);
            })
              .catch((error) => { store.commit("setInfo", error)
            })
        },
      },
      modules: {
      }
})