import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menus: any[] = []
menu: any;

  constructor(private sheetService:OrderDetailsService) { }

  ngOnInit(): void {
    // this.sheetService.getMenu().subscribe((response: any) => {
    //   this.menus = response;
    // })
    this.sheetService.getMenus().subscribe(data => {
      this.menus = data;
    });
  }  
}
