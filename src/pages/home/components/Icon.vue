<template>
  <div class="icons">
      <ul class="header">
          <li class="header-item" v-for="(item,index) in headerList">
              <div class="header-icon" :style="item.position"></div>
              <div class="header-desc">{{item.desc}}</div>
          </li>
      </ul>
      <div class="body">
        <div class="body-top">
            <div class="hotel">酒店</div>
            <div class="house">民宿.客栈</div>
            <div class="ticke">机票.火车站+酒店</div> 
        </div>
        <div class="body-center">
            <div class="plane">机票</div>
            <div class="train">火车票</div>
            <div class="car_taxi">
                <div class="car">汽车.船票</div>
                <div class="taxi">汽车.租车</div>
            </div>
            
        </div>
        <div class="body-bottom">
            <div class="travel">旅游</div>
            <div class="skytrain">高铁游</div>
            <div class="boat_custom">
                <div class="boat">邮轮游</div>
                <div class="custom">定制游</div>
            </div>
        </div>
      </div>
      <ul class="bottom">
          <a href="" v-for="(item,index) in bottomList" :key="index">
              <div class="bottom_icon" :style="item.position"></div>
              <div class="bottom_text">{{item.text}}</div>
          </a>
      </ul>
  </div>
</template>

<script>
export default {
    name:"Icon",
    props:['headerList','bottomList'],
    data(){
        return{
            
        }
    }
}
</script>

<style lang="less" scoped>
    .icons{
        box-sizing:border-box;
        padding: 0 0.24rem 0 0.24rem; 
        position: relative;
        top: -0.8rem;
        .header{
            border-radius: 0.16rem;
            background: #fff;
            display: flex;
            height: 1.35rem;
            align-items: center;
            .header-item{
                width: 20%;
                height: 80%;
                .header-icon{
                    width: .8rem;
                    height: .8rem;
                    margin: 0 auto; 
                    background: url(//pic.c-ctrip.com/platform/h5/home/home-fivemain-sprite2x@v7.15.png);
                    background-repeat: no-repeat; 
                    background-size: .8rem auto;                
                }
                .header-desc{
                    text-align: center;
                    font-size: .24rem;
                    color: #222;
                    font-weight: normal;
                }
            }
        }
        .body{
            margin-top:.2rem;
            color:black;
            background:#fff;
            .body-top{
                width: 100%;
                margin-bottom: .02rem;
                display: flex;
                justify-content: space-between;
                background-color: #fff;
                .hotel,.house,.ticke{
                    line-height: 1.28rem;
                    height: 1.28rem;
                }
                .hotel{
                    width: 25%;
                    padding-left:.3rem;
                    background-image: url(//pic.c-ctrip.com/platform/h5/home/grid-nav-items-hotel@v7.15.png);
                    background-repeat: no-repeat;
                    background-size: 1.46rem auto;
                    background-color:#fb7d51;
                    background-size:100% 100% ;
                    color: #fff;
                    font-size: 0.32rem;
                    border-radius: .3rem 0 0 0 ;
                }
                .house{
                    width: 25%;
                    padding-left:.3rem ;
                    background-image: url(//pic.c-ctrip.com/platform/h5/home/grid-nav-items-minsu@v7.15.png);
                    background-repeat: no-repeat;
                    background-size: 1.46rem auto;
                    background-color:#fb7d51;
                    background-size: .74rem auto;
                    background-position: left bottom;
                    color: #fff;
                    font-size: 0.3rem;      
                }
                .ticke{
                    background:url(//pic.c-ctrip.com/platform/h5/home/grid-nav-items-hot.png) right bottom no-repeat ;
                    background-size: 100% auto;
                    text-align: center;
                    color: #a05416;
                    background-color: #ffc04b;
                    width: 49%;
                    border-radius:0 .3rem 0 0 ;
                }
            }
            .body-center{
                width: 100%;
                margin-bottom:0.02rem;
                display: flex;
                justify-content: space-between;
                .plane,.train,.car,.taxi{
                color: #fff;
                line-height: 1.28rem;
                }
                .plane{
                    width: 25%;
                    padding-left: .3rem;
                    
                    background-image: url(//pic.c-ctrip.com/platform/h5/home/grid-nav-items-flight@v7.15.png);
                    background-size: 1.58rem auto;
                    background-position: right bottom;
                    background-repeat: no-repeat;
                    background-color: #4d9aed;
                    line-height: 1.28rem;
                }
                .train{
                    width: 25%;
                    background-image: url(//pic.c-ctrip.com/platform/h5/home/grid-nav-items-train.png);
                    text-align: center;
                    
                    background-size: .74rem auto;
                    background-repeat: no-repeat;
                    background-color: #4d9aed;
                    line-height: 1.28rem;
                    background-position: left bottom;
                }
                .car_taxi{
                    width: 49%;
                    display: flex;
                    justify-content: space-between;
                    .car,.taxi{
                    width: 49.5%;
                    text-align: center;
                    background-color: #4d9aed;
                }
                }
            }
            .body-bottom{
                width: 100%;
                display: flex;
                justify-content: space-between;
                text-align: center;
                color: #fff;
                .travel{ 
                    width: 25%;       
                    background-image: url(//pic.c-ctrip.com/platform/h5/home/grid-nav-items-travel@v7.15.png);      
                    border-radius:0 0 0 .3rem;
                    line-height: 1.28rem;
                    background-repeat: no-repeat;
                    background-position: right bottom;
                    background-size: 1.2rem auto;
                    background-color: #50cb80;
                }
                .skytrain{
                    line-height: 1.28rem;
                    width: 25%;
                    background-image: url(//pic.c-ctrip.com/platform/h5/home/grid-nav-items-dingzhi@v7.15.png);
                    background-repeat: no-repeat;
                    background-position: left bottom;
                    background-size: 1rem auto;
                    background-color: #50cb80;

               }
                .boat_custom{
                    text-align: center;
                    width: 49%;
                    line-height: 1.28rem;
                    display: flex;
                    justify-content: space-between;
                    border-radius:0 0 .3rem 0;       
                    .boat,.custom{
                        width: 49.5%;
                        text-align: center;
                        background-color: #50cb80;
                    }
                    .custom{
                        border-radius:  0 0 .3rem 0 ;
                    }
                }
            }
        } 
        .bottom{
            width: 100%;
            height: 2.3rem;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            align-items: center;
            margin: 0.3rem 0;
            a{
                display: inline-block;
                width: 20%;
                height: 50%;
                .bottom_icon{
                    width: 100%;
                    height: 60%;
                    background-image: url(//pic.c-ctrip.com/platform/h5/home/un_ico_subnav2x@v7.152.png);
                    background-repeat: no-repeat;
                    background-size: 0.6rem auto;
                    
                }
                .bottom_text{
                    text-align: center;
                    font-size: 0.25rem;
                    padding-top: .04rem;
                    color: #000;
                    margin-top: .08rem;
                }
            }
        }
    }
</style>