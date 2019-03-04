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
                            <form action="">
                                <div class="form-group">
                                    <label for="campaign-code">Campaign code:</label> 
                                    <input type="text" class="form-control" id="campaign-code" value="P_20190131_5" disabled="">
                                </div>
                                <div class="form-group">
                                    <label for="campaign-name">Campaign:</label> 
                                    <input type="text" class="form-control" id="campaign-name" value="シーバメルティちいさな贅沢 各種" disabled="">
                                </div>
                                <div class="form-group">
                                    <label for="coupon-title">Coupon title:</label> 
                                    <input type="text" class="form-control" id="coupon-title" placeholder="">
                                </div>
                                <div class="form-group">
                                    <label for="campaign-discription">Coupon Discription</label>
                                    <textarea class="form-control" id="coupon-discription"></textarea>
                                </div>
                                <div class="form-group">
                                    <label for="coupon-type">Type</label> 
                                    <select id="coupon-type" name="type" class="form-control">
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
                                    <input type="text" class="form-control" id="coupon-value" placeholder="">
                                </div>
                                <div class="form-group">
                                    <label for="quota">Quota:</label> 
                                    <input type="text" class="form-control" id="quota" placeholder="">
                                </div>
                                <div class="form-group">
                                    <label for="start-date">Start date</label> 
                                    <input type="text" class="form-control bdc-grey-200 start-date" id="start-date" placeholder="yyyy-mm-dd" data-provide="datepicker" data-date-format="yyyy-mm-dd">
                                </div>
                                <div class="form-group">
                                    <label for="end-date">End date</label> 
                                    <input type="text" class="form-control bdc-grey-200 end-date" id="end-date" placeholder="yyyy-mm-dd" data-provide="datepicker" data-date-format="yyyy-mm-dd">
                                </div>
                                <div class="form-group">
                                    <label for="eyecatch-picture">Eyecatch picture:</label> 
                                    <br>
                                    <input type="file" id="eyecatch-picture" accept="image/png, image/jpeg">
                                </div>
                                <div class="form-group">
                                    <label for="other-picture-1">Other picture 1:</label> 
                                    <br>
                                    <input type="file" id="campaign-picture" accept="image/png, image/jpeg">
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
                                </div>
                                <div class="form-group">
                                    <label for="init-status">Status</label> 
                                    <select id="init-status" name="init_status" class="form-control">
                                        <option>Debug</option>
                                        <option>Open</option>
                                        <option>Close</option>
                                    </select>
                                </div>
                                <center><button type="button" class="btn btn-primary" >Create</button></center>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
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

