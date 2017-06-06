import users from '../../data/users.js';

const state = {
    users: []
};

const mutations = {
    'SET_USERS' (state, users) {
        state.users = users;
    }
};

const actions = {
    //set initial array of users
    initUsers: ({commit}) => {
        commit('SET_USERS', users);
    }
};

const getters = {
    users: state => {
        return state.users;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};