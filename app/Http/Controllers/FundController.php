<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Fund;
use \App\Http\Requests\FundRequest;

class FundController extends Controller
{
    public function index()
    {
        $funds = Fund::All();
        return response($funds, 200);
    }

    public function create(FundRequest $request)
    {
        $validatedData = $request->validated();

          Fund::create($validatedData);

          return response([
            "message" => "Fund created"
          ], 200);
    }

    public function show($user_id)
    {
        $fund = Fund::fund($user_id);
        if(!$fund) {
          return response(["message" => "No corresponding fund"], 404);
        }
        return response($fund, 200);

    }

    public function update(Request $request, $user_id)
    {
        $fund = Fund::fund($user_id);

        if(!$fund) {
          return response(["message" => "No corresponding fund"], 404);
        }
        $fund->update($request->all());
        return response($fund, 200);
    }
}
