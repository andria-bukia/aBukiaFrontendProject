import { Component, EventEmitter, Output } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  categories: any = []
  products: any = []


  constructor(public productService: ProductsService) {
    this.getAllProducts()
  }

  ngOnInit(){
    this.productService.getAllCategories().subscribe((data: any) => {
      this.categories = data
    })
  }

  categoryFilter(id: any) {
    this.productService.getCategoryById(id).subscribe((data: any) => {
      this.products = data.products
    })

  }

  getAllProducts() {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data
    })
  }

  @Output() Products = new EventEmitter<any>() 

  sent(){
    this.Products.emit(this.products)    
  }
}
