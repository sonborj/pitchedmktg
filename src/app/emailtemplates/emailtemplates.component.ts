import { Component, OnInit, ViewChild } from '@angular/core';
import { EmailtemplatesService } from '../services/emailtemplates.service';
import { Observable, of } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { User } from '../models/user.model';
import {
  MatButton, MatPaginator, MatTableDataSource
} from '@angular/material';
import { Router } from '@angular/router';


@Component({
  selector: 'app-emailtemplates',
  templateUrl: './emailtemplates.component.html',
  styleUrls: ['./emailtemplates.component.css']
})


export class EmailtemplatesComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['position', 'templateName', 'createdBy', 'subject','action'];  
  dataSource = new MatTableDataSource();
  isLoading: boolean = false;

  constructor(
    private service: EmailtemplatesService,
    private router: Router) { }

  ngOnInit() {
    
    this.getList()
    this.dataSource.paginator = this.paginator;
    
  }

  public getList() {

    this.isLoading = false;

    this.service.getList().subscribe(
      data => {
        this.dataSource.data = data;
      },
      err => {
        console.log(err);
      },
      () => {
        //on completion
        this.isLoading = true;
      }

    );

  }

  private viewRecord(id) {
    this.router.navigate(['/emailtemplates', id]);

  }
}



//export class UserDataSource extends DataSource<any> {
//  constructor(private pitchedService: PitchedService) {
//    super();
//  }
//  connect(): Observable<User[]> {

//    return this.pitchedService.getUsers();
//  }
//  disconnect() { }
//}


