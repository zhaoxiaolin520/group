<template>
    <div class="app">
        	<input type="file" value="" accept="image/*">
            <button disabled="disabled"><i></i>上传文件</button>
            <ul class="name_wen">
          <li>文件名</li>
          <li>大小</li>
          <li>上传者</li>
          <li>上传时间</li>
          <div style="clear:both"></div>
      </ul>      
    </div>
</template>
<script>
    
</script>

<style lang="scss" scoped>
  .app{ 
     width:98%;
      height:100%;
      background:white;
  }
  input{
      width:66px;
      height:24px;
          color: #fff;
    background-color: #22d7bb;
        padding: .157rem 20px;
    border-radius: 1rem;
    border-color: #22d7bb;
    margin:20px 0 0 900px;
    position: relative;
    z-index: 2;
    opacity:0.001;
    cursor: pointer;
  }
  button{
      width:116px;
      height:27px;
          color: #fff;
          position: relative;
          top:-53px;
    background-color: #22d7bb;
        padding: .157rem 20px;
    border-radius: 1rem;
    border-color: #22d7bb;
    cursor: pointer;
     margin:20px 0 0 900px;
  }
  .name_wen {
  margin-top: 30px;
  border-bottom: 1px solid #eeeeee;
}
 .name_wen li {
  float: left;
  color: #888;
  list-style:none;
  height: 40px;
  line-height: 35px;
  font-size: 14px;
  width: calc(100% / 4.2);
  padding-left: 10px;
}
</style>