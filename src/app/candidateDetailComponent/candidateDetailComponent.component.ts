import { Component, OnInit, OnDestroy } from '@angular/core';
import { peopleService } from '../people.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-candidateDetailComponent',
  providers: [peopleService],
  templateUrl: './candidateDetailComponent.component.html',
  styleUrls: ['./candidateDetailComponent.component.scss']
})
export class CandidateDetailComponent implements OnInit, OnDestroy {
  private sub: any;
  id: number;

  

constructor(private peopleService: peopleService, private route: ActivatedRoute) { }
  private user;
  
  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });

    this.peopleService.getSpecific(this.id)
      .subscribe(data => {
        this.user = data;
      });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
