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
import {MainBooksInLibWindowComponent} from "./main-books-in-lib-window/main-books-in-lib-window.component";
import {MainAuthorsOfBooksWindowComponent} from "./main-authors-of-books-window/main-authors-of-books-window.component";
import {MainAuthorsOfWorksWindowComponent} from "./main-authors-of-works-window/main-authors-of-works-window.component";
import {MainPublishedWorksWindowComponent} from "./main-published-works-window/main-published-works-window.component";
import {LibraryWindowComponent} from "./library/main-window/library-window.component";
import {LibraryWorkWindowComponent} from "./library/library-work-window/library-work-window.component";
import {LibraryTypeWindowComponent} from "./library/library-type-window/library-type-window.component";
import {LibraryReaderWindowComponent} from "./library/library-reader-window/library-reader-window.component";
import {LibraryAccountingWindowComponent} from "./library/library-accounting-window/library-accounting-window.component";
import {LibraryAuthorWindowComponent} from "./library/library-author-window/library-author-window.component";
import {LibraryAuthorsOfBooksWindowComponent} from "./library/library-authors-of-books-window/library-authors-of-books-window.component";
import {LibraryAuthorsOfWorksWindowComponent} from "./library/library-authors-of-works-window/library-authors-of-works-window.component";
import {LibraryBookWindowComponent} from "./library/library-book-window/library-book-window.component";
import {LibraryBooksInLibWindowComponent} from "./library/library-books-in-lib-window/library-books-in-lib-window.component";
import {LibraryGenreWindowComponent} from "./library/library-genre-window/library-genre-window.component";
import {LibraryOrdersWindowComponent} from "./library/library-orders-window/library-orders-window.component";
import {LibraryPublishedWorksWindowComponent} from "./library/library-published-works-window/library-published-works-window.component";
import {LibraryPublisherWindowComponent} from "./library/library-publisher-window/library-publisher-window.component";
import {LibraryService} from "./services/LibraryService";
import {DirectorWindowComponent} from "./director/main-window/director-window.component";
import {DirectorWorkWindowComponent} from "./director/director-work-window/director-work-window.component";
import {DirectorTypeWindowComponent} from "./director/director-type-window/director-type-window.component";
import {DirectorReaderWindowComponent} from "./director/director-reader-window/director-reader-window.component";
import {DirectorPublisherWindowComponent} from "./director/director-publisher-window/director-publisher-window.component";
import {DirectorPublishedWorksWindowComponent} from "./director/director-published-works-window/director-published-works-window.component";
import {DirectorOrdersWindowComponent} from "./director/director-orders-window/director-orders-window.component";
import {DirectorGenreWindowComponent} from "./director/director-genre-window/director-genre-window.component";
import {DirectorBooksInLibWindowComponent} from "./director/director-books-in-lib-window/director-books-in-lib-window.component";
import {DirectorBookWindowComponent} from "./director/director-book-window/director-book-window.component";
import {DirectorAuthorsOfWorksWindowComponent} from "./director/director-authors-of-works-window/director-authors-of-works-window.component";
import {DirectorAuthorsOfBooksWindowComponent} from "./director/director-authors-of-books-window/director-authors-of-books-window.component";
import {DirectorAuthorWindowComponent} from "./director/director-author-window/director-author-window.component";
import {DirectorAccountingWindowComponent} from "./director/director-accounting-window/director-accounting-window.component";
import {TransporterOrdersWindowComponent} from "./transporter/transporter-orders-window/transporter-orders-window.component";



