import { Component, OnInit } from '@angular/core';
import { TestbuttonService } from '../testbutton.service';

@Component({
  selector: 'app-testbutton',
  templateUrl: './testbutton.component.html',
  styleUrls: ['./testbutton.component.css']
})
export class TestbuttonComponent implements OnInit {
  muffinInfo;
  constructor(private testbuttonService: TestbuttonService) { }



  ngOnInit() {
  }

  showMe() {
    this.muffinInfo = this.testbuttonService.getMuffinName();
    window.alert(this.muffinInfo);
    }

}