<template>
<div class="disk_table_con">
    <div class="table_header">
        <div class="file_name">
            <span>文件名</span>
        </div>
        <div class="flie_size">
            <span>大小</span>
        </div>
        <div class="update_person">
            <span>更新人</span>
        </div>
        <div class="update_time">
            <span>更新时间</span>
        </div>
    </div>
    <div class="table_body items" v-for="item of priseItems">
        <div class="file_name">
            <router-link :to="item.dir">
                <font-awesome-icon icon="folder" class="item_icon" :style="{color:item.folder_color}" />
                <span class="item_name">{{item.folder_name}}</span>
            </router-link>
        </div>
        <div class="flie_size">
            <span>{{item.file_zize}}</span>
        </div>
        <div class="update_person">
            <span>{{item.update_person}}</span>
        </div>
        <div class="update_time">
            <span>{{item.update_time}}</span>
        </div>
        <font-awesome-icon icon="trash-alt" class="item_icon_delete" :style="" @click="changeDelete(item)" />
    </div>

</div>
</template>

<script>
export default {
  props: ["priseItems"],
  data() {
    return {};
  },
  computed:{
      // priseItems(){
      //     return this.$store.state.priseItems;
      // }
  },
  methods: {
    changeDelete(item) {
      this.$store.dispatch("ZCHANGEDELETE", {
        id: item.id,
        deleted: !item.deleted //操作节点状态
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.disk_table_con {
  .table_header,
  .table_body {
    display: flex;
    line-height: 27px;
    color: #666;
    font-size: 14px;
    padding: 14px 35px;
    position: relative;

    &:before {
      content: "";
      position: absolute;
      left: 20px;
      right: 20px;
      bottom: 0;
      border-bottom: solid 1px #eee;
    }
  }

  .items {
    padding-top: 15px;

    &:hover {
      box-shadow: 0 0 8px 2px #eee;
    }
  }

  .file_name {
    flex: 1 1 0;
    display: flex;
    align-items: center;

    .item_icon {
      font-size: 30px;
    }

    .item_name {
      font-size: 15px;
      margin-left: 15px;
    }
  }

  .flie_size {
    width: 18%;
    text-align: center;
  }

  .update_person {
    width: 18%;
    text-align: center;
  }

  .update_time {
    width: 18%;
    text-align: left;
  }
}
.item_icon_delete {
  color: rgb(34, 215, 187);
  font-size: 14px;
  margin-top: 5px;
}
</style>
