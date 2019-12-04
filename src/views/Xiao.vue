<template>
  <div class="xiao">
      <div><input type="text" v-model="txt" @input="setlist()"></div>
        <Item v-for=" (item,index) in lists" :key="index" :item="item"></Item>
  </div>
</template>

<script>
import Item from "../components/Item"
import {mapState} from "vuex"
export default {
    
    components:{
    Item
  },
  data(){
return {
    txt:""
}
  },
   computed:{
    ...mapState(["lists"])
  },
  methods:{
setlist(){
    this.$store.commit("setlist",{txt:this.txt})
}
  },
  created(){
    this.$store.dispatch("getdata")
  }

}
</script>

<style>

</style>