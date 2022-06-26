<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'regular_price',
        'start_bid',
        'bid_end_date'
    ];

    public function users(){
      return $this->belongsToMany(Users::class, "product_user", "product_id", "user_id");
    }

    public function bids(){
      return $this->hasMany(ProductUser::class);
    }
}
