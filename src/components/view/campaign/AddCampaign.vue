<template>
    <main class="main-content bgc-grey-100">
        <div id="mainContent">
            <div class="wizard-cam pagin col-md-12 pL-0">
                <div class="wizard-1 ta-c"><h4 class="c-grey-900 mT-10 mB-30">Add Campaign</h4></div>
            </div>
            <div class="row gap-20 masonry pos-r" style="position: relative; height: 697px;">
                <div class="masonry-sizer col-md-6"></div>
                <div class="masonry-item col-md-12" style="position: absolute; left: 0%; top: 0px;">
                    <div class="bgc-white p-20 bd">
                        <h4 class="c-grey-900">New Campaign</h4>
                        <div class="mT-30">
                            <form action="" @submit.prevent="addCampaign()" enctype="multipart/form-data">
                                <div class="form-group">
                                    <label for="campaign-code">Campaign Code</label>
                                    <input type="text" class="form-control" id="campaign-code"  v-model="form.campaign_code" name="campaign_code" placeholder="Campaign Code">
                                </div>
                                <div class="form-group">
                                    <label for="campaign-title">Campaign Title</label>
                                    <input type="text" class="form-control" id="campaign-title" v-model="form.campaign_title" placeholder="Campaign Title">
                                </div>
                                <div class="form-group">
                                    <label for="campaign-discription">Campaign Description</label>
                                    <textarea class="form-control" id="campaign-discription" v-model="form.campaign_description"></textarea>
                                </div>
                                <div class="form-group"><label for="start-date">Start date</label> <input  type="text" v-model="form.start_date" class="form-control bdc-grey-200 "  placeholder="yyyy-mm-dd"></div>
                                <div class="form-group"><label for="end-date">End date</label> <input type="text" v-model="form.end_date"  class="form-control bdc-grey-200 " placeholder="yyyy-mm-dd"></div>
                                <div class="form-group">
                                    <label for="campaign-picture">Campaign picture:</label> 
                                    <input @change="changePhoto($event)" type="file" name="photo" id="campaign-picture" accept="image/png, image/jpeg">
                                    <img :src="form.photo" alt="" width="80" height="80">
                                </div>
                                <div class="form-group">
                                    <label for="type">Status</label> 
                                    <select id="type" name="status" class="form-control" v-model="form.status">
                                        <option>DEBUG</option>
                                        <option>OPEN</option>
                                        <option>CLOSE</option>
                                    </select>
                                </div>
                                <center><button type="submit" class="btn btn-primary">Submit</button></center>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style>
    .wizard-1{
        background: #89d4fd;
        width: 160px;
    }
    .wizard-1 :before{
        display: none,
    }
</style>
<script>
import axios from 'axios';
export default {
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
     methods:{
            changePhoto(event){
                let file = event.target.files[0];
            
                //  if(file.size > 1048576){
                //      toast({
                //          type: 'error',
                //          title: 'Oops...',
                //          text: 'Something went wrong!',
                //          footer: '<a href>Why do I have this issue?</a>'
                //      })
                //  }else{
                     let reader = new FileReader();
                    
                     reader.onload = event => {
                         this.form.photo = event.target.result
                     };
                     reader.readAsDataURL(file);
                //  }
            },
            addCampaign(){
                this.$router.push('/add_coupon');
            //     let config = {
            //     headers: {
            //         'Accept' : 'application/json',
            //         'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjM5MmI5NTVlZmRmYmY2YThlYzBjZjY1YWQxMGQxMDA1NzUxNDc3ZGNkYmYyY2VkNDEzYzk1YzdhZTQzYWM1OGZjZmQ4NDBhZjUzNDIxNjMzIn0.eyJhdWQiOiIyIiwianRpIjoiMzkyYjk1NWVmZGZiZjZhOGVjMGNmNjVhZDEwZDEwMDU3NTE0NzdkY2RiZjJjZWQ0MTNjOTVjN2FlNDNhYzU4ZmNmZDg0MGFmNTM0MjE2MzMiLCJpYXQiOjE1NTE1OTM2MTYsIm5iZiI6MTU1MTU5MzYxNiwiZXhwIjoxNTgzMjE2MDE2LCJzdWIiOiI1Iiwic2NvcGVzIjpbXX0.Kk82hUAJeTyplXjF_qhz4w7wWGsxHLyShi2skkrzQZPI7B2U_MsNPhUHyp5bdQ7aLDEs6egz_4QZQv4fyqQFZIDNHQ11Dqx6ETqwzrHRJZxnoYZWtvbm8Uvenpqz_8HeQEiKinh3XB0Bft9mMnOnWWq-qW5716TgQisN8XkqcVIneaClDK52dXIf7CCYaWhfhb1NFmM6yRvUz_1Shxpj2u_IkpB7E6HEEnSyZCiX0fv_9WZVp8gpvV6HaK2TdIf1z4M3jZnss_CsTaJg9ajY0iQ6NtM2EOW3wpSaE4nBWBAZhFDFEQOkTgw271D7u9n8bDubxRSlhv1kB-X597k2pn3hWc1kcPdwj0t0Su-8ijnZ58tWAU4m0tuzNS7N7II3tFsDNC76nNaJWLbfaAHx6BC1Hvbyj0A2TK4nPeK4kYugHUxwd-5DmYe-q2yZCQD-pT30cjPxIGphEHRC50-xJa1VTzwisPYAvwIFgf7S3B0PfJkUU5UDoxx8FFYFspBK36WfIZi5VFgsoFGvltFAYECDSowrs3mWdGM8rkbETOrwy-rSI3PeCgH0IHQvb7BHB07GwiHncqjgEm0MXJOpuY3d8HivRO1Z3XiyMfYB9YOZKCO_eEIqc0GBExmVmN2neXCD2BkCoeQpVjKuCxaCkgL0unoJcyOaehD_uyEburU'
            //     }
            // }
            //     console.log( this.form);
              
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
                    
                
            //   axios.post('http://127.0.0.1:8000/api/campagin',this.form,config)
            //             .then(response=>{
            //                 console.log(response);
            //             this.$router.push('/add_coupon')
            //             toast({
            //                 type: 'success',
            //                 title: 'Post Added successfully'
            //             })
            //         })
            }
        }
}
</script>
