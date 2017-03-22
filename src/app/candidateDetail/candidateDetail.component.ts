import { Component, OnInit, OnDestroy } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-candidateDetail',
  templateUrl: './candidateDetail.component.html',
  styleUrls: ['./candidateDetail.component.scss']
})
export class CandidateDetailComponent implements OnInit, OnDestroy {
  private sub: any;
  id: number;

  constructor(private PeopleService: PeopleService, private route: ActivatedRoute) { }
  private user;

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    this.PeopleService.getSpecific(this.id)
      .subscribe(data => {
        this.user = data;
      });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
