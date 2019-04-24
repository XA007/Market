import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppsComponent } from './layouts/apps/apps.component';
import { BtnLinksComponent } from './layouts/btn-links/btn-links.component';
import { ItemComponent } from './layouts/item/item.component';
import { ProductsComponent } from './apps/products/products.component';
import { NavBarComponent } from './layouts/nav-bar/nav-bar.component';
import { AddComponent } from './layouts/add/add.component';
import { ProductComponent } from './apps/product/product.component';
import { ButtonComponent } from './layouts/button/button.component';
import { PageTitleComponent } from './layouts/page-title/page-title.component';
import { BottomNavBarComponent } from './layouts/bottom-nav-bar/bottom-nav-bar.component';
import { UserComponent } from './layouts/user/user.component';
import { SpinnerComponent } from './layouts/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppsComponent,
    BtnLinksComponent,
    ItemComponent,
    ProductsComponent,
    NavBarComponent,
    AddComponent,
    ProductComponent,
    ButtonComponent,
    PageTitleComponent,
    BottomNavBarComponent,
    UserComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
