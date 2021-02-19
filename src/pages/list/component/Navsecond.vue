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
    name:"Navsecond",
    data(){
        return{
              listArr:["推荐排序","线路玩法","行程天数","筛选"]
        }
    }
}
</script>

<style>

</style>