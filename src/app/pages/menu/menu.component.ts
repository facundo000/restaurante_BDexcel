import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  menus: any[] = []

  constructor(private service:OrderDetailsService) { }
  foodData:any;
  ngOnInit(): void {
    // Details of food
      this.service.getMenu().subscribe((response: any) => {
        this.menus = response.data;
        console.log(this.menus);
      })
  }

  getImageUrl(menu: any): string {
    return this.service.getImg(menu);
  }

}
