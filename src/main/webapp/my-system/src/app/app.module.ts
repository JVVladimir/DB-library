import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WindowHomeComponentComponent } from './window-home-component/window-home-component.component';
import {RouterModule, Routes} from "@angular/router";
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';
import { MainWindowComponent } from './main-window/main-window.component';
import {LoginAndRegistrate} from "./services/LoginAndRegistrate";
import {DemoMaterialModule} from "./material-module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatNativeDateModule} from "@angular/material";
import {MainLibraryService} from "./services/ManLibraryService";
import {MainBookWindowComponent} from "./main-book-window/main-book-window.component";
import {MainWorkWindowComponent} from "./main-work-window/main-work-window.component";
import {MainAuthorWindowComponent} from "./main-author-window/main-author-window.component";
import {MainPublisherWindowComponent} from "./main-publisher-window/main-publisher-window.component";
import {MainTypeWindowComponent} from "./main-type-window/main-type-window.component";
import {MainGenreWindowComponent} from "./main-genre-window/main-genre-window.component";
import {MainReaderWindowComponent} from "./main-reader-window/main-reader-window.component";
import {MainOrdersWindowComponent} from "./main-orders-window/main-orders-window.component";
import {MainAccountingWindowComponent} from "./main-accounting-window/main-accounting-window.component";


const appRoutes: Routes = [
  { path: '', component:  WindowHomeComponentComponent },
  { path: 'mainLibrary', component: MainWindowComponent },
  { path: 'mainBookLibrary', component: MainBookWindowComponent },
  { path: 'mainWorkLibrary', component: MainWorkWindowComponent},
  { path: 'mainAuthorLibrary', component: MainAuthorWindowComponent},
  { path: 'mainPublisherLibrary', component: MainPublisherWindowComponent},
  { path: 'mainTypeLibrary', component: MainTypeWindowComponent},
  { path: 'mainGenreLibrary', component: MainGenreWindowComponent},
  { path: 'mainReaderLibrary', component: MainReaderWindowComponent},
  { path: 'mainOrdersLibrary', component: MainOrdersWindowComponent},
  { path: 'mainAccountingLibrary', component: MainAccountingWindowComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    WindowHomeComponentComponent,
    MainWindowComponent,
    MainBookWindowComponent,
    MainWorkWindowComponent,
    MainAuthorWindowComponent,
    MainPublisherWindowComponent,
    MainTypeWindowComponent,
    MainGenreWindowComponent,
    MainReaderWindowComponent,
    MainOrdersWindowComponent,
    MainAccountingWindowComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    DemoMaterialModule,
    BrowserModule, FormsModule,
    AppRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
  ],
  entryComponents: [],
  providers: [LoginAndRegistrate, MainLibraryService],
  bootstrap: [AppComponent]
})
export class AppModule {


}
