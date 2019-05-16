import { firebaseAction } from "vuexfire"

const state = {
    orders: []
}

const getters = {
    numberOfOrders: state => state.orders.length,
    getOrders: state => state.orders
}

const mutations = {
    addOrder(state, orders){ state.orders.push(orders)}
}

const actions = {
    setOrdersRef: firebaseAction(({ bindFirebaseRef }, { ref }) => {
        bindFirebaseRef('orders', ref)
      })
}

export default {
    state, 
    mutations,
    getters,
    actions
}