import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { PostService } from './Services/post.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prectice';

  constructor(private router: Router, private _location: Location, private post: PostService) { }

  onSelect(id: number, item: string) {
    this.router.navigate(['student', id, item]);
  }

  goBack() {
    this._location.back();
  }

  postList: any = [];


  ngOnInit() {
    this.post.getPost().subscribe((res) => {
      this.postList = res;
    });
  }


}
