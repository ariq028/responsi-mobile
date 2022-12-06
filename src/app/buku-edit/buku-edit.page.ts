import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-buku-edit',
  templateUrl: './buku-edit.page.html',
  styleUrls: ['./buku-edit.page.scss'],
})
export class BukuEditPage implements OnInit {
  id: any;
  nama_buku: any;
  keterangan: any;
  constructor(private route: ActivatedRoute, private router: Router, public _apiService: ApiService,
  ) {
  this.route.params.subscribe((param: any) => {
  this.id = param.id;
  console.log(this.id);
  this.ambilBuku(this.id);
  })
  }
  ngOnInit() {
  }
  ambilBuku(id: any) {
  this._apiService.lihat(id, '/lihatBuku.php?id=').subscribe({
  next: (hasil: any) => {
  console.log('sukses', hasil);
  let buku = hasil;
  this.nama_buku = buku.nama_buku;
  this.keterangan = buku.keterangan;
  },
  error: (error: any) => {
  this._apiService.notif('gagal ambil data');
  }
  })
  }
  editBuku() {
  let data = {
  id: this.id,
  nama_buku: this.nama_buku,
  keterangan: this.keterangan,
  }
  this._apiService.edit(data, '/editBuku.php')
  .subscribe({
  next: (hasil: any) => {
  console.log(hasil);
  this.id = '';
  this.nama_buku = '';
  this.keterangan = '';
  this._apiService.notif('berhasil edit buku');
  this.router.navigateByUrl('/buku');
  },
  error: (err: any) => {
  this._apiService.notif('gagal edit buku');
  }
  })
  }
 }
