Ext.define('serviceCenter.orderCenter.view.OrderCenterViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.orderCenter',

    requires: [
      'Ext.data.Store'
    ],

    stores:{
      //主服务信息
      orderCenter:{
        model:'serviceCenter.orderCenter.model.OrderCenterModel',
        autoLoad: true,
        pageSize:20,
        proxy:{
          type:'rest',
          url:URL_PREFIX+ORDER_PORT+'/order/page',
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
      },
      statusComboBox:{
        autoLoad: true,
        fields: ['value','key'],
        proxy:{
          type:'rest',
          url:URL_PREFIX+ORDER_PORT+'/order/status',
          reader:{
            type:'json',
            rootProperty:'data',
            successProperty:'returnMsg'
          }
      }
      }
    }

});
