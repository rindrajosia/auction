<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductUserController;
use App\Http\Controllers\FundController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/', [AuthController::class, 'connect']);
Route::post('register', [AuthController::class, 'register'])->middleware('auth:sanctum');
Route::post('login', [AuthController::class, 'login']);


Route::get('product', [ProductController::class, 'index']);
Route::get('product/{id}', [ProductController::class, 'show']);
Route::get('product/{title}/{description}', [ProductController::class, 'search']);
Route::put('product/{id}', [ProductController::class, 'update']);
Route::delete('product/{id}', [ProductController::class, 'destroy']);
Route::post('product', [ProductController::class, 'create']);



Route::get('bid', [ProductUserController::class, 'index']);
Route::get('bid/{product_id}', [ProductUserController::class, 'show']);
Route::post('bid', [ProductUserController::class, 'create']);

Route::get('fund', [FundController::class, 'index']);
Route::get('fund/{id}', [FundController::class, 'show']);
Route::post('fund', [FundController::class, 'create']);

Route::group([
  "middleware" => 'auth:sanctum'
], function(){
  Route::post('logout', [AuthController::class, 'logout']);
});
