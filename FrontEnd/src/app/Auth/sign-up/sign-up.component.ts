import { Component } from '@angular/core';
import {User} from "../User";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ScriptLoaderService} from "../../Services/script-loader.service";
import {AuthService} from "../../Services/auth.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  user?:User;
  signupForm:FormGroup;

  constructor(private LoaderService: ScriptLoaderService, private formBuilder: FormBuilder, private AuthService:AuthService) {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      name: ['', [Validators.required]],
      role: ['', [Validators.required]],


    });

  }

  ngOnInit(): void {
    const Urls = [
      ""
    ];

    this.loadScripts(Urls);

  }

  loadScripts(Urls: string[]): void {
    this.LoaderService.loadScripts(Urls)
      .then(() => {
        console.log('All s loaded successfully.');
      })
      .catch(error => {
        console.error('Error loading s:', error);
      });
  }

  signup():void{
    const user = this.signupForm.value;
    console.log(user);
    this.AuthService.signup(user).subscribe(
      (data) => {
        this.user = data;
        console.log(data);
      },
      (error) => {
        console.error('Error User resources', error);
      }
    );
  }

}
