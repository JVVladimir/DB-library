import {Component, Inject, Input, OnInit} from '@angular/core';

import {TaskService} from '../services/TaskService';
import {User} from '../data/User';
import {LoginAndRegistrate} from '../services/LoginAndRegistrate';

import {Task} from '../data/Task';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {DialogOverviewExampleDialog} from '../edit-row-window/edit-row-window.component';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Brand} from "../data/Brand";
import {TableService} from "../services/TableService";
import {Cheque} from "../data/Cheque";
import {Delivery} from "../data/Deliver";
import {Employee} from "../data/Employee";
import {GoodInOrder} from "../data/GoodInOrder";
import {Good} from "../data/Good";
import {GoodInShop} from "../data/GoodInShop";
import {GoodInStore} from "../data/GoodInStore";
import {GoodSize} from "../data/GoodSize";
import {OnlineSale} from "../data/OnlineSale";
import {Sale} from "../data/Sale";
import {Season} from "../data/Season";
import {Shop} from "../data/Shop";
import {Store} from "../data/Store";
import {Sport} from "../data/Sport";


@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.css']
})
export class MainWindowComponent implements OnInit {
  tableForm: FormGroup;
  submitted = false;
  selected = '';
  user: User = null;
  brands: Brand[] = null;
  brandColumns: string[] = ['id', 'brand'];
  cheques: Cheque[] = null;
  chequeColumns: string[] = ['id', 'inn', 'count', 'amount', 'time_check', 'type_payment', 'id_shop', 'id_employee'];
  deliverys: Delivery[] = null;
  deliveryColumns: string[] = ['id', 'weight', 'data', 'amount', 'status', 'address'];
  employees: Employee[] = null;
  employeeColumns: string[] = ['id', 'name', 'education', 'salary', 'position', 'birthday', 'id_shop', 'passport'];
  goods: Good[] = null;
  goodColumns: string[] = ['id', 'name', 'amount', 'id_season', 'id_brand', 'id_sport'];
  goodInOrders: GoodInOrder[] = null;
  goodInOrderColumns: string[] = ['id_good_size', 'id_online_sale', 'count'];
  goodInShops: GoodInShop[] = null;
  goodInShopColumns: string[] = ['id_good_size', 'id_shop', 'count'];
  goodInStores: GoodInStore[] = null;
  goodInStoreColumns: string[] = ['id_good_size', 'id_store', 'count'];
  goodSizes: GoodSize[] = null;
  goodSizeColumns: string[] = ['id', 'size', 'id_good'];
  onlineSales: OnlineSale[] = null;
  onlineSaleColumns: string[] = ['id', 'data_create', 'data_finish', 'id_delivery'];
  sales: Sale[] = null;
  saleColumns: string[] = ['id', 'data_sale', 'count', 'id_employee', 'id_cheque'];
  seasons: Season[] = null;
  seasonColumns: string[] = ['id', 'season'];
  shops: Shop[] = null;
  shopColumns: string[] = ['id', 'address', 'time_open', 'phone_number', 'id_store', 'name'];
  sports: Sport[] = null;
  sportColumns: string[] = ['id', 'name'];
  stores: Store[] = null;
  storeColumns: string[] = ['id', 'address', 'time_open', 'name'];
  users: User[] = null;
  userColumns: string[] = ['id', 'login', 'password', 'role'];

  constructor(public dialog: MatDialog, private formBuilder: FormBuilder, private service: LoginAndRegistrate, private tableService: TableService, private router: Router) {
    this.user =  this.service.getData();
    if (this.user == null || this.user === undefined) {
      this.router.navigateByUrl('/');
    }
  }

