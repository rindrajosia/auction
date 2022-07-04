<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use App\Contracts\ProductUserTrait;


class ProductUser extends Model
{
    use HasFactory, ProductUserTrait;
    protected $table = "product_user";

    protected $fillable = [
        'user_id',
        'product_id',
        'bid_amount',
        'status'
    ];

    public function bidder(){
      return $this->belongsTo(User::class, "user_id", "id");
    }

    public function auction(){
      return $this->belongsTo(Product::class, "product_id", "id");
    }

}
