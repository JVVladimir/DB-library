import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {User} from "../data/User";
import {Observable} from "rxjs/internal/Observable";
import {Library} from "../data/Library";
import {Book} from "../data/Book";
import {Work} from "../data/Work";
import {Author} from "../data/Author";
import {Publisher} from "../data/Publisher";
import {Type} from "../data/Type";
import {Genre} from "../data/Genre";
import {Reader} from "../data/Reader";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  withCredentials: true
};


@Injectable({
  providedIn: 'root'
})
export class MainLibraryService {
  user: User = null;

  private customersUrl = 'http://localhost:8080/main-library/';
  private consolidationUrl = 'http://localhost:8080/consolidation/';
  constructor(private httpClient: HttpClient) { }

  getLibraries():  Observable<any>  {
    return this.httpClient.get(this.customersUrl + "libraries", httpOptions);
  }

  getBooks():  Observable<any>  {
    return this.httpClient.get(this.customersUrl + "books", httpOptions);
  }

  getAuthors():  Observable<any>  {
    return this.httpClient.get(this.customersUrl + "authors", httpOptions);
  }

  getPublishers():  Observable<any>  {
    return this.httpClient.get(this.customersUrl + "publishers", httpOptions);
  }

  getWorks():  Observable<any>  {
    return this.httpClient.get(this.customersUrl + "works", httpOptions);
  }

  getTypes():  Observable<any>  {
    return this.httpClient.get(this.customersUrl + "types", httpOptions);
  }

  getGenres():  Observable<any>  {
    return this.httpClient.get(this.customersUrl + "genres", httpOptions);
  }

  getReaders():  Observable<any>  {
    return this.httpClient.get(this.customersUrl + "readers", httpOptions);
  }

  getOrders():  Observable<any>  {
    return this.httpClient.get(this.consolidationUrl + "orders", httpOptions);
  }

  getAccounts():  Observable<any>  {
    return this.httpClient.get(this.consolidationUrl + "accounts", httpOptions);
  }

  addReader(reader: Reader):  Observable<any>  {
    return this.httpClient.post(this.customersUrl + "readers", reader, httpOptions);
  }

  addLibrary(library: Library):  Observable<any>  {
    return this.httpClient.post(this.customersUrl + "libraries", library, httpOptions);
  }

  addTypes(type: Type):  Observable<any>  {
    return this.httpClient.post(this.customersUrl + "types", type, httpOptions);
  }

  addGenres(genre: Genre):  Observable<any>  {
    return this.httpClient.post(this.customersUrl + "genres", genre, httpOptions);
  }

  addBooks(book: Book):  Observable<any>  {
    return this.httpClient.post(this.customersUrl + "books", book, httpOptions);
  }

  addWorks(work: Work):  Observable<any>  {
    return this.httpClient.post(this.customersUrl + "works", work, httpOptions);
  }

  addAuthors(author: Author):  Observable<any>  {
    return this.httpClient.post(this.customersUrl + "authors", author, httpOptions);
  }

  addPublisher(publisher: Publisher):  Observable<any>  {
    return this.httpClient.post(this.customersUrl + "publishers", publisher, httpOptions);
  }

  searchReader(reader: Reader):  Observable<any>  {
    let params = new HttpParams();
    if (reader.name != null  && reader.name != undefined && reader.name.trim().length != 0) {
      params = params.append('name', reader.name.trim());
    }
    if (reader.pasp != null  && reader.pasp != undefined && reader.pasp.trim().length != 0) {
      params = params.append('pasp', reader.pasp.trim());
    }
    if (reader.phone != null  && reader.phone != undefined && reader.phone.trim().length != 0) {
      params = params.append('phone', reader.phone.trim());
    }
    let opt = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      withCredentials: true,
      params: params
    };
    return this.httpClient.get(this.customersUrl + "readers/", opt);
  }

  searchType(type: Type):  Observable<any>  {
    let params = new HttpParams();
    if (type.name != null  && type.name != undefined && type.name.trim().length != 0) {
      params = params.append('name', type.name.trim());
    }
    let opt = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      withCredentials: true,
      params: params
    };
    return this.httpClient.get(this.customersUrl + "types/", opt);
  }

  searchGenre(genre: Genre):  Observable<any>  {
    let params = new HttpParams();
    if (genre.name != null  && genre.name != undefined && genre.name.trim().length != 0) {
      params = params.append('name', genre.name.trim());
    }
    let opt = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      withCredentials: true,
      params: params
    };
    return this.httpClient.get(this.customersUrl + "genres/", opt);
  }

  searchPublisher(publisher: Publisher):  Observable<any>  {
    let params = new HttpParams();
    if (publisher.name != null  && publisher.name != undefined && publisher.name.trim().length != 0) {
      params = params.append('name', publisher.name.trim());
    }
    if (publisher.address != null && publisher.address != undefined && publisher.address.trim().length != 0 ) {
      params = params.append('address', publisher.address.trim());
    }
    let opt = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      withCredentials: true,
      params: params
    };
    return this.httpClient.get(this.customersUrl + "publishers/", opt);
  }

  searchLibrary(library: Library):  Observable<any>  {
    let params = new HttpParams();
    if (library.name != null  && library.name != undefined && library.name.trim().length != 0) {
      params = params.append('name', library.name.trim());
    }
    if (library.address != null && library.address != undefined && library.address.trim().length != 0 ) {
      params = params.append('address', library.address.trim());
    }
    let opt = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      withCredentials: true,
      params: params
    };
    return this.httpClient.get(this.customersUrl + "libraries/", opt);
  }

  searchAuthor(author: Author):  Observable<any>  {
    let params = new HttpParams();
    if (author.name != null  && author.name != undefined && author.name.trim().length != 0) {
      params = params.append('name', author.name.trim());
    }
    if (author.died != null  && author.died != undefined && author.died.trim().length != 0) {
      params = params.append('name', author.died.trim());
    }
    if (author.born != null  && author.born != undefined && author.born.trim().length != 0) {
      params = params.append('name', author.born.trim());
    }
    let opt = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      withCredentials: true,
      params: params
    };
    return this.httpClient.get(this.customersUrl + "authors/", opt);
  }

  searchBook(book: Book):  Observable<any>  {
    let params = new HttpParams();
    if (book.name != null  && book.name != undefined && book.name.trim().length != 0) {
      params = params.append('name', book.name.trim());
    }
    if (book.isbn != null && book.isbn != undefined && book.isbn.trim().length != 0 ) {
      params = params.append('isbn', book.isbn.trim());
    }
    let opt = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      withCredentials: true,
      params: params
    };
    return this.httpClient.get(this.customersUrl + "books/", opt);
  }

  searchWork(work: Work):  Observable<any>  {
    let params = new HttpParams();
    if (work.name != null  && work.name != undefined && work.name.trim().length != 0) {
      params = params.append('name', work.name.trim());
    }
    if (work.genre.name != null && work.genre.name ! != undefined && work.genre.name.trim().length != 0)  {
      params = params.append('genre', work.genre.name.trim());
    }
    if (work.type.name != null && work.type.name != undefined && work.type.name.trim().length != 0) {
      params = params.append('type', work.type.name.trim());
    }
    let opt = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      withCredentials: true,
      params: params
    };
    return this.httpClient.get(this.customersUrl + "works/", opt);
  }
}
