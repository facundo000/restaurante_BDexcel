import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
showFirstImage: boolean = true;

toggleImage() {
  this.showFirstImage = !this.showFirstImage;
}

  constructor() { }

  ngOnInit(): void {
  }

}
