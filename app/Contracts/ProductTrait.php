<?php

namespace App\Contracts;
use Carbon\Carbon;
use DateTime;

trait ProductTrait
{
    public function checkDate ($id) {
      $prod = self::where('id', $id)->first()->bid_end_date;
      $bid_end_date = new DateTime($prod);
      $bid_end_date = $bid_end_date->format('m/d/Y H:i:s');

      $bid_end_date = Carbon::createFromFormat('m/d/Y H:i:s', $bid_end_date);

      $dateNow = new DateTime();
      $dateNow = $dateNow->format('m/d/Y H:i:s');

      $dateNow = Carbon::createFromFormat('m/d/Y H:i:s', $dateNow);

      return $bid_end_date->gt($dateNow);
    }
}
