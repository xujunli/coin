import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Index from '@/components/Index'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Member from '@/components/Member'
import Global from '@/components/Global'
import CoinList from '@/components/CoinList'
import CoinShow from '@/components/CoinShow'
import Predictions from '@/components/Predictions'
import ICO from '@/components/ICO'
import Overview from '@/components/coindetails/Overview'
import Charts from '@/components/coindetails/Charts'
import Analysis from '@/components/coindetails/Analysis'
import Prediction from '@/components/coindetails/Prediction'
import Markets from '@/components/coindetails/Markets'
import Purpose from '@/components/coindetails/Purpose'
import News from '@/components/coindetails/News'
import Events from '@/components/coindetails/Events'
import EditProfile from '@/components/members/EditProfile'
import MyAttention from '@/components/members/MyAttention'
import Wallet from '@/components/members/Wallet'
import VIP from '@/components/members/VIP'
import Order from '@/components/members/Order'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'Index',
          component: Index
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        },
        {
          path: 'login',
          name: 'Login',
          component: Login
        },
        {
          path: 'member',
          name: 'Member',
          component: Member,
          redirect: 'member/editprofile',
          children: [
            {
              path: 'editprofile',
              name: 'EditProfile',
              component: EditProfile
            },
            {
              path: 'myattention',
              name: 'MyAttention',
              component: MyAttention
            },
            {
              path: 'wallet',
              name: 'Wallet',
              component: Wallet
            },
            {
              path: 'vip',
              name: 'VIP',
              component: VIP
            },
            {
              path: 'order',
              name: 'Order',
              component: Order
            },
          ]
        },
        {
          path: 'coinlist',
          name: 'CoinList',
          component: CoinList
        },
        {
          path: 'coinshow',
          name: 'CoinShow',
          component: CoinShow,
          redirect: 'coinshow/overview',
          children: [
            {
              path: 'overview',
              name: 'Overview',
              component: Overview
            },
            {
              path: 'charts',
              name: 'Charts',
              meta: {
                requireLogin: true
              },
              component: Charts
            },
            {
              path: 'analysis',
              name: 'Analysis',
              component: Analysis
            },
            {
              path: 'prediction',
              name: 'Prediction',
              component: Prediction
            },
            {
              path: 'markets',
              name: 'Markets',
              component: Markets
            },
            {
              path: 'purpose',
              name: 'Purpose',
              component: Purpose
            },
            {
              path: 'news',
              name: 'News',
              component: News
            },
            {
              path: 'events',
              name: 'Events',
              component: Events
            }
          ]
        },
        {
          path: 'global',
          name: 'Global',
          component: Global
        },
        {
          path: 'predictions',
          name: 'Predictions',
          component: Predictions
        },
        {
          path: 'ico',
          name: 'ICO',
          component: ICO
        }
      ]
    }
  ]
})
