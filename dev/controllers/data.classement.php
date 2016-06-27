<?php

$classement['colors'] = array(
	[ "color" =>"#3781C1", "u" => -21.54, "v" => -38.39 ],
	[ "color" =>"#3583B4", "u" => -23.26, "v" => -25.56 ],
	[ "color" =>"#3B84A7", "u" => -22.41, "v" => -15.53 ],
	[ "color" =>"#39859C", "u" => -23.11, "v" =>  -7.45 ],
	[ "color" =>"#3B8690", "u" => -22.45, "v" =>    1.1 ],
	[ "color" =>"#3F8782", "u" => -21.76, "v" =>   7.35 ],
	[ "color" =>"#588473", "u" => -14.08, "v" =>  18.74 ],
	[ "color" =>"#6C8164", "u" =>  -2.72, "v" =>  28.13 ],
	[ "color" =>"#837B5D", "u" =>  14.84, "v" =>  31.13 ],
	[ "color" =>"#907660", "u" =>  23.87, "v" =>  26.35 ],
	[ "color" =>"#9E6E6F", "u" =>  31.82, "v" =>  14.76 ],
	[ "color" =>"#9F6D7C", "u" =>  31.42, "v" =>   6.99 ],
	[ "color" =>"#9C6D89", "u" =>  29.79, "v" =>    0.1 ],
	[ "color" =>"#927099", "u" =>  26.64, "v" =>  -9.38 ],
	[ "color" =>"#8F6FA4", "u" =>  22.92, "v" => -18.65 ],
	[ "color" =>"#8073B2", "u" =>   11.2, "v" => -24.61 ]
);

$classement['normal'] = array(
	"scheme" => [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
);

$classement['protan'] = array(
	"from" => [ "x" => -4,    "y" =>  35 ],
	"to" => [  "x" => -13,   "y"  => -35 ],
	"scheme" => [ 0, 15, 14, 1, 2, 13, 12, 3, 4, 11, 10, 5, 6, 9, 8, 7]
);

$classement['deutan'] = array(
	"from" => [ "x" => -15.77, "y" =>  35 ],
	"to" => [ "x" => 0.4,   "y" => -35 ],
	"scheme" => [ 0, 1, 15, 2, 3, 14, 13, 4, 12, 5, 6, 11, 10, 7, 9, 8]
);

$classement['tritan'] = array(
	"from" => [ "x" =>-24.61, "y" =>  11.2 ],
	"to" => [ "x" => 35,    "y" =>   4 ],
	"scheme" => [ 0, 1, 2, 3, 4, 5, 6, 7, 15, 8, 14, 9, 13, 10, 11, 12]
);

$classement['presets'] = array(
	"tritanCrossing" => [0, 1, 2, 3, 4, 5, 6, 7, 15, 14, 13, 12, 11, 10, 9, 8],
	"deuteranomal" => [0, 1, 14, 2, 3, 4, 5, 6, 7, 11, 8, 9, 10, 12, 13, 15]
);