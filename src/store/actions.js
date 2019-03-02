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
