import http from 'axios'
http.defaults.headers.get['Content-Type'] = 'application/json; charset=utf-8'
export default {
  async getEpisodes ({commit}, page=1) {
    const url = `${process.env.VUE_APP_API}/episodes`
    const respose = await http.get(url,{ params: { page: page, per_page: 6 } })
      .then(response => {
        return Object.assign(response.data,response.headers)
      })
      .catch(error => {
        return error.response
      })
    commit('EPISODES', respose)
  },
  async getEpisodesPage ({commit}, page) {
    const url = `${process.env.VUE_APP_API}/episodes`
    const respose = await http.get(url,{ params: { page: page, per_page: 6 } })
      .then(response => {
        return Object.assign(response.data,response.headers)
      })
      .catch(error => {
        return error.response
      })
    commit('EPISODES', respose)
  },
  async getEpisode ({commit}, id) {
    const url = `${process.env.VUE_APP_API}/episodes/${id}`
    const respose = await http.get(url)
      .then(response => {
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
}