  ngOnInit(): void {
    this.tableForm = this.formBuilder.group({
      table: ['', Validators.compose([
        Validators.required
      ])],
      user_id: [''],
      user_username: [''],
      user_password: [''],
      user_role: [''],
      store_id: [''],
      store_name: [''],
      store_time_open: [''],
      store_address: [''],
      sport_id: [''],
      sport_name: [''],
      shop_id: [''],
      shop_name: [''],
      shop_address: [''],
      shop_time_open: [''],
      shop_phone_number: [''],
      shop_id_store: [''],
      season_id: [''],
      season_season: [''],
      sale_id: [''],
      sale_data_sale: [''],
      sale_count: [''],
      sale_id_employee: [''],
      sale_id_cheque: [''],
      online_sale_id: [''],
      online_sale_data_create: [''],
      online_sale_data_finish: [''],
      online_sale_id_delivery: [''],
      good_size_id: [''],
      good_size_size: [''],
      good_size_id_good: [''],
      good_in_store_id_good_size: [''],
      good_in_store_id_store: [''],
      good_in_store_count: [''],
      good_in_shop_id_good_size: [''],
      good_in_shop_id_shop: [''],
      good_in_shop_count: [''],
      good_in_order_id_good_size: [''],
      good_in_order_id_online_sale: [''],
      good_in_order_count: [''],
      good_id: [''],
      good_name: [''],
      good_amount: [''],
      good_id_season: [''],
      good_id_brand: [''],
      good_id_sport: [''],
      employee_id: [''],
      employee_name: [''],
      employee_education: [''],
      employee_salary: [''],
      employee_position: [''],
      employee_birthday: [''],
      employee_id_shop: [''],
      employee_passport: [''],
      delivery_id: [''],
      delivery_weight: [''],
      delivery_data: [''],
      delivery_amount: [''],
      delivery_status: [''],
      delivery_address: [''],
      cheque_id: [''],
      cheque_inn: [''],
      cheque_count: [''],
      cheque_amount: [''],
      cheque_time_check: [''],
      cheque_type_payment: [''],
      cheque_id_shop: [''],
      cheque_id_employee: [''],
      brand_id: [''],
      brand_brand: ['']
    });
  }

  get logn() { return this.tableForm.controls; }

  readMore(task: Task) {
    this.openDialog(task);
  }

