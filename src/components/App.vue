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
    <SideBar />
    <div class="page-container">
      <Header />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from './layout/Header.vue';
import SideBar from './layout/SideBar.vue';
import Footer from './layout/Footer.vue';


export default {
  name: 'App',
  components :{
        Header,
        SideBar,
        Footer
  },
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


