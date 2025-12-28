import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  constructor(private router: Router) {}

  public navigateToProducts(): void {
    this.router.navigate(['/products']);
  }

  public navigateToCart(): void {
    this.router.navigate(['/cart']);
  }

  public getHeroImage(): string {
    return 'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1200&h=600&fit=crop';
  }

  public getFeatureImage(index: number): string {
    const images = [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop',
    ];
    return images[index % images.length];
  }
}
