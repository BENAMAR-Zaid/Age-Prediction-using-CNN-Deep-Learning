import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  form: FormGroup |any;
  headers:HttpHeaders|any;

  constructor(private formBuilder:FormBuilder ,private http : HttpClient , private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      s:'',
      a:''
      
    });
    //this.Teams = this.getTeams() 
    console.log(this.form)
  
  }


  submit(): void{
    this.http.post('http://localhost:8000/pred',this.form.getRawValue()).subscribe(res =>{
      
      console.log(res);
      const resu= Object.values(res)
       Swal.fire({
        position: 'top-end',
         icon: 'success',
         title: '<h1 style="color:#361681;">Age Probale Du joueur : \n \n </h1>'
         +'<h1 style="color:#011144;"> Speed = '+this.form.getRawValue().s +" </h1>"
         +"<h1 style='color:#011144;'>    X   </h1> "
         +'<h1 style="color:#011144;"> Acceleration = '+this.form.getRawValue().a +"\n \n "
         +"<h1 style='color:#011144;'>    Donc   </h1> "+"\n"
         +'<h1 style="color:#011144;"> Age = '+parseFloat(resu[0]).toFixed(2)+"\n ",

         
         showConfirmButton: false,
         timer: 6000
       })


      
    })
     
  }


}
