<template>
    <div>
        <Header></Header>
        <Swiper :swiperList = "swiperList"></Swiper>
        <Icon :headerList = "headerList" :bottomList = 'bottomList'></Icon>
        
        
            <Tmh></Tmh>
 
        <Footer></Footer>
    </div>
</template>

<script>
import Header from "./components/Header";
// 这是我开发的
import Swiper from './components/Swiper';
import Icon from './components/Icon';
import Tmh from './components/Tmh';
import Footer from './components/footer';
export default {
    name:"Home",
    components:{
        Header,
        Swiper,
        Icon,
        Tmh,
        Footer
    },
    data(){
        return{
            activityList:Array,
            bottomList:Array,
            headerList:Array,
            swiperList:[]
        }
    },
    mounted(){
        this.getHomeInfo()
    },
    methods:{
        getHomeInfo(){
            this.$axios.get("api/index.json")
            .then(res => {
                console.log(res.data.data)
                this.activityList = res.data.data.activityList
                this.bottomList = res.data.data.bottomList
                this.headerList = res.data.data.headerList
                this.swiperList = res.data.data.swiperList
                console.log(this.swiperList)
            })
            .catch(err => {
                console.error(err); 
            })
        },
        getHomeInfoSucc(res){
            console.log(res)
        }
    }
}
</script>

<style scoped>
    Header{
        position: fixed;
        top: 0;
        left: 0;
    }
</style>