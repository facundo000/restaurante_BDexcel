import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, tap } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {
// private sheetsUrl = 'https://api.sheetbest.com/sheets/ae5e5ec1-40aa-49b5-8747-6c684ece4738';
private menuCache: any[] | null = null;  // Variable para almacenar los datos

constructor(private http: HttpClient, private firestore: AngularFirestore) {}

// getMenu(): Observable<any> {
//   // Si los datos ya están en cache, los devolvemos directamente
//   if (this.menuCache) {
//     return new Observable((observer) => {
//       observer.next(this.menuCache);
//       observer.complete();
//     });
//   } else {
//     // Si no están en cache, hacemos la petición y guardamos los datos en cache
//     return this.http.get(this.sheetsUrl).pipe(
//       tap((response: any) => {
//         this.menuCache = response;  // Guardamos los datos en cache
//       })
//     );
//   }
// }
  getMenus(): Observable<any[]> {
    return this.firestore.collection('menus').valueChanges(); // Obtener los menús desde Firestore
}
}
