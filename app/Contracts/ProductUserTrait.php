<?php

namespace App\Contracts;
use Illuminate\Support\Facades\DB;
use App\Models\Product;


trait ProductUserTrait
{
    public function getAutoBid($newbid){
        return DB::select(DB::raw("SELECT * FROM product_user
                  WHERE bid_amount IN (
                      Select Max(bid_amount) from product_user WHERE status = 1
                      and product_id = {$newbid->product_id} Group BY user_id)
                      and product_id = {$newbid->product_id} and id != {$newbid->id}"));
    }

    public function getMaxBidByProduct($product_id){
      $max = self::where('product_id', $product_id)
                  ->max('bid_amount');
        if(!$max){
            $max = Product::Where('id', $product_id)
                          ->first()->start_bid;
        }


        return $max;
    }

    public function getSumMaxBidByUser($user_id){
      return DB::select(DB::raw("SELECT SUM(count) as count FROM
                  (SELECT MAX(bid_amount) AS count
                  FROM product_user
                  Where user_id = 3
                  Group BY product_id) AS t"))[0]->count;
    }
}
