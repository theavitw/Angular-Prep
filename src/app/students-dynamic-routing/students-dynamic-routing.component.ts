import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-students-dynamic-routing',
  templateUrl: './students-dynamic-routing.component.html',
  styleUrls: ['./students-dynamic-routing.component.css']
})
export class StudentsDynamicRoutingComponent implements OnInit {
  public stuid!: string | null;
  private routeSub!: Subscription;
  public name!: string | null;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Subscribe to paramMap observable
    this.routeSub = this.route.paramMap.subscribe(params => {
      this.stuid = params.get('id');
      this.name = params.get('name');
    });
  }

  // Unsubscribe when component is destroyed to prevent memory leaks

  ngOnDestroy(): void {
    // Unsubscribe when component is destroyed
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

}
