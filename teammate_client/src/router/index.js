import Vue from 'vue'
import Router from 'vue-router'
import index  from "@/views/index/index"; // 页面整体布局
import Main from '@/pages/main.vue'
import Tool from '@/pages/tool.vue'
import My from '@/pages/my.vue'
import Fa from '@/pages/announce/fa.vue'
import Liuyanban from '@/pages/team/liuyanban'
import Xinxi from '@/pages/user/myxinxi'
import Xinxirevice from '@/pages/user/xinxirevice'
import SetTeam from '@/pages/activity/setTeam'
import Register from '@/pages/index/register'
import Teamdata from '@/pages/activity/teamdata'
import Shenke from '@/pages/myself/shenke'
import Shenke2 from '@/pages/myself/shenke2'
import Task from '@/pages/team/task'
import Task2 from '@/pages/team/task2'
import Teammate from '@/pages/team/teammate'
import Teammate1 from '@/pages/team/teammate1'
import ReviceTask from '@/pages/team/reviceTask'
import Myteam from '@/pages/team/myteam'
import Square from '@/pages/square/square.vue'
import Sendsquare from '@/pages/square/sendSquare.vue'
Vue.use(Router)


const whiteList = [
	'/'
];

//默认不需要权限的页面
export const constantRouterMap = [
	{
    path: '/',
    name:'main',  
    component: Main
  },
    {
        path:'/register',
        name:'register',
        component:Register
    },
  
	{ path: '/login',name:'login',component:() => import('@/views/login'),hidden: true},
	{ path: '/404', component: () => import('@/views/errorPage/404'), hidden: true },
    { path: '/401', component: () => import('@/views/errorPage/401'), hidden: true },
    {
      path: "/main",
      name:'main',
      component: Main,
     
    },
    {
      path: "/tool",
      component: Tool
    }, 
    {
      path: "/my",
      component: My
    },
    {
      path: "/square",
      name:'square',
      component: Square
    },
    
    {
      path: "/sendSquare",
      name:'sendSquare',
      component: Sendsquare
    },

  {
     path: '/fa', name:'fa', component: Fa,
     children:[      
      {
        path:'/setTeam',name:'setTeam',component:SetTeam
      },
      {
       path:'/teamdata',name:'teamdata',component:Teamdata
     },
    ]

	 },
	 {
	 path:'/myxinxi',component:Xinxi
   },
   {
    path:'/xinxirevice',component:Xinxirevice
    },
   
	 {
		 path:'/liuyanban',component:Liuyanban
	 },

  {
    path:'/shenke',component:Shenke
  },
  {
    path:'/shenke2',component:Shenke2
  },

  {
    path:'/myteam',name:'myteam',component:Myteam,
  },
      {
        path:'/task',name:'task',component:Task,
        children:[
          {
            path:'/teammate',name:'teammate',component:Teammate
          } ,
          {
        path:'/reviceTask',name:'reviceTask',component:ReviceTask
      }, 
        ]
      },
      {
        path:'/task2',name:'task2',component:Task2,
        children:[
          {
            path:'/teammate1',name:'teammate1',component:Teammate1
          }
        ]
      },
      {
        path:'/teammate',name:'teammate',component:Teammate
      }  
         
]


	//注册路由
export default new Router({
	
	mode:'history', // 默认为'hash'模式history
	routes: constantRouterMap,
})