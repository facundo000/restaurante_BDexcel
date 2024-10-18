import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  menus: any[] = []

  constructor(private sheetService: OrderDetailsService) { }
  ngOnInit(): void {
    // Details of food
      // this.sheetService.getMenu().subscribe((response: any) => {
      //   this.menus = response;
      // })
      this.sheetService.getMenus().subscribe(data => {
        this.menus = data;
      });
  }
}
