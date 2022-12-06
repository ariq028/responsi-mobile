<?php
require 'koneksi.php';
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$pesan = [];
$nama_buku = trim($data['nama_buku']);
$keterangan = trim($data['keterangan']);
//jika nama buku dan keterangan tidak kosong
if ($nama_buku != '' and $keterangan != '') {
 $query = mysqli_query($koneksi, "insert into buku(nama_buku,keterangan)
values('$nama_buku','$keterangan')");
 $pesan['status'] = 'berhasil';
} else {
 $pesan['status'] = 'gagal';
}
echo json_encode($pesan);
echo mysqli_error($koneksi);
?>