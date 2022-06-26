<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use \App\Http\Requests\ProductRequest;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::All();
        return response($products, 200);
    }

    public function create(ProductRequest $request)
    {
          $validatedData = $request->validated();
          Product::create($validatedData);

          return response([
            "message" => "Product created"
          ], 200);
    }

    public function show($id)
    {
        $product = Product::find($id);
        if(!$product) {
          return response(["message" => "No corresponding product"], 404);
        }
        return response($product, 200);
    }

    public function update(Request $request, $id)
    {
      $product = Product::where('id', '=', $id)->first();

      if(!$product) {
        return response(["message" => "No corresponding product"], 404);
      }
      $product->update($request->all());
      return response($product, 200);
    }

    public function destroy($id)
    {
        $product=Product::find(1);
        if(!$product) {
          return response(["message" => "No corresponding product"], 404);
        }
        $product->delete();
        return response([
          "message" => "Product removed"
        ], 200);
    }

    public function search($title, $description)
    {
        $product = Product::where('title', 'like', '%'.$title.'%')
                            ->where('description', 'like', '%'.$description.'%')
                            ->first();
        if(!$product) {
           return response(["message" => "No corresponding product"], 404);
        }
        return response($product, 200);
    }
}
