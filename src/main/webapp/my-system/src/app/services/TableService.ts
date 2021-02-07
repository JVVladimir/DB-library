import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {Brand} from '../data/Brand';
import {Cheque} from '../data/Cheque';
import {Delivery} from '../data/Deliver';
import {Employee} from '../data/Employee';
import {Good} from '../data/Good';
import {GoodInOrder} from '../data/GoodInOrder';
import {GoodInShop} from '../data/GoodInShop';
import {GoodInStore} from '../data/GoodInStore';
import {GoodSize} from '../data/GoodSize';
import {OnlineSale} from '../data/OnlineSale';
import {Sale} from '../data/Sale';
import {Season} from '../data/Season';
import {Shop} from '../data/Shop';
import {Sport} from '../data/Sport';
import {Store} from '../data/Store';
import {User} from '../data/User';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class TableService {
  private customersUrl = 'http://192.168.1.67:8080/';
  constructor(private httpClient: HttpClient) { }

  getBrands(brand: Brand, table: string):  Observable<any>  {
    return this.httpClient.post<Brand>(this.customersUrl + table, brand, httpOptions);
  }

  addBrand(brand: Brand):  Observable<any>  {
    return this.httpClient.post<Brand>(this.customersUrl + 'addBrand', brand, httpOptions);
  }
  deleteBrand(brand: Brand):  Observable<any>  {
    return this.httpClient.post<Brand>(this.customersUrl + 'deleteBrand', brand, httpOptions);
  }

  getCheque(cheque: Cheque, table: string):  Observable<any>  {
    return this.httpClient.post<Cheque>(this.customersUrl + table, cheque, httpOptions);
  }

  addCheque(cheque: Cheque):  Observable<any>  {
    return this.httpClient.post<Cheque>(this.customersUrl + 'addCheque', cheque, httpOptions);
  }
  deleteCheque(cheque: Cheque):  Observable<any>  {
    return this.httpClient.post<Cheque>(this.customersUrl + 'deleteCheque', cheque, httpOptions);
  }

  getDelivery(delivery: Delivery, table: string):  Observable<any>  {
    return this.httpClient.post<Delivery>(this.customersUrl + table, delivery, httpOptions);
  }

  addDelivery(delivery: Delivery):  Observable<any>  {
    return this.httpClient.post<Delivery>(this.customersUrl + 'addDelivery', delivery, httpOptions);
  }
  deleteDelivery(delivery: Delivery):  Observable<any>  {
    return this.httpClient.post<Delivery>(this.customersUrl + 'deleteDelivery', delivery, httpOptions);
  }

  getEmployee(employee: Employee, table: string):  Observable<any>  {
    return this.httpClient.post<Employee>(this.customersUrl + table, employee, httpOptions);
  }

  addEmployee(employee: Employee):  Observable<any>  {
    return this.httpClient.post<Employee>(this.customersUrl + 'addEmployee', employee, httpOptions);
  }
  deleteEmployee(employee: Employee):  Observable<any>  {
    return this.httpClient.post<Employee>(this.customersUrl + 'deleteEmployee', employee, httpOptions);
  }

  getGood(good: Good, table: string):  Observable<any>  {
    return this.httpClient.post<Good>(this.customersUrl + table, good, httpOptions);
  }

  addGood(good: Good):  Observable<any>  {
    return this.httpClient.post<Good>(this.customersUrl + 'addGood', good, httpOptions);
  }

  deleteGood(good: Good):  Observable<any>  {
    return this.httpClient.post<Good>(this.customersUrl + 'deleteGood', good, httpOptions);
  }

  getGoodInOrder(goodInOrder: GoodInOrder, table: string):  Observable<any>  {
    return this.httpClient.post<GoodInOrder>(this.customersUrl + table, goodInOrder, httpOptions);
  }

  addGoodInOrder(goodInOrder: GoodInOrder):  Observable<any>  {
    return this.httpClient.post<GoodInOrder>(this.customersUrl + 'addGoodInOrder', goodInOrder, httpOptions);
  }

  deleteGoodInOrder(goodInOrder: GoodInOrder):  Observable<any>  {
    return this.httpClient.post<GoodInOrder>(this.customersUrl + 'deleteGoodInOrder', goodInOrder, httpOptions);
  }

  getGoodInShop(goodInShop: GoodInShop, table: string):  Observable<any>  {
    return this.httpClient.post<GoodInShop>(this.customersUrl + table, goodInShop, httpOptions);
  }

  addGoodInShop(goodInShop: GoodInShop):  Observable<any>  {
    return this.httpClient.post<GoodInShop>(this.customersUrl + 'addGoodInShop', goodInShop, httpOptions);
  }

  deleteGoodInShop(goodInShop: GoodInShop):  Observable<any>  {
    return this.httpClient.post<GoodInShop>(this.customersUrl + 'deleteGoodInShop', goodInShop, httpOptions);
  }

  getGoodInStore(goodInStore: GoodInStore, table: string):  Observable<any>  {
    return this.httpClient.post<GoodInStore>(this.customersUrl + table, goodInStore, httpOptions);
  }

  addGoodInStore(goodInStore: GoodInStore):  Observable<any>  {
    return this.httpClient.post<GoodInStore>(this.customersUrl + 'addGoodInStore', goodInStore, httpOptions);
  }

  deleteGoodInStore(goodInStore: GoodInStore):  Observable<any>  {
    return this.httpClient.post<GoodInStore>(this.customersUrl + 'deleteGoodInStore', goodInStore, httpOptions);
  }

  getGoodSize(goodSize: GoodSize, table: string):  Observable<any>  {
    return this.httpClient.post<GoodSize>(this.customersUrl + table, goodSize, httpOptions);
  }

  addGoodSize(goodSize: GoodSize):  Observable<any>  {
    return this.httpClient.post<GoodSize>(this.customersUrl + 'addGoodSize', goodSize, httpOptions);
  }

  deleteGoodSize(goodSize: GoodSize):  Observable<any>  {
    return this.httpClient.post<GoodSize>(this.customersUrl + 'deleteGoodSize', goodSize, httpOptions);
  }

  getOnlineSale(onlineSale: OnlineSale, table: string):  Observable<any>  {
    return this.httpClient.post<OnlineSale>(this.customersUrl + table, onlineSale, httpOptions);
  }

  addOnlineSale(onlineSale: OnlineSale):  Observable<any>  {
    return this.httpClient.post<OnlineSale>(this.customersUrl + 'addOnlineSale', onlineSale, httpOptions);
  }

  deleteOnlineSale(onlineSale: OnlineSale):  Observable<any>  {
    return this.httpClient.post<OnlineSale>(this.customersUrl + 'deleteOnlineSale', onlineSale, httpOptions);
  }

  getSale(sale: Sale, table: string):  Observable<any>  {
    return this.httpClient.post<Sale>(this.customersUrl + table, sale, httpOptions);
  }

  addSale(sale: Sale):  Observable<any>  {
    return this.httpClient.post<Sale>(this.customersUrl + 'addSale', sale, httpOptions);
  }

  deleteSale(sale: Sale):  Observable<any>  {
    return this.httpClient.post<Sale>(this.customersUrl + 'deleteSale', sale, httpOptions);
  }

  getSeason(season: Season, table: string):  Observable<any>  {
    return this.httpClient.post<Season>(this.customersUrl + table, season, httpOptions);
  }

  addSeason(season: Season):  Observable<any>  {
    return this.httpClient.post<Season>(this.customersUrl + 'addSeason', season, httpOptions);
  }

  deleteSeason(season: Season):  Observable<any>  {
    return this.httpClient.post<Season>(this.customersUrl + 'deleteSeason', season, httpOptions);
  }

  getShop(shop: Shop, table: string):  Observable<any>  {
    return this.httpClient.post<Shop>(this.customersUrl + table, shop, httpOptions);
  }

  addShop(shop: Shop):  Observable<any>  {
    return this.httpClient.post<Shop>(this.customersUrl + 'addShop', shop, httpOptions);
  }

  deleteShop(shop: Shop):  Observable<any>  {
    return this.httpClient.post<Shop>(this.customersUrl + 'deleteShop', shop, httpOptions);
  }

  getSport(sport: Sport, table: string):  Observable<any>  {
    return this.httpClient.post<Sport>(this.customersUrl + table, sport, httpOptions);
  }

  addSport(sport: Sport):  Observable<any>  {
    return this.httpClient.post<Sport>(this.customersUrl + 'addSport', sport, httpOptions);
  }

  deleteSport(sport: Sport):  Observable<any>  {
    return this.httpClient.post<Sport>(this.customersUrl + 'deleteSport', sport, httpOptions);
  }

  getStore(store: Store, table: string):  Observable<any>  {
    return this.httpClient.post<Store>(this.customersUrl + table,  store, httpOptions);
  }

  addStore(store: Store):  Observable<any>  {
    return this.httpClient.post<Store>(this.customersUrl + 'addStore', store, httpOptions);
  }

  deleteStore(store: Store):  Observable<any>  {
    return this.httpClient.post<Store>(this.customersUrl + 'deleteStore', store, httpOptions);
  }

  getUser(user: User, table: string):  Observable<any>  {
    return this.httpClient.post<User>(this.customersUrl + table, user, httpOptions);
  }

  addUser(user: User):  Observable<any>  {
    return this.httpClient.post<User>(this.customersUrl + 'addUser', user, httpOptions);
  }

  deleteUser(user: User):  Observable<any>  {
    return this.httpClient.post<User>(this.customersUrl + 'deleteUser', user, httpOptions);
  }
}
