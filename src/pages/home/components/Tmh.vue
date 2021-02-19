<template>
  <div class="tmh">
    <div class="header">
        <div class="header-left"></div>
        <div class="iconfont header-right">更多</div>
    </div>
    <div class="body">
        <router-link class="body-left" tag="div" to="list">
            <div class="img">
                <img src="https://dimg08.c-ctrip.com/images/200f0v000000k0r3361EC_C_360_202.jpg" alt="">
            </div>
            <p class="desc">三亚5日自由行【高星度假酒店4晚连住！三亚5日自由行【高星度假酒店4晚</p>
            <div class="price">
                <span class="money">￥</span>
                <span class="num">1864</span>
                <span class="word">起</span>
            </div>
        </router-link>
        <div class="body-right">
            <div class="top">
                <div class="top-left">
                    <div class="left-top">千款特价</div>
                    <div class="left-bottom">走过路过 不要错过</div>

                </div>
                <div class="top-img">
                    <img src="//pic.c-ctrip.com/platform/h5/home/pic-tmh-02.png" width="50">
                </div>
            </div>
            <div class="bottom">
                <div class="item">
                    <div class="forigen">境外精选</div>
                    <div class="text">限时抢购</div>
                    <div class="picture">
                        <img src="//pic.c-ctrip.com/platform/h5/home/pic-tmh-04.png" width="50">
                    </div>
                </div>
                <div class="item">
                    <div class="play">周边玩乐</div>
                    <div class="text">欢乐度周末</div>
                    <div class="picture">
                        <img src="//pic.c-ctrip.com/platform/h5/home/pic-tmh-03.png" width="50">
                    </div>
                </div>
            </div>
        </div>
    </div> 
    <div class="line border-topbottom">
        
    </div>              
  </div>
</template>

<script>
export default {
    name:"Tmh",
    data(){
        return{

        }
    }
}
</script>

<style lang='less' scoped>
    .tmh{
        margin-top:-.8rem;
        background:#fff;
        .header{
            height: 0;
            padding-bottom: .88rem;
            display: flex;
            justify-content: space-around;
            .header-left{
                width: 1.6rem;
                height: .28rem;
                margin-top:.3rem;
                margin-left: .16rem;
                background: url(//pic.c-ctrip.com/h5/home/un_home_text.png);
                background-size: 1.58rem auto;
            }
            .header-right{
                text-align: center;
                width: 1.1rem;
                line-height: .4rem;
                height: .4rem;
                margin: .24rem .16rem 0 0;
                text-align: center;
                border-radius: .3rem;
                font-size: .24rem;
                background:linear-gradient(to right, #ff4e63,#ff6cc9);
                color:#fff;
            }
        }
        .body{
            margin-left: .16rem;
            margin-right: .16rem;
            display: flex;
            height: 4rem;
            .body-left{
                width: 50%;
                background: #fafafc;
                padding-bottom:1rem ;
                img{
                    width: 100%;
                    height: 2.34rem;
                }
                .desc{
                    height: .92rem;
                    line-height: .42rem;
                    margin-left: .16rem;
                    font-size: .24rem;
                    color: #000;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                }
                .price{
                    padding: .16rem;
                    height: .44rem;
                    width: 3.36rem;
                    color: #ff495e;
                    .money{
                        font-size: .24rem;
                    }
                    .num{
                        font-size: .36rem;
                    }
                    .word{
                        font-size: .3rem;
                    }
                }
            }
            .body-right{
                width: 50%;
                background: #fff;
                margin-left:.1rem;
                .top{
                    width: 100%;
                    height: 1.76rem;
                    padding: .16rem;
                    background: #fafafc;
                    display: flex;
                    justify-content: space-around;
                    .top-left{
                        margin-top: .6rem;
                        .left-top{
                            font-size: .28rem;
                            font-weight: 700;
                            color: #fd3a51;
                            letter-spacing: .03rem;
                        }
                        .left-bottom{
                            color: #444;
                            font-size: .24rem;
                            margin-top: .1rem;
                        }
                    }
                    .top-img{
                        width: 1rem;
                        height: 1rem;
                        margin: .3rem .1rem 0 0;
                    }
                }
                .bottom{
                    margin-top:.1rem;
                    display: flex;
                    .item{
                        width: 48%;
                        height: 2rem;
                        background: #fafafc;
                        .forigen{
                            text-align: center;
                            font-size: .28rem;
                            font-weight: 700;
                            color: #6aabff;
                        }
                        .play{
                            color: #53ca72;
                            text-align: center;
                        }
                        .text{
                            text-align: center;
                            margin-top:.12rem;
                        }
                        .picture{
                            display: flex;
                            justify-content: center;
                        }
                    }
                }
            }
        }
        .line{
            width: 100%;
            height: .2rem;
            margin-top: .2rem;
            background: #fafafc;
        }
    }
</style>