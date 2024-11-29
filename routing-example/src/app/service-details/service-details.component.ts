import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-service-details',
  standalone: true, // Mark this component as standalone if using standalone components
  imports: [FormsModule],  // Add FormsModule here
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {

  serviceId: number = 0;
  service = {
    id: 0,
    name: '',
    description: '',
    category: '',
    price: 0
  };

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // Retrieve the service ID from the route params
    this.route.params.subscribe(params => {
      this.serviceId = +params['id']; // '+' converts the string to number
      this.getServiceDetails(this.serviceId);
    });
  }

  getServiceDetails(serviceId: number): void {
    // Sample service data, in real life, you'd fetch this from a service
    const services = [
      { id: 1, name: 'Haircut', description: 'A stylish haircut', category: 'Hair', price: 30 },
      { id: 2, name: 'Facial', description: 'Skincare facial treatment', category: 'Skincare', price: 50 },
      { id: 3, name: 'Manicure', description: 'Nail polish and manicure', category: 'Nails', price: 20 },
      { id: 4, name: 'Pedicure', description: 'Foot care and nail polish', category: 'Nails', price: 25 },
      { id: 5, name: 'Massage', description: 'Relaxing massage therapy', category: 'Relaxation', price: 40 }
    ];

    this.service = services.find(s => s.id === serviceId) || this.service;
  }

  // Save the updated service details
  saveService(): void {
    // Normally you would save the service to a server here
    console.log('Service saved', this.service);
    this.router.navigate(['/services']);  // Navigate back to the services list
  }

  // Cancel and navigate back to the services list
  cancel(): void {
    this.router.navigate(['/services']);
  }

}
