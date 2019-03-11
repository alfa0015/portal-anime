export default {
  ANIMES (state, data) {
    state.animes = data
  },
  ANIME (state, data) {
    state.anime = data
  },
  EPISODES (state, data) {
    state.episodes = data
  },
  PUSH_EPISODES (state, data) {
    state.episodes.data.push(data)
  },
  LOADING (state, data) {
    state.loading = data
  }
}
