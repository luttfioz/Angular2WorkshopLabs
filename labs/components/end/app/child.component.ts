//*** TODO: Import Component from @angular/core
import { Component } from '@angular/core';

/*** 
  TODO: Add an @Component decorator that has the following properties:
        
        selector: 'child-component'
        template: '<h2>App Component</h2>'

***/
@Component({
    selector: 'child-component',
    template: `
        <h2>Child Component</h2>
    `
})
//*** TODO: Create a ChildComponent class (make sure that you "export" the class)
export class ChildComponent {


}