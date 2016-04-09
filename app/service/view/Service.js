Ext.define('serviceCenter.service.view.Servie',{
    extend:'Ext.container.Container',
    xtype:'Service',
    requires:[
      'Ext.grid.*',
      'Ext.toolbar.Paging',
      'Ext.grid.column.Date'
    ],
    controller:'service',
    viewModel:{type:'service'},

    layout: {
        type: 'hbox',
        align: 'stretchmax',
        animate: true,
        animatePolicy: {
            x: true,
            width: true
        }
    },

    cls:'shadow-panel',
    margin:10,
    flex: 1,

    items:[
      {
        xtype:'gridpanel',
        reference:'serviceGrid',
        itemId:'serviceGrid',
        flex: 1,
        height:800,
        style: {
          border:'2px solid #D5D5D5'
        },
        bind:{
          store:'{service}'
        },
        viewConfig: {
            preserveScrollOnRefresh: true,
            stripeRows: true
        },
        plugins:[{
                  ptype:'clipboard',
                  pluginId:'clipboard',
                  memory:true
                }
              ],
        columns:[
          {
            text:'服务号',
            dataIndex:'id',
            sortable:true,
            width:150,
            hidden:true,
            align : 'center'
          },{
            text:'服务名称',
            dataIndex:'name',
            sortable:true,
            width:150,
            align : 'center'
          },{
            text:'服务编码',
            dataIndex:'code',
            sortable:true,
            hidden:true,
            width:150,
            align : 'center'
          },{
            text:'服务描述',
            dataIndex:'description',
            sortable:true,
            width:150,
            align : 'center'
          },{
            text:'初始价格',
            dataIndex:'originalPrice',
            sortable:true,
            hidden:true,
            width:90,
            align : 'center'
          },{
            text:'价格',
            dataIndex:'price',
            sortable:true,
            width:90,
            align : 'center'
          },{
            text:'创建时间',
            dataIndex:'createTime',
            sortable:true,
            hidden:true,
            width:150,
            align : 'center'
          },{
            text:'更新时间',
            dataIndex:'updateTime',
            sortable:true,
            hidden:true,
            width:150,
            align : 'center'
          },{
            text:'开始时间',
            dataIndex:'startTime',
            sortable:true,
            width:150,
            align : 'center'
          },{
            text:'结束时间',
            dataIndex:'endTime',
            sortable:true,
            width:150,
            align : 'center'
          },{
            text:'可见',
            dataIndex:'flagEnable',
            sortable:true,
            width:70,
            align : 'center'
          },{
            text:'可用',
            dataIndex:'flagVisible',
            sortable:true,
            width:70,
            align : 'center'
          }
        ],
          // 工具栏
        // tbar: [
        //         // 条件查询
        //         {
        //             xtype: 'textfield',
        //             name: 'condition',
        //             itemId: 'dictionary-condition',
        //             labelWidth: 35,
        //             width:292,
        //             emptyText: '',
        //             allowBlank: true,
        //             listeners:{
        //             }
        //         }, {
        //             text: '',
        //             iconCls: 'x-fa fa-search'
        //          }
        //     ],
            // 分页栏
          bbar: [
                {
                    xtype: 'pagingtoolbar',
                    pageSize: 20,
                    displayInfo: true,
                    emptyMsg: '没有数据',
                    displayMsg: '当前显示{0}-{1}条记录 / 共{2}条记录 ',
                    beforePageText: '第',
                    afterPageText: '页/共{0}页',
                    bind: {
                        store: '{service}'
                    }
                },{
                     xtype: 'label',
                     itemId: 'maintableAnyInfoShow',
                     text: '',
                     style:{
                          fontSize:'20px'
                     },
                     margin: '0 0 0 10'
                }
            ],
          listeners:{
              select:'onSelect'
            }
      },

      {
        xtype:'container',
        reference:'serviceContainer',
        itemId:'serviceContainer',
        style: {
          border:'1px solid #D5D5D5'
        },
        margin:'0 0 0 5',
        // Padding: 20,
        flex: 1,
        layout:'vbox',

        items:[
          {
            xtype:'form',
            // margin: 2,
            itemId:'serviceForm',
            reference:'serviceForm',
            padding:'30 0 0 20',
            style: {border:'1px solid #D5D5D5','background-color':'#ffffff'},
            height:380,
            layout:{
              type:'table',
              columns:3
            },
            defaults:{
              padding:10,
              minWidth:290,
              height:40
            },
            // Width:300,
            items: [{
                    html: '<font color=\'gray\' size=3pt>服务详情</font>',
                    colspan:3
                },{
                    html: '',
                    height:20,
                    colspan:3
                },{
                    itemId:'serviceName',
                    text: '服务名称:',
                    html: '服务名称:'
                },{
                    itemId:'serviceCode',
                    text: '服务编码:',
                    html: '服务编码:'
                },{
                    itemId:'serviceDescription',
                    text: '服务描述:',
                    html: '服务描述:'
                },{
                    itemId:'serviceOriginalPrice',
                    text: '原始价格:',
                    html: '原始价格:'
                },{
                    itemId:'servicePrice',
                    text: '现价:',
                    html: '现价:'
                },{
                    itemId:'serviceStartTime',
                    text: '开始时间:',
                    html: '开始时间:'
                },{
                    itemId:'serviceEndTime',
                    text: '结束时间:',
                    html: '结束时间:'
                },{
                    itemId:'serviceFlagEnable',
                    text: '是否可用:',
                    html: '是否可用:'
                },{
                    itemId:'serviceFlagVisible',
                    text: '是否可见:',
                    html: '是否可见:'
                },{
                    itemId:'serviceCreateTime',
                    text: '创建时间:',
                    html: '创建时间:'
                },{
                    itemId:'serviceUpdateTime',
                    text: '更新时间:',
                    html: '更新时间:'
                },{
                    itemId:'serviceUpdateTime',
                    text: '更新时间:',
                    html: '更新时间:'
                },{
                    html: ''
                }
                ,{
                    html: '',
                    height:90,
                    colspan:3
                },{
                    html: '<font color=\'gray\' size=3pt>服务具体内容</font>',
                    colspan:3
                }

              ]
          },
          {
            xtype: 'gridpanel',
            reference:'serviceSpecificGrid',
            itemId:'serviceSpecificGrid',
            style: {
              border:'1px solid #D5D5D5'
            },
            // margin: 5,
            viewConfig: {
                preserveScrollOnRefresh: true,
                stripeRows: true
            },
            height:420,
            width:892,
            columns: [
                {
                    text: '具体服务号',
                    dataIndex: 'id',
                    sortable: true,
                    hidden:true,
                    width: 160,
                    align : 'center'
                }
                ,{
                    text: '具体服务',
                    dataIndex: 'name',
                    sortable: true,
                    width: 160,
                    align : 'center'
                } ,{
                    text: '创建时间',
                    dataIndex: 'createTime',
                    sortable: true,
                    hidden:true,
                    width: 160,
                    align : 'center'
                },{
                    text: '修改时间',
                    dataIndex: 'updateTime',
                    sortable: true,
                    hidden:true,
                    width: 160,
                    align : 'center'
                }, {
                    text: '价格',
                    dataIndex: 'price',
                    sortable: true,
                    width: 100,
                    align : 'center'
                }, {
                    text: '库存数量',
                    dataIndex: 'stockNum',
                    sortable: true,
                    hidden:true,
                    width: 160,
                    align : 'center'
                },{
                    text: '开始时间',
                    dataIndex: 'startTime',
                    sortable: true,
                    hidden:true,
                    width: 100,
                    align : 'center'
                },{
                    text: '有效时间',
                    dataIndex: 'validityDay',
                    sortable: true,
                    width: 100,
                    align : 'center'
                }, {
                    text: '提供次数',
                    dataIndex: 'amount',
                    sortable: true,
                    width: 100,
                    align : 'center'
                },{
                    text: '内容描述',
                    dataIndex: 'content',
                    sortable: true,
                    width: 300,
                    align : 'center'
                }, {
                    text: '详情介绍链接',
                    dataIndex: 'detailURL',
                    sortable: true,
                    width: 260,
                    align :'center'
                }
            ]
          }
        ]
      }

    ]
});
