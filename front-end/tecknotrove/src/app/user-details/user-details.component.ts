import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from './user-details-service/user-details.service';
import { NotificationService } from '../shared/notification-service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.sass'],
})
export class UserDetailsComponent implements OnInit {
  username: string;
  name: string;
  userDetails: any[] = [];
  id: number;
  constructor(
    private userDetailsService: UserDetailsService,
    private notificationService: NotificationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = parseInt(params['id']);
    });

    this.getUserDetails();
  }

  getUserDetails(): void {
    this.userDetailsService.getUserDetails().subscribe(
      (responseUserDetails: any) => {
        this.userDetails = responseUserDetails?.data;
        debugger;
        const currentUser = this.userDetails.filter(
          (user) => user.id === this.id
        );
        this.username = currentUser[0].username;
        this.name = currentUser[0].name;
        this.notificationService.showSuccess('User list fetched successfully');
      },
      (error) => {
        debugger;
        this.notificationService.showError(
          'Error occured while retrieveing users list. Please try again'
        );
      }
    );
  }
  logout() {
    localStorage.removeItem('userId');
    this.router.navigate(['/login']);
  }
}
