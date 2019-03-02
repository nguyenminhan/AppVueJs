<template>
  <!-- <div id="app1">
    <SideBar/>
    <div class="page-container">
        <Header />
        <DashBoard />
        <Footer/>
     </div>
  </div> -->

  <div id="app">
    <router-view />
  </div>
</template>

<script>



export default {
  name: 'App',
  data(){
    return{

    }
  }
//   components:{
//     Header,
//     SideBar,
//     DashBoard,
//     Footer
//   }
}
</script>


