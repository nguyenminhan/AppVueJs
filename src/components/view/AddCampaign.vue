<template>
    <div>
        <!-- <SideBar /> -->
        <!-- <div class="page-container"> -->
            <!-- <Header /> -->
            <main class="main-content bgc-grey-100">
                        <div id="mainContent">
                            <h4 class="c-grey-900 mT-10 mB-30">Add Campaign</h4>
                            <div class="row gap-20 masonry pos-r" style="position: relative; height: 697px;">
                                <div class="masonry-sizer col-md-6"></div>
                                <div class="masonry-item col-md-12" style="position: absolute; left: 0%; top: 0px;">
                                    <div class="bgc-white p-20 bd">
                                        <h6 class="c-grey-900">New Campaign</h6>
                                        <div class="mT-30">
                                            <form action="">
                                                <div class="form-group">
                                                    <label for="campaign-code">Campaign Code</label>
                                                    <input type="text" class="form-control" id="campaign-code" name="campaign_code" placeholder="Campaign Code">
                                                </div>
                                                <div class="form-group">
                                                    <label for="campaign-title">Campaign Title</label>
                                                    <input type="text" class="form-control" id="campaign-title" placeholder="Campaign Title">
                                                </div>
                                                <div class="form-group">
                                                    <label for="campaign-discription">Campaign Description</label>
                                                    <textarea class="form-control" id="campaign-discription"></textarea>
                                                </div>
                                                <div class="form-group"><label for="start-date">Start date</label> <input type="text" class="form-control bdc-grey-200 start-date" id="start-date" placeholder="yyyy-mm-dd" data-provide="datepicker" data-date-format="yyyy-mm-dd"></div>
                                                <div class="form-group"><label for="end-date">End date</label> <input type="text" class="form-control bdc-grey-200 end-date" id="end-date" placeholder="yyyy-mm-dd" data-provide="datepicker" data-date-format="yyyy-mm-dd"></div>
                                                <div class="form-group"><label for="campaign-picture">Campaign picture:</label> <input type="file" id="campaign-picture" accept="image/png, image/jpeg"></div>
                                                <div class="form-group">
                                                    <label for="type">Status</label> 
                                                    <select id="type" name="status" class="form-control">
                                                        <option>DEBUG</option>
                                                        <option>OPEN</option>
                                                        <option>CLOSE</option>
                                                    </select>
                                                </div>
                                                <center><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Submit</button></center>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                <!-- <Footer/> -->
            <!-- </div> -->
    </div>
</template>

<script>
// import Header from '../layout/Header.vue';
// import SideBar from '../layout/SideBar.vue';
// import Footer from '../layout/Footer.vue';

// export default {
//     components :{
//         Header,
//         SideBar,
//         Footer
//     }
// }
</script>
