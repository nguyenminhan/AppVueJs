
// import LoginView from './components/views/Login.vue'

import DashboardView from './components/view/Dashboard.vue'

// campaign

import AddCampaign from './components/view/campaign/AddCampaign.vue'
import EditCampaign from './components/view/campaign/EditCampaign.vue'
import ListCampaign from './components/view/campaign/ListCampaign.vue'

// coupon
import AddCoupon from './components/view/coupon/AddCoupon.vue'
import EditCoupon from './components/view/coupon/EditCoupon.vue'
import ListCoupon from './components/view/coupon/ListCoupon.vue'


// Routes
export const routes = [
//   {
//     path: '/login',
//     component: LoginView
//   },
  {
    path: '/',
    name:'dashboard',
    component: DashboardView
  },
  {
    path: '/list_campaign',
    name:'list_campaign',
    component: ListCampaign
  },
  {
    path: '/add_campaign',
    name:'add_campaign',
    component: AddCampaign
  },
  {
    path:'/edit_campaign/:campaign_id',
    name:'edit_campaign',
    component:EditCampaign
  },  {
    path: '/list_coupon',
    name:'list_coupon',
    component: ListCoupon
  },
  {
    path: '/add_coupon',
    name:'add_coupon',
    component: AddCoupon
  },
  {
    path:'/edit_coupon/:coupon_id',
    name:'edit_coupon',
    component:EditCoupon
  }
  
]

