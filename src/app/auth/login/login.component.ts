import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  public loginform = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
 })
 public toNumber: string = '';

 constructor(private fb: FormBuilder, private router: Router, private authsvc: AuthService) { }

  ngOnInit(): void {
  }
  login(){
    this.authsvc.login(this.loginform.value)
    .subscribe((resp:any) => {
      localStorage.setItem('token', resp.data.jwt)
      localStorage.setItem('fullname', resp.data.user.client_name);
      localStorage.setItem('email', resp.data.user.email);
      localStorage.setItem('id', resp.data.user.id);
      localStorage.setItem('phone_number', resp.data.user.phone_number);
      localStorage.setItem('phone_prefix', resp.data.user.phone_prefix);
      localStorage.setItem('admin', resp.data.user.admin);
      console.log(resp)
    this.router.navigateByUrl('/Dashboard')
   
    }, (err => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Revisa los campos!',
        showCancelButton: false
      })
      console.log(err)
    }))
  }

}
