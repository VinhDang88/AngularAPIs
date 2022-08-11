import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Donut, OneDonut, Result } from '../donut';
import { DonutService } from '../donut.service';

@Component({
  selector: 'app-donut-details',
  templateUrl: './donut-details.component.html',
  styleUrls: ['./donut-details.component.css']
})
export class DonutDetailsComponent implements OnInit {
displayDonuts:OneDonut = {} as OneDonut;

  constructor(private route:ActivatedRoute, private donutService:DonutService ) { }

  ngOnInit(): void {
    let routeParams = this.route.snapshot.paramMap;
    let id: number = Number(routeParams.get("id"));
    this.donutService.donutDetail(id).subscribe((response:OneDonut)=> {
      this.displayDonuts = response;

    })
  }

}
