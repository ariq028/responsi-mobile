<?php
require 'koneksi.php';
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$pesan = [];
$id = trim($data['id']);
$nama_buku = trim($data['nama_buku']);
$keterangan = trim($data['keterangan']);
//jika nama buku dan keterangan tidak kosong
if ($nama_buku != '' and $keterangan != '') {
 $query = mysqli_query($koneksi, "update buku set nama_buku='$nama_buku',keterangan='$keterangan' where id='$id'");
 $pesan['status'] = 'berhasil';
} else {
 $pesan['status'] = 'gagal';
}
echo json_encode($pesan);
echo mysqli_error($koneksi);
?>