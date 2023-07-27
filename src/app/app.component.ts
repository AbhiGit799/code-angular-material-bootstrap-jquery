import { preserveWhitespacesDefault } from '@angular/compiler';
import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Observable,filter,map, mergeMap } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces: true,
  viewProviders: [], //viewProviders is for using class.
  encapsulation: ViewEncapsulation.None,

  providers: [], //Making service component level ; //21-March-2023
})


export class AppComponent {

  title="Angular Tutorial";


   
  ngOnInit() {
   
    $("button").click(function () {
      $("#div1").fadeIn();
      $("#div2").fadeIn("slow");
      $("#div3").fadeIn(3000);
    });
  

    $(document).ready(function(){
      $("#flip").click(function(){
        $("#panel").slideToggle("slow");
      });
    });
}



  
}




























