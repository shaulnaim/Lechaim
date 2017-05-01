import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared/shared.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private SharedDataService: SharedDataService,private router: Router) {}
   private representative;
   public hide = false;
   changeRoute(url){
     this.resetRepresentative();
     this.router.navigateByUrl('/dummy', { skipLocationChange: true });
     setTimeout(()=>this.router.navigate([url]));
    }
    resetRepresentative () {
      this.SharedDataService.setRepresentative(null);
    }
  
}
