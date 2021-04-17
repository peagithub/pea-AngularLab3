import { Component } from '@angular/core';
@Component({
selector: 'app-counting',
templateUrl: './counting.component.html',
styleUrls: ['./counting.component.css']
})
export class CountingComponent {
 
    title: string;

    count = 0;
constructor() {}

countNumber(){
    this.count = this.count + 2
}
}