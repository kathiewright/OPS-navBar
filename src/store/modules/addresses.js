import addresses from '../../data/addresses.js';

const state = {
    addresses: []
};

const mutations = {
    'SET_ADDRESSES' (state, addresses) {
        state.addresses = addresses;
    }
};

const actions = {
    //set initial array of addresses
    initAddresses: ({commit}) => {
        commit('SET_ADDRESSES', addresses);
    }
};

const getters = {
    addresses: state => {
        return state.addresses;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};