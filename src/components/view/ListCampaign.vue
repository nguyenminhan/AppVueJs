<template>
    <div>
        <main class="main-content bgc-grey-100">
                    <div id="mainContent">
                        <div class="container-fluid">
                            <h4 class="c-grey-900 mT-10 mB-30">Campaigns</h4>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="bgc-white bd bdrs-3 p-20 mB-20">
                                        <form class="form-inline" action="" method="GET">
                                            <div class="col-md-2 col-sm-6 form-group">
                                                <label for="campaign_code" class="col-xs-5">Campaign Code</label>
                                                <input class="form-control form-input col-xs-7" type="text" id="campaign_code" placeholder="Campaign Code" name="campaign_code" value="">
                                            </div>
                                            <div class="col-md-2 col-sm-6 form-group">
                                                <label for="campaign_title" class="col-xs-5">Campaign title</label>
                                                <input class="form-control form-input col-xs-7" type="text" id="campaign_title" placeholder="Campaign title" name="campaign_title" value="">
                                            </div>
                                            <div class="col-md-2 col-sm-4 form-group">
                                                <label for="status">Status</label>
                                                <select id="status" name="status" class="form-control form-input">
                                                    <option value="">全部</option>
                                                    <option value="">DEBUG</option>
                                                    <option value="">OPEN</option>
                                                    <option value="">CLOSE</option>

                                                </select>
                                            </div>
                                            <div class="col-md-2 col-sm-6 form-group">
                                                <label for="start_filter" class="col-xs-5">Start after</label>
                                                <input class="form-control form-input col-xs-7" type="text" id="start_filter" placeholder="Start after" name="start_filter" value="" data-provide="datepicker" data-date-format="yyyy-mm-dd">
                                            </div>
                                            <div class="col-md-2 col-sm-6 form-group">
                                                <label for="end_filter" class="col-xs-5">End before</label>
                                                <input class="form-control form-input col-xs-7" type="text" id="end_filter" placeholder="End before" name="end_filter" value="" data-provide="datepicker" data-date-format="yyyy-mm-dd">
                                            </div>
                                            <div class="col-md-2 text-center mT-20">
                                                <!--<label for="submit"></label>-->
                                                <button type="submit" class="btn btn-info" id="submit">フィルター</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="bgc-white bd bdrs-3 p-20 mB-20">
                                        <h4 class="c-grey-900">List Campaign</h4>
                                        <div class="col-md-12 ta-r mB-10"><a href="add_campaign.html"><button type="button" class="btn btn-primary">Add Campaign</button></a></div>
                                        <div id="dataTable_wrapper" class="dataTables_wrapper"><div class="dataTables_length" id="dataTable_length"><label>Show <select name="dataTable_length" aria-controls="dataTable" class=""><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries</label></div><div id="dataTable_filter" class="dataTables_filter"><label>Search:<input type="search" class="" placeholder="" aria-controls="dataTable"></label></div><table id="dataTable" class="table table-striped table-bordered dataTable" cellspacing="0" width="100%" role="grid" aria-describedby="dataTable_info" style="width: 100%;">
                                            <thead>
                                                <tr role="row"><th class="sorting_asc" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Campaign Code: activate to sort column descending" style="width: 201px;">Campaign Code</th><th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Campaign Title: activate to sort column ascending" style="width: 401px;">Campaign Title</th><th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Campaign description: activate to sort column ascending" style="width: 401px;">Campaign description</th><th style="width: 84px;" class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending">Status</th><th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Coupons: activate to sort column ascending" style="width: 117px;">Coupons</th><th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Start date: activate to sort column ascending" style="width: 143px;">Start date</th><th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="End date: activate to sort column ascending" style="width: 143px;">End date</th><th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Action: activate to sort column ascending" style="width: 94px;">Action</th></tr>
                                            </thead>
                                            <tfoot>
                                                <tr><th rowspan="1" colspan="1">Campaign Code</th><th rowspan="1" colspan="1">Campaign Title</th><th rowspan="1" colspan="1">Coupon description</th><th style="width:110px" rowspan="1" colspan="1">Status</th><th rowspan="1" colspan="1">Coupons</th><th rowspan="1" colspan="1">Start date</th><th rowspan="1" colspan="1">End date</th><th rowspan="1" colspan="1">Action</th></tr>
                                            </tfoot>
                                            <tbody>
                                                
                                                
                                                
                                                
                                                
                                                
                                                
                                                
                                                
                                                
                                                
                                                
                                                
                                                
                                                
                                                
                                                
                                            <tr role="row" class="odd">
                                                    <td class="sorting_1">P_20190131_5</td>
                                                    <td><a href="detail_campaign.html">シーバメルティちいさな贅沢 各種</a></td>
                                                    <td>シーバメルティちいさな贅沢 各種</td>
                                                    <td>OPEN</td>
                                                    <td class="ta-c"><a href="coupon.html">3</a></td>
                                                    <td>2018-01-25</td>
                                                    <td>2019-04-30</td>
                                                    <td>
                                                        <a href="edit_campaign.html"><i title="edit campaign" class="fas fa-edit" style="color:#00bcd4; font-size: 20px; cursor:pointer"></i></a>
                                                        <a href="add_coupon.html"><i title="add coupon" class="fas fa-plus" style="color:#ecdb41; font-size: 20px; cursor:pointer"></i></a>
                                                    </td>
                                                </tr><tr role="row" class="even">
                                                    <td class="sorting_1">P_20190131_5</td>
                                                    <td><a href="detail_campaign.html">シーバメルティちいさな贅沢 各種</a></td>
                                                    
                                                    <td>シーバメルティちいさな贅沢 各種</td>
                                                    <td>OPEN</td>
                                                    <td class="ta-c"><a href="coupon.html">3</a></td>
                                                    <td>2018-01-25</td>
                                                    <td>2019-04-30</td>
                                                    <td>
                                                        <a href="edit_campaign.html"><i title="edit campaign" class="fas fa-edit" style="color:#00bcd4; font-size: 20px; cursor:pointer"></i></a>
                                                        <a href="add_coupon.html"><i title="add coupon" class="fas fa-plus" style="color:#ecdb41; font-size: 20px; cursor:pointer"></i></a>
                                                    </td>
                                                </tr><tr role="row" class="odd">
                                                    <td class="sorting_1">P_20190131_5</td>
                                                    <td><a href="detail_campaign.html">シーバメルティちいさな贅沢 各種</a></td>
                                                    <td>シーバメルティちいさな贅沢 各種</td>
                                                    <td>CLOSE</td>
                                                    <td class="ta-c"><a href="coupon.html">3</a></td>
                                                    <td>2018-01-25</td>
                                                    <td>2019-04-30</td>
                                                    <td>
                                                        <a href="edit_campaign.html"><i title="edit campaign" class="fas fa-edit" style="color:#00bcd4; font-size: 20px; cursor:pointer"></i></a>
                                                        <a href="add_coupon.html"><i title="add coupon" class="fas fa-plus" style="color:#ecdb41; font-size: 20px; cursor:pointer"></i></a>
                                                    </td>
                                                </tr><tr role="row" class="even">
                                                    <td class="sorting_1">P_20190131_5</td>
                                                    <td><a href="detail_campaign.html">シーバメルティちいさな贅沢 各種</a></td>
                                                    <td>シーバメルティちいさな贅沢 各種</td>
                                                    <td>CLOSE</td>
                                                    <td class="ta-c"><a href="coupon.html">3</a></td>
                                                    <td>2018-01-25</td>
                                                    <td>2019-04-30</td>
                                                    <td>
                                                        <a href="edit_campaign.html"><i title="edit campaign" class="fas fa-edit" style="color:#00bcd4; font-size: 20px; cursor:pointer"></i></a>
                                                        <a href="add_coupon.html"><i title="add coupon" class="fas fa-plus" style="color:#ecdb41; font-size: 20px; cursor:pointer"></i></a>
                                                    </td>
                                                </tr><tr role="row" class="odd">
                                                    <td class="sorting_1">P_20190131_5</td>
                                                    <td><a href="detail_campaign.html">シーバメルティちいさな贅沢 各種</a></td>
                                                    <td>シーバメルティちいさな贅沢 各種</td>
                                                    <td>CLOSE</td>
                                                    <td class="ta-c"><a href="coupon.html">3</a></td>
                                                    <td>2018-01-25</td>
                                                    <td>2019-04-30</td>
                                                    <td>
                                                        <a href="edit_campaign.html"><i title="edit campaign" class="fas fa-edit" style="color:#00bcd4; font-size: 20px; cursor:pointer"></i></a>
                                                        <a href="add_coupon.html"><i title="add coupon" class="fas fa-plus" style="color:#ecdb41; font-size: 20px; cursor:pointer"></i></a>
                                                    </td>
                                                </tr><tr role="row" class="even">
                                                    <td class="sorting_1">P_20190131_5</td>
                                                    <td><a href="detail_campaign.html">シーバメルティちいさな贅沢 各種</a></td>
                                                    <td>シーバメルティちいさな贅沢 各種</td>
                                                    <td>OPEN</td>
                                                    <td class="ta-c"><a href="coupon.html">3</a></td>
                                                    <td>2018-01-25</td>
                                                    <td>2019-04-30</td>
                                                    <td>
                                                        <a href="edit_campaign.html"><i title="edit campaign" class="fas fa-edit" style="color:#00bcd4; font-size: 20px; cursor:pointer"></i></a>
                                                        <a href="add_coupon.html"><i title="add coupon" class="fas fa-plus" style="color:#ecdb41; font-size: 20px; cursor:pointer"></i></a>
                                                    </td>
                                                </tr><tr role="row" class="odd">
                                                    <td class="sorting_1">P_20190131_5</td>
                                                    <td><a href="detail_campaign.html">シーバメルティちいさな贅沢 各種</a></td>
                                                    <td>シーバメルティちいさな贅沢 各種</td>
                                                    <td>OPEN</td>
                                                    <td class="ta-c"><a href="coupon.html">3</a></td>
                                                    <td>2018-01-25</td>
                                                    <td>2019-04-30</td>
                                                    <td>
                                                        <a href="edit_campaign.html"><i title="edit campaign" class="fas fa-edit" style="color:#00bcd4; font-size: 20px; cursor:pointer"></i></a>
                                                        <a href="add_coupon.html"><i title="add coupon" class="fas fa-plus" style="color:#ecdb41; font-size: 20px; cursor:pointer"></i></a>
                                                    </td>
                                                </tr><tr role="row" class="even">
                                                    <td class="sorting_1">P_20190131_5</td>
                                                    <td><a href="detail_campaign.html">シーバメルティちいさな贅沢 各種</a></td>
                                                    <td>シーバメルティちいさな贅沢 各種</td>
                                                    <td>OPEN</td>
                                                    <td class="ta-c"><a href="coupon.html">3</a></td>
                                                    <td>2018-01-25</td>
                                                    <td>2019-04-30</td>
                                                    <td>
                                                        <a href="edit_campaign.html"><i title="edit campaign" class="fas fa-edit" style="color:#00bcd4; font-size: 20px; cursor:pointer"></i></a>
                                                        <a href="add_coupon.html"><i title="add coupon" class="fas fa-plus" style="color:#ecdb41; font-size: 20px; cursor:pointer"></i></a>
                                                    </td>
                                                </tr><tr role="row" class="odd">
                                                    <td class="sorting_1">P_20190131_5</td>
                                                    <td><a href="detail_campaign.html">シーバメルティちいさな贅沢 各種</a></td>
                                                    <td>シーバメルティちいさな贅沢 各種</td>
                                                    <td>OPEN</td>
                                                    <td class="ta-c"><a href="coupon.html">3</a></td>
                                                    <td>2018-01-25</td>
                                                    <td>2019-04-30</td>
                                                    <td>
                                                        <a href="edit_campaign.html"><i title="edit campaign" class="fas fa-edit" style="color:#00bcd4; font-size: 20px; cursor:pointer"></i></a>
                                                        <a href="add_coupon.html"><i title="add coupon" class="fas fa-plus" style="color:#ecdb41; font-size: 20px; cursor:pointer"></i></a>
                                                    </td>
                                                </tr><tr role="row" class="even">
                                                    <td class="sorting_1">P_20190131_5</td>
                                                    <td><a href="detail_campaign.html">シーバメルティちいさな贅沢 各種</a></td>
                                                    <td>シーバメルティちいさな贅沢 各種</td>
                                                    <td>OPEN</td>
                                                    <td class="ta-c"><a href="coupon.html">3</a></td>
                                                    <td>2018-01-25</td>
                                                    <td>2019-04-30</td>
                                                    <td>
                                                        <a href="edit_campaign.html"><i title="edit campaign" class="fas fa-edit" style="color:#00bcd4; font-size: 20px; cursor:pointer"></i></a>
                                                        <a href="add_coupon.html"><i title="add coupon" class="fas fa-plus" style="color:#ecdb41; font-size: 20px; cursor:pointer"></i></a>
                                                    </td>
                                                </tr></tbody>
                                        </table><div class="dataTables_info" id="dataTable_info" role="status" aria-live="polite">Showing 1 to 10 of 17 entries</div><div class="dataTables_paginate paging_simple_numbers" id="dataTable_paginate"><a class="paginate_button previous disabled" aria-controls="dataTable" data-dt-idx="0" tabindex="0" id="dataTable_previous">Previous</a><span><a class="paginate_button current" aria-controls="dataTable" data-dt-idx="1" tabindex="0">1</a><a class="paginate_button " aria-controls="dataTable" data-dt-idx="2" tabindex="0">2</a></span><a class="paginate_button next" aria-controls="dataTable" data-dt-idx="3" tabindex="0" id="dataTable_next">Next</a></div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
    </div>
</template>
