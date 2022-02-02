import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list-cards',
  templateUrl: './user-list-cards.component.html',
  styleUrls: ['./user-list-cards.component.scss'],
})
export class UserListCardsComponent implements OnInit, OnChanges {
  @Input() userData:any;
  @Input() mode:any;
  @Output() editEvent = new EventEmitter<any>();
  users:any=[]
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    /* this.userService.getUsers()
  .subscribe((data:any)=>{console.log(data)}) */
  }
  ngOnChanges(): void {
    if(this.mode=="edit"){
      console.log(this.userData)
    }
    else if(this.userData&&this.mode!="edit"){
      this.users.push(this.userData);
    }
  }
  
  deleteUser(user:any, i:any){
    this.userService.deleteUser(user.id)
  .subscribe((data:any)=>{
    if(data){
      console.log("delete", data)
 /* const index = this.users.indexOf(i); */
    this.users.splice(i, 1);
    }
  })
  }
  editUser(user:any){
this.editEvent.emit(user)
  }
}
