import {Component, Inject, Input, OnInit} from '@angular/core';
import {User} from '../../data/User';
import {LoginAndRegistrate} from '../../services/LoginAndRegistrate';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthorsOfWorks} from "../../data/AuthorsOfWorks";
import {Author} from "../../data/Author";
import {Work} from "../../data/Work";
import {LibraryService} from "../../services/LibraryService";

@Component({
  selector: 'app-main-window',
  templateUrl: './library-authors-of-works-window.component.html',
  styleUrls: ['./library-authors-of-works-window.component.css']
})
export class LibraryAuthorsOfWorksWindowComponent implements OnInit {
  tableForm: FormGroup;
  submitted = false;
  selected = '';
  user: User = null;

  authorsOfWorks: AuthorsOfWorks[] = null;
  authorsOfWorksColumns: string[] = ['id', 'author_name', 'author_born', 'author_died', 'work_name', 'type', 'genre'];


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
      work_name: [''],
      author_name: [''],
      work_id: [''],
      author_id: ['']
    });
  }

  get logn() { return this.tableForm.controls; }

  getData() {
    this.submitted = true;
    this.authorsOfWorks = null;
    if (this.tableForm.invalid) {
      return;
    } else if (this.selected === 'search') {
      const authorOfWork = new AuthorsOfWorks();
      authorOfWork.author = new Author();
      authorOfWork.author.name = this.tableForm.value['author_name'];
      authorOfWork.work = new Work();
      authorOfWork.work.name = this.tableForm.value['work_name'];
      this.clear();
      this.mainLibraryService.searchAuthorOfWork(authorOfWork).subscribe((answer: AuthorsOfWorks[]) => {
        if (answer != null) {
          this.authorsOfWorks = answer;
        } else {
          alert('Ошибка! Данные отсутствуют!')
        }
      });
    } else if (this.selected === 'get') {
      this.getAuthorsOfWorksFromDB();
    }
    this.submitted = false;
  }

  private getAuthorsOfWorksFromDB() {
    this.mainLibraryService.getAuthorsOfWork().subscribe((answer: AuthorsOfWorks[]) => {
      if (answer != null) {
        this.authorsOfWorks = answer;
      } else {
        alert('Ошибка! Данные отсутствуют!')
      }
    });
  }

  clear() {
    this.authorsOfWorks = null;
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
