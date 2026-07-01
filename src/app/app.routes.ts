import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Home } from './home/home';
import { Contact } from './pages/contact/contact';
import { Register } from './register/register';
import { Products } from './products/products';

export const routes: Routes = [
    {
        path: 'about',
        component: About,
    },
    {
        path: 'home',
        component: Home,
    },
    {
        path: 'contact',
        component: Contact,
    },
    {
        path: 'register',
        component: Register,
    },
    {
        path: 'product',
        component: Products,
    }
];
