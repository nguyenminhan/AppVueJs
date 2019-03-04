<template>
    <main class="main-content bgc-grey-100">
        <div id="mainContent">
            <div class="wizard-cam pagin col-md-12 pL-0">
                <div class="wizard-2 ta-c"><h4 class="c-grey-900 mT-10 mB-30">Add Campaign</h4></div>
                <div class="wizard-3 ta-c"><h4 class="c-grey-900 mT-10 mB-30">Add Coupon</h4></div>
            </div>
            <div class="row gap-20 masonry pos-r" style="position: relative; height: 1257px;">
                <div class="masonry-sizer col-md-6"></div>
                <div class="masonry-item col-md-12" style="position: absolute; left: 0%; top: 0px;">
                    <div class="bgc-white p-20 bd">
                        <h4 class="c-grey-900">New coupon</h4>
                        <div class="mT-30">
                            <form action="" @submit.prevent="addCouponByCampaignID()" enctype="multipart/form-data">
                                <div class="form-group">
                                    <label for="campaign-code">Campaign code:</label> 
                                    <input type="text" class="form-control" id="campaign-code" value="HAl8aGzfD05c7cfe"   disabled="">
                                </div>
                                <div class="form-group">
                                    <label for="campaign-title">Campaign title:</label> 
                                    <input type="text" class="form-control" id="campaign-title" value="title"  disabled="">
                                </div>
                                <div class="form-group">
                                    <label for="coupon-title">Coupon title:</label> 
                                    <input type="text" class="form-control" name="coupon_title"   id="coupon-title" placeholder="">
                                </div>
                                <div class="form-group">
                                    <label for="campaign-discription">Coupon Discription</label>
                                    <textarea class="form-control"  id="coupon-discription"></textarea>
                                </div>
                                <div class="form-group">
                                    <label for="coupon-type">Type</label> 
                                    <select id="coupon-type" name="type" class="form-control" >
                                        <option>added value %</option>
                                        <option>added value ¥</option>
                                        <option>added value point</option>
                                        <option>exchange product</option>
                                        <option>number of use</option>
                                        <option>pure advertisement</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="coupon-value">Coupon value:</label> 
                                    <input type="text" class="form-control"  id="coupon-value" placeholder="">
                                </div>
                                <div class="form-group">
                                    <label for="quota">Quota:</label> 
                                    <input type="text" class="form-control" id="quota" placeholder="">
                                </div>
                                <div class="form-group">
                                    <label for="start-date">Start date</label> 
                                    <input type="text" class="form-control bdc-grey-200 "  placeholder="yyyy-mm-dd">
                                </div>
                                <div class="form-group">
                                    <label for="end-date">End date</label> 
                                    <input type="text" class="form-control bdc-grey-200 "   placeholder="yyyy-mm-dd" >
                                </div>
                                <div class="form-group">
                                    <label for="eyecatch-picture">Eyecatch picture:</label> 
                                    <br>
                                    <input type="file" id="eyecatch-picture" accept="image/png, image/jpeg">
                                    <!-- <input @change="changePhoto($event)" type="file" name="photo" id="campaign-picture" accept="image/png, image/jpeg"> -->
                                    <!-- <img :src="photo" alt="" width="80" height="80"> -->
                                </div>
                                <div class="form-group">
                                    <label for="other-picture-1">Other picture 1:</label> 
                                    <br>
                                    <input type="file" id="campaign-picture" accept="image/png, image/jpeg">
                                     
                                     <!-- <input @change="changePhoto1($event)" type="file" name="photo1"  accept="image/png, image/jpeg"> -->
                                    <!-- <img :src="photo1" alt="" width="80" height="80"> -->
                                </div>
                                <div class="form-group">
                                    <label for="other-picture-2">Other picture 2:</label> 
                                    <br>
                                    <input type="file" id="other-picture-2" accept="image/png, image/jpeg">
                                  

                                </div>
                                <div class="form-group">
                                    <label for="other-picture-3">Other picture 3:</label> 
                                    <br>
                                    <input type="file" id="other-picture-3" accept="image/png, image/jpeg">
                                    <!-- <input @change="changePhoto3($event)" type="file" name="photo3"  accept="image/png, image/jpeg"> -->
                                    <!-- <img :src="form.photo3" alt="" width="80" height="80"> -->
                                </div>
                                <div class="form-group">
                                    <label for="init-status">Status</label> 
                                    <select id="init-status" name="init_status" class="form-control">
                                        <option>Debug</option>
                                        <option>Open</option>
                                        <option>Close</option>
                                    </select>
                                </div>
                                <center><button type="submit" class="btn btn-primary" >Create</button></center>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
export default {
     name: "add_coupon",
        data(){
            return{
              
                // errors: [],
                // form: new Form({
                //     // coupon_title:'',
                //     coupon_description:'',
                //     coupon_type:'',
                //     coupon_value:'',
                //     coupon_quota:'',
                //     start_date:'',
                //     end_date:'',
                //     photo:'',
                //     photo1:'',
                //     photo2:'',
                //     photo3:'',
                //     status:''
                // })
            }
    },

    // created(){
    //         axios.get(`post/${this.$route.params.campaignid}`)
    //             .then((response)=>{
    //                 console.log(response.data)
    //                 this.form.fill(response.data.post)
    //             })

    // },
    // computed:{
    //         getCampaginByID(){
    //             return this.$store.getters.getCampaignByID
    //         }
    // },
    methods:{
        //  changePhoto1(event){
        //         let file = event.target.files[0];
            
        //         //  if(file.size > 1048576){
        //         //      toast({
        //         //          type: 'error',
        //         //          title: 'Oops...',
        //         //          text: 'Something went wrong!',
        //         //          footer: '<a href>Why do I have this issue?</a>'
        //         //      })
        //         //  }else{
        //              let reader = new FileReader();
                    
        //              reader.onload = event => {
        //                  photo1 = event.target.result
        //              };
        //              reader.readAsDataURL(file);
        //         //  }
        // },
        addCouponByCampaignID(){
                    // console.log(this.form);
        }
    }
}
</script>



<style>

.wizard-2{
    background: #bfe2f5;
    width: 160px;
    display: table-cell;
}
.wizard-3{
    background: #89d4fd;
    width: 160px;
    display: table-cell;
}
.wizard-2{
    position:relative;
}
.wizard-cam pagin{
    display: -webkit-box !important;
    height: 50px!important;
}
    .wizard-2 :before{
        content: "\A";
        border-style: solid;
        height: 50px;
        border-width: 29px 12px 20px 12px;
        border-color: transparent transparent transparent #bfe2f5;
        position: absolute;
        right: -24px;
        top: 0px;
    }
    </style>
<script>
export default {
    
}
</script>
<style scoped>
    
</style>

