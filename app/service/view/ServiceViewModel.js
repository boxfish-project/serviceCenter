Ext.define('serviceCenter.service.view.ServiceViewModel',{
    extend:'Ext.app.ViewModel',
    alias:'viewmodel.service',

    requires:[
      'Ext.data.Store'
    ],
    stores:{
      //主服务信息
      service:{
        model:'serviceCenter.service.model.ServiceModel',
        autoLoad: true,
        pageSize:20,
        proxy:{
          type:'rest',
          url:URL_PREFIX+SERVICE_PORT+'/product/page',
          reader:{
            type:'json',
            rootProperty:'data.content',
            totalProperty:'data.totalElements',
            successProperty:'returnMsg'
          },
            limitParam:'size',
            startParam:'page'
        },
        params:{
          page: 0,size:20
        }
      }

    }
});
