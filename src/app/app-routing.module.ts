import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingComponent } from './routing/routing.component';
import { AboutComponent } from './routing/about/about.component';
import { ContactComponent } from './routing/contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentsDynamicRoutingComponent } from './students-dynamic-routing/students-dynamic-routing.component';
import { ProductsComponent } from './products/products.component';
import { TShirtsComponent } from './Products/t-shirts/t-shirts.component';
import { PantsComponent } from './Products/pants/pants.component';
import { ProductDetailsComponent } from './Products/product-details/product-details.component';

const routes: Routes = [
  { path: "", redirectTo: "Home", pathMatch: "full" },
  { path: "Home", component: RoutingComponent },
  { path: "about", component: AboutComponent },
  { path: "Contact", component: ContactComponent },
  {
    path: "Products",
    component: ProductsComponent,
    children: [
      { path: "Pants", component: PantsComponent },
      { path: "Tshirts", component: TShirtsComponent }
    ]
  },
  {
    path: "ProductDetails", // Static route for product details
    component: ProductDetailsComponent,
    outlet: "productDetails" // Specify the named outlet
  },
  { path: "**", component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
