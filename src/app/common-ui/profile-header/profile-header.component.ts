import { Component, Input } from '@angular/core';
import { Profile } from '../../data/services/interfaces/profile.interface';

@Component({
  selector: 'app-profile-header',
  standalone: true,
  imports: [],
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.scss'
})
export class ProfileHeaderComponent {
  @Input() profile!: Profile;
}
