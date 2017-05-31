import users from '../../data/users.js';
const state = {
    users: []
};

const getters = {
    users: state => {
        return state.users;
    }
};

export default {
    state,
    getters
};