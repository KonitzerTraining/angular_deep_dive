import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent {

  url = 'javascript:alert(123);';

  script = "<script>alert('ohoh')</script>";
  scriptUnsave = this.sanitizer.bypassSecurityTrustHtml("<script>alert('ohoh')</script>");
  urlUnsave = this.sanitizer.bypassSecurityTrustUrl("javascript:alert(123);");

  constructor(
    private sanitizer: DomSanitizer
  ) { }


}
