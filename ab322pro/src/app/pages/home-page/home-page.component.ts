import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  products: any = []
  filter: any;
  nuts: boolean = false
  spiciness: string | number = "Not Chosen"
  spicinessValue: any = 0
  vegie: boolean = false;
  value: any;
  productshow: any = []

  constructor(public productsService: ProductsService) {
    
  }

  reciveSent($event: any){
    this.productshow = $event
    console.log(this.productshow)
  }
  ngOnInit() {
    this.productsService.getProducts().subscribe((data) => {
      this.products = data;
      this.productshow = data;
    })
  }
  spicinessChange(){
    if(this.spicinessValue == 0){
      this.spiciness = "Not Chosen"
    }else {
      this.spicinessValue--

      this.spiciness = this.spicinessValue
    }
  }
  reset() {
    this.productshow = this.products
    this.spiciness = "Not Chosen"
    this.spicinessValue = 0
    this.vegie = false
    this.nuts = false
  }

  getFiltered() {
    this.productshow = []
    for(let i = 0; i < this.products.length; i++){
      if(this.spiciness == "Not Chosen"){
        if(this.products[i].nuts !== this.nuts && this.products[i].vegieeterian !== this.vegie){
          this.productshow.push(this.products[i])
        }
      }else {
        if(this.products[i].nuts !== this.nuts && this.products[i].vegieeterian !== this.vegie && this.products[i].spiciness == this.spicinessValue - 1){
          this.productshow.push(this.products[i])
        }
      }
    }
    console.log(this.productshow)
    return this.productshow
  }


}
