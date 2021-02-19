<template>
    <div>
        <van-tabs  @click="addStyle" :style="{changeStyle:true}">
            <van-tab v-for="(item,index) in listArr"  :key="index" :title="item" :style="{changeStyle:true}">
               
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
 

export default {
    name:"Navfirst",
    data(){
        return{
            index_:0,
            listArr:["全部","自由行","跟团游","周边短途","WiFi电话卡","娱乐","景点门票","当地玩乐"],
          
        }
    },
    methods:{
        addStyle(index){
            
            // console.log(index)
            // document.getElementsByClassName('van-tab')[index].childNodes[0].style="color:#448aff"
            // console.log(document.getElementsByClassName('van-tab')[index].childNodes)
        }
    },
}
</script>

<style scoped>
.changeStyle{
    color: #448aff;
}

</style>