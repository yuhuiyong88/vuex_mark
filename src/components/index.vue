<template>
  <div class="index">
    <button @click="showMark(msg)">点击弹出遮罩层1</button>
    <button @click="showMark('遮罩层2')">点击弹出遮罩层2</button>
    <button @click="showMark('遮罩层3')">点击弹出遮罩层3</button>
    <button @click="showMark('遮罩层4')">点击弹出遮罩层4</button>
    <markLayer></markLayer>
  </div>
</template>

<script>
import markLayer from "./mark"
import { store } from "../script/common/store"
export default {
  name: 'index',
  store,
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    showMark:function(info){
      this.$store.dispatch("showparams",{info:info,callback:function(){
        console.log("dianjile")
      }})
      this.$children[0].masktoggle=false
    }
  },
  components:{
    markLayer
  },
  mounted:function(){
  }
}
</script>


<style scoped>
*{
  padding: 0;
  margin: 0;
}

.index{
  width: 100%;
  height: 100%;
}

button{
  width: 70%;
  height: 80px;
  font-size: 20px;
  margin: 20px 15%; 
}


</style>
