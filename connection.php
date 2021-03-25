<?php

$dbhost = "sql312.epizy.com";
$dbuser = "epiz_28218663";
$dbpass = "TWJJNuo9yot";
$dbname = "epiz_28218663_jon";

if(!$con = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname))
{

	die("failed to connect!");
}
