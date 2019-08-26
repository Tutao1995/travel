import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex);

let currentCity = '';
try{
    if(localStorage.city){
        currentCity = localStorage.city
    }
}
catch(e){}

const state = {
    city:currentCity
};
const mutations = {
    CHANGE_CITY(state,val){
        state.city = val;
        try{
            if(!localStorage.city){
                localStorage.city = val;
            }
        }
        catch(e){}
    }
}
const actions = {
    change_city(ctx,val){
        ctx.commit('CHANGE_CITY',val)
    }
}
const store = new Vuex.Store({
    state,
    mutations,
    actions
})

export default store