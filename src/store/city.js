export default {
  namespaced:true,
  state: {
    city:localStorage.getItem("city") || "北京",
    list:[],
  },
  mutations: {
    searchCITY(state,city){
        state.list = city
        console.log(state.list)
    },
    changeCity(state,name){
        state.city = name;
        console.log(name)
        // localStorage.city = city
        localStorage.setItem("city", name);
    }
  },
  actions: {
  },
  

}
