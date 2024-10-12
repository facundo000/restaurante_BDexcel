import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor(private http: HttpClient) { }

  getMenu() {
    return this.http.get(`${environment.apiUrl}/api/menus?populate=*`);

  }

  getImg(menu: any) {
    // Verifica que 'menu.attributes.img.formats.large.url' exista antes de intentar acceder a ella
    const utlImageLg = menu?.attributes?.img?.data?.attributes?.formats?.large?.url;
    const utlImageSm = menu?.attributes?.img?.data?.attributes?.formats?.small?.url;
    if (utlImageLg || utlImageSm) {
      const imageUrl = utlImageLg || utlImageSm;
      return environment.apiUrl + imageUrl;
  }
    // si no está definida la imagen en el back
    return 'https://redseadive.co.uk/wp-content/uploads/2019/08/no-image-available.jpg';
  }
    
}
