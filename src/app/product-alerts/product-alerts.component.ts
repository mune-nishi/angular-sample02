import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})

eexport class ProductAlertsComponent implements OnInit {
  @Input() product!: Product;
  constructor() { }

  ngOnInit() {
  }

}