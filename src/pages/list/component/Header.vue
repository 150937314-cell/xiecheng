<template>
  <div class="header">
        <div class="header-top">
            <router-link to="/" tag="div" class="header-left">
                <svg t="1611832213220" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7261" width="200" height="200"><path d="M300.519361 543.265092C284.051429 525.767634 284.113506 498.16628 300.519361 480.734779L683.39863 73.91899C694.765049 61.841975 713.902449 61.142664 726.143208 72.357036 738.383967 83.571407 739.09276 102.452807 727.726341 114.529822L344.847071 521.345611C349.953083 515.920385 349.970675 508.098179 344.847071 502.654261L727.726341 909.47005C739.09276 921.547065 738.383967 940.428464 726.143208 951.642836 713.902449 962.857207 694.765049 962.157896 683.39863 950.080881L300.519361 543.265092Z" p-id="7262" fill="#515151"></path></svg>            </router-link>
            <div class="search">
                <div class='search-left' @click="toCity()">
                    <div class='iconfont location'>
                        <svg t="1611831718798" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6862" width="200" height="200"><path d="M494.53 108.25c-182.81 0-331.01 148.2-331.01 331.01s331.01 484.1 331.01 484.1 331.01-301.28 331.01-484.1c0-182.81-148.2-331.01-331.01-331.01z m120.45 601.98c-44.48 52.85-89.42 99.28-120.45 130-31.03-30.72-75.97-77.15-120.45-130-45.54-54.11-81.58-104.12-107.12-148.62-35.91-62.56-43.44-101.06-43.44-122.35 0-36.61 7.16-72.1 21.27-105.47 13.65-32.27 33.2-61.25 58.11-86.16 24.91-24.91 53.9-44.46 86.16-58.11 33.37-14.12 68.86-21.27 105.47-21.27s72.1 7.16 105.47 21.27c32.27 13.65 61.25 33.2 86.16 58.11 24.91 24.91 44.46 53.9 58.11 86.16 14.12 33.37 21.27 68.86 21.27 105.47 0 21.28-7.54 59.79-43.44 122.35-25.54 44.51-61.58 94.51-107.12 148.62z" p-id="6863" fill="#448aff"></path><path d="M494.53 278.66c-81.31 0-147.22 65.91-147.22 147.22S413.22 573.1 494.53 573.1s147.22-65.91 147.22-147.22-65.91-147.22-147.22-147.22z m0 234.44c-48.09 0-87.22-39.13-87.22-87.22 0-48.09 39.13-87.22 87.22-87.22s87.22 39.13 87.22 87.22c0 48.09-39.13 87.22-87.22 87.22z" p-id="6864" fill="#448aff"></path></svg>
                    </div>
                    <div class="station">{{city}}</div>
                    <div class="station" style="margin-left:-0.2rem">站</div>
                </div>
                <div class="search-right">
                    <div class="iconfont search-icon">
<svg t="1611831381579" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5240" width="200" height="200"><path d="M480.653061 867.265306c-213.159184 0-386.612245-173.453061-386.612245-386.612245s173.453061-386.612245 386.612245-386.612245 386.612245 173.453061 386.612245 386.612245-173.453061 386.612245-386.612245 386.612245z m0-731.428571c-190.171429 0-344.816327 154.644898-344.816326 344.816326s154.644898 344.816327 344.816326 344.816327 344.816327-154.644898 344.816327-344.816327-154.644898-344.816327-344.816327-344.816326z" p-id="5241" fill="#8a8a8a"></path><path d="M741.877551 501.55102c-11.493878 0-20.897959-9.404082-20.897959-20.897959 0-132.702041-107.62449-240.326531-240.326531-240.32653-11.493878 0-20.897959-9.404082-20.897959-20.89796s9.404082-20.897959 20.897959-20.897959c155.689796 0 282.122449 126.432653 282.122449 282.122449 0 11.493878-9.404082 20.897959-20.897959 20.897959zM909.061224 929.959184c-5.22449 0-10.44898-2.089796-14.628571-6.269388l-170.318367-170.318367c-8.359184-8.359184-8.359184-21.420408 0-29.779592 8.359184-8.359184 21.420408-8.359184 29.779592 0l170.318367 170.318367c8.359184 8.359184 8.359184 21.420408 0 29.779592-4.702041 4.179592-9.926531 6.269388-15.151021 6.269388z" p-id="5242" fill="#8a8a8a"></path></svg>                    </div>
                    <div class='desc'>目的地/关键字</div>
                </div>
            </div>
        </div>
        <div class="header-bottom"></div>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
    name:"listHeader",
    methods:{
        toCity(){
            this.$router.push({path:'/city'})
        }
    },
    computed:{
        ...mapState({
            city:state=>state.city_.city
        })
    }
}
</script>

<style lang='less' scoped>
    .header{
        width: 100%;
        height: .88rem;
        .header-top{
            width: 100%;
            background: #fff;
            display: flex;
            .header-left{
                width: 10%;
                text-align: center;
                line-height: .88rem;
                color: #000;
                font-size: .5rem;
                font-weight: 500;
                svg{
                    width: .52rem;
                    height: .52rem;
                    margin-top: 0.13rem;
                }
                
            }
            .search{
                width: 82%;
                height: .6rem;
                line-height: .6rem;
                margin: .12rem 0 0 .1rem;
                border-radius: 1rem;
                background: #eaeaea;
                display: flex;
                justify-content: space-between;
                .search-left{
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    width: 24%;
                    .location,.station{
                        font-size: .28rem;
                        color: #448aff;
                    }
                    .station{
                        font-size: 0.25rem;

                    }
                    .location{
                        margin-left:.12rem;
                        svg{
                            width: .35rem;
                            height: .35rem;
                            margin-top:0.19rem;
                        }
                    }
                }
                .search-right{
                    width: 75%;
                    height: .6rem;
                    line-height: .6rem;
                    display: flex;
                    align-items: center;
                    padding-left: 0.15rem;
                    .search-icon{
                        svg{
                            width: .35rem;
                            height: .35rem;
                            margin-top:0.15rem;

                        }
                    }
                }
            }
        }
    }
</style>