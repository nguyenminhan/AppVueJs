<template>
    <!-- <div> -->
        <!-- <SideBar /> -->
        <!-- <div class="page-container"> -->
            <!-- <Header /> -->
<main class="main-content bgc-grey-100">
        <div id="mainContent">
            <h4 class="c-grey-900 mT-10 mB-30">Update Campaign</h4>
            <div class="row gap-20 masonry pos-r" style="position: relative; height: 697px;">
                <div class="masonry-sizer col-md-6"></div>
                <div class="masonry-item col-md-12" style="position: absolute; left: 0%; top: 0px;">
                    <div class="bgc-white p-20 bd">
                        <h6 class="c-grey-900">Update Campaign</h6>
                        <div class="mT-30">
                            <form role="form" @submit.prevent="updatePost()" enctype="multipart/form-data">
                                <div class="form-group">
                                    <label for="campaign-code">Campaign Code</label>
                                    <input type="text"  v-model="form.campaign_code"  class="form-control" id="campaign-code" name="campaign_code" placeholder="Campaign Code" :class="{ 'is-invalid': form.errors.has('campaign_code') }">
                                    <has-error :form="form" field="campaign_code"></has-error>
                                </div>
                                <div class="form-group">
                                    <label for="campaign-title">Campaign Title</label>
                                    <input type="text" v-model="form.campaign_title" name="campaign_title"  class="form-control" id="campaign-title" placeholder="Campaign Title" :class="{ 'is-invalid': form.errors.has('campaign_title') }">
                                    <has-error :form="form" field="campaign_title"></has-error>
                                </div>
                                <div class="form-group">
                                    <label for="campaign-discription">Campaign Description</label>
                                    <textarea class="form-control" v-model="form.campaign_description" name="campaign_description" id="campaign-discription" :class="{ 'is-invalid': form.errors.has('campaign_description') }"></textarea>
                                    <has-error :form="form" field="campaign_description"></has-error>
                                </div>
                                <div class="form-group">
                                    <label for="start-date">Start date</label>
                                    <input type="text"  v-model="form.start_date"  class="form-control bdc-grey-200 start-date" id="start-date" placeholder="yyyy-mm-dd" data-provide="datepicker" data-date-format="yyyy-mm-dd" :class="{ 'is-invalid': form.errors.has('start_date') }">
                                    <has-error :form="form" field="start_date"></has-error>
                                </div>
                                <div class="form-group">
                                    <label for="end-date">End date</label> 
                                    <input type="text" v-model="form.end_date" class="form-control bdc-grey-200 end-date" id="end-date" placeholder="yyyy-mm-dd" data-provide="datepicker" data-date-format="yyyy-mm-dd" :class="{ 'is-invalid': form.errors.has('end_date') }">
                                    <has-error :form="form" field="end_date"></has-error>
                                </div>
                                <div class="form-group" >
                                    <input @change = "changePhoto($event)" name="photo" type="file" :class="{ 'is-invalid': form.errors.has('photo') }">
                                    <img :src="updateImage()" alt="" width="80" height="80">
                                    <has-error :form="form" field="photo"></has-error>
                                </div>
                                <div class="form-group">
                                    <label for="type">Status</label> 
                                    <select id="type" name="status" class="form-control" v-model="form.status">
                                        <option value="DEBUG">DEBUG</option>
                                        <option value="OPEN">OPEN</option>
                                        <option value="CLOSE">CLOSE</option>
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
    <!-- </div> -->
</template>

<script>
export default {
   // name: "New",
        data(){
            return{
                form: new Form({
                    campaign_code:'',
                    campaign_title:'',
                    campaign_description:'',
                    start_date:'',
                    end_date:'',
                    photo:'',
                    status:''
                })
            }
        },
        // mounted(){
        //     this.$store.dispatch("allCategory")
        // },
        // computed:{
        //     getallCategory(){
        //         return this.$store.getters.getCategory
        //     }
        // },
        methods:{
            changePhoto(event){
                let file = event.target.files[0];

                 if(file.size>1048576){
                     swal({
                         type: 'error',
                         title: 'Oops...',
                         text: 'Something went wrong!',
                         footer: '<a href>Why do I have this issue?</a>'
                     })
                 }else{
                     let reader = new FileReader();
                     reader.onload = event => {
                         this.form.photo = event.target.result
                         console.log(event.target.result)
                     };
                     reader.readAsDataURL(file);
                 }

            },
            addCampaign(){
                // this.form.post('/savepost')
                //     .then(()=>{
                //         this.$router.push('/post-list')
                //         toast({
                //             type: 'success',
                //             title: 'Post Added successfully'
                //         })
                //     })
                //     .catch(()=>{

                //     })
            },
            updateImage(){
                let img = this.form.photo;
                if(img.length>100){
                    return  this.form.photo
                }else{
                    return `static/uploadimage/${this.form.photo}`
                }

            }
        }

    }
</script>

<style scoped>

</style>
