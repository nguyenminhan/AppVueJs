import axios from 'axios';
export default {
  state:{
      coupon:[],
      campaign:[],
      // blogpost:[],
      // singlepost:[],
      // allcategories:[],
      // latestpost:[]
  },
  getters:{
      getAllCoupon(state){
          return state.coupon
      },
      getAllCampaign(state){
          return state.campaign
      },
      getCampaignByID(state){
          
      }
      
      // getblogPost(state){
      //     return state.blogpost
      // },
      // singlepost(state){
      //     return state.singlepost
      // },
      // allcategories(state){
      //     return state.allcategories
      // },
      // latestpost(state){
      //     return state.latestpost
      // }

  },
  
  actions:{
      // allCategory(context){
      //     axios.get('/category')
      //         .then((response)=>{
      //             context.commit('categoreis',response.data.categories)
      //         })
      // },
      getAllCampaign(context){
          axios.get('http://127.0.0.1:7000/api/list_campaign')
              .then((response)=>{
                  console.log(response.data)
                  context.commit('allcampaign',response.data)
              })
      }
      // getblogPost(context){
      //     axios.get('/blogpost')
      //         .then((response)=>{
      //             // console.log(response.data)
      //             context.commit('getblogPost',response.data.posts)
      //         })
      // },
    //   getCouponById(context,payload){
    //       axios.get('/singlepost/'+payload)
    //           .then((response)=>{
    //               context.commit('siglePost',response.data.post)
    //           })
    //   },
      // allcategories(context){
      //     axios.get('/categories')
      //         .then((response)=>{

      //             context.commit('allcategories',response.data.categories)
      //         })
      // },
      // getPostByCatId(context,payload){
      //     axios.get('/categorypost/'+payload)
      //         .then((response)=>{
      //             console.log(response.data.posts)
      //             context.commit('getPostByCatId',response.data.posts)
      //         })
      // },
      // SearchPost(context,payload){
      //     axios.get('/search?s='+payload)
      //         .then((response)=>{
      //             context.commit('getSearchPost',response.data.posts)
      //         })

      // },
      // latestPost(context){
      //     axios.get('/latestpost')
      //         .then((response)=>{
      //             // console.log(response.data)
      //             context.commit('latestpost',response.data.posts)
      //         })
      // }
  },
  mutations:{
      // categoreis(state,data){
      //     return state.category = data
      // },
      allcampaign(state,payload){
          return state.campaign = payload
      }
      // getblogPost(state,payload){
      //     return state.blogpost = payload
      // },
      // siglePost(state,payload){
      //     return state.singlepost = payload
      // },
      // allcategories(state,payload){
      //     return state.allcategories = payload
      // },
      // getPostByCatId(state,payload){
      //     state.blogpost = payload
      // },
      // getSearchPost(state,payload){
      //     state.blogpost = payload
      // },
      // latestpost(state,payload){
      //     state.latestpost = payload
      // }


  }
}