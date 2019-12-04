<template>
  <div class="home">
    <div class="header">
      消息
    </div>
    <div class="main">
      <router-view></router-view>
    
  
    </div>
    <div class="foter">
     
     <router-link v-for="(item,index) in list" :key="index" tag="span" :to="item.path" active-class="active">{{item.class}}</router-link>
    </div>
  </div>
</template>

<script>



export default {
  name: 'home',
 
  data(){
    return {
      list:[{
        class:"消息",
        path:"/xiao"
      },{
        class:"我的",
        path:"/my"
      },{
        class:"空间",
        path:"/kong"
      }]
    }

  },
 
  
}
</script>
<style lang="scss">
*{
  margin:0;
  padding: 0;
}
html,body,#app{
  width: 100%;
  height: 100%;
}
.home{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.header{
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #ccc;
  text-align: center;
  line-height: 50px;
}
.main{
  width: 100%;
  flex: 1;
  overflow: auto;
  background: #eee
}
.foter{
  width: 100%;
  height: 50px;
  display: flex;
  border-top: 1px solid #ccc;
  span{
    flex: 1;
    text-align: center;
    line-height: 50px;
  }
  .active{
    color: red;
  }
}
</style>
