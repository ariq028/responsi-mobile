import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-buku-tambah',
  templateUrl: './buku-tambah.page.html',
  styleUrls: ['./buku-tambah.page.scss'],
})
export class BukuTambahPage implements OnInit {
  id: any;
  nama_buku: any;
  keterangan: any;
  constructor(private router: Router, public _apiService: ApiService,) { }
  ngOnInit() {
  }
  addBuku() {
  let data = {
  nama_buku: this.nama_buku,
  keterangan: this.keterangan,
  }
  this._apiService.tambah(data, '/tambahBuku.php')
  .subscribe({
  next: (hasil: any) => {
  console.log(hasil);
  this.id = '';
  this.nama_buku = '';
  this.keterangan = '';
  this._apiService.notif('berhasil input buku');
  this.router.navigateByUrl('/buku');
  },
  error: (err: any) => {
  this._apiService.notif('gagal input buku');
  }
  })
  }
 }
