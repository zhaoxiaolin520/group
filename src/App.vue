<template>
    <div class="main-layout">
        <div class="app-nav-area">
            <!--上方图标-->
            <div class="top-area">
                <a href="javascript:;" class="team-logo">
                    <img src="./assets/team_logo_default.png">
                </a>
            </div>
            <!--中间-->
            <div class="middle-area">
                <ul class="nav-apps">
                    <li v-for="v in list" :class="{active: $route.path.indexOf(v.url) != -1}" @click="change(v.url)">
                        <a href="javascript:;" class="app-item">
                            <span class="item-icon">
                                <i class="iconfont" :class="v.cls"></i>
                            </span>
                            <span class="name">{{v.text}}</span>
                        </a>
                    </li>
                </ul>
            </div>
            <!--下面-->
            <div class="bottom-area">
                <ul class="nav-apps">
                    <li>
                        <a href="javascript:;" class="app-item"></a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="module-body-wrapper">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                list: [
                    {
                        cls: 'icon-icon--',
                        text: '消息',
                        url: '/messages'
                    },
                    {
                        cls: 'icon-iconset0338',
                        text: '项目',
                        url: '/project'
                    },
                    {
                        cls: 'icon-rili',
                        text: '日历',
                        url: '/calendar/'
                    },
                    {
                        cls: 'icon-iconset0196',
                        text: '网盘',
                        url: '/root'
                    }
                ]
            }
        },
        methods: {
            change(url) {
                this.$router.push({path:url})
                console.log(this.$route)
            }
        }
    }
</script>

