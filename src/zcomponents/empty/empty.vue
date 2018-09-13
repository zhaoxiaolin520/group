<template>
<div class="empty_con">
    <font-awesome-icon far icon="copy" size="6x" mask="circle" class="empty_show" />
    <p class="empty_text">没有文件</p>
</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.empty_con {
  width: 100%;
  text-align: center;
  flex-wrap: wrap;
  color: #ccc;
  position:absolute;
  top: 40%;
  .empty_text{
      margin: 20px;
  }
}
</style>
