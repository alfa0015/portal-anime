import http from 'axios'
http.defaults.headers.get['Content-Type'] = 'application/json; charset=utf-8'
export default {
  async getAnimes ({commit}) {
    const url = `https://porta-anime-api.herokuapp.com/api/v1/animes`
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
    const url = `https://porta-anime-api.herokuapp.com/api/v1/animes/${id}`
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
