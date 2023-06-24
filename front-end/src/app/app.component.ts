import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}
  title = 'tecknotrove';

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.router.navigate(['/user-details', userId]);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
