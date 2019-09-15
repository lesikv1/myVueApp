import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    favoriteUsers: []
  },
  
  mutations: {
    set: (state, items) => {
      state.users = items
    },
    push: (state, item) => {
      state.users = [...state.users, item]
    },
    delete: (state, id) => {
      state.users = state.users.filter(i => i._id !== id)
    },
    setFavorite: (state, id, favorite) => {
      state.users = state.users.map(user => {
        if (user._id === id) {
          user.favorite = favorite
        }
        return user
      })
    },
    setFavoriteUsers: (state, items) => {
      state.favoriteUsers = items.filter(item => item.favorite === true)
    },
    updateUser: (state, data) => {
      state.users = state.users.map(user => {
        if (user._id === data.id) {
          user.firstName = data.firstName
          user.lastName = data.lastName
          user.phoneNumber = data.phoneNumber
        }
      })
    }
  },

  actions: {
    async getAllUsers() {
      let {data} = await axios.get('/api/users')
      this.commit('set', data)
    },
    async getFavoriteUsers() {
      let {data} = await axios.get('/api/users')
      this.commit('setFavoriteUsers', data)
    },
    async createUser({commit},  user) {
      let {data} = await axios.post('/api/users', user)
      this.commit('push', data)
    },
    async deleteUser({commit}, id) {
      await axios.post('/api/delete-user', { id })
      this.commit('delete', id)
    },
    async setFavorite ({commit}, data) {
      await axios.post('/api/set-favorite', {id: data.id, favorite: data.favorite})
      await this.commit('setFavorite', data.id, data.favorite)
      await this.commit('setFavoriteUsers', this.state.users)
    },
    async editUser ({commit}, data) {
      await axios.post('/api/edit-user', data)
      await this.commit('updateUser', data)
    }
  }
})