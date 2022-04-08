import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TapMangoApp';
  /***********************************Initilization data******************************************/
  dataz: number = 0;
  dataz1: number = 0;
  dataz2: number = 0;
  dataz3: number = 0;
  dataz4: number = 0;
  datax: number;
  datax_: number;
  datax1: number;
  datax1_: number;
  datax2: number;
  datax2_: number;
  datax3: number;
  datax3_: number;
  datax4: number;
  datax4_: number;
  datay: number = 360;
  datay1: number = 360;
  datay2: number = 360;
  datay3: number = 360;
  datay4: number = 360;
  dx = null;
  dx1 = null;
  dx2 = null;
  dx3 = null;
  dx4 = null
  dz = null;
  dz1 = null;
  dz2 = null;
  dz3 = null;
  dz4 = null

 /***********************************setting up timers upon initilization of the webpage******************************************/

  ngOnInit(): void {
    const obs$ = timer(0, 1000)
    this.dx = obs$.subscribe((d) => {
      this.datax = 0;
      this.datax_ = d;
      if (this.datax_ % 60 == 0) {
        this.datay -= 1;
      }
    })

    const obs1$ = timer(0, 1000)
    this.dx1 = obs1$.subscribe((d) => {
      this.datax1 = 0;
      this.datax1_ = d;
      if (this.datax1_ % 60 == 0) {
        this.datay1 -= 1;
      }
    })

    const obs2$ = timer(0, 1000)
    this.dx2 = obs2$.subscribe((d) => {
      this.datax2 = 0;
      this.datax2_ = d;
      if (this.datax2_ % 60 == 0) {
        this.datay2 -= 1;
      }
    })

    const obs3$ = timer(0, 1000)
    this.dx3 = obs3$.subscribe((d) => {
      this.datax3 = 0;
      this.datax3_ = d;
      if (this.datax3_ % 60 == 0) {
        this.datay3 -= 1;
      }
    })

    const obs4$ = timer(0, 1000)
    this.dx4 = obs4$.subscribe((d) => {
      this.datax4 = 0;
      this.datax4_ = d;
      if (this.datax4_ % 60 == 0) {
        this.datay4 -= 1;
      }
    })
  }


  /**********************************Function that gets called upon submiting the form takes checkbox data as HTML elements*******************************************/

  onsubmit() {
    var checkboxes = document.getElementsByName("plant");
    console.log(checkboxes);
    const input0 = checkboxes[0] as HTMLInputElement;
    const input1 = checkboxes[1] as HTMLInputElement;
    const input2 = checkboxes[2] as HTMLInputElement;
    const input3 = checkboxes[3] as HTMLInputElement;
    const input4 = checkboxes[4] as HTMLInputElement;
    alert("Plants are being watered, Wait 10 seconds!");
    setTimeout(() => {


      /*******************************Setting up backend logic for the first plant**********************************************/

      if ((this.dataz == 0 || this.dataz == 30) && input0.checked) {
        input0.checked = false;
        input0.disabled = true;
        this.dataz = 30;
        const ons$ = timer(0, 1000)
        this.dz = ons$.subscribe((d) => {
          if (d <= 30) {
            this.dataz = 30;
            this.dataz -= d;
          }
        })
        this.datay = 360;
        this.datax = 0;
        this.dx.unsubscribe();
        const obs$ = timer(0, 1000)
        this.dx = obs$.subscribe((d) => {
          this.datax = d;
          if (this.datax % 60 == 0) {
            this.datay -= 1;
          }
        });
      }
      if (this.dataz == 0 && input0.disabled == true) {
        this.dataz = 30;
        input0.disabled = false;
      }
      /********************************Setting up backend logic for the second plant*********************************************/

      if ((this.dataz1 == 0 || this.dataz1 == 30) && input1.checked) {
        input1.checked = false;
        input1.disabled = true;
        this.dataz1 = 30;
        const ons$ = timer(0, 1000)
        this.dz1 = ons$.subscribe((d) => {
          if (d <= 30) {
            this.dataz1 = 30;
            this.dataz1 -= d;
          }
        })

        this.datay1 = 360;
        this.datax1 = 0;
        this.dx1.unsubscribe();
        const obs$ = timer(0, 1000)
        this.dx1 = obs$.subscribe((d) => {
          this.datax1 = d;
          if (this.datax1 % 60 == 0) {
            this.datay1 -= 1;
          }
        });

      }
      if (this.dataz1 == 0 && input1.disabled == true) {
        this.dataz1 = 30;
        input1.disabled = false;
      }

      /*********************************Setting up backend logic for the third plant*******************************************/


      if ((this.dataz2 == 0 || this.dataz2 == 30) && input2.checked) {
        input2.checked = false;
        input2.disabled = true;
        this.dataz2 = 30;
        const ons$ = timer(0, 1000)
        this.dz2 = ons$.subscribe((d) => {
          if (d <= 30) {
            this.dataz2 = 30;
            this.dataz2 -= d;
          }
        })
        this.datay2 = 360;
        this.datax2 = 0;
        this.dx2.unsubscribe();
        const obs$ = timer(0, 1000)
        this.dx2 = obs$.subscribe((d) => {
          this.datax2 = d;
          if (this.datax2 % 60 == 0) {
            this.datay2 -= 1;
          }
        });
      }
      if (this.dataz2 == 0 && input2.disabled == true) {
        this.dataz2 = 30;
        input2.disabled = false;
      }

      /*******************************Setting up backend logic for the fourth plant**********************************************/

      if ((this.dataz3 == 0 || this.dataz3 == 30) && input3.checked) {
        input3.checked = false;
        input3.disabled = true;
        this.dataz3 = 30;
        const ons$ = timer(0, 1000)
        this.dz3 = ons$.subscribe((d) => {
          if (d <= 30) {
            this.dataz3 = 30;
            this.dataz3 -= d;
          }
        })
        this.datay3 = 360;
        this.datax3 = 0;
        this.dx3.unsubscribe();
        const obs$ = timer(0, 1000)
        this.dx3 = obs$.subscribe((d) => {
          this.datax3 = d;
          if (this.datax3 % 60 == 0) {
            this.datay3 -= 1;
          }
        });
      }
      if (this.dataz3 == 0 && input3.disabled == true) {
        this.dataz3 = 30;
        input3.disabled = false;
      }

      /**********************************Setting up backend logic for the fifth plant*******************************************/

      if ((this.dataz4 == 0 || this.dataz4 == 30) && input4.checked) {
        input4.checked = false;
        input4.disabled = true;
        this.dataz4 = 30;
        const ons$ = timer(0, 1000)
        this.dz4 = ons$.subscribe((d) => {
          if (d <= 30) {
            this.dataz4 = 30;
            this.dataz4 -= d;
          }
        })
        this.datay4 = 360;
        this.datax4 = 0;
        this.dx4.unsubscribe();
        const obs$ = timer(0, 1000)
        this.dx4 = obs$.subscribe((d) => {
          this.datax4 = d;
          if (this.datax4 % 60 == 0) {
            this.datay4 -= 1;
          }
        });
      }
      if (this.dataz4 == 0 && input4.disabled == true) {
        this.dataz4 = 30;
        input4.disabled = false;
      }
      /**********************************Alerts the user if a plant hasn't been watered for more then six hours*******************************************/

      if (this.datay == 0 || this.datay1 == 0 || this.datay2 == 0 || this.datay3 == 0 || this.datay4 == 0){
        alert("Plant hasn't been watered for more then 6 hours water now!");
      }
    }, 10000);
  }
}
