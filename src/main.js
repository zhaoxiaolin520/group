import "babel-polyfill";
import $ from 'jquery'
import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueResource);
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faCaretRight,
    faFolder,
    faSearch,
    faComment,
    faCalendar,
    faAddressBook,
    faCaretDown,
    faTrash,
    faCog,
    faTasks,
    faClone,
    faTimes,
    faCopy,
    faPlus,
    faShareAlt,
    faTrashAlt,
    faAngleDown,
    faAngleRight,
    faCheck
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCaretRight, faFolder, faSearch,faComment,faCalendar,faAddressBook,faCaretDown,faTrash,faCog,faTasks,faClone,faTimes,faCopy, faPlus,faShareAlt, faTrashAlt, faAngleDown, faAngleRight, faCheck);
Vue.component("font-awesome-icon", FontAwesomeIcon);
const store = new Vuex.Store({
    state:{
        todos:[],
        type: [],
        list:[],
        list1:[],
        list2:[],
        priseList: [],
        personList: [],
        ztodos: []
    },
    mutations:{
        GETALL(state,payload) {
            state.todos = payload;
        },
        GETFENLEI(state,payload) {
            state.type = payload;
        },
        CHANGECUR(state,payload) {
            state.todos.forEach((item) => {
                if(item.id == payload.id) {
                    item.cur = payload.cur;
                }
            })
        },
        CHANGEOP(state,payload) {
            state.todos.forEach((item) => {
                if(item.id == payload.id) {
                    item.op = payload.op;
                }
            })
        },
        ADD(state,payload) {
            state.todos.push(payload);
        },
        DEL(state,payload) {
            state.todos = state.todos.filter(item => {
                return item.id != payload.id;
            })
        },
        GETALLJ(state, payload) {
            state.list = payload
        },
        GETALLJ1(state, payload) {
            state.list1 = payload
        },
        GETALLJ2(state, payload) {
            state.list2 = payload
        },
        DELJ(state, payload) {
            state.list= state.list.filter(item => {
                return item.id != payload.id
            })
        },
        DELJ1(state, payload) {
            state.list1= state.list1.filter(item => {
                return item.id != payload.id
            })
        },
        DELJ2(state, payload) {
            state.list2= state.list2.filter(item => {
                return item.id != payload.id
            })
        },
        ADDJ(state, payload) {
            state.list.push(payload)
        },
        CHANGEJ(state, payload) {
            state.list.forEach((item)=>{
                if(item.id==payload.id){
                    item.name=payload.name
                    item.desc=payload.desc
                    item.sort=payload.sort
                }
            })
        },
        ZGETALL(state, payload) {
            state.priseList = payload;
        },
        ZGETPERSON(state, payload) {
            state.personList = payload;
        },
        ZADD(state, payload) {
            state.priseList.push(payload);
        },
        PADD(state, payload) {
            state.personList.push(payload);
        },
        ZCHANGEDELETE(state, payload) {
            state.priseList = state.priseList.forEach(item => {
                if (item.id == payload.id) {
                    item.deleted = payload.deleted;
                }
            });
        },
        ljjGETALL(state, payload) {
            state.ztodos = payload;
        },
        ljjDEL(state, payload) {
            state.ztodos = state.ztodos.filter(item => {
                return item.id != payload.id;
            })
        },
        ljjADD(state, payload) {
            state.ztodos.push(payload);
        },
    },
    actions:{
        async GETALL(context,payload){
            var data = await fetch('/all/').then(res => res.json());
            context.commit('GETALL',data);
        },
        async GETFENLEI(context,payload){
            var data = await fetch('/type/').then(res => res.json());
            context.commit('GETFENLEI',data);
        },
        async CHANGECUR({commit},payload) {
            var data = await fetch('./type/'+payload.id,{
                "method":"PATCH",
                "headers":{
                    "Content-Type":"application/json"
                },
                "body":JSON.stringify({cur: payload.cur})
            }).then(res => res.json());
            commit('CHANGECUR',data);
        },
        async CHANGEOP({commit},payload) {
            var data = await fetch('./all/'+payload.id,{
                "method":"PATCH",
                "headers":{
                    "Content-Type":"application/json"
                },
                "body":JSON.stringify({op: payload.op})
            }).then(res => res.json());
            commit('CHANGEOP',data);
        },
        async ADD({commit},payload) {
            var data = await fetch('/all/',{
                "method":"POST",
                "headers":{
                    "Content-Type":"application/json"
                },
                "body":JSON.stringify(payload)
            }).then(res => res.json());
            commit("ADD",data);
        },
        async DEL({commit},payload) {
            var data = await fetch('/all/'+payload.id,{
                "method":"DELETE"
            }).then(res => res.json());
            commit("DEL",payload);
        },
        async GETALLJ(context, payload) {
            var data=await fetch('./child/').then(res=>res.json());
            context.commit('GETALLJ',data)
        },
        async GETALLJ1(context, payload) {
            var data=await fetch('./child1/').then(res=>res.json());
            context.commit('GETALLJ1',data)
        },
        async GETALLJ2(context, payload) {
            var data=await fetch('./child2/').then(res=>res.json());
            context.commit('GETALLJ2',data)
        },
        async DELJ({ commit }, payload) {
            var data = await fetch('./child/' + payload.id, {
                "method": "DELETE"
            }).then(res => res.json());
            commit("DELJ", payload)
        },
        async DELJ1({ commit }, payload) {
            var data = await fetch('./child1/' + payload.id, {
                "method": "DELETE"
            }).then(res => res.json());
            commit("DELJ", payload)
        },
        async DELJ2({ commit }, payload) {
            var data = await fetch('./child2/' + payload.id, {
                "method": "DELETE"
            }).then(res => res.json());
            commit("DELJ", payload)
        },
        async ADDJ({ commit }, payload) {
            var data = await fetch('./child/', {
                "method": "POST",
                "headers": {
                    "Content-Type": 'application/json'
                },
                "body": JSON.stringify(payload)
            }).then(res => res.json());
            commit('ADDJ', data)
        },
        async CHANGEJ({ commit },payload) {
            var data = await fetch('./child/' + payload.id, {
                "method": 'PATCH',
                "headers": {
                    "Content-Type": 'application/json'
                },
                "body": JSON.stringify({ name:payload.name,desc:payload.desc,sort:payload.sort})
            }).then(res => res.json())
            commit('CHANGEJ', data)
        },
        async ZGETALL(context, payload) {
            var data = await fetch("/enterprise/").then(res => res.json());
            context.commit("ZGETALL", data);
        },
        async ZGETPERSON(context, payload) {
            var data = await fetch("/person/").then(res => res.json());
            context.commit("ZGETPERSON", data);
        },
        async ZADD({ commit }, payload) {
            // 上传数据
            var data = await fetch("./enterprise", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            }).then(res => res.json());
            commit("ZADD", data);
        },
        async PADD({ commit }, payload) {
            // 上传数据
            var data = await fetch("./person", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            }).then(res => res.json());
            commit("PADD", data);
        },
        async ZCHANGEDELETE({ commit }, payload) {
            var data = await fetch("./enterprise/" + payload.id, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ deleted: payload.deleted })
            }).then(res => res.json());
            commit("ZCHANGEDELETE", data);
        },
        async ljjGETALL(context, payload) {
            //请求数据
            var data = await fetch('/mapList/').then(res => res.json());
            console.log(data);
            context.commit('ljjGETALL', data);
        },
        async ljjDEL({ commit }, payload) {
            //发送delete请求到json-server服务器,自动帮我删除这条数据,操作 data.json文件
            var data = await fetch('/mapList/' + payload.id, {
                "method": "DELETE"
            }).then(res => res.json());
            commit("ljjDEL", payload);
        },
        async ljjADD({ commit }, payload) {
            //上传数据
            var data = await fetch('/mapList/', {
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify(payload)
            }).then(res => res.json());
            commit("ljjADD", data);
        },
    },
    getters:{
        // 数据操作
        all:function (state) {
            return state.todos.filter(item => item.type == 'all');
        },
        my:function (state) {
            return state.todos.filter(item => item.type == 'my');
        },
        members:function (state) {
            return state.todos.filter(item => item.type == 'members');
        },
        // 未删除的
        undeleted(state, getters) {
            return state.priseList.filter(fri => fri.deleted == false);
        },
        // 筛选删除的
        deleted(state, getters) {
            return state.priseList.filter(fri => fri.deleted == true);
        }
    }
});
const r = [
    {
        path: '/messages',
        component: require('./lcomponents/App.vue').default,
        name: '消息',
        children: [
            {
                path: '/messages/zhushou',
                component: require('./lcomponents/commpend/zhushou.vue').default,
                name: '网盘助手',
                children: [
                    //配置子路由
                    {
                        path: '/messages/zhushou/weidu',
                        component: require('./lcomponents/commpend/zhushou/weidu.vue').default,
                        name: '未读'
                    },
                    {
                        path: '/messages/zhushou/yidu',
                        component: require('./lcomponents/commpend/zhushou/yidu.vue').default,
                        name: '已读'
                    },
                    {
                        path: '/messages/zhushou/daichuli',
                        component: require('./lcomponents/commpend/zhushou/daichuli.vue').default,
                        name: '/messages待处理'
                    },
                    {
                        path:"*",
                        redirect: '/messages/zhushou/weidu'
                    }
                ]
            },
            {
                path: '/messages/jiqiren',
                component: require('./lcomponents/commpend/jiqiren.vue').default,
                name: '小特机器人',
                children: [
                    //配置子路由
                    {
                        path: '/messages/jiqiren/xiaoxi',
                        component: require('./lcomponents/commpend/jiqiren/xiaoxi.vue').default,
                        name: '消息'
                    },
                    {
                        path: '/messages/jiqiren/wenjian',
                        component: require('./lcomponents/commpend/jiqiren/wenjian.vue').default,
                        name: '文件'
                    },
                    {
                        path: '/messages/jiqiren/guding',
                        component: require('./lcomponents/commpend/jiqiren/guding.vue').default,
                        name: '固定消息'
                    },

                ]
            },
            {
                path: '/messages/gonggao',
                component: require('./lcomponents/commpend/gonggao.vue').default,
                name: '企业公告',
                children: [
                    //配置子路由
                    {
                        path: '/messages/gonggao/xiaoxi',
                        component: require('./lcomponents/commpend/gonggao/xiaoxi.vue').default,
                        name: '消息'
                    },
                    {
                        path: '/messages/gonggao/wenjian',
                        component: require('./lcomponents/commpend/gonggao/wenjian.vue').default,
                        name: '文件'
                    },
                    {
                        path: '/messages/gonggao/guding',
                        component: require('./lcomponents/commpend/gonggao/guding.vue').default,
                        name: '固定消息'
                    },
                    {
                        path:"*",
                        redirect: '/messages/gonggao/weidu'
                    }
                ]
            },
            {
                path: '/messages/richeng',
                component: require('./lcomponents/commpend/richeng.vue').default,
                name: '日程助手',
                children: [
                    //配置子路由
                    {
                        path: '/messages/richeng/weidu',
                        component: require('./lcomponents/commpend/richeng/weidu.vue').default,
                        name: '未读'
                    },
                    {
                        path: '/messages/richeng/yidu',
                        component: require('./lcomponents/commpend/richeng/yidu.vue').default,
                        name: '已读'
                    },
                    {
                        path: '/messages/richeng/daichuli',
                        component: require('./lcomponents/commpend/richeng/daichuli.vue').default,
                        name: '待处理'
                    },
                    {
                        path:"*",
                        redirect: '/messages/richeng/weidu'
                    }
                ]
            },
            {
                //如果用户随便输入地址,转到首页
                path: '*',
                redirect: '/messages/zhushou/weidu'
            }
        ]
    },
    {
        path: '/project',
        component: require('./components/project/project.vue').default,
        name: '项目',
        children:[
            {
                path:'/project/task',
                component:require('./components/project/subordinate/task.vue').default,
            },
            {
                path:'/project/my',
                component:require('./components/project/my/my.vue').default,
                children:[
                    {
                        path:'/project/my/myWork',
                        component:require('./components/project/my/myWork.vue').default,
                        children:[
                            {
                                path:'/project/my/myWork/Do',
                                component:require('./components/project/my/Do.vue').default,
                            },
                            {
                                path:'/project/my/myWork/Task',
                                component:require('./components/project/my/Task.vue').default,
                            }
                        ]
                    }
                ]
            },
            {
                path:'/project/projects',
                component:require('./components/project/projects/projects.vue').default,
            },
            {
                path:'/project/cofig',
                component:require('./components/project/config/config.vue').default,
                children:[
                    {
                        path:'/project/config/template',
                        component:require('./components/project/config/template/template.vue').default,

                        children:[
                            {
                                path:'/project/config/template/template1',
                                component:require('./components/project/config/template/template1.vue').default,

                            },
                            {
                                path:'/project/config/template/addons',
                                component:require('./components/project/config/template/addons.vue').default,
                            },
                            {
                                path:'/project/config/template/insight',
                                component:require('./components/project/config/template/insight.vue').default,
                            }
                        ]
                    },
                    {
                        path:'/project/config/addons',
                        component:require('./components/project/config/addons/addons.vue').default,
                    },
                    {
                        path:'/project/config/type-group',
                        component:require('./components/project/config/type-group/type-group.vue').default,
                        children:[
                            {
                                path:'/project/config/template/template1',
                                component:require('./components/project/config/template/template1.vue').default,
                            },
                            {
                                path:'/project/config/template/addons',
                                component:require('./components/project/config/template/addons.vue').default,
                            },
                            {
                                path:'/project/config/template/insight',
                                component:require('./components/project/config/template/insight.vue').default,
                                name:'报表管理',
                            }
                        ]

                    },
                    {
                        path:'/project/config/role-mode',
                        component:require('./components/project/config/role-mode/role-mode.vue').default,
                        children:[
                            {
                                path:'/project/config/template/template1',
                                component:require('./components/project/config/template/template1.vue').default,
                            },
                            {
                                path:'/project/config/template/addons',
                                component:require('./components/project/config/template/addons.vue').default,
                            },
                            {
                                path:'/project/config/template/insight',
                                component:require('./components/project/config/template/insight.vue').default,
                            }
                        ]

                    },
                    {
                        path:'/project/config/reminder-mode',
                        component:require('./components/project/config/reminder-mode/reminder-mode.vue').default,
                        children:[
                            {
                                path:'/project/config/template/template1',
                                component:require('./components/project/config/template/template1.vue').default,
                            },
                            {
                                path:'/project/config/template/addons',
                                component:require('./components/project/config/template/addons.vue').default,
                            },
                            {
                                path:'/project/config/template/insight',
                                component:require('./components/project/config/template/insight.vue').default,

                            }
                        ]
                    }
                ]
            },
            {
                path:'/project/trash',
                component:require('./components/project/trash/trash.vue').default,
                name:'回收站'
            },
        ]
    },
    {
        path: '/calendar/',
        component: require('./calendar/calendar.vue').default,
        name: '日历',
        children:[
            {
                path: '/calendar/my',
                component: require('./calendar/all.vue').default,
                name: '我的日程'
            },
            {
                path: '/calendar/all',
                component: require('./calendar/all.vue').default,
                name: '团队日程'
            },
            {
                path: '/calendar/members',
                component: require('./calendar/all.vue').default,
                name: '成员日程'
            },
            {
                path: '*',
                redirect:'/calendar/all'
            }
        ]
    },
    {
        path: '/root',
        component: require("./zcomponents/networkdisk.vue").default,
        name: '网盘',
        children: [
            {
                path: "/root",
                component: require("./zcomponents/enterprise/enterprise.vue").default,
                name: "root",
                children: [
                    {
                        path: "/root/01",
                        component: require("./zcomponents/enterprise/enterprise.vue").default
                    },
                    {
                        path: "/root/02",
                        component: require("./zcomponents/enterprise/enterprise.vue").default
                    },
                    {
                        path: "/root/03",
                        component: require("./zcomponents/enterprise/enterprise.vue").default
                    }
                ]
            },
            {
                path: "/my/root",
                component: require("./zcomponents/person/person.vue").default,
                name: "myroot"
            },
            {
                path: "/share",
                component: require("./zcomponents/share/share.vue").default,
                name: "share"
            },
            {
                path: "/trash",
                component: require("./zcomponents/trash/trash.vue").default,
                name: "trash"
            },
            {
                path: "*",
                redirect: "/root"
            }
        ]
    },
    {
        path: '*',
        redirect: '/calendar/all'
    }
]

const router = new VueRouter({
    routes: r,
    linkActiveClass:'active'
})

new Vue({
  el: '#app',
    store,
    router,
    components: {
        App
    }
})
