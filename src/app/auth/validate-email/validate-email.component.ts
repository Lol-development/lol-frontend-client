import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-validate-email',
  templateUrl: './validate-email.component.html',
  styles: [
  ]
})
export class ValidateEmailComponent implements OnInit {

  public verifyEmailForm = this.fb.group({
    code: ['', Validators.required],
 });
  constructor(private fb: FormBuilder,  private router: Router, private authsvc: AuthService,) { }

  ngOnInit(): void {
  }

  validateEmail(){
    const verifyForm = {
      'code_id':  localStorage.getItem('code_id') ,
      'code_asign': `${this.verifyEmailForm.controls['code'].value}`,
      "type": "verify_email",
      "method":"EMAIL"
    }

    this.authsvc.validateCode(verifyForm)
            .subscribe((resp:any)=> {
              if (resp.data.ok) {
                const body  =  {
                  email: localStorage.getItem('email')
                }
                this.authsvc.validateEmail(body)
                      .subscribe((resp:any) => {
                        if (resp.data.validateEmail) {
                          console.log(resp);
                          this.router.navigateByUrl('');
                          localStorage.clear();
                        };
                        })
              } else if (!resp.data.ok) {
                console.log(resp)
                Swal.fire('Ooops', 'código incorrecto', 'error')

              }
            })
  }

}
