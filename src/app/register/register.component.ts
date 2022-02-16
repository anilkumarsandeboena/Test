import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  mode: any;
  edituserData: any;
  submitted = false;
  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('', [Validators.required, Validators.minLength(10)]);
  get f() {
    return this.registerForm.controls;
  }
  constructor(private userService: UserService, private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required, Validators.minLength(10)],
      website: [],
    });
  }
  userData: any;

  ngOnInit(): void {}
  register() {
    let controls: any = this.registerForm.controls;
    let userData: any = {
      name: controls?.name.value,
      email: controls?.email.value,
      phone: controls?.phone.value,
      website: controls?.website.value,
    };
    if (this.registerForm.invalid) {
      return;
    }

    this.userService.registerUser(userData).subscribe((data: any) => {
      if (data) {
        this.userData = data;
        this.registerForm.reset();
      }
    });
  }
  editUser(user: any) {
    this.edituserData = user;
    this.mode = 'edit';
    this.registerForm.patchValue(user);
  }
}
