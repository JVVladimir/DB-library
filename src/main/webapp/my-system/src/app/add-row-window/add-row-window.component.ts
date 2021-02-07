import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginAndRegistrate} from '../services/LoginAndRegistrate';
import {User} from '../data/User';
import {TaskService} from '../services/TaskService';
import {MatDialog} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Brand} from '../data/Brand';
import {TableService} from '../services/TableService';
import {Sport} from '../data/Sport';
import {Shop} from '../data/Shop';
import {Store} from '../data/Store';
import {Season} from '../data/Season';
import {Sale} from '../data/Sale';
import {OnlineSale} from '../data/OnlineSale';
import {GoodSize} from '../data/GoodSize';
import {GoodInStore} from '../data/GoodInStore';
import {GoodInShop} from '../data/GoodInShop';
import {GoodInOrder} from '../data/GoodInOrder';
import {Good} from '../data/Good';
import {Employee} from '../data/Employee';
import {Delivery} from '../data/Deliver';
import {Cheque} from '../data/Cheque';

@Component({
  selector: 'app-add-row-window',
  templateUrl: './add-row-window.component.html',
  styleUrls: ['./add-row-window.component.css']
})
export class AddRowWindowComponent implements OnInit {
  tableForm: FormGroup;
  submitted = false;
  selected = '';
  user: User = null;

