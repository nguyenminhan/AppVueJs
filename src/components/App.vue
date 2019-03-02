<template>
  <div id="app1">
    <SideBar/>
    <div class="page-container">
        <Header />
        <AddCampaign />
        <Footer/>
     </div>
  </div>
</template>

<script>
import Header from './layout/Header.vue';
import AddCampaign from './view/AddCampaign.vue';
import SideBar from './layout/SideBar.vue';
import Footer from './layout/Footer.vue';


export default {
  components:{
    Header,
    SideBar,
    AddCampaign,
    Footer
  }
}
</script>


