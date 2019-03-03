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
        let config = {
          headers: {
            'Accept' : 'application/json',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjM5MmI5NTVlZmRmYmY2YThlYzBjZjY1YWQxMGQxMDA1NzUxNDc3ZGNkYmYyY2VkNDEzYzk1YzdhZTQzYWM1OGZjZmQ4NDBhZjUzNDIxNjMzIn0.eyJhdWQiOiIyIiwianRpIjoiMzkyYjk1NWVmZGZiZjZhOGVjMGNmNjVhZDEwZDEwMDU3NTE0NzdkY2RiZjJjZWQ0MTNjOTVjN2FlNDNhYzU4ZmNmZDg0MGFmNTM0MjE2MzMiLCJpYXQiOjE1NTE1OTM2MTYsIm5iZiI6MTU1MTU5MzYxNiwiZXhwIjoxNTgzMjE2MDE2LCJzdWIiOiI1Iiwic2NvcGVzIjpbXX0.Kk82hUAJeTyplXjF_qhz4w7wWGsxHLyShi2skkrzQZPI7B2U_MsNPhUHyp5bdQ7aLDEs6egz_4QZQv4fyqQFZIDNHQ11Dqx6ETqwzrHRJZxnoYZWtvbm8Uvenpqz_8HeQEiKinh3XB0Bft9mMnOnWWq-qW5716TgQisN8XkqcVIneaClDK52dXIf7CCYaWhfhb1NFmM6yRvUz_1Shxpj2u_IkpB7E6HEEnSyZCiX0fv_9WZVp8gpvV6HaK2TdIf1z4M3jZnss_CsTaJg9ajY0iQ6NtM2EOW3wpSaE4nBWBAZhFDFEQOkTgw271D7u9n8bDubxRSlhv1kB-X597k2pn3hWc1kcPdwj0t0Su-8ijnZ58tWAU4m0tuzNS7N7II3tFsDNC76nNaJWLbfaAHx6BC1Hvbyj0A2TK4nPeK4kYugHUxwd-5DmYe-q2yZCQD-pT30cjPxIGphEHRC50-xJa1VTzwisPYAvwIFgf7S3B0PfJkUU5UDoxx8FFYFspBK36WfIZi5VFgsoFGvltFAYECDSowrs3mWdGM8rkbETOrwy-rSI3PeCgH0IHQvb7BHB07GwiHncqjgEm0MXJOpuY3d8HivRO1Z3XiyMfYB9YOZKCO_eEIqc0GBExmVmN2neXCD2BkCoeQpVjKuCxaCkgL0unoJcyOaehD_uyEburU'
          }
        }
          axios.get('http://127.0.0.1:8000/api/products',config)
              .then((response)=>{
                  console.log(response.data)
                  context.commit('allcampaign',response.data)
              })
      },
      // getblogPost(context){
      //     axios.get('/blogpost')
      //         .then((response)=>{
      //             // console.log(response.data)
      //             context.commit('getblogPost',response.data.posts)
      //         })
      // },
      getCouponById(context,payload){
          axios.get('/singlepost/'+payload)
              .then((response)=>{
                  context.commit('siglePost',response.data.post)
              })
      },
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