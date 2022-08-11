import { Component, OnInit } from '@angular/core';
import { Famous } from '../famous';
import { FamousService } from '../famous.service';

@Component({
  selector: 'app-famous-people-list',
  templateUrl: './famous-people-list.component.html',
  styleUrls: ['./famous-people-list.component.css']
})
export class FamousPeopleListComponent implements OnInit {

  famous:Famous = {} as Famous;
  constructor(private famousService:FamousService) { }

  ngOnInit(): void {
    this.famousService.getFamous().subscribe((response:Famous)=>{
      this.famous = response;
    })
  }

}
