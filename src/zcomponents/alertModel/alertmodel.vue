<template>
<div class="model_shade">
    <div class="model_content">
        <div class="model_header">
            <span>删除文件夹</span>
            <font-awesome-icon icon="times" class="" />
        </div>
        <div class="model_body">
            <p>确认要删除文件夹: <span></span>? </p>
            <p>删除后此文件夹中的文件会被一并删除</p>

        </div>
        <div class="modal-footer model_footer">
            <button type="button" class="btn btn-primary btn_confirm" >确认删除</button>
            <button type="button" class="btn btn-default btn_cancel" >取消</button>
        </div>
    </div>
</div>
</template>

<script>
export default {};
</script>

<style lang="scss">
$mColr: rgba(0, 0, 0, 0.5);

.model_shade {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 200;
  width: 100%;
  height: 100%;
  background: $mColr;

  .model_content {
    width: 40%;
    margin: 5% auto;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 0 1.5rem $mColr;
  }
}
</style>
