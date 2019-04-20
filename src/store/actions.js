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
  showNotification({commit}, params) {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready // returns a Promise, the active SW registration
        .then(swreg => swreg.showNotification(params.title, {
          body: params.body,
          icon: '/img/icons/android-chrome-192x192.png',
          image: '/img/autumn-forest.png',
          vibrate: [300, 200, 300],
          badge: '/img/icons/plint-badge-96x96.png',
          data: {
            url: 'http://localhost:8080/episode/9'
          },
          actions: [
            { action: 'confirm', title: 'Okay', icon: '/img/icons/android-chrome-192x192.png'},
            { action: 'cancel', title: 'Cancel', icon: '/img/icons/android-chrome-192x192.png'}
          ],
        }))
    }
  }
}