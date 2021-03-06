import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session/session.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 registerForm: FormGroup = new FormGroup({
    username: new FormControl('', [ Validators.required, Validators.minLength(3)]),

  });

  constructor(private session: SessionService, private router:Router) { 
    if(this.session.get() !==false){
      this.router.navigateByUrl('/pokemon')
    }
  }

  ngOnInit(): void {
  }

  get username(){
    return this.registerForm.get('username');
  }

  onRegisterClicked(){

      this.session.save(this.registerForm.value);  
      this.router.navigateByUrl('/trainer');
  
  }
}
