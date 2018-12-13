import Vue from 'vue'
import Vuex from 'vuex'
import { loginUser } from './chatkit'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    error: '',
    hasError: false,
    currentUser: null,
    rooms: [
      {
        name: "General",
        active: true
      },
      {
        name: "Art",
        active: false
      },
      {
        name: "Dev",
        active: false
      }
    ],
    users: [
      {
        username: 'John',
        displayName: 'John Doe',
        status: 'online'
      },
      {
        username: 'Jane',
        displayName: 'Jane Doe',
        status: 'offline'
      },
      {
        username: 'Peter',
        displayName: 'Peter Doe',
        status: 'offline'
      }
    ],
    messages: [
      {
        user: {
          displayName: 'John Doe',
          username: 'john'
        },
        text: 'Hello Everyone',
        date: '2018-10-10'
      },
      {
        user: {
          displayName: 'Jane Doe',
          username: 'jane'
        },
        text: 'Nice to meet you',
        date: '2018-10-10'
      },
      {
        user: {
          displayName: 'Peter Doe',
          username: 'peter'
        },
        text: 'Thanks Jane!',
        date: '2018-10-10'
      }
    ]
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = currentUser;
    },
    setRooms(state, rooms) {
      state.rooms = rooms
    },
    setUsers(state, users) {
      state.users = users
    },
    setMessages(state, messages) {
      state.messages = messages
    },
    appendMessage(state, message) {
      state.messages.append(message)
    }
  },
  actions: {
    login: async({ commit, state }, userId) => {
      console.log(userId)
      state.loading = true;
      const currentUser = await loginUser(userId);
      console.log(currentUser);
      commit('setCurrentUser', currentUser);
      state.loading = false;
    },
    changeRoom: ({ commit }, roomId) => {
      // TODO
    }
  },
  getters: {
    username: state => state.currentUser ? state.currentUser.id : '',
    name: state => state.currentUser ? state.currentUser.name : '',
  }
})