  openDialog(task: Task) {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '550px',
      data: task
    });
  }

  goMain() {
    this.router.navigateByUrl('/main');
  }

  goAdd() {
    this.router.navigateByUrl('/add');
  }

  goEdit() {
    this.router.navigateByUrl('/edit');
  }

  goDelete() {
    this.router.navigateByUrl('/delete');
  }

  getData() {
    this.submitted = true;
    if (this.tableForm.invalid) {
      return;
    } else if (this.selected === 'user_db') {
      const user = new User();
      user.username = this.tableForm.value['user_username'];
      user.password = this.tableForm.value['user_password'];
      this.clear();
      this.tableService.getUser(user, this.selected).subscribe((answer: User[]) => {
        if (answer != null) {
          this.users = answer;
        } else {
          alert('Ошибка! Данных не найдено!');
        }
      });
    } else if (this.selected === 'store') {
      const store = new Store();
      store.id = this.tableForm.value['store_id'];
      store.name = this.tableForm.value['store_name'];
      store.time_open = this.tableForm.value['store_time_open'];
      store.address = this.tableForm.value['store_address'];
      this.clear();
      this.tableService.getStore(store, this.selected).subscribe((answer: Store[]) => {
        if (answer != null) {
          this.stores = answer;
        } else {
          alert('Ошибка! Данных не найдено!');
        }
      });
    } else if (this.selected === 'sport') {
      const sport = new Sport();
      sport.id = this.tableForm.value['sport_id'];
      sport.name = this.tableForm.value['sport_name'];
      this.clear();
      this.tableService.getSport(sport, this.selected).subscribe((answer: Sport[]) => {
        if (answer != null) {
          this.sports = answer;
        } else {
          alert('Ошибка! Данных не найдено!');
        }
      });
    } else if (this.selected === 'shop') {
      const shop = new Shop();
      shop.id = this.tableForm.value['shop_id'];
      shop.name = this.tableForm.value['shop_name'];
      shop.address = this.tableForm.value['shop_address'];
      shop.time_open = this.tableForm.value['shop_time_open'];
      shop.phone_number = this.tableForm.value['shop_phone_number'];
      shop.id_store = this.tableForm.value['shop_id_store'];
      this.clear();
      this.tableService.getShop(shop, this.selected).subscribe((answer: Shop[]) => {
        if (answer != null) {
          this.shops = answer;
        } else {
          alert('Ошибка! Данных не найдено!');
        }
      });
    } else if (this.selected === 'season') {
      const season = new Season();
      season.id = this.tableForm.value['season_id'];
      season.season = this.tableForm.value['season_season'];
      this.clear();
      this.tableService.getSeason(season, this.selected).subscribe((answer: Season[]) => {
        if (answer != null) {
          this.seasons = answer;
        } else {
          alert('Ошибка! Данных не найдено!');
        }
      });
    } else if (this.selected === 'sale') {
      const sale = new Sale();
      sale.id = this.tableForm.value['sale_id'];
      sale.data_sale = this.tableForm.value['sale_data_sale'];
      sale.count = this.tableForm.value['sale_count'];
      sale.id_cheque = this.tableForm.value['sale_id_cheque'];
      sale.id_employee = this.tableForm.value['sale_id_employee'];
      this.clear();
      this.tableService.getSale(sale, this.selected).subscribe((answer: Sale[]) => {
        if (answer != null) {
          this.sales = answer;
        } else {
          alert('Ошибка! Данных не найдено!');
        }
      });
    } else if (this.selected === 'online_sale') {
      const onlineSale = new OnlineSale();
      onlineSale.id = this.tableForm.value['online_sale_id'];
      onlineSale.data_create = this.tableForm.value['online_sale_data_create'];
      onlineSale.data_finish = this.tableForm.value['online_sale_data_finish'] ;
      onlineSale.id_delivery = this.tableForm.value['online_sale_id_delivery'];
      this.clear();
      this.tableService.getOnlineSale(onlineSale, this.selected).subscribe((answer: OnlineSale[]) => {
        if (answer != null) {
          this.onlineSales = answer;
        } else {
          alert('Ошибка! Данных не найдено!');
        }
      });
    } else if (this.selected === 'good_size') {
      const goodSize = new GoodSize();
      goodSize.id = this.tableForm.value['good_size_id'];
      goodSize.id_good = this.tableForm.value['good_size_id_good'] ;
      goodSize.size = this.tableForm.value['good_size_size'];
      this.clear();
      this.tableService.getGoodSize(goodSize, this.selected).subscribe((answer: GoodSize[]) => {
        if (answer != null) {
          this.goodSizes = answer;
        } else {
          alert('Ошибка! Данных не найдено!');
        }
      });
    } else if (this.selected === 'good_in_store') {
      const goodInStore = new GoodInStore();
      goodInStore.count = this.tableForm.value['good_in_store_count'];
      goodInStore.id_good_size = this.tableForm.value['good_in_store_id_good_size'];
      goodInStore.id_store = this.tableForm.value['good_in_store_id_store'];
      this.clear();
      this.tableService.getGoodInStore(goodInStore, this.selected).subscribe((answer: GoodInStore[]) => {
        if (answer != null) {
          this.goodInStores = answer;
        } else {
          alert('Ошибка! Данных не найдено!');
        }
      });
    } else if (this.selected === 'good_in_shop') {
      const goodInShop = new GoodInShop();
      goodInShop.id_good_size = this.tableForm.value['good_in_shop_id_good_size'];
      goodInShop.count = this.tableForm.value['good_in_shop_count'];
      goodInShop.id_shop = this.tableForm.value['good_in_shop_id_shop'];
      this.clear();
      this.tableService.getGoodInShop(goodInShop, this.selected).subscribe((answer: GoodInShop[]) => {
        if (answer != null) {
          this.goodInShops = answer;
        } else {
          alert('Ошибка! Данных не найдено!');
        }
      });
    } else if (this.selected === 'good_in_order') {
      const goodInOrder = new GoodInOrder();
      goodInOrder.count = this.tableForm.value['good_in_order_count'];
      goodInOrder.id_good_size = this.tableForm.value['good_in_order_id_good_size'];
      goodInOrder.id_online_sale = this.tableForm.value['good_in_order_id_online_sale'];
      this.clear();
      this.tableService.getGoodInOrder(goodInOrder, this.selected).subscribe((answer: GoodInOrder[]) => {
        if (answer != null) {
          this.goodInOrders = answer;
        } else {
          alert('Ошибка! Данных не найдено!');
        }
      });
    } else if (this.selected === 'good') {
      const good = new Good();
      good.id = this.tableForm.value['good_id'];
      good.amount = this.tableForm.value['good_amount'];
      good.id_brand = this.tableForm.value['good_id_brand'];
      good.id_season = this.tableForm.value['good_id_season'];
      good.id_sport = this.tableForm.value['good_id_sport'];
      good.name = this.tableForm.value['good_name'];
      this.clear();
      this.tableService.getGood(good, this.selected).subscribe((answer: Good[]) => {
        if (answer != null) {
          this.goods = answer;
        } else {
          alert('Ошибка! Данных не найдено!');
        }
      });
    } else if (this.selected === 'employee') {
      const employee = new Employee();
      employee.id = this.tableForm.value['employee_id'];
      employee.name = this.tableForm.value['employee_name'];
      employee.education = this.tableForm.value['employee_education'];
      employee.salary = this.tableForm.value['employee_salary'];
      employee.position = this.tableForm.value['employee_position'];
      employee.birthday = this.tableForm.value['employee_birthday'];
      employee.id_shop = this.tableForm.value['employee_id_shop'];
      employee.passport = this.tableForm.value['employee_passport'];
      this.clear();
      this.tableService.getEmployee(employee, this.selected).subscribe((answer: Employee[]) => {
        if (answer != null) {
          this.employees = answer;
        } else {
          alert('Ошибка! Данных не найдено!');
        }
      });
    } else if (this.selected === 'delivery') {
      const  delivery = new Delivery();
      delivery.id = this.tableForm.value['delivery_id'];
      delivery.weight = this.tableForm.value['delivery_weight'];
      delivery.data = this.tableForm.value['delivery_data'];
      delivery.amount = this.tableForm.value['delivery_amount'];
      delivery.status = this.tableForm.value['delivery_status'];
      delivery.address = this.tableForm.value['delivery_address'];
      this.clear();
      this.tableService.getDelivery(delivery, this.selected).subscribe((answer: Delivery[]) => {
        if (answer != null) {
          this.deliverys = answer;
        } else {
          alert('Ошибка! Данных не найдено!');
        }
      });
    } else if (this.selected === 'cheque') {
      const cheque = new Cheque();
      cheque.id = this.tableForm.value['cheque_id'];
      cheque.inn = this.tableForm.value['cheque_inn'];
      cheque.count = this.tableForm.value['cheque_count'];
      cheque.amount = this.tableForm.value['cheque_amount'];
      cheque.time_check = this.tableForm.value['cheque_time_check'];
      cheque.type_payment = this.tableForm.value['cheque_type_payment'];
      cheque.id_shop = this.tableForm.value['cheque_id_shop'];
      cheque.id_employee = this.tableForm.value['cheque_id_employee'];
      this.clear();
      this.tableService.getCheque(cheque, this.selected).subscribe((answer: Cheque[]) => {
        if (answer != null) {
          this.cheques = answer;
        } else {
          alert('Ошибка! Данных не найдено!');
        }
      });
    } else if (this.selected === 'brand') {
      const brand = new Brand();
      brand.id = this.tableForm.value['brand_id'];
      brand.brand = this.tableForm.value['brand_brand'];
      this.clear();
      this.tableService.getBrands(brand, this.selected).subscribe((answer: Brand[]) => {
        if (answer != null) {
          this.brands = answer;
        } else {
          alert('Ошибка! Данных не найдено!');
        }
      });
    }

    this.submitted = false;
  }

  clear() {
    this.brands = null;
    this.cheques = null;
    this.deliverys = null;
    this.employees = null;
    this.goods = null;
    this.goodInOrders = null;
    this.goodInShops = null;
    this.goodInStores  = null;
    this.goodSizes = null;
    this.onlineSales = null;
    this.sales = null;
    this.seasons = null;
    this.shops = null;
    this.sports = null;
    this.stores = null;
    this.users = null;
  }

}
