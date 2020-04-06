import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NewoCompComponent } from './newo-comp/newo-comp.component';
import { AppRoutingModule } from './/app-routing.module';
import { ListComponentComponent } from './list-component/list-component.component';
import { DefaultComponentComponent } from './default-component/default-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NewoCompComponent,
    ListComponentComponent,
    DefaultComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
