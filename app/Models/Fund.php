<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Events\MyEvent;
use App\Contracts\FundTrait;

class Fund extends Model
{
    use HasFactory, FundTrait;

    protected $fillable = [
        'user_id',
        'amount_start',
        'amount_spend',
        'percentage',
    ];


    public function user()
    {
    	return $this->belongsTo(User::class);
    }

}
