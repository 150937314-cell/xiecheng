<template>
  <div>
      <ul>
          <li class="item" v-for="(item,index) in arrList" :key="item.id">
              <div class="item_img">
                  <img :src="item.imgUrl" alt="">
                  <div class="item_img_title">上海出发</div>
              </div>
              <div class="item_content">
                  <p>{{item.desc}}</p>
                  <div class="item_content_bottom">
                      <div class="pview">
                         <span class="score">{{item.score}}</span>
                         <span class="sold">{{item.sold}}</span>
                      </div>
                      <div class="price">
                          <span class="icon">￥</span>
                          <span class="num">{{item.price}}</span>
                          <span class="word">起</span>
                      </div>
                  </div>
              </div>
           </li>

        
      </ul>
  </div>
</template>

<script>
export default {
    name:"Item",
    props:{
        arrList:{
            type:Array
        }
    },
    data(){
        return{

        }
    },
    mounted(){
        console.log(this.arrList)
    }
}
</script>

<style lang='less' scoped>
    .item{
        margin-top: .2rem;
        width: 100%;
        height: 2.2rem;
        display: flex;
        padding: 0 .28rem;
        .item_img{
            width: 33.3%;
            position: relative;
            img{
                width: 100%;
                height: 100%;
            }
            .item_img_title{
                width: 100%;
                height: .42rem;
                line-height: .42rem;
                background: rgb(85, 83, 83);
                opacity: .9;
                font-size: .26rem;
                color: #fff;
                text-align: center;
                position: absolute;
                left: 0;
                bottom: 0;
            }
        }
        .item_content{
            width: calc(100% - 33.3%);
            height: 100%;
            padding:.05rem .2rem .2rem .2rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            p{
                width: 100%;
                padding:0 .35rem 0 .1rem;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2; //多行在这里修改数字即可
                overflow:hidden;
                -webkit-box-orient: vertical;
                line-height: .36rem;
                font-size: .32rem;
                color: #666;
            }
            .item_content_bottom{
                width: 100%;
                padding-right:.2rem;
                height: .4rem;
                line-height: .4rem;
                // background: aqua;
                display: flex;
                justify-content: space-between;
                .pview{
                    width: 55%;
                    display: flex;
                    justify-content: space-around;
                    line-height: .5rem;
                    .score{
                        color: rgb(11, 156, 240);
                    }
                    .sold{
                        color: rgb(126, 120, 120);
                    }
                }
                .price{
                    color: red;
                    .num{
                        font-size: .4rem;
                    }
                    .word{
                        color: #999;
                    }
                }
            }
        }
    }
</style>