<template>
    <div>
        <main class="main-content bgc-grey-100">
            <div id="mainContent">
                <div class="container-fluid">
                    <h4 class="c-grey-900 mT-10 mB-30">Coupons</h4>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="bgc-white bd bdrs-3 p-20 mB-20">
                                <form class="form-inline" action="" method="GET">
                                    <div class="col-md-2 col-sm-6 form-group">
                                        <label for="coupon-id" class="col-xs-5">id</label>
                                        <input class="form-control form-input col-xs-7" type="text" id="coupon-id" placeholder="coupon id" name="coupon_id" value="">
                                    </div>
                                    <div class="col-md-2 col-sm-6 form-group">
                                        <label for="coupon-code" class="col-xs-5">code</label>
                                        <input class="form-control form-input col-xs-7" type="text" id="coupon-title" placeholder="coupon code" name="coupon_code" value="">
                                    </div>
                                    <div class="col-md-2 col-sm-6 form-group">
                                        <label for="coupon-title" class="col-xs-5">title</label>
                                        <input class="form-control form-input col-xs-7" type="text" id="coupon-title" placeholder="coupon title" name="coupon_title" value="">
                                    </div>
                                    <br>
                                    <div class="col-md-2 col-sm-6 form-group">
                                        <label for="start_filter" class="col-xs-5">Start after</label>
                                        <input class="form-control form-input col-xs-7" type="text" id="start_filter" placeholder="Start after" name="start_filter" value="" data-provide="datepicker" data-date-format="yyyy-mm-dd">
                                    </div>
                                    <div class="col-md-2 col-sm-6 form-group">
                                        <label for="end_filter" class="col-xs-5">End before</label>
                                        <input class="form-control form-input col-xs-7" type="text" id="end_filter" placeholder="End before" name="end_filter" value="" data-provide="datepicker" data-date-format="yyyy-mm-dd">
                                    </div>
                                    <div class="col-md-1 col-sm-6 form-group">
                                        <label for="status" class="col-xs-5">Status</label>
                                        <select id="status" name="status" class="form-control form-input col-xs-7" style="width:150px">
                                            <option value="">ALL</option>
                                            <option value="">DEBUG</option>
                                            <option value="">OPEN</option>
                                            <option value="">CLOSE</option>
                                        </select>
                                    </div>
                                    <div class="col-md-1 col-sm-6 form-group mT-20 text-center">
                                        <button type="submit" class="btn btn-info" id="submit">filter</button>
                                    </div>
                                </form>
                            </div>
                            <div class="bgc-white bd bdrs-3 p-20 mB-20">
                                <h4 class="c-grey-900">List Coupons</h4>
                                <div id="dataTable_wrapper" class="dataTables_wrapper"><div class="dataTables_length" id="dataTable_length"><label>Show <select name="dataTable_length" aria-controls="dataTable" class=""><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries</label></div><div id="dataTable_filter" class="dataTables_filter"><label>Search:<input type="search" class="" placeholder="" aria-controls="dataTable"></label></div><table id="dataTable" class="table table-striped table-bordered dataTable" cellspacing="0" width="100%" role="grid" aria-describedby="dataTable_info" style="width: 100%;">
                                    <thead>
                                        <tr role="row"><th class="sorting_asc" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-sort="ascending" aria-label="id: activate to sort column descending" style="width: 103px;">id</th><th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="code: activate to sort column ascending" style="width: 111px;">code</th><th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="title: activate to sort column ascending" style="width: 124px;">title</th><th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Campaign code: activate to sort column ascending" style="width: 119px;">Campaign code</th><th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Type: activate to sort column ascending" style="width: 82px;">Type</th><th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Coupon value: activate to sort column ascending" style="width: 105px;">Coupon value</th><th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Start date: activate to sort column ascending" style="width: 84px;">Start date</th><th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="End date: activate to sort column ascending" style="width: 84px;">End date</th><th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending" style="width: 49px;">Status</th><th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Published: activate to sort column ascending" style="width: 77px;">Published</th><th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Used: activate to sort column ascending" style="width: 40px;">Used</th><th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Generated barcode: activate to sort column ascending" style="width: 146px;">Generated barcode</th><th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="action: activate to sort column ascending" style="width: 50px;">action</th></tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th rowspan="1" colspan="1">id</th>
                                            <th rowspan="1" colspan="1">code</th>
                                            <th rowspan="1" colspan="1">title</th>
                                            <th rowspan="1" colspan="1">Campaign code</th>
                                            <th rowspan="1" colspan="1">Type</th>
                                            <th rowspan="1" colspan="1">Coupon value</th>
                                            <th rowspan="1" colspan="1">Start date</th>
                                            <th rowspan="1" colspan="1">End date</th>
                                            <th rowspan="1" colspan="1">Status</th>
                                            <th rowspan="1" colspan="1">Published</th>
                                            <th rowspan="1" colspan="1">Used</th>
                                            <th rowspan="1" colspan="1">Generated barcode</th>
                                            <th rowspan="1" colspan="1">action</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>                                       
                                        <tr role="row" class="odd">
                                                <td class="sorting_1">C_20190131_5</td>
                                                <td>ABC123XYZ456</td>
                                                <td style="width:150px">Discount per product 5 %</td>
                                                <td><a href="detail_campaign.html">P_20190131_5</a></td>
                                                <td>Discount %</td>
                                                <td>5%</td>
                                                <td>2018-01-25</td>
                                                <td>2019-04-30</td>
                                                <td>open</td>
                                                <td>200</td>
                                                <td>50</td>
                                                <td><img style="width: 100px" src="/static/img/barcode.png"></td>
                                                <td>
                                                    <router-link to="/"><i title="edit coupon" class="icon-edit" style="color:#00bcd4; font-size: 20px; cursor:pointer"></i></router-link>
                                                </td>
                                            </tr></tbody>
                                </table><div class="dataTables_info" id="dataTable_info" role="status" aria-live="polite">Showing 1 to 10 of 11 entries</div><div class="dataTables_paginate paging_simple_numbers" id="dataTable_paginate"><a class="paginate_button previous disabled" aria-controls="dataTable" data-dt-idx="0" tabindex="0" id="dataTable_previous">Previous</a><span><a class="paginate_button current" aria-controls="dataTable" data-dt-idx="1" tabindex="0">1</a><a class="paginate_button " aria-controls="dataTable" data-dt-idx="2" tabindex="0">2</a></span><a class="paginate_button next" aria-controls="dataTable" data-dt-idx="3" tabindex="0" id="dataTable_next">Next</a></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<style scoped>
    #dataTable_filter{
        display: none!important;
    },
    @media (min-width: 576px) {
        .form-inline .form-control {
            width: inherit !important;
        }
    }
</style>