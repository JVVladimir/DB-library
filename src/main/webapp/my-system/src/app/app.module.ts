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
import { AddRowWindowComponent } from './add-row-window/add-row-window.component';
import {DialogOverviewExampleDialog, EditRowWindowComponent} from './edit-row-window/edit-row-window.component';
import {DeleteRowWindowComponent } from './delete-row-window/delete-row-window.component';
import {TaskService} from "./services/TaskService";
import {LoginAndRegistrate} from "./services/LoginAndRegistrate";
import {DemoMaterialModule} from "./material-module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatNativeDateModule} from "@angular/material";
import {TableService} from "./services/TableService";
import {ShowWindowComponent} from "./show-window/show-window.component";


const appRoutes: Routes = [
  { path: '', component:  WindowHomeComponentComponent },
  { path: 'main', component: MainWindowComponent },
  { path: 'show', component: ShowWindowComponent },
  { path: 'add', component: AddRowWindowComponent },
  { path: 'delete', component:  DeleteRowWindowComponent },
  { path: 'edit', component: EditRowWindowComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    WindowHomeComponentComponent,
    MainWindowComponent,
    ShowWindowComponent,
    AddRowWindowComponent,
    EditRowWindowComponent,
    DeleteRowWindowComponent,
    DialogOverviewExampleDialog
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
  entryComponents: [EditRowWindowComponent, DialogOverviewExampleDialog],
  providers: [LoginAndRegistrate, TaskService, TableService],
  bootstrap: [AppComponent]
})
export class AppModule {


}
