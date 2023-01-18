import {Component, OnInit} from '@angular/core';
import {FoodsService} from "../services/foods/foods.service";
import {Food} from "../shared/models/Food";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  foods_t: Food[] = [];
  constructor(private foodsService: FoodsService) {}
  ngOnInit(): void{
    this.foods_t = this.foodsService.getAll();
  }



}
