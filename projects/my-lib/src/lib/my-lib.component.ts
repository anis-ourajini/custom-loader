import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-lib',
  template: `
    <form method="post">
      <div>
        <label for="uname">
          <b>
            Username:
          </b>
        </label>
        <input type="text" placeholder="Enter username" name="uname" required style="margin: 10px">
      </div>


      <div>
        <label for="psw">
          <b>
            Password:
          </b>
        </label>
        <input type="password" placeholder="Enter password" name="psw" required style="margin: 10px">
      </div>

      <br/>

      <button type="submit">Login</button>


    </form>
  `,
  styles: [
  ]
})
export class MyLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
