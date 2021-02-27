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
import {MainLibraryService} from "../../services/ManLibraryService";

@Component({
  selector: 'app-main-window',
  templateUrl: './director-authors-of-works-window.component.html',
  styleUrls: ['./director-authors-of-works-window.component.css']
})
export class DirectorAuthorsOfWorksWindowComponent implements OnInit {
  tableForm: FormGroup;
  submitted = false;
  selected = '';
  user: User = null;

  authorsOfWorks: AuthorsOfWorks[] = null;
  authorsOfWorksColumns: string[] = ['id', 'author_name', 'author_born', 'author_died', 'work_name', 'type', 'genre'];


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
    this.router.navigateByUrl('/director');
  }

  goBooks() {
    this.router.navigateByUrl('/directorBook');
  }

  goWorks() {
    this.router.navigateByUrl('/directorWork');
  }

  goAuthors() {
    this.router.navigateByUrl('/directorAuthor');
  }

  goPublishers() {
    this.router.navigateByUrl('/directorPublisher');
  }

  goTypes() {
    this.router.navigateByUrl('/directorType');
  }

  goGenres() {
    this.router.navigateByUrl('/directorGenre');
  }

  goReaders() {
    this.router.navigateByUrl('/directorReader');
  }

  goOrders() {
    this.router.navigateByUrl('/directorOrders');
  }

  goAccounting() {
    this.router.navigateByUrl('/directorAccounting');
  }

  goAuthorsOfBooks() {
    this.router.navigateByUrl('/directorAuthorsOfBooks');
  }

  goAuthorsOfWorks() {
    this.router.navigateByUrl('/directorAuthorsOfWorks');
  }

  goMainBooksInLib() {
    this.router.navigateByUrl('/directorBooksInLib');
  }

  goPublishedWorks() {
    this.router.navigateByUrl('/directorPublishedWorks');
  }
}
