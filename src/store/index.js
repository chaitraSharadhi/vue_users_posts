import { createStore } from 'vuex'


export default createStore({
  state: {
    usersList: [],
    sortedbyASC: true,
  },
  getters: {
    getUsers: (state) => state.usersList,
    getSorted: (state) => state.sortedbyASC,
  },
  mutations: {
    SET_USERS(state, usersList) {
      state.usersList = usersList;
    },
  },
  actions: {
    async userData({ commit }) {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const finalRes = await res.json();
        commit("SET_USERS", finalRes);
      } catch (error) {
        console.log(error);
      }

    },
 

  },
  modules: {
  }
})
