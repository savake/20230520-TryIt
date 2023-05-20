import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  product!: Product | undefined;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    const params = this.route.snapshot.paramMap;
    const productIdRoute = Number(params.get('productId'));

    this.product = products.find((e) => e.id === productIdRoute);
  }

  addToCart(product: Product) {
    this.cartService.addToProduct(product);
    window.alert('add to cart');
  }
}
