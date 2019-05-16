const state = {
    currentUser: null
}

const getters = {
    currentUser: state => state.currentUser
}

const mutations = {
    addUserStatus(state, user) {
        if(user) {
            state.currentUser = user.email
        } else {
            state.currentUser = null
        }
    }
}

const actions = {
    setUser ({ commit }, user) {
        commit("addUserStatus", user)
    }
}

export default {
    state, 
    mutations,
    getters,
    actions
}