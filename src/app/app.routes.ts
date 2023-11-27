import { Routes } from '@angular/router';
import { AccesoComponent } from './page/home/acceso/acceso.component'; 
import { CarritoComponent } from './page/carrito/carrito.component';
import { HomeComponent } from './page/home/home.component';
import { ProductosComponent } from './page/home/productos/productos.component';
export const routes: Routes = [
    {path:"acceso", component: AccesoComponent},
    {path:"carrito", component: CarritoComponent},
    {path:"", component: HomeComponent},
    {path:"productos", component: ProductosComponent}
];
