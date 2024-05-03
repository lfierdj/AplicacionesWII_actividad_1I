import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { MinMaxComponent } from './componets/min-max/min-max.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NombreComponent } from './componets/nombre/nombre.component';
import { CategoriaComponent } from './componets/categoria/categoria.component';

export const routes: Routes = [
    {path: '',redirectTo:'home',pathMatch:'full'},
    {path:"home", component:HomeComponent},
    {path:"productos", component:ProductosComponent},
    {path:"contactos", component:ContactosComponent},
    {path:"detalles", component:DetallesComponent},
    {path:'juegos-detalles/:idJuegos', component: DetallesComponent},
    {path:"productos/mnmx", component:MinMaxComponent},
    {path:"productos/buscar", component:NombreComponent},
    {path:"productos/categoria", component:CategoriaComponent},
    {path: 'home/productos',redirectTo:'productos',pathMatch:'full'},
    {path: 'contactos/productos',redirectTo:'productos',pathMatch:'full'},
    {path: '**', component: NotFoundComponent}

];
