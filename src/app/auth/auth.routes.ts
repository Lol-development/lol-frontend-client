import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ValidateEmailComponent } from './validate-email/validate-email.component';


const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'Register', component: RegisterComponent },
    {path: 'Validate-email', component: ValidateEmailComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