  constructor(public dialog: MatDialog,  private formBuilder: FormBuilder, private tableService: TableService, private taskService: TaskService, private service: LoginAndRegistrate, private router: Router) {
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
      this.tableService.addUser(user).subscribe((answer) => {
        this.showInfo(answer.toString());
      });
    } else if (this.selected === 'store') {
      const store = new Store();
      store.name = this.tableForm.value['store_name'];
      store.time_open = this.tableForm.value['store_time_open'];
      store.address = this.tableForm.value['store_address'];
      this.tableService.addStore(store).subscribe((answer) => {
        this.showInfo(answer.toString());
      });
    } else if (this.selected === 'sport') {
      const sport = new Sport();
      sport.name = this.tableForm.value['sport_name'];
      this.tableService.addSport(sport).subscribe((answer) => {
        this.showInfo(answer.toString());
      });
    } else if (this.selected === 'shop') {
      const shop = new Shop();
      shop.name = this.tableForm.value['shop_name'];
      shop.address = this.tableForm.value['shop_address'];
      shop.time_open = this.tableForm.value['shop_time_open'];
      shop.phone_number = this.tableForm.value['shop_phone_number'];
      shop.id_store = this.tableForm.value['shop_id_store'];
      this.tableService.addShop(shop).subscribe((answer) => {
        this.showInfo(answer.toString());
      });
    } else if (this.selected === 'season') {
      const season = new Season();
      season.season = this.tableForm.value['season_season'];
      this.tableService.addSeason(season).subscribe((answer) => {
        this.showInfo(answer.toString());
      });
    } else if (this.selected === 'sale') {
      const sale = new Sale();
      sale.data_sale = this.tableForm.value['sale_data_sale'];
      sale.count = this.tableForm.value['sale_count'];
      sale.id_cheque = this.tableForm.value['sale_id_cheque'];
      sale.id_employee = this.tableForm.value['sale_id_employee'];
      this.tableService.addSale(sale).subscribe((answer) => {
        this.showInfo(answer.toString());
      });
    } else if (this.selected === 'online_sale') {
      const onlineSale = new OnlineSale();
      onlineSale.data_create = this.tableForm.value['online_sale_data_create'];
      onlineSale.data_finish = this.tableForm.value['online_sale_data_finish'] ;
      onlineSale.id_delivery = this.tableForm.value['online_sale_id_delivery'];
      this.tableService.addOnlineSale(onlineSale).subscribe((answer) => {
        this.showInfo(answer.toString());
      });
    } else if (this.selected === 'good_size') {
      const goodSize = new GoodSize();
      goodSize.id_good = this.tableForm.value['good_size_id_good'] ;
      goodSize.size = this.tableForm.value['good_size_size'];
      this.tableService.addGoodSize(goodSize).subscribe((answer) => {
        this.showInfo(answer.toString());
      });
    } else if (this.selected === 'good_in_store') {
      const goodInStore = new GoodInStore();
      goodInStore.count = this.tableForm.value['good_in_store_count'];
      goodInStore.id_good_size = this.tableForm.value['good_in_store_id_good_size'];
      goodInStore.id_store = this.tableForm.value['good_in_store_id_store'];
      this.tableService.addGoodInStore(goodInStore).subscribe((answer) => {
        this.showInfo(answer.toString());
      });
    } else if (this.selected === 'good_in_shop') {
      const goodInShop = new GoodInShop();
      goodInShop.id_good_size = this.tableForm.value['good_in_shop_id_good_size'];
      goodInShop.count = this.tableForm.value['good_in_shop_count'];
      goodInShop.id_shop = this.tableForm.value['good_in_shop_id_shop'];
      this.tableService.addGoodInShop(goodInShop).subscribe((answer) => {
        this.showInfo(answer.toString());
      });
    } else if (this.selected === 'good_in_order') {
      const goodInOrder = new GoodInOrder();
      goodInOrder.count = this.tableForm.value['good_in_order_count'];
      goodInOrder.id_good_size = this.tableForm.value['good_in_order_id_good_size'];
      goodInOrder.id_online_sale = this.tableForm.value['good_in_order_id_online_sale'];
      this.tableService.addGoodInOrder(goodInOrder).subscribe((answer) => {
        this.showInfo(answer.toString());
      });
    } else if (this.selected === 'good') {
      const good = new Good();
      good.amount = this.tableForm.value['good_amount'];
      good.id_brand = this.tableForm.value['good_id_brand'];
      good.id_season = this.tableForm.value['good_id_season'];
      good.id_sport = this.tableForm.value['good_id_sport'];
      good.name = this.tableForm.value['good_name'];
      this.tableService.addGood(good).subscribe((answer) => {
        this.showInfo(answer.toString());
      });
    } else if (this.selected === 'employee') {
      const employee = new Employee();
      employee.name = this.tableForm.value['employee_name'];
      employee.education = this.tableForm.value['employee_education'];
      employee.salary = this.tableForm.value['employee_salary'];
      employee.position = this.tableForm.value['employee_position'];
      employee.birthday = this.tableForm.value['employee_birthday'];
      employee.id_shop = this.tableForm.value['employee_id_shop'];
      employee.passport = this.tableForm.value['employee_passport'];
      this.tableService.addEmployee(employee).subscribe((answer) => {
        this.showInfo(answer.toString());
      });
    } else if (this.selected === 'delivery') {
      const  delivery = new Delivery();
      delivery.weight = this.tableForm.value['delivery_weight'];
      delivery.data = this.tableForm.value['delivery_data'];
      delivery.amount = this.tableForm.value['delivery_amount'];
      delivery.status = this.tableForm.value['delivery_status'];
      delivery.address = this.tableForm.value['delivery_address'];
      this.tableService.addDelivery(delivery).subscribe((answer) => {
        this.showInfo(answer.toString());
      });
    } else if (this.selected === 'cheque') {
      const cheque = new Cheque();
      cheque.inn = this.tableForm.value['cheque_inn'];
      cheque.count = this.tableForm.value['cheque_count'];
      cheque.amount = this.tableForm.value['cheque_amount'];
      cheque.time_check = this.tableForm.value['cheque_time_check'];
      cheque.type_payment = this.tableForm.value['cheque_type_payment'];
      cheque.id_shop = this.tableForm.value['cheque_id_shop'];
      cheque.id_employee = this.tableForm.value['cheque_id_employee'];
      this.tableService.addCheque(cheque).subscribe((answer) => {
        this.showInfo(answer.toString());
      });
    } else if (this.selected === 'brand') {
      const brand = new Brand();
      brand.brand = this.tableForm.value['brand_brand'];
      this.tableService.addBrand(brand).subscribe((answer) => {
        this.showInfo(answer.toString());
      });
    }

    this.submitted = false;
  }

  showInfo(answer: string) {
    if (answer === 'OK') {
      alert('Запись была успешно добавлена!');
    } else {
      alert('Ошибка! Не верно введены данные!');
    }
  }
}
