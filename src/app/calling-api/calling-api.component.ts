import { Component, OnInit } from '@angular/core';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'app-calling-api',
  templateUrl: './calling-api.component.html',
  styleUrls: ['./calling-api.component.css'],
  providers: [PostService]
})
export class CallingApiComponent implements OnInit {
  postList: any = [];
  constructor(private post: PostService) {

  }

  ngOnInit(): void {
    this.post.getPost().subscribe((res) => {
      this.postList = res;
    });
  }

}
