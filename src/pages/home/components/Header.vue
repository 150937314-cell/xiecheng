<template>
    <div>
        <transition-group name="fade">
            <div class="header" v-if="!hideHeader" key="first">
                <div class="search-box">
                    <div class="search-left"></div>
                    <div class="search-right">搜索:目的地/酒店/景点/航班号</div>
                </div>
                <div class="header-right">
                    <div class="icon">
                        <svg t="1611761046759" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2799" width="200" height="200"><path d="M512.524956 65.459874c-246.693542 0-446.677249 199.983707-446.677249 446.677249s199.983707 446.677249 446.677249 446.677249 446.677249-199.983707 446.677249-446.677249S759.218498 65.459874 512.524956 65.459874zM512.524956 97.365538c228.698702 0 414.771585 186.072883 414.771585 414.771585 0 101.935624-37.034475 195.339944-98.265024 267.636526-46.39568-101.985766-174.351933-171.920558-318.820256-171.920558-141.941779 0-269.50099 68.608587-317.175803 168.478156-59.479673-71.802326-95.282087-163.894767-95.282087-264.195148C97.753371 283.438421 283.826254 97.365538 512.524956 97.365538zM216.350466 802.108331c0.01228-0.030699 0.039909-0.050142 0.051165-0.080841 37.256532-95.545076 158.078295-162.269757 293.809629-162.269757 138.279367 0 259.412215 68.158333 295.103088 165.865655-75.076906 74.900897-178.617074 121.283274-292.790416 121.283274C396.60176 926.907685 291.689339 879.042537 216.350466 802.108331zM511.200798 575.947428c96.913237 0 175.48064-78.567403 175.48064-175.48064S608.114035 224.987171 511.200798 224.987171 335.720158 303.554574 335.720158 400.466788 414.287561 575.947428 511.200798 575.947428zM511.200798 256.892835c79.173201 0 143.574976 64.400752 143.574976 143.574976s-64.400752 143.574976-143.574976 143.574976-143.574976-64.400752-143.574976-143.574976S432.027597 256.892835 511.200798 256.892835z" p-id="2800" fill="#e6e6e6"></path></svg>
                    </div>
                    <div class="text">我的</div>
                </div>
            </div>
            <div class="backwhite" v-if="hideHeader" key="second">
                <div class="backwhite-search-box">
                    <div class="search-left"></div>
                    <div class="search-right">搜索:目的地/酒店/景点/航班号</div>
                </div>
                <div class="backwhite-header-right">
                    <div class="icon">
                        <svg t="1611761046759" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2799" width="200" height="200"><path d="M512.524956 65.459874c-246.693542 0-446.677249 199.983707-446.677249 446.677249s199.983707 446.677249 446.677249 446.677249 446.677249-199.983707 446.677249-446.677249S759.218498 65.459874 512.524956 65.459874zM512.524956 97.365538c228.698702 0 414.771585 186.072883 414.771585 414.771585 0 101.935624-37.034475 195.339944-98.265024 267.636526-46.39568-101.985766-174.351933-171.920558-318.820256-171.920558-141.941779 0-269.50099 68.608587-317.175803 168.478156-59.479673-71.802326-95.282087-163.894767-95.282087-264.195148C97.753371 283.438421 283.826254 97.365538 512.524956 97.365538zM216.350466 802.108331c0.01228-0.030699 0.039909-0.050142 0.051165-0.080841 37.256532-95.545076 158.078295-162.269757 293.809629-162.269757 138.279367 0 259.412215 68.158333 295.103088 165.865655-75.076906 74.900897-178.617074 121.283274-292.790416 121.283274C396.60176 926.907685 291.689339 879.042537 216.350466 802.108331zM511.200798 575.947428c96.913237 0 175.48064-78.567403 175.48064-175.48064S608.114035 224.987171 511.200798 224.987171 335.720158 303.554574 335.720158 400.466788 414.287561 575.947428 511.200798 575.947428zM511.200798 256.892835c79.173201 0 143.574976 64.400752 143.574976 143.574976s-64.400752 143.574976-143.574976 143.574976-143.574976-64.400752-143.574976-143.574976S432.027597 256.892835 511.200798 256.892835z" p-id="2800" fill="#515151"></path></svg>
                    </div>
                    <div class="text">我的</div>
                </div>
            </div>
        </transition-group>
    </div>
