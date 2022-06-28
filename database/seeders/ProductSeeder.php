<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("products")->insert([
          [
		  'title' => 'Airpods Wireless Bluetooth Headphones',
		  'description' => 'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
		  'regular_price' => 89.99,
		  'start_bid' => 10,
		  'image' => 'https://res.cloudinary.com/rindrajosia/image/upload/v1656232116/image_2_ajznkw.jpg',
		  'bid_end_date' => '2022-10-27 00:00:00'
		  ],
          [
		  'title' => 'iPhone 11 Pro 256GB Memory',
		  'description' => 'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
		  'regular_price' => 599.99,
		  'start_bid' => 200,
		  'image' => 'https://res.cloudinary.com/rindrajosia/image/upload/v1656232115/image_3_dp8gsu.jpg',
		  'bid_end_date' => '2022-11-27 00:00:00'
		  ],
		  [
		  'title' => 'Cannon EOS 80D DSLR Camera',
		  'description' => 'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
		  'regular_price' => 929.99,
		  'start_bid' => 300,
		  'image' => 'https://res.cloudinary.com/rindrajosia/image/upload/v1656232116/image_4_o5jgod.jpg',
		  'bid_end_date' => '2023-01-01 00:00:00'
		  ],
		  [
		  'title' => 'Sony Playstation 4 Pro White Version',
		  'description' => 'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
		  'regular_price' => 399.99,
		  'start_bid' => 150,
		  'image' => 'https://res.cloudinary.com/rindrajosia/image/upload/v1656232115/image_1_ma8t92.jpg',
		  'bid_end_date' => '2022-09-17 00:00:00'
		  ],
		  [
		  'title' => 'Logitech G-Series Gaming Mouse',
		  'description' => 'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
		  'regular_price' => 49.99,
		  'start_bid' => 15,
		  'image' => 'https://res.cloudinary.com/rindrajosia/image/upload/v1656232801/t%C3%A9l%C3%A9charger_4_rr5sit.jpg',
		  'bid_end_date' => '2022-08-17 00:00:00'
		  ],
		  [
		  'title' => 'Amazon Echo Dot 3rd Generation',
		  'description' => 'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
		  'regular_price' => 29.99,
		  'start_bid' => 5,
		  'image' => 'https://res.cloudinary.com/rindrajosia/image/upload/v1656232801/t%C3%A9l%C3%A9charger_6_aaa5cp.jpg',
		  'bid_end_date' => '2022-08-27 00:00:00'
		  ],
		  [
		  'title' => 'Redmi note 4 Smartphone',
		  'description' => 'Get a better handle on your games speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
		  'regular_price' => 400,
		  'start_bid' => 200,
		  'image' => 'https://res.cloudinary.com/rindrajosia/image/upload/v1656232801/t%C3%A9l%C3%A9charger_7_w5ctbd.jpg',
		  'bid_end_date' => '2023-02-07 00:00:00'
		  ],
		  [
		  'title' => 'Samsung galaxy note 7',
		  'description' => 'Characterized by versatile imaging specs, the Canon EOS 80D further AAC audio offers immersive listening',
		  'regular_price' => 800,
		  'start_bid' => 500,
		  'image' => 'https://res.cloudinary.com/rindrajosia/image/upload/v1656232801/t%C3%A9l%C3%A9charger_1_rkd7yb.jpg',
		  'bid_end_date' => '2023-01-07 00:00:00'
		  ],
		  [
		  'title' => 'Philips smart tv',
		  'description' => 'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
		  'regular_price' => 390,
		  'start_bid' => 10,
		  'image' => 'https://res.cloudinary.com/rindrajosia/image/upload/v1656232801/t%C3%A9l%C3%A9charger_t0arpq.jpg',
		  'bid_end_date' => '2023-06-30 00:00:00'
		  ],
		  [
		  'title' => 'XIAOMI note 10',
		  'description' => 'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
		  'regular_price' => 1000,
		  'start_bid' => 500,
		  'image' => 'https://res.cloudinary.com/rindrajosia/image/upload/v1656232116/image_2_ajznkw.jpg',
		  'bid_end_date' => '2022-12-30 00:00:00'
		  ],
		  [
		  'title' => 'AKOS smartphone',
		  'description' => 'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
		  'regular_price' => 590,
		  'start_bid' => 291,
		  'image' => 'https://res.cloudinary.com/rindrajosia/image/upload/v1656232115/image_3_dp8gsu.jpg',
		  'bid_end_date' => '2022-11-30 00:00:00'
		  ],
        ]);
    }
}
