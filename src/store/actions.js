import http from 'axios'
http.defaults.headers.get['Content-Type'] = 'application/json; charset=utf-8'
export default {
  async getEpisodes ({commit}) {
    const url = `${process.env.VUE_APP_API}/episodes`
    const respose = await http.get(url)
      .then(response => {
        return response.data
      })
      .catch(error => {
        return error.response
      })
    commit('EPISODES', respose)
  }
}