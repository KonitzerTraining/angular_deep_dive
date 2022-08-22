import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-external-link',
  templateUrl: './external-link.component.html',
  styleUrls: ['./external-link.component.scss']
})
export class ExternalLinkComponent implements OnInit {
  public link: string = '';

  constructor(
    private activatedRoute: ActivatedRoute // Service
  ) { }

  ngOnInit(): void {
    console.log('link');
    console.log(this.activatedRoute)
    this.link = this.activatedRoute.snapshot.params['link'];

    setTimeout(() => {
      window.location.href = this.link;
    }, 4000);
/*
    this.activatedRoute.queryParams.subscribe((params) => {
      console.log(params);

    })

*/

  }

}
