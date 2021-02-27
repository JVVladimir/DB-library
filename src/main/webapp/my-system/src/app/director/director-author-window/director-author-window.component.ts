import {Component, Inject, Input, OnInit} from '@angular/core';
import {User} from '../../data/User';
import {LoginAndRegistrate} from '../../services/LoginAndRegistrate';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Author} from "../../data/Author";
import {LibraryService} from "../../services/LibraryService";
import {MainLibraryService} from "../../services/ManLibraryService";

@Component({
  selector: 'app-main-window',
  templateUrl: './director-author-window.component.html',
  styleUrls: ['./director-author-window.component.css']
})
export class DirectorAuthorWindowComponent implements OnInit {
  tableForm: FormGroup;
  submitted = false;
  selected = '';
  user: User = null;

  authors: Author[] = null;
  authorColumns: string[] = ['id', 'name', 'born', 'died'];


  constructor(public dialog: MatDialog, private formBuilder: FormBuilder, private service: LoginAndRegistrate, private mainLibraryService: MainLibraryService, private router: Router) {
    this.user = this.service.getData();
    if (this.user == null || this.user === undefined) {
      this.router.navigateByUrl('/');
    }
  }

  ngOnInit(): void {
    this.tableForm = this.formBuilder.group({
      table: ['', Validators.compose([
        Validators.required
      ])],
      author_name: [''],
      author_born: [''],
      author_died: [''],
    });
  }

  get logn() {
    return this.tableForm.controls;
  }


  getData() {
    this.submitted = true;
    this.authors = null;
    if (this.tableForm.invalid) {
      return;
    } else if (this.selected === 'search') {
      const author = new Author();
      author.name = this.tableForm.value['author_name'];
      author.born = this.tableForm.value['author_born'];
      author.died = this.tableForm.value['author_died'];
      this.clear();
      this.mainLibraryService.searchAuthor(author).subscribe((answer: Author[]) => {
        if (answer != null) {
          this.authors = answer;
        } else {
          alert('Ошибка! Данные отсутствуют!')
        }
      });
    } else if (this.selected === 'get') {
      this.getAuthorsFromDB();
    }
    this.submitted = false;
  }

  private getAuthorsFromDB() {
    this.mainLibraryService.getAuthors().subscribe((answer: Author[]) => {
      if (answer != null) {
        this.authors = answer;
      } else {
        alert('Ошибка! Данные отсутствуют!')
      }
    });
  }

  clear() {
    this.authors = null;
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
