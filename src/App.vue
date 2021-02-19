<template>
  <div id="app">
   <keep-alive>
     <router-view/>
   </keep-alive>
    
  </div>
</template>

<style lang="less" >

    *{
      box-sizing: border-box;
    }
   .homeswiper{
        .my-swipe{
            position: relative ;
            width: 100%;
            height: 200px;
            .van-swipe-item{
                width: 100%;
                height: 100%;
                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 0 0 15% 15%;
                };
            }
            .van-swipe__indicators{
                width: 20%;
                position: absolute ;
                left: 90%;
                bottom: 23%;
                .van-swipe__indicator{
                  width: 0.15rem;
                  height: 0.15rem;
                }
                .van-swipe__indicator--active{
                  width: 0.5rem;
                  height: 0.15rem;
                  border-radius: 10px;
                  background: #fff;
                }
            }
        }
    }
    .van-tabs__nav{
     .van-tab{
       width: 25%;
       padding: 0;
       color: #000 !important;
       font-size: 0.29rem;
       font-weight: 500; 
     }
     .van-tabs__line{
       background-color:#448aff !important;
     }
    }
</style>
