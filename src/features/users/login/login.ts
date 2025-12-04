import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NullableFormControl } from '@api/security/models/common/nullable-form-control.model';
import { UserLogin } from '@api/security/models/user-login.model';
import { UsersFacade } from '@api/security/redux/users/users.facade';
import { CanAccessHeadRequest } from '@api/security/services/permission.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'user-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss',
  providers: [UsersFacade]
})
export class Login implements OnInit, OnDestroy {
  private subs: Subscription;
  private request?: CanAccessHeadRequest;
  form: FormGroup<NullableFormControl<UserLogin>>;
  
  constructor(private usersFacade: UsersFacade, private fb: FormBuilder, private readonly router: Router) {
    this.form = fb.group<UserLogin>(new UserLogin());
    this.subs = this.form.valueChanges.subscribe(state => this.usersFacade.LoginPostRequestUpdate({
      userLogin: state
    }));
    this.subs.add(this.usersFacade.LoginPost$.subscribe(token => {
      if (typeof token !== 'object') {
        cookieStore.set('token', token);
        if(this.request && this.request.xUrl) this.router.navigate([this.request.xUrl])
      }
    }))
  }

  ngOnInit(): void {
    this.request = history.state?.request as CanAccessHeadRequest;
    this.usersFacade.LoginPostInit();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
    this.usersFacade.LoginPostInit();  
  }
  
  submit(){
    this.usersFacade.LoginPost();
  }
}
