<template>
  <div class="all">
      <ul class="alpha">
        <li class="letter">当前</li>
        <li class="letter">热门</li>
        <li class="letter" v-for="(item,index) in letters" :key="item" @click="handClick(item)"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handTouchEnd"
        :ref="item"
        >{{item}}</li>

      </ul>
  </div>
</template>

<script>
export default {
    name:"Alpha",
    props:['cityListData'],
    data(){
        return{
            touchStatus:false,
            startY:0
        }
    },
    updated(){
        this.startY = this.$refs["A"][0].offsetTop
    },
    computed:{
        letters(){
            const letters = []
            for(let i in this.cityListData){
                letters.push(i)
            }
            return letters
        }
    },
    methods:{
        handClick(index){
            this.$emit("change",index)
        },
        handleTouchStart(){
            this.touchStatus = true
        },
        handleTouchMove(e){
            if(this.touchStatus){
                // const startY = this.$refs["A"][0].offsetTop
                console.log(this.startY)
                const touchY = e.touches[0].clientY
                console.log(touchY)
                const index = Math.floor((touchY - 187.5 - this.startY) /14) - 3
                console.log(index)
                if(index >=0 && index< this.letters.length){
                    this.$emit("change",this.letters[index])
                }
            }
        },
        handTouchEnd(){
            this.touchStatus = false
        }
    }
}
</script>

<style lang="less" scoped>
    .alpha{
        color: #19a0f0;
        position: fixed;
        right:-8px;
        top:25%;
        z-index: 100;
        text-align: right;
        padding-right: .2rem;
        text-align: center;
        .letter{
            margin-top: .1rem;
        }
    }
</style>