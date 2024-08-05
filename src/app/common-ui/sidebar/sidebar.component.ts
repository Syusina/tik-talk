import { Component, inject } from '@angular/core';
import { SvgComponent } from '../svg/svg.component';
import { AsyncPipe, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SubscriberCardComponent } from './subscriber-card/subscriber-card.component';
import { ProfileService } from '../../data/services/profile.service';
import { AsyncAction } from 'rxjs/internal/scheduler/AsyncAction';
import { ImgUrlPipe } from '../../helpers/pipes/img-url.pipe';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SvgComponent, NgFor, RouterLink, SubscriberCardComponent, AsyncPipe, ImgUrlPipe],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  profileService = inject(ProfileService);
  subscribers$ = this.profileService.getSubscribersShortList();

  me = this.profileService.getMe();

  menuItems = [
    {
      label: 'Моя страница',
      icon: 'home',
      link: '',
    },
    {
      label: 'Чаты',
      icon: 'chat',
      link: '/chats',
    },
    {
      label: 'Поиск',
      icon: 'search',
      link: '/search',
    }
  ];


}
