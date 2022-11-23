Vue.config.productionTip = false
const left_menu = Vue.extend({
    template:`
    <ul class="left_menu">
        <li v-for="(p,index) of li_text" :key="index">
            <a :href=li_href[index]>{{li_text[index]}}</a>
        </li>
    </ul>
    `,
    data(){
        return {
            li_text:['首页','门店货物需求','创建调货任务','查看库存','仓库进货需求','确认进货到货',],
            li_href:['./首页.html','./门店货物需求.html','./创建调货任务.html','./查看库存.html','./仓库进货需求.html','./确认进货到货.html',],
        }
    },
})
const top_menu = Vue.extend({
    template:`
    <div class="top_menu_div">
        <ul class="top_menu">
            <li v-for="(p,index) of li_text" :key="index">
                <a :href=li_href[index]>{{li_text[index]}}</a>
            </li>
        </ul>
    </div>
    `,
    data(){
        return {
            li_text:['经理','店长','仓管','收银','售货','送货'],
            li_href:['../公司经理/登录.html','../店长/登录.html','../仓库管理员/登录.html','../收银员/登录.html','../售货员/登录.html','../送货员/登录.html'],
        }
    }
})
const running= Vue.extend({
    template:`
    <span class="running">该程序/系统可提供访问 ：）</span>
    `,
    data(){
        return {
            
        }
    }
});
const not_running= Vue.extend({
    template:`
    <span class="not_running">该程序/系统已脱离部署 :（</span>
    `,
    data(){
        return {
            
        }
    }
})
Vue.component('left_menu',left_menu)
Vue.component('top_menu',top_menu)
Vue.component('running',running)
Vue.component('not_running',not_running)
new Vue({
    el:'#menu',
})