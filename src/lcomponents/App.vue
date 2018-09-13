<template>
<div style="width: 100%;">
  <div id="app">
    <div class="top">
     <p>消息<i class="iconfont icon-xiaoxi"></i><span class="iconfont icon-xiaoxi1" @click="ent"></span></p>
     </div>
     <div class="ipt"  @click="none">
        <i class="iconfont icon-chazhao"></i>
        <input type="text" placeholder="搜索成员、消息" v-model="searchString">
     </div>
     <ul  @click="none">
       <li v-for="(vilue,index) of list"   @click="routerGo(vilue.url)" :class="{cur : vilue.title == $route.name}">
         <img :src="vilue.imge" alt="">
         <span>{{vilue.title}}</span>
          <span class="ospan">×</span>
       </li>
     </ul>
    
  </div>
   <div class="rit" @click="none">
     <router-view ></router-view>
     </div>
  
       <div id="nav" v-show="off">
        <p><a>创建群组</a></p>
        <p><a>加入群组</a></p>
        <p><a>发起私聊</a></p>
        <p><a>添加成员</a></p>
     </div>
      

  </div>
</template>

<script>

export default {
  data () {
    return {
      off:false,
          searchString:'',
          list:[
            {
              imge:"https://s3.cn-north-1.amazonaws.com.cn/lcavatar/drive_24x24.png",
              title:"网盘助手",
              url:"/messages/zhushou"
            },
            {
                imge:"https://s3.cn-north-1.amazonaws.com.cn/lcavatar/381df779-62e6-49de-8792-620b94a5582d_40x40.png",
              title:"小特机器人",
              url:"/messages/jiqiren"
            },
            {
                imge:"https://s3.cn-north-1.amazonaws.com.cn/lcavatar/mission_24x24.png",
              title:"企业公告",
              url:"/messages/gonggao"
            },
            
            {
                imge:"https://s3.cn-north-1.amazonaws.com.cn/lcavatar/calendar_24x24.png",
              title:"日程助手",
              url:"/messages/richeng"
            }
          ]
    }
  },
  methods:{
      routerGo(url) {
      //路由的跳转
      console.log(this.$route);
      this.$router.push({ path:url});
    },
    ent(){
      this.off=true;
    },
    none(){
       this.off=false;
    }
  },
  filters:{
    searchFor(value,searchString){
        
        var result = [];

        // if(!searchString){
        //     return value;
        // }
        result = value.filter(function(item){
            if(item.title.indexOf(searchString) !== -1){
                return item;
            }
        })


        return result;
    }
  }
}
</script>

<style lang="scss" scoped>

#nav{
      box-shadow: 0 0 24px rgba(0,0,0,.18);
      width: 240px;
    height:140px;
 
      position: absolute;
      z-index: 3;
      top:54px;
      left:260px;
     background-color: #fff;
}
#nav p{
    transition:all .7s;
     height:35px;
     line-height: 35px;
      color:#666;
    border-radius: 3px;
}
#nav p a{
   margin:10px;
}
#nav p:hover{
      background: #eaeaea;
    padding-left: 26px;
}

.ospan{
  float:right;
  position: relative;
  top:3px;
  right:5px;
  display: none;
}
li:hover .ospan{
     display: block;
}
li:hover{
     background: 0 0;
         box-shadow: 0 0 8px 2px #eee;
}
.ipt i{
  float:left;
  position: relative;
  top:10px;
  left:10px;
}
.rit{
   width:81%;
   height:100%;
  float:left;
}
.top span{
  float:right;
  cursor: pointer;
}
.top{
  margin:20px;
}
.cur{
  background: #e7f9f6;
    color: #22d7bb;
    border-right: 4px solid #22d7bb;
}
  #app{
         width: 240px;
        
    background: rgba(253,253,253,.95);
    border-right: 1px solid #ddd;
    float:left;
    height:100%;
        color: #333;
   
    font-size: 16px;
  }
  li span{
    position: relative;
    top:-6px;
  }
  li{
    cursor: pointer;
    height:48px;
    line-height:48px;
    list-style:none;
    font-size: 14px;
  }
  li img{
    width:24px;
    height:24px;
    margin-top:15px;
    margin-left:25px;
      vertical-align: baseline;
  }
 
  .ipt{
     width:90%;
     height:38px;
     margin:10px auto;
     background: rgb(243, 243, 243);
     border-radius:12px;
  }
  .ipt input{
    box-shadow: none;
    color: rgb(102, 102, 102);
    height: 36px;
    font-size: 14px;
    margin-left:30px;
    background: rgb(243, 243, 243);
    border-radius: 20px;
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    border-image: initial;
    outline: none;
        display: block;
    width: 80%;
   
    line-height: 1.5;
  }
</style>