<style lang="scss" scoped>
    * {
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        outline: 0;
    }
    body,html {
        height: 100%;
    }
    body {
        font-size: .875rem;
    }
    #app {
        height: 100%;
    }
    .main-layout {
        margin: 0;
        display: flex;
        display: -ms-flexbox;
        display: -webkit-flex;
        -ms-flex-direction: row;
        flex-direction: row;
        height: 100%;
    }
    .app-nav-area {
        flex-shrink: 0;
        position: relative;
        width: 70px;
        height: 100%;
        background: #22d7bb;
        overflow-y: hidden;
    }
    .app-nav-area .top-area .team-logo {
        margin: 18px 0;
        text-align: center;
        display: block;
    }
    .app-nav-area .top-area .team-logo img {
        width: 50px;
        height: 50px;
        border-radius: 12px;
    }
    .app-nav-area .middle-area {
        text-align: center;
    }
    .app-nav-area .nav-apps {
        margin: 0;
        padding: 0;
    }
    .app-nav-area .nav-apps li {
        cursor: pointer;
        position: relative;
    }
    .app-nav-area .nav-apps li.active a.app-item:before {
        content: "";
        position: absolute;
        right: 0;
        top: 30px;
        width: 0;
        height: 0;
        border-top: 6px solid transparent;
        border-right: 5px solid #fdfdfd;
        border-bottom: 6px solid transparent;
    }
    .app-nav-area .nav-apps li a.app-item {
        display: block;
        text-decoration: none;
        height: 70px;
        -webkit-transition: -webkit-box-shadow .3s;
        transition: -webkit-box-shadow .3s;
        transition: box-shadow .3s;
        transition: box-shadow .3s,-webkit-box-shadow .3s;
    }
    .app-nav-area .nav-apps li a.app-item .item-icon {
        margin-top: 15px;
        display: inline-block;
        color: #fff;
        font-size: 24px;
        opacity: .8;
        -webkit-transition: opacity .5s,-webkit-transform .5s;
        transition: opacity .5s,-webkit-transform .5s;
        transition: transform .5s,opacity .5s;
        transition: transform .5s,opacity .5s,-webkit-transform .5s;
    }
    .app-nav-area .nav-apps li a.app-item .item-icon i, .wt-select-icon-wrap li i {
        font-size: 24px;
    }
    .app-nav-area .nav-apps li a.app-item .item-icon .icon-hover {
        display: none;
    }
    a .wtf {
        display: inline-block;
    }
    .app-nav-area .nav-apps li a.app-item .name {
        display: block;
        height: 0;
        overflow: hidden;
        font-size: 12px;
        color: #fff;
        -webkit-transform: translateY(0);
        transform: translateY(0);
        -webkit-transition: height .5s,-webkit-transform .5s;
        transition: height .5s,-webkit-transform .5s;
        transition: height .5s,transform .5s;
        transition: height .5s,transform .5s,-webkit-transform .5s;
    }
    .app-nav-area .nav-apps li:hover a.app-item {
        -webkit-box-shadow: 0 0 2px 2px #18bfa4;
        box-shadow: 0 0 2px 2px #18bfa4;
    }
    .app-nav-area .nav-apps li:hover a.app-item .item-icon {
        opacity: 1;
        -webkit-transform: translateY(-10px);
        transform: translateY(-10px);
    }
    .app-nav-area .nav-apps li:hover a.app-item .item-icon .icon-default {
        display: none;
    }
    .app-nav-area .nav-apps li:hover a.app-item .item-icon .icon-hover {
        display: inherit;
    }
    .app-nav-area .nav-apps li:hover a.app-item .name {
        height: auto;
        -webkit-transform: translateY(-10px);
        transform: translateY(-10px);
    }
    .app-nav-area .nav-apps li.active a.app-item:before {
        content: "";
        position: absolute;
        right: 0;
        top: 30px;
        width: 0;
        height: 0;
        border-top: 6px solid transparent;
        border-right: 5px solid #fdfdfd;
        border-bottom: 6px solid transparent;
    }
    .app-nav-area .nav-apps li.active a.app-item {
        background: #18bfa4;
    }
    .module-body-wrapper {
        -webkit-box-flex: 1;
        -ms-flex: 1 1 0px;
        flex: 1 1 0;
        -webkit-flex: 1 1 0;
        display: -webkit-box;
        display: flex;
        display: -ms-flexbox;
        display: -webkit-flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        position: relative;
    }
    .app-nav-area .bottom-area {
        text-align: center;
        position: absolute;
        bottom: 0;
        width: 100%;
    }
    .app-nav-area .nav-apps li {
        cursor: pointer;
        position: relative;
    }
    .app-nav-area .nav-apps li a.app-item {
        display: block;
        text-decoration: none;
        height: 70px;
        -webkit-transition: -webkit-box-shadow .3s;
        transition: -webkit-box-shadow .3s;
        transition: box-shadow .3s;
        transition: box-shadow .3s,-webkit-box-shadow .3s;
    }
    strong {
        font-weight: 700;
    }
    .main-layout .main-body {
        position: relative;
        width: calc(100% - 70px);
        overflow: hidden;
        display: flex;
        display: -ms-flexbox;
        display: -webkit-flex;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-flex: 1;
        -ms-flex: 1 1 0px;
        flex: 1 1 0;
        -webkit-flex: 1 1 0;
        background: rgb(238, 238, 238);
    }
    .main-layout .main-body .main-body-side {
        display: -webkit-box;
        display: flex;
        display: -ms-flexbox;
        display: -webkit-flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        position: relative;
        width: 240px;
        background: rgba(253,253,253,.95);
        border-right: 1px solid #ddd;
        -webkit-transition: width .2s ease-in-out;
        transition: width .2s ease-in-out;
    }
    .main-layout .main-body .main-body-side .header {
        height: 50px;
    }
    .main-layout .main-body .main-body-side .header .title {
        float: left;
        margin: 0 20px;
        color: #333;
        line-height: 50px;
        font-size: 16px;
    }
    .main-layout .main-body .main-body-side .body-list {
        -webkit-box-flex: 1;
        -ms-flex: 1 1 0px;
        flex: 1 1 0;
        -webkit-flex: 1 1 0;
        overflow: hidden;
        margin-bottom: 3px;
    }
    .main-layout .main-body .main-body-side .calendar-panel, .main-layout .main-body .main-body-side .chat-list, .main-layout .main-body .main-body-side .toc-section {
        width: 240px;
    }
    .toc-section {
        margin-bottom: 2px;
    }
    .lc-date-picker {
        padding: 10px;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
        margin-left: auto;
        margin-right: auto;
    }
    .lc-date-picker table thead th {
        padding: 3px 8.5px 3px 8.5px;
    }
    .btn {
        display: inline-block;
        white-space: nowrap;
        vertical-align: middle;
        user-select: none;
    }
    .btn:not(:disabled):not(.disabled) {
        cursor: pointer;
    }
    .lc-date-picker table thead th .uib-left, .lc-date-picker table thead th .uib-right {
        border: none;
        padding: 3px 5px;
        background: 0 0;
        min-width: 20px;
    }
    .pull-left {
        float: left!important;
    }
    .glyphicon-chevron-left {
        font: normal normal normal 14px/1 FontAwesome;
        padding-left: 0;
        padding-right: 5px;
    }
    .glyphicon-chevron-right {
        font: normal normal normal 14px/1 FontAwesome;
        padding-left: 5px;
        padding-right: 0;
    }
    .glyphicon-chevron-left:before {
        content: "\f104";
    }
    .glyphicon-chevron-right:before {
        content: "\f105";
    }
    .lc-date-picker table thead th .uib-title {
        border: 0;
        padding: 3px 10px;
        background: 0 0;
    }
    .uib-title {
        width: 100%;
    }
    .btn-sm{
        font-size: .875rem;
        line-height: 1.5;
    }
    small {
        font-size: 80%;
        font-weight: 400;
    }
    .lc-date-picker table tbody td {
        padding: 3px;
        text-align: center;
    }
    .lc-date-picker table tbody .btn-default {
        background: 0 0;
        color: #666;
        border: none;
        line-height: 20px;
        padding: 5px 7px;
    }
    .lc-date-picker table tbody .btn-default.active {
        -webkit-box-shadow: none;
        box-shadow: none;
        border-radius: 50%;
        background: #22d7bb;
    }
    .lc-date-picker table tbody .btn-default {
        padding: 2px 5px;
        line-height: 21px;
    }
    .toc-section .section-header {
        margin-bottom: 2px;
        padding: 8px 20px;
        position: relative;
        cursor: pointer;
    }
    .toc-section.active .section-header {
        background: #e7f9f6;
        border-right: 4px solid #22d7bb;
    }
    .section-header .expand-icon {
        margin-right: 6px;
        color: #aaa;
        display: inline-block;
        width: 14px;
        vertical-align: top;
    }
    .section-header .expand-icon i {
        font-size: 14px;
    }
    .wtf {
        display: inline-block;
    }
    .section-header .title, .section-header:hover .title {
        color: #333;
        font-size: .875rem;
    }
    .section-body .section-item {
        color: #666;
        display: block;
        padding: 9px 20px 9px 39px;
        position: relative;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        -webkit-transition: -webkit-box-shadow .2s;
        transition: -webkit-box-shadow .2s;
        transition: box-shadow .2s;
        transition: box-shadow .2s,-webkit-box-shadow .2s;
        border-right: 4px solid transparent;
    }
    .section-body .section-item .calendar-mute-lcfont {
        width: 20px;
        height: 20px;
        display: inline-block;
        font-size: 20px;
        line-height: 20px;
        vertical-align: middle;
        margin-left: -2px;
    }
    .section-body .section-item .section-title {
        display: inline-block;
        max-width: 140px;
        vertical-align: middle;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .main-body-center {
        -ms-flex: 1 1 0px;
        flex: 1 1 0;
        -webkit-flex: 1 1 0;
        display: flex;
        display: -ms-flexbox;
        display: -webkit-flex;
        -ms-flex-direction: column;
        flex-direction: column;
        overflow-x: hidden;
        overflow-y: auto;
        overflow-wrap: break-word;
    }
    .main-layout .main-body .main-body-center, .module-wrapper {
        -webkit-box-flex: 1;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        position: relative;
        -webkit-box-direction: normal;
    }
    .module-header {
        display: block;
        height: 50px;
        margin: 0;
        padding: 0 15px;
        position: relative;
        background: rgba(253,253,253,.95);
    }
    .module-header--flex-row {
        display: -webkit-box;
        display: flex;
        display: -ms-flexbox;
        display: -webkit-flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
    }
    .module-header:after, .module-header:before {
        content: " ";
        display: table;
    }
    .module-header--flex-row .secondary-text, .module-header--flex-row .title {
        float: none;
        -webkit-box-flex: 1;
        -ms-flex: 1 1 0px;
        flex: 1 1 0;
        -webkit-flex: 1 1 0;
    }
    .module-header .title {
        line-height: 50px;
        font-size: 16px;
        float: left;
        color: #333;
    }
    .module-header .title a {
        color: #333;
    }
    .module-header .title i {
        font-size: 20px;
        margin: 0 10px 4px 0;
        vertical-align: middle;
        color: #22d7bb;
    }
    .module-body {
        -webkit-box-flex: 1;
        -ms-flex: 1 1 0;
        flex: 1 1 0;
        -webkit-flex: 1 1 0;
        position: relative;
        overflow-y: auto;
        overflow-x: auto;
        padding: 15px 15px 0;
        height: 100%;
    }
    .module-body {
        display: -webkit-box;
        display: flex;
        display: -ms-flexbox;
        display: -webkit-flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
    }
    .module-body--calendar-detail {
        position: relative;
        width: 100%;
    }
    .module-body .module-body-content {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        -webkit-flex: 1;
        margin-bottom: 15px;
        background: #fdfdfd;
    }
    .fc-unthemed {
        position: relative;
    }
    .fc-unthemed table {
        width: 100%;
        font-size: .9em;
    }
    .fc-unthemed thead, .fc-unthemed tbody {
        border-color: #f3f3f3;
    }
    .fc-unthemed thead th.fc-day-header {
        padding: 10px;
        color: #333;
        font-weight: 400;
    }
    .fc-unthemed tbody td {
        text-align: left;
        vertical-align: top;
        font-size: .9em;
        height: 96px;
        border: 1px solid #f3f3f3;
    }
    .schedule {
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
    }
    .schedule .box {
        width: 100%;
        height: 96px;
    }
    .schedule .box table {
        position: relative;
        top: 1em;
        width: 100%;
    }
    .schedule .box table tr {
        height: 21px;
        line-height: 21px;
        font-size: .8em;
    }
    .schedule .box table tr td.add:hover {
        color: #fff;
        background: #f00000!important;
    }
    .module-header .secondary-text {
        float: left;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        display: block;
        line-height: 50px;
        padding: 0 10px;
        color: #aaa;
        text-align: center;
    }
    .btn-link {
        color: #aaa;
    }
    .btn-link i {
        font-size: 20px;
    }
    .module-header--flex-row .secondary-text .calendar-today-text {
        font-size: 16px;
        color: #333;
        margin-left: 15px;
        margin-right: 15px;
    }
    .module-header--flex-row .flex-panel {
        float: none;
        min-width: 30%;
        text-align: right;
    }
    .module-header .flex-pane {
        line-height: 50px;
        float: right;
        right: 0;
    }
    .module-header--flex-row .calendar-add {
        min-width: 110px;
        border: 1px solid transparent;
        padding: .469rem 26px;
        font-size: .875rem;
        line-height: 1.5;
        min-width: 106px;
        border-radius: 1.25rem;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        padding: 3px 20px;
        font-size: 14px;
        line-height: 1.42857143;
    }
    .m-r-10 {
        margin-right: 10px!important;
    }
    .btn-primary, .btn-primary:hover {
        color: #fff;
        background-color: #22d7bb;
        border-color: #22d7bb;
    }
    .btn-primary:hover {
        box-shadow: 0 2px 5px 1px rgba(34,215,187,.6);
    }
    .btn-group{
        position: relative;
        display: inline-flex;
        vertical-align: middle;
    }
    .btn-group > button {
        border-radius: .25rem;
        padding: .157rem 20px;
        font-size: .875rem;
        min-width: 70px;
        background-color: transparent;
        border: 1px solid transparent;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        color: #888;
        border-color: #ddd;
    }
    .btn-group>.btn:not(:last-child):not(.dropdown-toggle) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    .btn-group>.btn:not(:first-child) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
    .btn-group > button.active, .btn-group > button:hover {
        color: #22d7bb;
        border-color: #22d7bb;
    }
    .window {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        outline: 0;
        display: block;
        z-index: 999;
    }
    .window .mengban {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        outline: 0;
        display: block;
        opacity: .3;
        background: #000;
    }
    .modal-dialog{
        position: relative;
        width: auto;
        margin: .5rem;
        pointer-events: none;
        max-width: 660px;
        margin: 3.75rem auto;
        z-index: 1000;
    }
    .modal-content {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        pointer-events: auto;
        background-color: #fff;
        background-clip: padding-box;
        border: 0 solid rgba(0,0,0,.2);
        border-radius: .3rem;
        box-shadow: 0 0 1.5rem rgba(0,0,0,.4);
        outline: 0;
    }
    .modal-header {
        padding: 0 1.875rem;
        align-items: center;
        height: 50px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #eee;
        border-top-left-radius: .3rem;
        border-top-right-radius: .3rem;
    }
    .modal-header .modal-close {
        order: 1;
        color: #9cc2cb;
        line-height: 50px;
    }
    .modal-title {
        font-size: 1rem;
        font-weight: 500;
        margin-bottom: 0;
        line-height: 1.5;
    }
    .modal-body {
        position: relative;
        flex: 1 1 auto;
        padding: 1.25rem 1.875rem 1.875rem;
    }
    .modal-body .form-group {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 1rem;
        margin-left: -15px;
        margin-right: -15px;
    }
    .modal-body .form-group.row-fill {
        margin-left: 0;
        margin-right: 0;
    }
    .form-control {
        display: block;
        width: 100%;
        line-height: 1.5;
        color: #333;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #eee;
        border-radius: .25rem;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        padding: .469rem .875rem;
        font-size: .875rem;
    }
    .form-control:focus, .form-control:hover {
        border-color: #22d7bb;
    }
    .form-group .control-label {
        color: #888;
        font-size: 14px;
        font-weight: 400;
        padding-right: 0;
        padding-left: 0;
        text-align: right;
        margin-bottom: 0;
        padding-top: 6px;
        flex: 0 0 16.66667%;
        max-width: 16.66667%;
    }
    .col-sm-4, .col-sm-10 {
        position: relative;
        width: 100%;
        min-height: 1px;
        padding-right: 15px;
        padding-left: 15px;
    }
    @media (min-width: 576px) {
        .col-sm-10 {
            flex: 0 0 83.33333%;
            max-width: 83.33333%;
        }
        .col-sm-4 {
            flex: 0 0 33.33333%;
            max-width: 33.33333%;
        }
        .offset-sm-2 {
            margin-left: 16.66667%;
        }
    }
    .lc-select {
        position: relative;
    }
    .lc-select select {
        padding-right: 30px;
    }
    .lc-select select option {
        color: #666;
    }
    select.form-control{
        height: calc(2.2505rem + 2px);
    }
    .form-control {
        display: block;
        width: 100%;
        line-height: 1.5;
        color: #333;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #eee;
        border-radius: .25rem;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
    .form-group .btn {
        display: inline-block;
        white-space: nowrap;
        vertical-align: middle;
        user-select: none;
        border: 1px solid transparent;
        padding: .469rem 26px;
        font-size: .875rem;
        line-height: 1.5;
        min-width: 106px;
        border-radius: 1.25rem;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        color: #fff;
        background-color: #22d7bb;
        border-color: #22d7bb;
    }
    .form-group a.btn {
        margin-left: 10px;
        color: #aaa;
        padding: .469rem 10px;
        min-width: 0;
        background-color: transparent;
        border-color: transparent;
    }
    .fa {
        display: inline-block;
        width: 13px;
        height: 13px;
        margin-right: 6px;
    }
    .modal-row {
        margin-bottom: 26px;
    }
    .modal-detail-body-main-wrap {
        margin-left: -10px;
        width: 100%;
        display: -webkit-box;
        display: flex;
        display: -ms-flexbox;
        display: -webkit-flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        position: relative;
    }
    .modal-detail-body-main-left {
        -webkit-box-flex: 1;
        -ms-flex: 1 1 0px;
        flex: 1 1 0;
        -webkit-flex: 1 1 0;
        padding-left: 30px;
    }
    .modal-detail-body-main-right {
        padding-left: 20px;
        margin-right: -10px;
        white-space: nowrap;
    }
    .modal-detail-body-main-right .status-action {
        min-width: 108px;
        border: 1px solid transparent;
        padding: .469rem 26px;
        font-size: .875rem;
        line-height: 1.5;
        border-radius: 1.25rem;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
    .modal-detail-body-main-right .status-action.btn-outline-success {
        color: #22d7bb;
        background-color: transparent;
        background-image: none;
        border-color: #22d7bb;
    }
    .modal-detail-body-main-right .status-action.btn-outline-exit{
        color: #fff;
        background-color: #ff5b57;
    }
    .modal-detail-body-title {
        position: relative;
    }
    .modal-detail-body-title .check-icon {
        position: absolute;
        left: -30px;
        top: 0;
        color: #ddd;
    }
    .modal-detail-body-title .title {
        font-size: 20px;
        color: #333;
        display: inline-block;
        word-break: break-all;
    }
    .event-date {
        display: flex;
        display: -ms-flexbox;
        display: -webkit-flex;
        flex-direction: row;
    }
    .event-date .time {
        font-size: 24px;
        line-height: 60px;
        margin-left: -2px;
        color: #22d7bb;
    }
</style>
