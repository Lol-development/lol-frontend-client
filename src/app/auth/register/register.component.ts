import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { GlobalService } from 'src/app/services/global.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  public password1: any = '';
  public password2: any = '';
  public terms: boolean = false;
  public prefixs: any;
  public email: any = '';
  public registerform = this.fb.group({
    client_name: ['', Validators.required],
    client_name_charge: ['', [Validators.required, Validators.email]],
    address: ['', Validators.required],
    social_linkedin: ['', Validators.required],
    email: ['', Validators.required],
    phone_prefix: ['', Validators.required],
    phone_number: ['',[ Validators.required, Validators.minLength(10), Validators.maxLength(10)] ],
    password1: ['', Validators.required, ],
    password: ['', Validators.required],
    terms_conditions: ['', Validators.required],
 })
  constructor(private fb: FormBuilder, private router: Router, private authsvc: AuthService, private globalSvc:GlobalService) { }

  ngOnInit(): void {
    this.getPrefixNumbers();
    localStorage.clear();
  }
  Register(){
    if (this.registerform.controls['password1'].value !==  this.registerform.controls['password'].value ) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'las contraseñas deben coincidir!',
        showCancelButton: false
      })   
    } else { 
      this.authsvc.register(this.registerform.value)
            .subscribe( (resp:any) => {  
              console.log(resp)
              if (resp.error === true) {
                 Swal.fire( `${resp.message}`, 'Vuelve a intentarlo', 'error'),
                 console.log(resp)
              } else if(resp.error == false ){
                 localStorage.setItem('email', this.registerform.controls['email'].value )
                  const  sendEmailCode = { 
                    email: this.registerform.controls['email'].value
                   }
                  this.authsvc.sendConfirmEmail(sendEmailCode)
                      .subscribe((resp:any) => {
                        console.log(resp)
                        if (resp.error === false) {
                          localStorage.setItem('code_id', resp.data.code_id);
                          this.router.navigateByUrl('/Validate-email')
                        } else {
                          Swal.fire( `${resp.message}`, 'Vuelve a intentarlo', 'error');
                          
                        }
                      })
              } 
              }, (err => {
              Swal.fire('Ooops', 'Código incorrecto', 'error')
              console.log(err)
            }))
     }
  };

 

  getPrefixNumbers(){
    this.globalSvc.getPrefixNumber()
    .subscribe(resp => {
      this.prefixs = resp ;
    })
  };
}
