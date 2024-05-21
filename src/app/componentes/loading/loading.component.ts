import { Component } from '@angular/core';
import { LoadingService } from '../../servicios/loading.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent {

  loading$ = this.loadingService.loading$;

  constructor(private loadingService: LoadingService) { }

  ngOnInit(): void {
  }
}