const appRoutes: Routes = [
  { path: '', component:  WindowHomeComponentComponent },
  { path: 'library', component:  LibraryWindowComponent },
  { path: 'director', component: DirectorWindowComponent},
  { path: 'mainLibrary', component: MainWindowComponent },
  { path: 'libraryWork', component: LibraryWorkWindowComponent },
  { path: 'libraryType', component:  LibraryTypeWindowComponent},
  { path: 'libraryReader', component:  LibraryReaderWindowComponent },
  { path: 'libraryAuthor', component: LibraryAuthorWindowComponent},
  { path: 'libraryAuthorsOfBooks', component: LibraryAuthorsOfBooksWindowComponent},
  { path: 'mainBookLibrary', component: MainBookWindowComponent },
  { path: 'mainWorkLibrary', component: MainWorkWindowComponent},
  { path: 'mainAuthorLibrary', component: MainAuthorWindowComponent},
  { path: 'mainPublisherLibrary', component: MainPublisherWindowComponent},
  { path: 'mainTypeLibrary', component: MainTypeWindowComponent},
  { path: 'mainGenreLibrary', component: MainGenreWindowComponent},
  { path: 'mainReaderLibrary', component: MainReaderWindowComponent},
  { path: 'mainOrdersLibrary', component: MainOrdersWindowComponent},
  { path: 'mainAccountingLibrary', component: MainAccountingWindowComponent},
  { path: 'mainBooksInLibLibrary', component: MainBooksInLibWindowComponent},
  { path: 'libraryAuthorsOfWorks', component: LibraryAuthorsOfWorksWindowComponent},
  { path: 'libraryBook', component: LibraryBookWindowComponent},
  {  path: 'libraryBooksInLib', component:LibraryBooksInLibWindowComponent},
  { path: 'libraryGenre', component:LibraryGenreWindowComponent},
  { path: 'libraryOrders', component:LibraryOrdersWindowComponent},
  { path: 'libraryPublishedWorks', component:LibraryPublishedWorksWindowComponent},
  { path: 'libraryPublisher', component: LibraryPublisherWindowComponent},
  { path: 'libraryAccounting', component:LibraryAccountingWindowComponent},
  { path: 'mainAuthorsOfBooksLibrary', component: MainAuthorsOfBooksWindowComponent},
  { path: 'mainAuthorsOfWorksLibrary', component: MainAuthorsOfWorksWindowComponent},
  { path: 'mainPublishedWorksLibrary', component: MainPublishedWorksWindowComponent},
  { path: 'directorWork', component: DirectorWorkWindowComponent},
  { path: 'directorType', component: DirectorTypeWindowComponent},
  { path: 'directorReader', component: DirectorReaderWindowComponent},
  { path: 'directorPublisher', component: DirectorPublisherWindowComponent},
  { path: 'directorPublishedWorks', component: DirectorPublishedWorksWindowComponent},
  { path: 'directorOrders', component: DirectorOrdersWindowComponent},
  { path: 'directorGenre' , component: DirectorGenreWindowComponent},
  { path: 'directorBooksInLib', component: DirectorBooksInLibWindowComponent},
  { path: 'directorBook', component: DirectorBookWindowComponent},
  { path: 'directorAuthorsOfWorks', component: DirectorAuthorsOfWorksWindowComponent},
  { path: 'directorAuthorsOfBooks', component: DirectorAuthorsOfBooksWindowComponent},
  { path: 'directorAuthor', component: DirectorAuthorWindowComponent},
  { path: 'directorAccounting', component: DirectorAccountingWindowComponent},
  { path: 'transporter', component: TransporterOrdersWindowComponent }
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
    MainAccountingWindowComponent,
    MainBooksInLibWindowComponent,
    MainAuthorsOfBooksWindowComponent,
    MainAuthorsOfWorksWindowComponent,
    MainPublishedWorksWindowComponent,
    LibraryWindowComponent,
    LibraryWorkWindowComponent,
    LibraryTypeWindowComponent,
    LibraryReaderWindowComponent,
    LibraryAccountingWindowComponent,
    LibraryAuthorWindowComponent,
    LibraryAuthorsOfBooksWindowComponent,
    LibraryAuthorsOfWorksWindowComponent,
    LibraryBookWindowComponent,
    LibraryBooksInLibWindowComponent,
    LibraryGenreWindowComponent,
    LibraryOrdersWindowComponent,
    LibraryPublishedWorksWindowComponent,
    LibraryPublisherWindowComponent,
    DirectorWindowComponent,
    DirectorWorkWindowComponent,
    DirectorTypeWindowComponent,
    DirectorReaderWindowComponent,
    DirectorPublisherWindowComponent,
    DirectorPublishedWorksWindowComponent,
    DirectorOrdersWindowComponent,
    DirectorGenreWindowComponent,
    DirectorBooksInLibWindowComponent,
    DirectorBookWindowComponent,
    DirectorAuthorsOfWorksWindowComponent,
    DirectorAuthorsOfBooksWindowComponent,
    DirectorAuthorWindowComponent,
    DirectorAccountingWindowComponent,
    TransporterOrdersWindowComponent
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
  providers: [LoginAndRegistrate, MainLibraryService, LibraryService],
  bootstrap: [AppComponent]
})
export class AppModule {


}
