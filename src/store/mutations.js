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
  EPISODE (state, data) {
    state.episode = data
  },
  PUSH_EPISODES (state, data) {
    state.episodes.data.unshift(data)
  },
  LOADING (state, data) {
    state.loading = data
  }
}
