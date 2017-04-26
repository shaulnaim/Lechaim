import { Component, OnInit, OnDestroy } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-representative-details',
  templateUrl: './representative-details.component.html',
  styleUrls: ['./representative-details.component.scss']
})

export class RepresentativeDetailsComponent implements OnInit {
  representative: any;
  constructor(private PeopleService: PeopleService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.PeopleService.getSpecificRepresentative(this.route.snapshot.params['id'])
      .subscribe(data => {
        this.representative = data;
      });
  }

}
