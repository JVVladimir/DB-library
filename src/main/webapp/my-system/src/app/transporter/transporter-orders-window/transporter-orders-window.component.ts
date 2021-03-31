import {Component, Inject, Input, OnInit} from '@angular/core';
import {User} from '../../data/User';
import {LoginAndRegistrate} from '../../services/LoginAndRegistrate';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Orders} from "../../data/Orders";
import {LibraryService} from "../../services/LibraryService";
import {Order} from "../../data/Order";
import {OrdId} from "../../data/OrdId";
import {Book} from "../../data/Book";
import {Reader} from "../../data/Reader";
import {OrderId} from "../../data/OrderId";

@Component({
  selector: 'app-main-window',
  templateUrl: './transporter-orders-window.component.html',
  styleUrls: ['./transporter-orders-window.component.css']
})
export class TransporterOrdersWindowComponent implements OnInit {
  tableForm: FormGroup;
  submitted = false;
  selected = '';
  user: User = null;

  orders: Orders[] = null;
  orderColumns: string[] = ['id', 'reader', 'createDate', 'execDate', 'library', 'status', 'book'];


  constructor(public dialog: MatDialog, private formBuilder: FormBuilder, private service: LoginAndRegistrate, private mainLibraryService: LibraryService, private router: Router) {
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
      book_id: [''],
      order_id: ['']
    });
  }

  get logn() { return this.tableForm.controls; }

  getData() {
    this.submitted = true;
    this.orders = null;
    if (this.tableForm.invalid) {
      return;
    }  else if (this.selected === 'get') {
      this.getOrdersFromDB();
    } else if (this.selected === 'update') {
        const order = new Orders();
        order.id = new OrderId();
        order.id.book = this.tableForm.value['book_id'];
        order.id.id = this.tableForm.value['order_id'];
        order.status = 'delivered';
        this.clear();
        this.mainLibraryService.updateConsolidOrders(order).subscribe((answer: Orders[]) => {
          this.getOrdersFromDB();
        });
    }
    this.submitted = false;
  }

  private getOrdersFromDB() {
    this.mainLibraryService.getConsolidOrders().subscribe((answer: Orders[]) => {
      if (answer != null) {
        this.orders = answer;
      } else {
        alert('Ошибка! Данные отсутствуют!')
      }
    });
  }


  dateAsYYYYMMDDHHNNSS(date): string {
    return date.getFullYear()
      + '-' + this.leftpad(date.getMonth() + 1, 2)
      + '-' + this.leftpad(date.getDate(), 2);
  }

  leftpad(val, resultLength = 2, leftpadChar = '0'): string {
    return (String(leftpadChar).repeat(resultLength)
      + String(val)).slice(String(val).length);
  }

  clear() {
    this.orders = null;
  }

  goOrders() {
    this.router.navigateByUrl('/transporter');
  }
}
