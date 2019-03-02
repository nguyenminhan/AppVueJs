
// import LoginView from './components/views/Login.vue'


// Import Views - Dash
import DashboardView from './components/view/Dashboard.vue'
import AddCampaign from './components/view/AddCampaign.vue'
import ListCampaign from './components/view/ListCampaign.vue'


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
    path: '/add_campaign',
    name:'add_campaign',
    component: AddCampaign
  },
  {
    path: '/list_campaign',
    name:'list_campaign',
    component: ListCampaign
  }
  
]

