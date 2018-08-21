import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
//import { componentFactoryName } from '../../../node_modules/@angular/compiler';
import{ HomePage} from '../home/home';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})

export class loginPage{
    datos: Observable<any>;
    NombreUsuario: string='';
    usuario = {
        nombre:'',
        password:''
    }
    // getting-started.js
    
    constructor
    (
        /*http cliente */ 
        public NavCtrl: NavController,
        public httpClient: HttpClient,
        
    ){
        this.datos = this.httpClient.get('http://polls.apiblueprint.org/questions');
        this.datos
        .subscribe(data => {
          console.log('my data: ', data); 
        })

    }
    
    goToHome(){
        this.NavCtrl.setRoot(HomePage)
    }    
    
}
