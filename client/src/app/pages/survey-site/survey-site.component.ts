import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-survey-site',
  templateUrl: './survey-site.component.html',
  styleUrls: ['./survey-site.component.css']
})
export class SurveySiteComponent extends BasePageComponent implements OnInit {

  constructor(
    route: ActivatedRoute,
    private authService: AuthService
    ) {
    super(route);
  }
  ngOnInit() {
  }
  isLoggedIn(): boolean {
    return this.authService.loggedIn();
  }
}
