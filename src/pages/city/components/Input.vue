<template>
  <div class="input">
      <div class="search">
          <div class="icon">
                <svg t="1612667883456" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2181" width="200" height="200"><path d="M445.44 721.92c-69.12 0-135.68-28.16-184.32-76.8-102.4-102.4-102.4-268.8 0-368.64 48.64-48.64 115.2-76.8 184.32-76.8s135.68 28.16 184.32 76.8c102.4 102.4 102.4 268.8 0 368.64-48.64 48.64-112.64 76.8-184.32 76.8z m0-473.6c-56.32 0-110.08 23.04-148.48 61.44-81.92 81.92-81.92 215.04 0 296.96 38.4 38.4 92.16 61.44 148.48 61.44s110.08-23.04 148.48-61.44c81.92-81.92 81.92-215.04 0-296.96-38.4-38.4-92.16-61.44-148.48-61.44z" fill="#bfbfbf" p-id="2182"></path><path d="M611.6864 590.1312l271.5392 271.5136-36.224 36.1984L575.488 626.3296z" fill="#bfbfbf" p-id="2183"></path></svg>
          </div>
          <input type="text" v-model="keyWorld" placeholder="全拼/中文">
      </div>
      
  </div>
</template>

<script>
import bus from "../../../../bus";
import {mapMutations,mapState} from "vuex"
export default {
    name:"inputText",
    props:["cityListData"],
    data(){
        return{
            keyWorld:"",
            list:[],
            timer:null
        }
    },
    mounted(){
        console.log(this.cityListData["A"])
    },
    watch:{
        keyWorld(){
            if(this.timer){
                clearTimeout(this.timer)
            }
            this.timer = setTimeout(()=>{
                const result = []
                if(this.keyWorld.length > 0){
                    for(let i in this.cityListData){
                        this.cityListData[i].forEach(value => {
                            if(value.spell.indexOf(this.keyWorld) > -1 || value.name.indexOf(this.keyWorld) > -1){
                                result.push(value)
                            }
                        });
                    }
                }
                this.list = result
                this.searchCity(this.list)
            },100)
 
        }
    },
    methods:{
        ...mapMutations("city_",["searchCITY"]),
        searchCity(city){
            this.searchCITY(city)
        }
    }
}
</script>

<style lang="less" scoped>
    .input{
        width: 100%;
        margin-top:.8rem ;
        position: fixed;
        top: -0.1rem;
        z-index: 100;
        .search{
            width: 100%;
            height: 1.2rem;
            background: #efeff4;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            .icon{
                width: .47rem;
                height: .47rem;
                position: absolute;
                left: .17rem;
                top: .17rem;
            }
            input{
                width: 96%;
                height: 60%;
                border-radius: 1rem;
                padding-left: .65rem;
                color: red;
            }
        }
        .search-content{
            box-sizing: content-box !important;
            position: absolute;
            height: 100vh;
            top: 1.08rem;
            left: 0;
            right: 0;
            bottom: 0;
            overflow: hidden;
            z-index: 122;
            .search-item{
                line-height: .4rem;
                padding-left: .2rem;
                color: #999;
            }
        }
    }
</style>