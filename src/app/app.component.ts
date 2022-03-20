import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title: string = "my-app";
  submitted: boolean = false;
  form = new FormGroup({
    firstname: new FormControl("", [
      Validators.required,
      Validators.pattern("^[a-zA-Z ]*$"),
    ]),
    surname: new FormControl("", [
      Validators.required,
      Validators.pattern("^[a-zA-Z ]*$"),
    ]),
    birthday: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    phonenumber: new FormControl("", [
      Validators.required,
      Validators.pattern("^[0-9]*$"),
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
  });

  onSubmit(): void {
    this.submitted = true;
    console.log(this.form.value);
    if (this.form.invalid) {
      return;
    }

    if (!this.form.invalid) {
      this.form.reset();
    }
  }

  get f() {
    return this.form.controls;
  }
  get firstname() {
    return this.form.get("firstname");
  }
  get surname() {
    return this.form.get("surname");
  }
  get birthday() {
    return this.form.get("birthday");
  }
  get email() {
    return this.form.get("email");
  }
  get phonenumber() {
    return this.form.get("phonenumber");
  }
}
