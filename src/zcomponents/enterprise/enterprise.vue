<template>
<div class="disk_item">
    <div class="disk_header">
        <div class="disk_header_title">
            <router-link to="/root">
                <font-awesome-icon icon="folder" class="title_link" />
                <span>企业网盘</span>
                <font-awesome-icon v-if="navItems.folder_name" icon="angle-right" class="title_link_f" />
                {{navItems.folder_name}}
                <font-awesome-icon icon="angle-down" class="" />
            </router-link>
        </div>
        <div class="upload_file">
            <div class="new_file" @click.stop="floderMenu = !floderMenu">
                <font-awesome-icon icon="plus" class="title_link" />
                <span>新建</span>
            </div>
            <div class="new_folder" v-if="floderMenu">
                <ul class="folder_li">
                    <li @click="clickModelShow">新建文件夹</li>
                    <li>新建在线文档</li>
                </ul>
            </div>
        </div>
        <div class="model_shade" v-if="modelShow">
            <div class="model_content">
                <div class="model_header">
                    <span>新建文件夹</span>
                    <font-awesome-icon icon="times" class="" @click="modelShow = !modelShow" />
                </div>
                <div class="model_body">
                    <input type="text" class="form-control" id="recipient-name" v-model="new_file_name">
                    <span class="model_color_item" v-for="item of colorList" :style="{background:item.color}" @click="colorClick">
                    </span><br>
                    <span class="form_span">所在位置</span>
                    <select class="form-select" v-model="new_file_dir">
                      <option value="enterprise" >企业网盘</option>
                      <option value="person" >个人网盘</option>
                    </select>
                </div>
                <div class="modal-footer model_footer">
                    <button type="button" class="btn btn-primary btn_confirm" @click="add">确定</button>
                    <button type="button" class="btn btn-default btn_cancel" @click="modelShow = !modelShow">取消</button>
                </div>
            </div>
        </div>
        <!-- <aModel>
        </aModel> -->
    </div>
    <div class="disk_table">
        <disktable v-if="priseItems&&navItems.children" :priseItems="navItems.children"></disktable>
        <disktable v-else-if="!navItems.children&&priseItems" :priseItems="priseItems"></disktable>
        <empy v-else-if="!navItems.children&&priseItems" :priseItems="priseItems"></empy>
        <empty v-else-if="!navItems.children&&priseItems"></empty>
    </div>
</div>
</template>

<script>
import empty from "../empty/empty.vue";
import disktable from "../disk-table/disktable.vue";
import aModel from "../alertModel/alertmodel.vue";
import moment from "moment";
export default {
    props: ["navItems"],
    data() {
        return {
            floderMenu: false,
            modelShow: false,
            colorChecked: false,
            new_file_name: "",
            new_file_dir: "",
            colorList: [{
                    color: "#22d7bb"
                },
                {
                    color: "#18bfa4"
                },
                {
                    color: "#2cccda"
                },
                {
                    color: "#2dbcff"
                },
                {
                    color: "#4e8af9"
                },
                {
                    color: "#9473fd"
                },
                {
                    color: "#ef7ede"
                },
                {
                    color: "#ff7747"
                },
                {
                    color: "#ffd234"
                },
                {
                    color: "#99d75a"
                }
            ]
        };
    },
    components: {
        empty,
        disktable,
        aModel
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
    methods: {
        clickModelShow() {
            this.modelShow = !this.modelShow;
            this.floderMenu = !this.floderMenu;
            console.log(moment().format("MM[月]DD[日] hh:mm"));
        },
        colorClick(e) {
            // var _this = e.target;
        },
        add() {
            if (this.new_file_name != "") {
                var id = "";
                var str = "741852qwertyuioplkjhgfdszxcvbnm0963";
                for (var i = 0; i < 8; i++) {
                    //~~ 相当于parseInt
                    id += str[~~(Math.random() * str.length)];
                }
                // 发送add 新增命令
                var obj = {
                    id: id,
                    folder_color: this.colorList[parseInt(Math.random() * 10)].color,
                    folder_name: this.new_file_name,
                    file_zize: "-",
                    update_person: "M",
                    update_time: moment().format("MM[月]DD[日] hh:mm"),
                    dir: "/root/01/" + id,
                    deleted: false
                };
                // if (this.new_file_dir == "企业网盘") {
                this.$store.dispatch("ZADD", obj);
                // }
                if (this.new_file_dir == "个人网盘") {
                    this.$store.dispatch("PADD", obj);
                }

                // 点击后 清空 文本框
                this.modelShow = !this.modelShow;
                this.new_file_name = "";
            }
        }
    }
};
</script>

<style lang="scss">
$colorGreen: rgb(34, 215, 187);

.disk_item {
    width: 100%;
}

.disk_header {
    display: flex;
    padding: 12px 17px;
    margin: 0;
    position: relative;
    background: rgba(253, 253, 253, 0.95);
    height: 50px;
    align-content: center;
    justify-content: space-between;

    .disk_header_title {
        a {
            font-size: 14px;

            &:hover {
                text-decoration: none;
            }

            .title_link {
                font-size: 19px;
                color: $colorGreen;
                margin-right: 8px;
            }

            .title_link_f {
                font-size: 14px;
                margin: 0 8px;
            }
        }
    }

    .upload_file {
        .new_file {
            border: 1px solid $colorGreen;
            border-radius: 5px;
            padding: 3px 30px;
            font-size: 14px;
            color: $colorGreen;
            position: relative;

            &:hover {
                background: $colorGreen;
                color: #fff;
            }
        }

        .new_folder {
            padding: 5px 0;
            min-width: 240px;
            position: absolute;
            z-index: 99;
            top: 40px;
            margin-left: -30px;
            background: #fff;
            font-size: 16px;
            box-shadow: 0 0 24px rgba(0, 0, 0, 0.18);

            .folder_li li {
                line-height: 25px;
                padding: 10px 15px;
                transition: all 0.3s;

                &:hover {
                    background: #f3f3f3;
                    padding-left: 25px;
                }
            }
        }
    }

    .model_shade {
        position: fixed;
        left: 0;
        top: 0;
        z-index: 200;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);

        .model_content {
            width: 40%;
            // height: 30%;
            margin: 5% auto;
            border-radius: 5px;
            background-color: #fff;
            box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.5);
        }

        .model_header {
            width: 100%;
            height: 50px;
            display: flex;
            padding: 0 25px;
            font-size: 16px;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #eee;
        }

        .model_body {
            padding: 15px 25px;

            .form_span {
                margin-left: 5%;
            }

            .model_color_item {
                display: inline-block;
                width: 25px;
                height: 25px;
                border-radius: 50%;
                text-align: center;
                margin: 15px 10px;
                color: #fff;
                line-height: 25px;
            }

            .form-select,
            .form-select option {
                width: 80%;
                height: 35px;
                line-height: 40px;
                border-radius: 5px;
                outline: none;
                border-color: #22d7bb;
            }
        }

        .model_footer {
            padding-left: 22%;
            text-align: left;
        }

        .btn_confirm {
            background-color: #22d7bb;
            border-color: #22d7bb;
            border-radius: 20px;
            padding: 5px 35px;
            box-shadow: 0 2px 5px 1px rgba(34, 215, 187, 0.6);
            outline: none;
        }

        .btn_cancel {
            border: 0;
        }
    }
}

.disk_table {
    background: #fff;
    height: calc(100% - 80px);
    margin: 15px;
    order: 99;
    position: relative;
    // padding: 15px;
}
</style>
