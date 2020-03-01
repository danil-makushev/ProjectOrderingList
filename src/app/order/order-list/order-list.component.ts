import { Component, OnInit } from '@angular/core';
import { Part } from 'src/app/sharred/part.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  parts: Part[] = [
    new Part("test Part Name", 2),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
