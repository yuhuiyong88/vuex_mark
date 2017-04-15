<template>
  <div class="mask_layer" :class="{'hide':masktoggle}">
      <div class="content">
        <p class="con_list">{{this.$store.state.tip}}</p>
        <p class="choose">
          <span @click="show()">取消</span>
          <span @click="hide()">确定</span>
        </p>
      </div>
  </div>
</template>

<script>
import { store } from "../script/common/store"
export default {
  name: 'mark',
  data () {
    return {
      masktoggle:true
    }
  },
  methods:{
    show(){
      this.masktoggle=true;
    },
    hide(){
      this.masktoggle=true;
      this.$store.state.fn()
    }
  }
}
</script>

<style scoped lang="scss">
*{
  padding: 0;
  margin: 0;
}
.mask_layer{
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.5);
  position: absolute;
  top: 0;
  left: 0;
}
.content{
  display: flex;
  flex-direction: column;
  margin: 200px auto;
  width: 70%;
  min-height:100px;
  background: #fff; 
  .con_list{
    flex:1;
    line-height: 60px;
    text-align: center;
  }
  .choose{
    display: flex;
    height: 40px;
    border-top: 1px solid #ccc;
    span{
      flex: 1;
      line-height: 40px;
      text-align: center;
      &:nth-child(2){
        border-left: 1px solid #ccc;
      }  
    }
  }
}
.hide{
  display: none;
}
</style>