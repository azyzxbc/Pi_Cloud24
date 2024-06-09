import {Component, OnInit} from '@angular/core';
import {ScriptLoaderService} from '../../Services/script-loader.service'
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../Services/auth.service";
import {User} from "../User";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  user?:User;
  loginForm:FormGroup;

  constructor(private LoaderService: ScriptLoaderService, private formBuilder: FormBuilder, private AuthService:AuthService,private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],

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

  login():void{
    const user = this.loginForm.value;
    console.log(user);
    this.AuthService.login(user).subscribe(
      (data) => {
        this.user = data;
        this.router.navigate(['/admin']);
        sessionStorage.setItem('user', data.jwtToken);

      },
      (error) => {
        console.error('Error User resources', error);
      }
    );
  }
}
