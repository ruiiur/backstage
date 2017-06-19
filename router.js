/**
 * Created by du on 2017/4/6.
 */
var app = angular.module('app', [
    'ui.router',
    'highcharts-ng'
]);
angular.module('app')
    .config(["$stateProvider","$urlRouterProvider",function ($stateProvider,$urlRouterProvider){
        //路由配置
        $urlRouterProvider.otherwise('/finance/withdrawals');
        $stateProvider
            //财务首页
            .state('finance',{
                url:'/finance',
                views:{
                    'main':{
                        controller:'financeCtrl',
                        templateUrl:'views/finance/finance.html'
                    }
                }
            })
            //设置页
            .state('settings',{
                url:'/settings',
                views:{
                    'main':{
                        // controller:'homeCtrl',
                        templateUrl:'views/settings/settings.html'
                    }
                }
            })
            //统计页
            .state('statistics',{
                url:'/statistics',
                views:{
                    'main':{
                        // controller:'homeCtrl',
                        templateUrl:'views/statistics/statistics.html'
                    }
                }
            })
            //佣金转余额审核列表
            .state('finance.commission',{
                url:'/commission',
                views:{
                    'finance-main':{
                        // controller:'homeCtrl',
                        templateUrl:'views/finance/audit management/commission.html'
                    }
                }
            })
            //提现申请管理
            .state('finance.withdrawals',{
                url:'/withdrawals',
                views:{
                    'finance-main':{
                        // controller:'homeCtrl',
                        templateUrl:'views/finance/audit management/withdrawals.html'
                    }
                }
            })
            //分销商
            .state('finance.distributor',{
                url:'/distributor',
                views:{
                    'finance-main':{
                        // controller:'homeCtrl',
                        templateUrl:'views/finance/commission record/distributor.html'
                    }
                }
            })
            //账户充值记录
            .state('finance.account',{
                url:'/account-recharge',
                views:{
                    'finance-main':{
                        // controller:'homeCtrl',
                        templateUrl:'views/finance/financial record/account-recharge.html'
                    }
                }
            })
            //资金监控
            .state('finance.capital',{
                url:'/capital-monitoring',
                views:{
                    'finance-main':{
                        // controller:'homeCtrl',
                        templateUrl:'views/finance/financial record/capital-monitoring.html'
                    }
                }
            })
            //红包记录
            .state('finance.red',{
                url:'/red-envelopes',
                views:{
                    'finance-main':{
                        // controller:'homeCtrl',
                        templateUrl:'views/finance/financial record/red-envelopes.html'
                    }
                }
            })
            //驳回记录
            .state('finance.turn',{
                url:'/turn-down',
                views:{
                    'finance-main':{
                        // controller:'homeCtrl',
                        templateUrl:'views/finance/financial record/turn-down.html'
                    }
                }
            })
            //提现记录
            .state('finance.withdraw',{
                url:'/withdraw',
                views:{
                    'finance-main':{
                        // controller:'homeCtrl',
                        templateUrl:'views/finance/financial record/withdraw.html'
                    }
                }
            })

            //订单统计
            .state('statistics.order',{
                url:'/order',
                views:{
                    'statistics-main':{
                        controller:'orderCtrl',
                        templateUrl:'views/statistics/transaction/order.html'
                    }
                }
            })
            //佣金排名
            .state('statistics.commission',{
                url:'/commission-ranking',
                views:{
                    'statistics-main':{
                        // controller:'homeCtrl',
                        templateUrl:'views/statistics/ranking/commission-rankings.html'
                    }
                }
            })
            //下级排名
            .state('statistics.submem',{
                url:'/subordinate-member',
                views:{
                    'statistics-main':{
                        // controller:'homeCtrl',
                        templateUrl:'views/statistics/ranking/subordinate-member.html'
                    }
                }
            })
            //积分排名
            .state('statistics.integral-r',{
                url:'/integral-ranking',
                views:{
                    'statistics-main':{
                        // controller:'homeCtrl',
                        templateUrl:'views/statistics/ranking/integral-ranking.html'
                    }
                }
            })
            // //会员分析
            // .state('statistics.member',{
            //     url:'/membership-analysis',
            //     views:{
            //         'statistics-main':{
            //             // controller:'homeCtrl',
            //             templateUrl:'views/statistics/member/membership-analysis.html'
            //         }
            //     }
            // })
            //会员统计
            .state('statistics.user-chart',{
                url:'/user-chart',
                views:{
                    'statistics-main':{
                        controller:'userChartCtrl',
                        templateUrl:'views/statistics/member/user-chart.html'
                    }
                }
            })
            //会员业务
            .state('statistics.user-business',{
                url:'/user-business',
                views:{
                    'statistics-main':{
                        controller:'userBusinessCtrl',
                        templateUrl:'views/statistics/member/user-business.html'
                    }
                }
            })
            //会员属性
            .state('statistics.user-attr',{
                url:'/user-attr',
                views:{
                    'statistics-main':{
                        controller:'userAttrCtrl',
                        templateUrl:'views/statistics/member/user-attr.html'
                    }
                }
            })
            //优惠券统计
            .state('statistics.coupon',{
                url:'/coupon-statistics',
                views:{
                    'statistics-main':{
                        controller:'couponStatisticsCtrl',
                        templateUrl:'views/statistics/marketing/coupon-statistics.html'
                    }
                }
            })
            //积分统计
            .state('statistics.integral-s',{
                url:'/integral-statistics',
                views:{
                    'statistics-main':{
                        controller:'integralStatisticsCtrl',
                        templateUrl:'views/statistics/marketing/integral-statistics.html'
                    }
                }
            })


            //支付宝收款
            .state('settings.alipay',{
                url:'/alipay',
                views:{
                    'settings-main':{
                        // controller:'homeCtrl',
                        templateUrl:'views/settings/system-settings/alipay-collection.html'
                    }
                }
            })
            //微信收款
            .state('settings.wechat',{
                url:'/wechat',
                views:{
                    'settings-main':{
                        // controller:'homeCtrl',
                        templateUrl:'views/settings/system-settings/wechat-collection.html'
                    }
                }
            })
            //提现设置
            .state('settings.mention',{
                url:'/mention-settings',
                views:{
                    'settings-main':{
                        // controller:'homeCtrl',
                        templateUrl:'views/settings/system-settings/mention-settings.html'
                    }
                }
            })
            //支付设置
            .state('settings.payment',{
                url:'/payment-settings',
                views:{
                    'settings-main':{
                        // controller:'homeCtrl',
                        templateUrl:'views/settings/system-settings/payment-settings.html'
                    }
                }
            })
            //申请设置
            .state('settings.apply',{
                url:'/apply-settings',
                views:{
                    'settings-main':{
                        controller:'applyCtrl',
                        templateUrl:'views/settings/system-settings/apply-settings.html'
                    }
                }
            })
            //申请设置
            .state('settings.review',{
                url:'/review-settings',
                views:{
                    'settings-main':{
                        // controller:'homeCtrl',
                        templateUrl:'views/settings/system-settings/review-settings.html'
                    }
                }
            })
    }])