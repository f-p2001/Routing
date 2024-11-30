import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';  // Import RouterLink
import { CommonModule } from '@angular/common';
import { ServiceDetailsComponent } from '../service-details/service-details.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  imports: [RouterLink, CommonModule, ServiceDetailsComponent, FooterComponent]  // Import RouterLink for standalone component
})
export class ServicesComponent implements OnInit {

  // Sample services data
  services = [
    { id: 1, name: 'Haircut', category: 'Hair' },
    { id: 2, name: 'Facial', category: 'Skincare' },
    { id: 3, name: 'Manicure', category: 'Nails' },
    { id: 4, name: 'Pedicure', category: 'Nails' },
    { id: 5, name: 'Massage', category: 'Relaxation' }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {}

  // Handle delete action
  deleteService(id: number): void {
    if (confirm('Are you sure you want to delete this service?')) {
      // Filter out the deleted service
      this.services = this.services.filter(service => service.id !== id);
    }
  }
}

