<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
use DateTime;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'regular_price',
        'start_bid',
		'image',
        'bid_end_date'
    ];

    public function users(){
      return $this->belongsToMany(Users::class, "product_user", "product_id", "user_id");
    }

    public function bids(){
      return $this->hasMany(ProductUser::class);
    }
	
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
