import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menus: any[] = []

  constructor(private service:OrderDetailsService) { }

  ngOnInit(): void {
    this.service.getMenu().subscribe((response: any) => {
      this.menus = response.data;
    })
  }

  getImageUrl(menu: any): string {
    return this.service.getImg(menu);
  }

}
