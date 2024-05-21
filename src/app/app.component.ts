import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './componentes/loading/loading.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoadingComponent, ReactiveFormsModule, HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'unilocal_web';

  footer = 'Universidad del Quindío - 2024-1';

  constructor(private router: Router,
		private route: ActivatedRoute,
){}

  public irALogin(){
    this.router.navigate(['/login'], { relativeTo: this.route.parent });
  }

  public irARegistro(){
    this.router.navigate(['/registro'], { relativeTo: this.route.parent });
  }
}
