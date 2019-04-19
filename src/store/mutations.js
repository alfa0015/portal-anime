export default {
  EPISODES (state, data) {
    state.episodes = data
  },
  EPISODE (state, data) {
    state.episode = data
  },
  PUSH_EPISODES (state, data) {
    state.episodes.data.unshift(data)
  }
}
