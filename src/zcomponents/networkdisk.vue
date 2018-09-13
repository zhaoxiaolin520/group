<template>
<div class="app-nav">
    <div class="nav-left">
        <div class="header">
            <span class="title">网盘</span>
        </div>
        <div class="search-area">
            <font-awesome-icon :icon="['fas','search']" class="gray4" />
            <input type="text" placeholder="搜索文件、文件夹" class="search_input">
        </div>
            <!-- 文件夹 -->
            <div class="nav-list">
                <!-- 企业网盘 -->
                <ul class="enterprise list_ul">
                    <li>
                        <router-link to="/root">
                            <font-awesome-icon v-if="caretRotate" icon="caret-right" class="gray1" @click="caretRotate = !caretRotate" />
                            <font-awesome-icon v-else icon="caret-right" class="gray1" :transform="{ rotate: 42 }" @click="caretRotate = !caretRotate" />
                            <font-awesome-icon icon="folder" class="gray gray2" />
                            <span>企业网盘</span>
                        </router-link>
                    </li>
                    <ul class="list_ul_children" v-if="!caretRotate">
                        <!-- <li> -->
                        <li v-for="item of priseItems" @click="toRoot(item.folder_name)">
                            <router-link :to="item.dir">
                                <font-awesome-icon v-if="item.children&&childCaretRotate" icon="caret-right" class="gray1" @click="childCaretRotate = !childCaretRotate" />
                                <font-awesome-icon v-else-if="item.children&&!childCaretRotate" icon="caret-right" :transform="{ rotate: 42 }" @click="childCaretRotate = !childCaretRotate" />
                                <font-awesome-icon v-else icon="caret-right" style="color:#fff" />
                                <font-awesome-icon icon="folder" class="gray gray2" :style="{color:item.folder_color}" />
                                <span>{{item.folder_name}}</span>
                            </router-link>
                            <ul class="ul_children_chid" v-if="!childCaretRotate">
                                <li v-for="ite of item.children" @click="toRoot(item.folder_name)">
                                    <!-- <li> -->
                                    <a href="javscript:;">
                                    <font-awesome-icon icon="folder" class="gray gray2" :style="{color:ite.folder_color}" />
                                    <span>{{ite.folder_name}}</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </ul>
                <!-- 个人网盘 -->
                <ul class="list_ul">
                    <li>
                        <router-link to="/my/root">
                            <font-awesome-icon icon="caret-right" class="gray1" />
                            <font-awesome-icon icon="folder" class="gray gray3" />
                            <span>个人网盘</span>
                        </router-link>
                    </li>
                </ul>
            </div>
            <!-- 成员 -->
            <div class="member">
                <a href="javascript:;">
                <font-awesome-icon icon="caret-right" class="gray1" />
                <span>成员</span>
            </a>
            </div>
            <!-- 标签 -->
            <div class="tips">
                <a href="javascript:;">
                <font-awesome-icon icon="caret-right" class="gray1" />
                <span>标签</span>
            </a>
            </div>
            <!-- 与我共享 -->
            <div class="share-area">
                <router-link to="/share">
                    <font-awesome-icon icon="share-alt" class="gray1" />
                    <span>与我共享</span>
                </router-link>
            </div>
            <!-- 回收站 -->
            <div class="recycle">
                <router-link to="/trash">
                    <font-awesome-icon :icon="['fas','trash-alt']" class="gray1" />
                    <span>回收站</span>
                </router-link>
            </div>
        </div>
        <div class="disk_content">
            <!-- <enterPrise v-if="!routerShow"></enterPrise> -->
            <router-view :navItems="navItem"></router-view>
        </div>
    </div>
</template>

<script>
import enterPrise from "./enterprise/enterprise.vue";
export default {
  data() {
    return {
      caretRotate: true,
      routerShow: false,
      childCaretRotate: true,
      navItem: {}
    };
  },
  components: {
    enterPrise
  },
  created() {
    // 发送默认 GETALL
    this.$store.dispatch("ZGETALL");
  },
  computed: {
    priseItems() {
      return this.$store.getters.undeleted;
    }
  },
  // watch: {
  //   priseItems() {
  //     this.priseItems = this.toRoot;
  //   }
  // },
  methods: {
    toRoot(itename) {
      this.routerShow = !this.routerShow;
      this.priseItems.forEach(ite => {
        if (ite.folder_name == itename) {
          this.navItem = ite;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.app-nav {
  display: flex;
  width: 100%;
}

.nav-left {
  width: 240px;
  background: rgba(253, 253, 253, 0.95);
  border-right: 1px solid #ddd;
  overflow-x: hidden;

  .header .title {
    padding: 0 20px;
    line-height: 50px;
  }

  a {
    width: 100%;
    display: inline-block;
    padding: 8px 10px 8px 25px;

    &:hover {
      text-decoration: none;
      box-shadow: 0 0 8px 2px #eee;
    }
  }

  a.active {
    color: #22d7bb;
    background: #e7f9f6;
    border-right: 4px solid #22d7bb;
    text-decoration: none;
  }

  .search-area {
    border-radius: 20px;
    padding-left: 20px;
    padding-bottom: 10px;
    position: relative;

    .gray4 {
      position: absolute;
      top: 9px;
      left: 30px;
      color: #8f8f8f;
    }

    .search_input {
      background: #f3f3f3;
      -webkit-box-shadow: none;
      box-shadow: none;
      color: #666;
      height: 36px;
      font-size: 14px;
      padding-left: 28px;
      border-radius: 20px;
      border: 1px solid transparent;
      outline: none;

      &:hover {
        background: #fdfdfd;
        border: 1px solid #ddd;
      }
    }
  }

  .gray1 {
    color: #aaa;

    &:hover {
      color: #333;
    }
  }

  .nav-list {
    .list_ul {
      a {
        display: inline-block; // padding: 8px 10px 8px 25px;
        font-size: 14px;

        .gray {
          font-size: 15px;
        }

        .gray2 {
          color: rgb(34, 215, 187);
        }

        .gray3 {
          color: rgb(249, 105, 170);
        }
      }
    }

    .list_ul_children li a {
      padding-left: 45px;
    }

    .ul_children_chid li a {
      padding-left: 65px;
    }
  }

  .member,
  .tips,
  .share-area,
  .recycle {
    // padding: 8px 10px 8px 15px;
    font-size: 14px;
  }
}

.disk_content {
  width: calc(100% - 240px);
  height: 100%;
  display: flex;
  // justify-content: center;
  // align-content: center;
  background: rgb(238, 238, 238);
}
</style>
