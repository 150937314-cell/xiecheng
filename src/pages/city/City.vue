<template>
  <div>
      <City></City>
      <inputText :cityListData="cityListData"></inputText>
      <List :cityNameData = cityNameData :cityListData = cityListData :letter = letter></List>
      <AlphaList :cityListData = cityListData @change="change"></AlphaList>
  </div>
</template>

<script>
// 12313
import City from "./components/Header";
import inputText from './components/Input';
import List from './components/List';
import AlphaList from './components/Alphabet';
export default {
    name:"CityList",
    data(){
        return{
            cityNameData:[],
            cityListData:{},
            letter:""
        }
    },
    components:{
        City,
        inputText,
        List,
        AlphaList
    },
    methods:{
        getCity(){
            this.$axios.get("api/city.json")
            .then(res => {
                this.cityNameData = res.data.data.hotCities;
                this.cityListData = res.data.data.cities;
                console.log( res.data.data)
            })
            .catch(err => {
                console.error(err,"err"); 
            })
        },
        change(index){
            this.letter = index
        }
    },
    mounted(){
        this.getCity()
    }
}
</script>

<style>

</style>