import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,Loading } from 'ionic-angular';
import { HomePage } from "../home/home";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { StorageProvider } from '../../providers/storage/storage';
import { SelectImageProvider } from '../../providers/select-image/select-image'
import { Toast } from '@ionic-native/toast'
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public loginForm:FormGroup;
  public loading:Loading;
  cucumber: boolean = false;
  public fireAuth: any;
  public userData: any;


logindata ={email:'',password:''}
  constructor(public navCtrl: NavController, public navParams: NavParams,  public loadingCtrl: LoadingController,public formBuilder: FormBuilder,
  public auth:AuthProvider,public storage:StorageProvider,public loader:SelectImageProvider, public toast:Toast) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      checkbox:[''],
      password: ['', Validators.compose([Validators.minLength(6), 

        Validators.required])]
    });
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  updateCucumber() {
      console.log('Cucumbers new state:' + this.cucumber);
      this.storage.setStorage("isparent",this.cucumber);
    }
  loginUser(): void {
    
    if (!this.loginForm.valid){
        console.log(this.loginForm.value);
      } else {
        
        if(this.cucumber){
        this.loginuserStat(this.loginForm.value.email,this.loginForm.value.password)
        } else{
          this.loginuserStat(this.loginForm.value.email,this.loginForm.value.password)
          this.storage.setStorage("isparent",this.cucumber);
        }
      }
   
  }
  loginuserStat(email,password){
    this.loading = this.loadingCtrl.create();
          this.loading.present();
          this.auth.doLogin(this.loginForm.value.email, this.loginForm.value.password)
            .then( authData => {
              console.log("data resolve =>>>> "+JSON.stringify(authData))
              this.loading.dismiss()
              this.navCtrl.setRoot("HomePage");
                
            })
          .catch((error) => {
             
              // this.=== (JSON.stringify(error)).
                this.loading.dismiss().then( () => {
                   console.log("Firebase failure: " + JSON.stringify(error));
                   this.toast.show(error.message,"long","bottom")
                  // alert("login failed")
                
              }); 
            });
       
  }
  forgotPass(){
    this.navCtrl.push("ForgotPassPage")
  }
  signup(){
    this.navCtrl.push("ResgisterPage")
  }
}
