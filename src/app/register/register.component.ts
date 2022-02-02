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
  mode:any;
  edituserData:any;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  constructor(private userService: UserService, private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      website: [''],
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
    this.userService.registerUser(userData).subscribe((data: any) => {
      if (data) {
        this.userData = data;
        this.registerForm.reset();
      }
    });
  }
  editUser(user: any) {
    this.edituserData=user;
    this.mode="edit";
    this.registerForm.patchValue(user);
  }
}
