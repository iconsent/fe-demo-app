import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import {PropertiesService} from './properties.service';
import {MatTableDataSource} from '@angular/material/table';
export interface Property {
  key: string;
  value: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'fe-demo-app';
  error = false;
  data: any;

  constructor(public svc: PropertiesService) { }


  ngOnInit(): void {
    this.svc.getProperties().subscribe(
      (data) => {
        this.error = false;
        console.log(data);
        this.data = data;
      },
      error => {
        this.error = true;
        console.log(error);
      }
    );
  }
  
}
