import http from 'axios'
http.defaults.headers.get['Content-Type'] = 'application/json; charset=utf-8'
export default {
  async getAnimes ({commit}) {
    const url = `${process.env.API}/animes`
    commit('LOADING', true)
    const respose = await http.get(url)
      .then(response => {
        commit('LOADING', false)
        return response.data
      })
      .catch(error => {
        return error.response
      })
    commit('ANIMES', respose)
  },
  async getEpisodes ({commit}) {
    const url = `${process.env.API}/episodes`
    commit('LOADING', true)
    const respose = await http.get(url)
      .then(response => {
        commit('LOADING', false)
        return response.data
      })
      .catch(error => {
        return error.response
      })
    commit('EPISODES', respose)
  },
  async getEpisode ({commit}, id) {
    const url = `${process.env.API}/episodes/${id}`
    commit('LOADING', true)
    const respose = await http.get(url)
      .then(response => {
        commit('LOADING', false)
        return response.data
      })
      .catch(error => {
        return error.response
      })
    commit('EPISODE', respose.data)
  },
  async pushEpisode ({commit}, data) {
    commit('PUSH_EPISODES', data.data)
  },
  async getAnime ({commit}, id) {
    const url = `${process.env.API}/animes/${id}`
    commit('LOADING', true)
    const respose = await http.get(url)
      .then(response => {
        commit('LOADING', false)
        return response.data
      })
      .catch(error => {
        return error.response
      })
    commit('ANIME', respose)
  }
}
