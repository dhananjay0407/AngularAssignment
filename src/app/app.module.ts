import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ShopItemsComponent } from './component/shop-items/shop-items.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { ItemDetailsComponent } from './component/item-details/item-details.component';
import { HiglightDirective } from './component/directive/higlight.directive';
import { SampleDirective } from './component/directive/sample.directive';
import { SamplePipe } from './component/pipes/sample.pipe';
import { RouterModule } from '@angular/router';
import { CalDiscountPipe } from './component/pipes/cal-discount.pipe';


 
 
 



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShopItemsComponent,
    SidebarComponent,
    ItemDetailsComponent,
    HiglightDirective,
    SampleDirective,
    SamplePipe,
    CalDiscountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'items', component: ShopItemsComponent },
      { path: 'item-details', component: ItemDetailsComponent },
      { path: 'item-details/:id', component: ItemDetailsComponent },
      { path: '', redirectTo: 'items', pathMatch: 'full' }

    ]),
     
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
