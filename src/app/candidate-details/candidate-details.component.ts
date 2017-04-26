import { Component, OnInit, OnDestroy } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.scss']
})

export class CandidateDetailsComponent implements OnInit {
  user: any;
  constructor(private PeopleService: PeopleService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.PeopleService.getSpecific(this.route.snapshot.params['id'])
      .subscribe(data => {
        this.user = data;
      });
  }

}
