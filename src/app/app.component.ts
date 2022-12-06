import { Component } from '@angular/core';
 @Component({
 selector: 'app-root',
 templateUrl: 'app.component.html',
 styleUrls: ['app.component.scss'],
 })
 export class AppComponent {
 public appPages = [
 { title: 'Buku', url: '/buku', icon: 'book' },
 { title: 'Logout', url: '/home', icon: 'exit' },
 ];
 }