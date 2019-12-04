<template>
  <div class="items">
      <p>{{item.name}}</p>
       <p>{{item.title}}</p>
  </div>
</template>

<script>
export default {
    props:["item"]

}
</script>

<style lang="scss" scoped>
.items{
    width: 100%;
    height: 100px;
    border-bottom: 1px solid #ccc;
    text-align: center;
    background: #fff;
    margin-top: 20px;
    
}
</style>