import { Component, OnInit } from "@angular/core";
import { CommonService } from "src/app/common.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  users: Object;
  editObj: any;
  userDetails = {
    firstName: "",
    lastName: ""
  };
  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.getLatestUsers();
  }

  addUser(user) {
    user.id = "null";
    this.commonService.addUserFromService(user.value).subscribe(response => {
      console.log("User Added");
      this.getLatestUsers();
      user.reset(); //TO reset the Form
    });
  }

  deleteUser(user) {
    this.commonService.deleteUserFromServer(user).subscribe(response => {
      console.log("user Deleted");
      this.getLatestUsers();
    });
  }
  getLatestUsers() {
    this.commonService.getLatestUsersFromServer().subscribe(response => {
      this.users = response;
    });
  }

  editUser(user) {
    this.userDetails = user;
  }
  updateUser(user) {
    this.commonService
      .updateUserFromService(this.userDetails)
      .subscribe(response => {
        console.log("User Updated");
        this.getLatestUsers();
        user.reset();
      });
  }
}
