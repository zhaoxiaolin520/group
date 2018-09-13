<template>
    <div class="app">
        <ul>
           <li v-for="item in todos">
              <b>M</b>
              <h5>{{item.name}} <span>{{item.sj}}</span> <span  @click="ljjdel(item.id)">X</span></h5>
              <p>{{item.title}}</p>
           </li>
        </ul>
        <div class="inon">
         <span class="iconfont icon-biaoqing"></span>
         <span class="iconfont icon-lianjie"></span>
         <span class="iconfont icon-tianjia"></span>
         <span class="iconfont icon-guanlian"></span>
         <div>
            <textarea  v-model="txt" @keydown.enter="ljjadd"  placeholder="按Enter发送消息"  style="overflow: hidden; word-wrap: break-word; resize: none; height: 63px;"></textarea>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
  data () {
    return {
      txt:'',
      name:'M',
      name2:'小特机器人',
      pp:'对不起，没听懂'
        
    }
  },
   created() {
    // 发送默认 GETALL
    this.$store.dispatch("ljjGETALL");
  },
   computed: {
    todos() {
        return this.$store.state.ztodos;
    
    }
  },
  methods:{
     ljjdel(id) {
      // 只需要一个id就行了
      this.$store.dispatch("ljjDEL", {
        id: id
      });
    },
     ljjadd() {
      // 如果为空 就 return 掉 什么都不做
      if (this.txt == "") return;
      // 随机一个8位id
      var data=new Date()
        this.sj =
        data.getHours() +
        "时" +
        data.getMinutes() +
        "分" 
    
      this.$store.dispatch("ljjADD", {
        name:this.name,
        title: this.txt,
        sj:this.sj,
        done: false
      });
    
      this.$store.dispatch("ljjADD", {
        name:this.name2,
        title:this.pp,
        sj:this.sj,
        done: false
      });
      console.log(this.txt);
     this.txt = "";
     console.log(this.txt);
      // 点击后 清空 文本框
      
    },
  }
  }
</script>

<style lang="scss" scoped>
h5{
  font-weight: 100;
}
li p{
  margin-top:3px;
  font-size: 14px;
}
li{
    margin-top:10px;
  padding:6px;
  list-style:none;
}
li b{
  display: block;
  width:40px;
  text-align: center;
  line-height: 40px;
  color:white;
  float:left;
  background:rgb(239, 126, 222);
  height:40px;
  margin-right:10px;
  border-radius:50%;
}
  .app{
    width:98%;
      height:100%;
      background: rgb(253, 253, 253);
  }
  ul{
    height:70%;
    width:100%;
    overflow: scroll;
  }
  span{
    margin-left:10px;
    cursor: pointer;
  }
  textarea{
    margin-top:20px;
    width:100%;
        box-shadow: none;
        outline: none;
    border:none;
  }
</style>