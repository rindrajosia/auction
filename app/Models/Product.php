<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Contracts\ProductTrait;
use Carbon\Carbon;
use DateTime;

class Product extends Model
{
    use HasFactory, ProductTrait;

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
}
