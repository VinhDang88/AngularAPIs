import { Component, OnInit } from '@angular/core';
import { Donut } from '../donut';
import { DonutService } from '../donut.service';

@Component({
  selector: 'app-donut-list',
  templateUrl: './donut-list.component.html',
  styleUrls: ['./donut-list.component.css']
})
export class DonutListComponent implements OnInit {

donut:Donut = {} as Donut

  constructor(private donutService:DonutService) { }

  ngOnInit(): void {

    this.donutService.getApi().subscribe((response:Donut)=>{
      this.donut = response;

    });
  }

}
