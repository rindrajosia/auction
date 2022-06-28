<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         DB::table("users")->insert([
		 [
		  "name" => 'admin1',
          "email" => 'admin1@gmail.com',
          "role_id" => 1,
          "password" => Hash::make("admin1"),
		 ],
         [
		  "name" => 'admin2',
          "email" => 'admin2@gmail.com',
          "role_id" => 1,
          "password" => Hash::make("admin2"),
		 ],
		 [
		  "name" => 'user1',
          "email" => 'user1@gmail.com',
          "role_id" => 2,
          "password" => Hash::make("user1"),
		 ],
		 [
		  "name" => 'user2',
          "email" => 'user2@gmail.com',
          "role_id" => 2,
          "password" => Hash::make("user2"),
		 ]
		  ]);
    }
}
