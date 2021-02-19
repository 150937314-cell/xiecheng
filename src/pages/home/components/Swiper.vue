<template>
  <div class="homeswiper">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item,index) in swiperList" :key="index">
                <img :src=item.imgUrl alt="">
            </van-swipe-item>
        </van-swipe>
  </div>
</template>

<script>
  export default {
    name: 'HomeSwiper',
    props:[
      'swiperList'
    ],
    data() {
      return {
        arrList:[
            
        ]
      }
    }
  }
</script>
<style lang="less" scoped>
    .homeswiper{
        .my-swipe{
            position: relative !important;
            width: 100%;
            height: 200px;
            .van-swipe-item{
                width: 100%;
                height: 100%;
                img{
                    width: 100%;
                    height: 100%;
                };
            }
            .van-swipe__indicators{
                position: absolute !important;
                left: 0 !important;
                bottom: 0 !important;
            }
        }
    }
</style>