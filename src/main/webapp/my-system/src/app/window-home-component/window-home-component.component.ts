import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginAndRegistrate} from "../services/LoginAndRegistrate";
import {Router} from "@angular/router";

@Component({
  selector: 'app-window-home-component',
  templateUrl: './window-home-component.component.html',
  styleUrls: ['./window-home-component.component.css',
    './vendor/bootstrap/css/bootstrap.min.css',
    './fonts/font-awesome-4.7.0/css/font-awesome.min.css',
  './fonts/Linearicons-Free-v1.0.0/icon-font.min.css',
    './vendor/animate/animate.css',
    './vendor/css-hamburgers/hamburgers.min.css',
  'vendor/animsition/css/animsition.min.css',
    'vendor/select2/select2.min.css',
    'vendor/daterangepicker/daterangepicker.css']
})
export class WindowHomeComponentComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private loginService: LoginAndRegistrate, private router: Router) { }


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([
        Validators.required,
        Validators.minLength(4)
      ])],
      password: ['',  Validators.compose([
        Validators.required,
        Validators.minLength(4)
      ])]
    });
  }

  get logn() { return this.loginForm.controls; }

  getData() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    } else {
      this.loginService.loginUser(this.loginForm.value).subscribe(data => {
        console.log(data['status']);
        if(data['status'] == 'ok')  {
          this.loginService.setData(this.loginForm.value);
          if (this.loginForm.value.username == 'mainLibrarian') {
            this.router.navigateByUrl('/mainLibrary');
          } else if (this.loginForm.value.username == 'librarian') {
            this.router.navigateByUrl('/library');
          } else if (this.loginForm.value.username == 'director') {
            this.router.navigateByUrl('/director');
          } else if (this.loginForm.value.username == 'transporter') {
            this.router.navigateByUrl('/transporter');
          }
        } else {
          alert('Неверный логин или пароль!');
        }
      });
    }
    this.submitted = false;
  }
}
