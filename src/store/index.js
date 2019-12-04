import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lists:[]
  },
  mutations: {
    getlist(state,{data}){
state.lists=data
    },
    setlist(state,{txt}){
      state.lists=state.lists.filter(item=>{
        if(item.name.includes(txt)){
          return item.name.includes(txt)
        }
      })
    }
  },
  actions: {
    getdata({commit}){
      axios.get("/list").then(res=>{
        console.log(res.data)
        commit("getlist",{data:res.data})
      })
    }
  },
  modules: {
  }
})
