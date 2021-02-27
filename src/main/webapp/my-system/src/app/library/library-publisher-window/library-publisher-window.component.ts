import {Component, Inject, Input, OnInit} from '@angular/core';
import {User} from '../../data/User';
import {LoginAndRegistrate} from '../../services/LoginAndRegistrate';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Publisher} from "../../data/Publisher";
import {LibraryService} from "../../services/LibraryService";

@Component({
  selector: 'app-main-window',
  templateUrl: './library-publisher-window.component.html',
  styleUrls: ['./library-publisher-window.component.css']
})
export class LibraryPublisherWindowComponent implements OnInit {
  tableForm: FormGroup;
  submitted = false;
  selected = '';
  user: User = null;

  publishers: Publisher[] = null;
  publisherColumns: string[] = ['id', 'name',  'address', 'phone', 'mail'];


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
      publisher_name: [''],
      publisher_address: [''],
      publisher_phone: [''],
      publisher_mail: ['']
    });
  }

  get logn() { return this.tableForm.controls; }



  getData() {
    this.submitted = true;
    this.publishers = null;
    if (this.tableForm.invalid) {
      return;
    } else if (this.selected === 'search') {
      const publisher = new Publisher();
      publisher.name = this.tableForm.value['publisher_name'];
      publisher.address = this.tableForm.value['publisher_address'];
      this.clear();
      this.mainLibraryService.searchPublisher(publisher).subscribe((answer: Publisher[]) => {
        if (answer != null) {
          this.publishers = answer;
        } else {
          alert('Ошибка! Данные отсутствуют!')
        }
      });
    }else if (this.selected === 'get') {
      this.getPublishersFromDB();
    }
    this.submitted = false;
  }

  private getPublishersFromDB() {
    this.mainLibraryService.getPublishers().subscribe((answer: Publisher[]) => {
      if (answer != null) {
        this.publishers = answer;
      } else {
        alert('Ошибка! Данные отсутствуют!')
      }
    });
  }

  clear() {
    this.publishers = null;
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
