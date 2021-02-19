<template>
  <div>
       <van-tabs  >
            <van-tab v-for="(item,index) in listArr"  :key="index" :title="item" :style="{changeStyle:true}">
               
            </van-tab>
        </van-tabs>
  </div>
</template>

<script>
export default {
    name:"Navthird",
    data(){
        return{
            listArr:["精选爆款","境外优选","国内优惠","古北水镇"]
        }
    }
}
</script>

<style>

</style>