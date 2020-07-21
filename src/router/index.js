import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import A from "@/pages/A"
import a1 from "@/pages/a1"
import a2 from "@/pages/a2"
import a3 from "@/pages/a3"
import a4 from "@/pages/a4"
import News from "@/pages/News"
import Zhuce from "@/pages/Zhuce"
import Login  from  "@/pages/Login"
import Good  from  "@/pages/Good"
import CateGoods from "@/pages/CateGoods"
import Detail from "@/pages/Detail"
import Test from "@/pages/test"
import Order1 from "@/pages/Order1"
import Address from "@/pages/Address" 
import Addresslist from "@/pages/Addresslist"
import Pay from "@/pages/Pay"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect:"/A"
    },
    {
        path:"/A",
        component:A,
        redirect:"/A/a1",
        name:"A",
       
        children:[
              {
                 path:"a1",
                 component:a1,
                 meta:{
                    keepAlive:true
                }
              },
              {
                path:"a3",
                component:a3
             },
             {
                path:"a2",
                component:a2
             },
             {
                path:"a4",
                component:a4
             }
        ]
    },
    {
        path:"/news",
        component:News,
        name:"news1"
    },
    {
        path:"/news/:id",    // /news/123
        component:News,
        name:"news2"
    },
    {
        path:"/zhuce",
        component:Zhuce,
        name:"zhuce"
    },{
       path:"/login",
       component:Login
    },
    {
        path:"/good",
        component:Good
    },
    {
        path:"/categoods",
        component:CateGoods
    },
    {
       path:"/detail/:id",   // /detail/123 /detail/22222
       component:Detail,
       name:"detail"
    },
    {
        path:"/test",
        component:Test
    },
    {
        path:"/order",
        component:Order1
    },
    {
        path:"/address",
        component:Address
    },
    {
        path:"/addresslist",
        component:Addresslist
    },
    {
        path:"/pay",
        name:"pay",
        component:Pay
    }

  ]
})
