import {Component, Inject, Input, OnInit} from '@angular/core';
import {User} from '../../data/User';
import {LoginAndRegistrate} from '../../services/LoginAndRegistrate';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Library} from "../../data/Library";
import {Reader} from "../../data/Reader";
import {LibraryService} from "../../services/LibraryService";

@Component({
  selector: 'app-main-window',
  templateUrl: './library-reader-window.component.html',
  styleUrls: ['./library-reader-window.component.css']
})
export class LibraryReaderWindowComponent implements OnInit {
  tableForm: FormGroup;
  submitted = false;
  selected = '';
  user: User = null;

  readers: Reader[] = null;
  readerColumns: string[] = ['id', 'name', 'pasp', 'address', 'phone', 'mail', 'library_name', 'library_address'];


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
      reader_name: [''],
      reader_pasp: [''],
      reader_address: [''],
      reader_phone: [''],
      reader_mail: [''],
      library_id: ['']
    });
  }

  get logn() { return this.tableForm.controls; }

  getData() {
    this.submitted = true;
    this.readers = null;
    if (this.tableForm.invalid) {
      return;
    } else if (this.selected === 'search') {
      const reader = new Reader();
      reader.name = this.tableForm.value['reader_name'];
      reader.pasp = this.tableForm.value['reader_pasp'];
      reader.phone = this.tableForm.value['reader_phone'];
      this.clear();
      this.mainLibraryService.searchReader(reader).subscribe((answer: Reader[]) => {
        if (answer != null) {
          this.readers = answer;
        } else {
          alert('Ошибка! Данные отсутствуют!')
        }
      });
    } else if (this.selected === 'add') {
      const reader = new Reader();
      reader.name = this.tableForm.value['reader_name'];
      reader.pasp = this.tableForm.value['reader_pasp'];
      reader.address = this.tableForm.value['reader_address'];
      reader.phone = this.tableForm.value['reader_phone'];
      reader.mail = this.tableForm.value['reader_mail'];
      reader.library = new Library();
      reader.library.id = this.tableForm.value['library_id'];
      this.clear();
      this.mainLibraryService.addReader(reader).subscribe((answer: Reader[]) => {
        this.getReadersFromDB();
      });
    } else if (this.selected === 'get') {
      this.getReadersFromDB();
    }
    this.submitted = false;
  }

  private getReadersFromDB() {
    this.mainLibraryService.getReaders().subscribe((answer: Reader[]) => {
      if (answer != null) {
        this.readers = answer;
      } else {
        alert('Ошибка! Данные отсутствуют!')
      }
    });
  }

  clear() {
    this.readers = null;
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
