import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Complete, Famous } from '../famous';
import { FamousService } from '../famous.service';

@Component({
  selector: 'app-famouse-people-details',
  templateUrl: './famouse-people-details.component.html',
  styleUrls: ['./famouse-people-details.component.css']
})
export class FamousePeopleDetailsComponent implements OnInit {
  famous:Complete = {} as Complete;
  constructor(private route:ActivatedRoute, private famousService:FamousService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    let name:string = String(routeParams.get("firstName"));
    this.famousService.getFamous().subscribe((response:Famous)=>{
      this.famous = response.complete.find(f => f.firstName == name)!;

    })
  }

}
