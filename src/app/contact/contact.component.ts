import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  appointment=['Mon By Appointment','Tue By Appointment','Wed By Appointment','Thu By Appointment','Fri By Appointment','Sat By Appointment','Sun By Appointment']
selected: any;

}
