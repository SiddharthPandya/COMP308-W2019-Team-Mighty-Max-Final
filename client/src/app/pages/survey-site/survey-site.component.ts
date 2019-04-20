import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { SurveyService } from 'src/app/services/survey.service';
import { Survey } from 'src/app/models/survey';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-survey-site',
  templateUrl: './survey-site.component.html',
  styleUrls: ['./survey-site.component.css']
})
export class SurveySiteComponent implements OnInit {
  title: string;
  survey: Survey;
  user: User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private surveyService: SurveyService,
    private router: Router
  ) { }

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.data.title;
    this.survey = new Survey();
    this.user = new User();
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  onPageSubmit(): void {
    this.surveyService.addSurvey(this.survey).subscribe(data => {
      if (data.success) {
        console.log(data)
        this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
        this.router.navigate(['/surveys']);
      } else {
        this.flashMessage.show('Tried to Add Survey', {cssClass: 'alert-danger', timeOut: 3000});
        this.router.navigate(['/surveys/add']);
      }
    });

    //this.surveyService.getUserIDForSurvey(this.user);
}
}
