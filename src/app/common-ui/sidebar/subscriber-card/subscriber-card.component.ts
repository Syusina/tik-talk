import { NgFor } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Profile } from '../../../data/services/interfaces/profile.interface';
import { ImgUrlPipe } from '../../../helpers/pipes/img-url.pipe';
import { ProfileService } from '../../../data/services/profile.service';

@Component({
  selector: 'app-subscriber-card',
  standalone: true,
  imports: [NgFor, RouterLink, ImgUrlPipe],
  templateUrl: './subscriber-card.component.html',
  styleUrl: './subscriber-card.component.scss'
})
export class SubscriberCardComponent {
  @Input() profile!: Profile;

}
