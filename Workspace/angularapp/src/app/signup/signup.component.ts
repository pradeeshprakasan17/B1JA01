import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

constructor(private formbuilder: FormBuilder,private signUpService: SignupService) { }

emailRegex = "^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@" 
            + "[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$";
passwordRegex ="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@#$^!%*?&])[A-Za-z\d$@#$^!%*?&].{7,15}";
  
signUpForm = this.formbuilder.group({
email: ['',[Validators.required,Validators.pattern(this.emailRegex)]],
username:['',[Validators.required,Validators.minLength(3)]],
mobileNumber:['',[Validators.required,Validators.minLength(10)]],
password:['',[Validators.required,Validators.pattern(this.passwordRegex)]],
confirmPassword:['',Validators.required],
userRole : ['']
}); 

errorMessage = {
  email:{
    required : "Email is Required",
    pattern : "Email is Invalid"
  },
  username:{
    required : "Username is Required",
    minlength : "Username should be atleast 3 characters"
  },
  mobileNumber:{
    required : "Mobile Number is Required",
    minlength : "Enter 10 digit mobile number"
  },
  password:{
    required : "Password is Required",
    pattern : "Password should have atleast",
    line1 : "*minimum 8 characters",
    line2 : "*one capital letter, one small letter",
    line3 : "*one number,one special character."
  },
  confirmPassword:{
    required : "Confirm Password is Required",
    mismatch : "Confirm Password does not match."
  },
}

onSubmit(){
  
console.log(this.signUpForm.value);

this.signUpService.signupService(this.signUpForm.value)
.subscribe(
    response => console.log('Success!', response),
    error => console.log('Error!', error)
);
}

setUserRole(){
  if(this.userName?.value == "admin" || this.userName?.value=="Admin"){ 
    this.userRolecontrols.setValue("Admin");
  }else{
    this.userRolecontrols.setValue("Customer");
  }
}

onPasswordMatch() {
if (this.confirmPasswordcontrols.value == this.signUpForm.controls['password'].value) {
this.confirmPasswordcontrols.setErrors(null);
} 
else {
this.confirmPasswordcontrols.setErrors({ mismatch: true });
}
}

onlyNumbersAllowed(event : any):boolean{
const charCode = (event.which)?event.which: event.keyCode;
  if(charCode > 31 && (charCode < 48 || charCode >57)){
    return false;
  } 
    return true;
}

get email(){
return this.signUpForm.get('email');
}
get emailcontrols(){
return this.signUpForm.controls['email'].errors;
}

get userName(){
return this.signUpForm.get('username');
}
get userNamecontrols(){
return this.signUpForm.controls['username'].errors;
}

get mobileNumber(){
return this.signUpForm.get('mobileNumber');
}
get mobileNumbercontrols(){
return this.signUpForm.controls['mobileNumber'].errors;
}

get password(){
return this.signUpForm.get('password');
}
get passwordcontrols(){
return this.signUpForm.controls['password'].errors;
}

get confirmPassword(){
return this.signUpForm.get('confirmPassword');
}
get confirmPasswordcontrols(){
return this.signUpForm.controls['confirmPassword'];
}

get userRolecontrols(){
  return this.signUpForm.controls['userRole'];
}

ngOnInit(): void {
}

}