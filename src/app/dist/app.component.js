"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "my-app";
        this.submitted = false;
        this.form = new forms_1.FormGroup({
            firstname: new forms_1.FormControl("", [
                forms_1.Validators.required,
                forms_1.Validators.pattern("^[a-zA-Z ]*$"),
            ]),
            surname: new forms_1.FormControl("", [
                forms_1.Validators.required,
                forms_1.Validators.pattern("^[a-zA-Z ]*$"),
            ]),
            birthday: new forms_1.FormControl("", [forms_1.Validators.required]),
            email: new forms_1.FormControl("", [forms_1.Validators.required, forms_1.Validators.email]),
            phonenumber: new forms_1.FormControl("", [
                forms_1.Validators.required,
                forms_1.Validators.pattern("^[0-9]*$"),
                forms_1.Validators.minLength(10),
                forms_1.Validators.maxLength(10),
            ])
        });
    }
    AppComponent.prototype.onSubmit = function () {
        this.submitted = true;
        console.log(this.form.value);
        if (this.form.invalid) {
            return;
        }
        if (!this.form.invalid) {
            this.form.reset();
        }
    };
    Object.defineProperty(AppComponent.prototype, "f", {
        get: function () {
            return this.form.controls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "firstname", {
        get: function () {
            return this.form.get("firstname");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "surname", {
        get: function () {
            return this.form.get("surname");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "birthday", {
        get: function () {
            return this.form.get("birthday");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "email", {
        get: function () {
            return this.form.get("email");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "phonenumber", {
        get: function () {
            return this.form.get("phonenumber");
        },
        enumerable: true,
        configurable: true
    });
    AppComponent = __decorate([
        core_1.Component({
            selector: "app-root",
            templateUrl: "./app.component.html",
            styleUrls: ["./app.component.scss"]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=app.component.js.map
