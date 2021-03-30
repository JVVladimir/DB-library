import {Component, Inject, Input, OnInit} from '@angular/core';
import {User} from '../../data/User';
import {LoginAndRegistrate} from '../../services/LoginAndRegistrate';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Orders} from "../../data/Orders";
import {LibraryService} from "../../services/LibraryService";
import {Order} from "../../data/Order";
import {Reader} from "../../data/Reader";
import {OrdId} from "../../data/OrdId";
import {Book} from "../../data/Book";

@Component({
  selector: 'app-main-window',
  templateUrl: './library-orders-window.component.html',
  styleUrls: ['./library-orders-window.component.css']
})
export class LibraryOrdersWindowComponent implements OnInit {
  tableForm: FormGroup;
  submitted = false;
  selected = '';
  user: User = null;

  orders: Order[] = null;
  orderColumns: string[] =  ['id', 'reader_name', 'reader_address','reader_phone', 'reader_mail', 'reader_library_name', 'reader_library_address', 'createDate', 'execDate',
    'order_library_name', 'order_library_address', 'book_name', 'isbn', 'status'];



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
      reader_id: [''],
      book_id: [''],
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
    }
    this.submitted = false;
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



  private getOrdersFromDB() {
    this.mainLibraryService.getOrders().subscribe((answer: Order[]) => {
      if (answer != null) {
        this.orders = answer;
      } else {
        alert('Ошибка! Данные отсутствуют!')
      }
    });
  }

  clear() {
    this.orders = null;
  }

  goLibraries() {
    this.router.navigateByUrl('/library');
  }

  goBooks() {
    this.router.navigateByUrl('/libraryBook');
  }

  goWorks() {
    this.router.navigateByUrl('/libraryWork');
  }

  goAuthors() {
    this.router.navigateByUrl('/libraryAuthor');
  }

  goPublishers() {
    this.router.navigateByUrl('/libraryPublisher');
  }

  goTypes() {
    this.router.navigateByUrl('/libraryType');
  }

  goGenres() {
    this.router.navigateByUrl('/libraryGenre');
  }

  goReaders() {
    this.router.navigateByUrl('/libraryReader');
  }

  goOrders() {
    this.router.navigateByUrl('/libraryOrders');
  }

  goAccounting() {
    this.router.navigateByUrl('/libraryAccounting');
  }

  goAuthorsOfBooks() {
    this.router.navigateByUrl('/libraryAuthorsOfBooks');
  }

  goAuthorsOfWorks() {
    this.router.navigateByUrl('/libraryAuthorsOfWorks');
  }

  goMainBooksInLib() {
    this.router.navigateByUrl('/libraryBooksInLib');
  }

  goPublishedWorks() {
    this.router.navigateByUrl('/libraryPublishedWorks');
  }
}
