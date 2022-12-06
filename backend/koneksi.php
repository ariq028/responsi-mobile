<?php
//header untuk menangani cors policy
header('Access-Control-Allow-Origin: *');
header('Allow-Control-Access-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, X-Requested-With, Authorization");
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json; charset=utf-8');
//membuat variable koneksi ke mysql
$koneksi = mysqli_connect('localhost','root','ariqdaffa','belajarcrud') or die ('koneksi gagal');
?>