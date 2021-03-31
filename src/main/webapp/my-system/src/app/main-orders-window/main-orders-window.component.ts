import {Component, Inject, Input, OnInit} from '@angular/core';
import {User} from '../data/User';
import {LoginAndRegistrate} from '../services/LoginAndRegistrate';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Library} from "../data/Library";
import {MainLibraryService} from "../services/ManLibraryService";
import {Book} from "../data/Book";
import {Work} from "../data/Work";
import {Publisher} from "../data/Publisher";
import {Type} from "../data/Type";
import {Genre} from "../data/Genre";
import {Author} from "../data/Author";
import {Reader} from "../data/Reader";
import {Order} from "../data/Order";
import {OrderId} from "../data/OrderId";
import {OrdId} from "../data/OrdId";
import {DateFormatter} from "@angular/common/src/pipes/deprecated/intl";
import {TimeInterval, Timestamp} from "rxjs/internal-compatibility";

@Component({
  selector: 'app-main-window',
  templateUrl: './main-orders-window.component.html',
  styleUrls: ['./main-orders-window.component.css']
})
export class MainOrdersWindowComponent implements OnInit {
  tableForm: FormGroup;
  submitted = false;
  selected = '';
  user: User = null;
  status = 'sent';

  orders: Order[] = null;
  orderColumns: string[] = ['id', 'reader_name', 'reader_address','reader_phone', 'reader_mail', 'reader_library_name', 'reader_library_address', 'createDate', 'execDate',
    'order_library_name', 'order_library_address', 'book_name', 'isbn', 'status'];

  constructor(public dialog: MatDialog, private formBuilder: FormBuilder, private service: LoginAndRegistrate, private mainLibraryService: MainLibraryService, private router: Router) {
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
      reader_id: [''],
      book_id: [''],
      status: [''],
      library_id: [''],
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
    } else if (this.selected === 'add') {
      const order = new Order();
      order.reader = new Reader()
      order.reader.id = this.tableForm.value['reader_id'];
      order.orderId = new OrdId();
      order.orderId.book = new Book();
      order.orderId.book.id = this.tableForm.value['book_id'];
      order.createDate = this.dateAsYYYYMMDDHHNNSS(new Date());
      order.status = 'accepted';
      this.clear();
      this.mainLibraryService.addOrders(order).subscribe((answer: Order[]) => {
        this.getOrdersFromDB();
      });
    } else if (this.selected === 'update') {
      const order = new Order();
      order.library = new Library();
      order.library.id = this.tableForm.value['library_id'];
      order.orderId = new OrdId();
      order.orderId.id = this.tableForm.value['order_id'];
      order.orderId.book = new Book();
      order.orderId.book.id = this.tableForm.value['book_id'];
      order.status = this.status;
      this.clear();
      this.mainLibraryService.updateOrders(order).subscribe((answer: Order[]) => {
        this.getOrdersFromDB();
      });
    }
    this.submitted = false;
  }

  private getOrdersFromDB() {
    this.mainLibraryService.getOrders().subscribe((answer: Order[]) => {
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

  goLibraries() {
    this.router.navigateByUrl('/mainLibrary');
  }

  goBooks() {
    this.router.navigateByUrl('/mainBookLibrary');
  }

  goWorks() {
    this.router.navigateByUrl('/mainWorkLibrary');
  }

  goAuthors() {
    this.router.navigateByUrl('/mainAuthorLibrary');
  }

  goPublishers() {
    this.router.navigateByUrl('/mainPublisherLibrary');
  }

  goTypes() {
    this.router.navigateByUrl('/mainTypeLibrary');
  }

  goGenres() {
    this.router.navigateByUrl('/mainGenreLibrary');
  }
  goReaders() {
    this.router.navigateByUrl('/mainReaderLibrary');
  }

  goOrders() {
    this.router.navigateByUrl('/mainOrdersLibrary');
  }

  goAccounting() {
    this.router.navigateByUrl('/mainAccountingLibrary');
  }

  goAuthorsOfBooks() {
    this.router.navigateByUrl('/mainAuthorsOfBooksLibrary');
  }

  goAuthorsOfWorks() {
    this.router.navigateByUrl('/mainAuthorsOfWorksLibrary');
  }

  goMainBooksInLib() {
    this.router.navigateByUrl('/mainBooksInLibLibrary');
  }

  goPublishedWorks() {
    this.router.navigateByUrl('/mainPublishedWorksLibrary');
  }
}
