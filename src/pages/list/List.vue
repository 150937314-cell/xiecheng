<template>
  <div>
      <transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
        <div v-if="show">
            <ListHeader></ListHeader>
            <Navfirst></Navfirst>
        </div>
      </transition> 
      <div :class="{'nav' : !show}">
        <Navsecond></Navsecond>
        <Navthird></Navthird>
      </div>
        <Item :arrList="arrList"></Item>
  </div>
</template>

<script>
import ListHeader from './component/Header'
import Navfirst from './component/Navfirst'
import Navsecond from './component/Navsecond'
import Navthird from './component/Navthird'
import Item from './component/Item'
import {mapState} from "vuex"
export default {
    name:"List",
    data(){
        return{
            show:true,
            arrList:[],
            lastCity:""
        }
    },
    components:{
        ListHeader,
        Navfirst,
        Navsecond,
        Navthird,
        Item
    },
    mounted(){
        this.lastCity = this.cityName
        window.addEventListener('scroll',this.headScroll);
        this.getListInfo()
    },
    activated(){
        if(this.lastCity != this.cityName){
            this.getListInfo()
            this.lastCity = this.cityName
        }
    },
    computed:{
        ...mapState({
            cityName:state => state.city_.city 
        })
    },
    methods:{
        headScroll(){
            var scrollTop = document.documentElement.scrollTop
            if(scrollTop > 160){
                this.show = false
            }else{
                this.show = true
            }
        },
        getListInfo(){
            this.$axios.get("api/list.json")
            .then(res => {
                this.arrList = res.data.data.itemList
                console.log(this.arrList)
            })
            .catch(err => {
                console.error(err); 
            })
        }
    }
}
</script>

<style lang="less" scoped>
    *{
        background: #fff !important;
    }
    .nav{
        position: flex !important;
        top: 0 !important;
        z-index: 100 !important;
    }
</style>