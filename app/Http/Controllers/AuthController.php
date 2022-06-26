<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;

class AuthController extends Controller
{
    public function connect()
    {
      return response(["message" => "Connected"], 200);
    }

    public function register(Request $request)
    {
      try{
        $this->authorize('acces-admin');
        $user = User::create([
          "name" => $request->name,
          "email" => $request->email,
          "role_id" => $request->role_id,
          "password" => Hash::make($request->password),
        ]);
        $jwt = $user->createToken('token')->plainTextToken;
        $token = cookie('jwt', $jwt, 60*24);
        return response([
          "message" => "User created",
          "token" => $jwt,
        ], 200)->withCookie($token);
      } catch(QueryException $e){
        return response(["message" => $e->errorInfo[2]], 404);
      }
    }

    public function login(Request $request)
    {
      $user = Auth::attempt($request->only(["email", "password"]));
       if(!$user){
         return response([
           "meesage" => "Email or Password incorrect",
         ], 400);
       }

       $jwt = Auth::user()->createToken('token')->plainTextToken;
       $token = cookie('jwt', $jwt, 60*24);
       return response([
         "message" => "Loged In",
         "token" => $jwt,
         ], 200)->withCookie($token);
    }

    public function logout()
    {
      $token = Cookie::forget('jwt');

       return response([
         "message" => "Loged out",
         ], 200)->withCookie($token);
    }


}