</template>

<script>
export default {
    name:"Header",
    data(){
        return{
            hideHeader:false
        }
    },
    mounted(){
        window.addEventListener("scroll",this.hideScroll)
    },
    methods:{
        hideScroll(){
            var  scrollTop = document.documentElement.scrollTop // eslint-disable-line no-unused-vars
            if(scrollTop>44){
                this.hideHeader = true;
            }else{
                this.hideHeader = false;
            }
        }
    }
}
</script>

<style lang="less" scoped>
    .fade-enter,.fade-leave-to{
        opacity: 0;
    }
    .fade-enter-active,.fade.fade-leave-active{
        transition: opacity 0.5s;
    }
    .header{
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        padding-left:.24rem;
        display: flex;
        justify-content: space-between;
        padding-top: 0.07rem;
        .search-box{
            display: flex;
            width: 85%;
            margin-top: 0.05rem;
            font-size: 0.3rem;
            background: #fff;
            border-radius: 0.3rem;
            .search-left{
                width: .7rem;
                height: .56rem;
                overflow: hidden;
                font-size: 0.1rem;
                background: url(//pic.c-ctrip.com/platform/h5/home/home-common-sprite2x@v7.15.png);
                background-size: .43rem auto;
                background-repeat: no-repeat;
                background-position: 15px 7px;
            }
            .search-right{
                flex: 1;
                line-height:.56rem
            }
        }
        .header-right{
            width: 15%;
            .icon{
                width: 0.44rem;
                height: 0.44rem;
                margin: 0 auto;
                //margin-left:0.2rem ;
                //margin-top:0.1rem ;
                //background:url(//pic.c-ctrip.com/platform/h5/home/home-common-sprite2x@v7.15.png);
                //background-size:.42rem auto ;
                //background-position: center -36px;
                //background-repeat:no-repeat;
            }
            .text{
                font-size: 0.24rem;
                margin:.04rem 0 0 0 ;
                text-align: center;
                color: #fff;
            }
        }
    }
    .backwhite{
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 56;
        padding-left:.24rem;
        display: flex;
        justify-content: space-between;
        background:#fff;
        padding-top: 0.07rem;
        .backwhite-search-box{
            display: flex;
            width: 85%;
            margin-top: 0.05rem;
            font-size: 0.3rem;
            background: rgb(207, 205, 205);
            border-radius: 0.3rem;
            .search-left{
                width: .7rem;
                height: .56rem;
                overflow: hidden;
                font-size: 0.1rem;
                background: url(//pic.c-ctrip.com/platform/h5/home/home-common-sprite2x@v7.15.png);
                background-size: .43rem auto;
                background-repeat: no-repeat;
                background-position: 15px 7px;
            }
            .search-right{
                 
                flex: 1;
                line-height:.56rem
            }
        }
        .backwhite-header-right{
            width: 15%;
            .icon{
                width: 0.44rem;
                height: 0.44rem;
                margin: 0 auto;
                //margin-left:0.2rem ;
                //margin-top:0.1rem ;
                //background:url(//pic.c-ctrip.com/platform/h5/home/home-common-sprite2x@v7.15.png);
                //background-size:.42rem auto ;
                //background-position: center -36px;
                //background-repeat:no-repeat;
                color: #000;
            }
            .text{
                font-size: 0.24rem;
                margin:.04rem 0 0 0 ;
                text-align: center;
                color: #222;
            }
        }
    }
</style>