<template>
  <div class="footer">
      <ul class="items">
          <li class="item">
              <div class="iconfont icon">&#xe660;</div>
              <div class="desc">电话预定</div> 
          </li>
          <li class="item">
              <div class="iconfont icon">&#xe640;</div>
              <div class="desc">下载客户端</div> 
          </li>
          <li class="item">
              <div class="iconfont icon">&#xe712;</div>
              <div class="desc">我的</div> 
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name:"Footer",
    data(){
        return{

        }
    }
}
</script>

<style lang='less' scoped>
    .footer{
        width: 100%;
        height: 1.1rem;
        .items{
            width: 100%;
            height: 100%;
            display: flex;
            .item{
                width: 33.3%;
                height: 100%;
                text-align: center;
                .icon{
                    font-size: 0.5rem;
                    color: #999;
                }
                .desc{
                    color: #999;
                    margin-top:0.2rem;
                }
            }
        }
    }
</style>