var app2=new Vue({
    el:'.article',
    data:{
        temp:['','','','','','','',''],
        //门店调货需求
        thxq:[{kind:'10001',num:'13',name:'货物A',src:'水月门店#02',status:'已创建调货任务'},{kind:'10075',num:'76',name:'货物B',src:'水月门店#02',status:'未处理'},{kind:'10101',num:'97',name:'货物Z',src:'水月门店#02',status:'未处理'}],
        //调货单
        thd:[{kind:'10001',num:'13',name:'货物A',to:'水月门店#02',from:'刀客塔仓库#01',status:'已完成'},{kind:'10781',num:'173',name:'货物C',to:'傀影门店#01',from:'刀客塔仓库#01',status:'等待送货员送货'},{kind:'10441',num:'863',name:'货物D',to:'水月门店#02',from:'刀客塔仓库#01',status:'等待送货员送货'}],
        //仓库库存
        ckkc:[{kind:'10001',num:'1300',name:'货物A'},{kind:'10984',num:'1370',name:'货物B'},{kind:'10871',num:'100',name:'货物C'},{kind:'10616',num:'1740',name:'货物D'}],
        //仓库进货需求
        jhxq:[{src_name:'水月门店#02',src_id:'666'}],
        //进货单
        jhd:[{id:'197782',time:'2022/11/11',kind:'77077',name:'货物七七',src:'上海米哈游天命科技有限公司',num:'5',status:'已送达'},{id:'197783',time:'2022/5/1',kind:'687898',name:'货物傀影',src:'上海鹰角网络科技有限公司',num:'2',status:'等待送货员送货'}],
        //送货单
        shd:[{id:'10066',from:'上海鹰角网络科技有限公司',to:'刀客塔仓库',time:'2022/2/6'}],
    },
    methods:{
        save(){
            alert('保存成功！');
        },
        add_thd(){
            this.thd.push({kind:this.temp[0],num:this.temp[2],name:this.temp[1],to:this.temp[4],from:'刀客塔仓库#01',status:'等待送货员送货'});
            alert('创建调货任务成功！')
        }
    },

})