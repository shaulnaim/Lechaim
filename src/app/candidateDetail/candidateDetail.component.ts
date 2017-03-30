import { Component, OnInit, OnDestroy } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-candidateDetail',
  templateUrl: './candidateDetail.component.html',
  styleUrls: ['./candidateDetail.component.scss']
})

export class CandidateDetailComponent implements OnInit {
  user: any;
  constructor(private PeopleService: PeopleService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.PeopleService.getSpecific(this.route.snapshot.params['id'])
      .subscribe(data => {
        this.user = data;
      });
  }

}
