Ext.define('serviceCenter.orderCenter.model.OrderCenterModel', {
    extend: 'Ext.data.Model',

    field:[
      {
        name:'id',type:'string'
      },{
        name:'userID',type:'string'
      },{
        name:'code',type:'string'
      },{
        name:'totalPrice',type:'string'
      },{
        name:'createTime',type:'string'
      } ,{
        name:'status',type:'string'
      },{
        name:'payChannel',type:'string'
      },{
        name:'orderChannel',type:'string'
      },{
        name:'updateTime',type:'string'
      }
    ]
});
