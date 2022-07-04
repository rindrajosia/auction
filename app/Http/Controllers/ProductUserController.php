<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProductUser;
use App\Models\Fund;
use App\Models\Product;
use \App\Http\Requests\ProducUserRequest;
use DateTime;
use Carbon\Carbon;

class ProductUserController extends Controller
{
    public function index()
    {
      $bid = ProductUser::All();
      return response($bid, 200);
    }

    public function create(ProducUserRequest $request)
    {
        $validatedData = $request->validated();
    		if(!Product::checkDate($request->product_id)){
    			return response([
    				  "message" => "Bid date expired"
    				], 400);
    		}
        if(!$this->checkIfUpBid($request->product_id, $request->bid_amount) && $request->status != 1){
            return response([
              "message" => "Bid less than the Max Bid"
            ], 400);
        }
        $fund = Fund::fund($request->user_id);
        $bid_amount = $request->bid_amount;
        if($request->status == 1){
            $bid_amount = ProductUser::getMaxBidByProduct($request->product_id) + 1;
            if(!Fund::checkFund($fund, $request->user_id)){
                return response([
                  "message" => "No fund"
                ], 400);
            }
            if(!Fund::ifFundEnough($fund, $bid_amount)){
              return response([
                "message" => "Fund not enough"
              ], 400);
            }

        }
        $newbid = $this->save($request, $bid_amount);
        $bids = ProductUser::getAutoBid($newbid);

        if($bids){
            $this->upDateAutoBid($bids, $newbid);
        }
        return response([
          "message" => "Bid created"
        ], 200);
    }

    public function show($product_id)
    {
        $bids = ProductUser::With('bidder')
						->Where("product_id", $product_id)
						->get();
        if(count($bids) == 0) {
          return response(["message" => "No Bid for that product"], 404);
        }
        return response($bids, 200);
    }

    public function userBid($product_id, $user_id)
    {
        $bids = ProductUser::Where("product_id", $product_id)
                      ->Where("user_id", $user_id)
                      ->Where("status", 1)
                      ->get();
        if(!$bids) {
          return response(["message" => "No Bid for that product"], 404);
        }
        return response($bids, 200);
    }

    private function checkIfUpBid($product_id, $bid_amount){
      if(ProductUser::getMaxBidByProduct($product_id) >= $bid_amount){
          return false;
      }
      return true;
    }

    private function upDateAutoBid($bids, $newbid){
      foreach ($bids as $bid) {
          $fund = Fund::fund($bid->user_id);
          if(!Fund::checkFund($fund, $bid->user_id)){
            continue;
          }

          if(!Fund::checkAmount($fund)){
            continue;
          }

          Fund::checkPercentage($fund, $newbid->bid_amount + 1);

          if(!Fund::ifFundEnough($fund, $newbid->bid_amount + 1)){
            continue;
          }


          $this->save($bid, $newbid->bid_amount + 1);
      }
    }

    private function save($req, $amount){
      return ProductUser::create([
        "user_id" => $req->user_id,
        "product_id" => $req->product_id,
        "bid_amount" => $amount,
        "status" => $req->status
      ]);
    }
}
