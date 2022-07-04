<?php

namespace App\Contracts;
use App\Events\MyEvent;
use App\Models\ProductUser;

trait FundTrait
{
    public function reduceFund($fund, $amount_spend = 0)
    {
        if($amount_spend == 0){
          $amount_spend = $fund->amount_spend + 1;
        }
        $fund->update(["amount_spend" => $amount_spend]);
    }

    public function checkAmount($fund){
        if($fund->amount_spend >= $fund->amount_start){
            $message['notification'] = "Fund not enough";
            $message['amount-spend'] = $fund->amount_spend;
            event(new MyEvent($message, $fund->user_id));
            return false;
        }
        return true;
    }

    public function checkFund($fund, $user_id){
        if(!$fund){
            $message['notification'] = "No fund";
            event(new MyEvent($message, $user_id));
            return false;
        }
        return true;
    }



    public function fund($user_id)
    {
        return self::where('user_id', '=', $user_id)->first();
    }

    public function checkPercentage($fund, $bid_amount)
    {
        $perc = ($fund->amount_start * $fund->percentage) / 100;
        if($fund->amount_spend + $bid_amount >= $perc) {
            $message['notification'] = "Bid Percentage alert notification";
            $message['amount-spend'] = $fund->amount_spend + $bid_amount;
            event(new MyEvent($message, $fund->user_id));
        }
    }

    public function ifFundEnough($fund, $bid_amount)
    {
        if($bid_amount > $fund->amount_start - $fund->amount_spend) {
            $message['notification'] = "Fund not enough";
            event(new MyEvent($message, $fund->user_id));
            return false;
        }
        $bid_amount = ProductUser::getSumMaxBidByUser($fund->user_id) + $bid_amount;
        self::reduceFund($fund, $bid_amount);
        return true;
    }
}
