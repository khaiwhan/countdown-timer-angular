import { Component, ViewEncapsulation } from '@angular/core';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  interval: any;
  caretUp = faCaretUp;
  caretDown = faCaretDown;
  startState: boolean = false;
  digit1: number = 0;
  digit2: number = 0;
  digit3: number = 0;
  digit4: number = 0;
  digit5: number = 0;
  digit6: number = 0;

  incrementDigit1() {
    this.digit1 = this.digit1 + 1 == 10 ? 0 : this.digit1 + 1
  }
  incrementDigit2() {
    this.digit2 = this.digit2 + 1 == 10 ? 0 : this.digit2 + 1
  }
  incrementDigit3() {
    this.digit3 = this.digit3 + 1 == 10 ? 0 : this.digit3 + 1
  }
  incrementDigit4() {
    this.digit4 = this.digit4 + 1 == 10 ? 0 : this.digit4 + 1
  }
  incrementDigit5() {
    this.digit5 = this.digit5 + 1 == 10 ? 0 : this.digit5 + 1
  }
  incrementDigit6() {
    this.digit6 = this.digit6 + 1 == 10 ? 0 : this.digit6 + 1
  }

  decrementDigit1() {
    this.digit1 = this.digit1 - 1 == 0 ? 0 : this.digit1 - 1
  }
  decrementDigit2() {
    this.digit2 = this.digit2 - 1 == 0 ? 0 : this.digit2 - 1
  }
  decrementDigit3() {
    this.digit3 = this.digit3 - 1 == 0 ? 0 : this.digit3 - 1
  }
  decrementDigit4() {
    this.digit4 = this.digit4 - 1 == 0 ? 0 : this.digit4 - 1
  }
  decrementDigit5() {
    this.digit5 = this.digit5 - 1 == 0 ? 0 : this.digit5 - 1
  }
  decrementDigit6() {
    this.digit6 = this.digit6 - 1 == 0 ? 0 : this.digit6 - 1
  }

  startTime() {
    this.startState = true;
    let hour = Number.parseInt((this.digit1 + '' + this.digit2));
    let minute = Number.parseInt(this.digit3 + '' + this.digit4);
    let seconds = Number(this.digit5 + '' + this.digit6);
    if (hour != 0 || minute != 0 || seconds != 0) {
      this.interval = setInterval(() => {
        if (seconds == 0) {
          if (minute != 0) {
            seconds = 59;
            minute -= 1;
          }
          else if (hour == 0 && minute == 0 && seconds == 0) {
            clearInterval(this.interval);
          }
        } else {
          seconds -= 1;
        }

        if (minute == 0) {
          if (hour != 0) {
            seconds = 59
            minute = 59
            hour -= 1;
          }
          else if (hour == 0 && minute == 0 && seconds == 0) {
            clearInterval(this.interval);
          }
        } else if (minute != 0 && seconds == 0) {
          minute -= 1;
        }

        this.digit1 = hour.toString().length == 1 ? 0 : Number.parseInt(hour.toString()[0]);
        this.digit2 = hour.toString().length == 1 ? Number.parseInt(hour.toString()[0]) : Number.parseInt(hour.toString()[1]);

        this.digit3 = minute.toString().length == 1 ? 0 : Number.parseInt(minute.toString()[0]);
        this.digit4 = minute.toString().length == 1 ? Number.parseInt(minute.toString()[0]) : Number.parseInt(minute.toString()[1]);

        this.digit5 = seconds.toString().length == 1 ? 0 : Number.parseInt(seconds.toString()[0]);
        this.digit6 = seconds.toString().length == 1 ? Number.parseInt(seconds.toString()[0]) : Number.parseInt(seconds.toString()[1]);
      }, 1000)
    }
  }

  resetTime() {
    clearInterval(this.interval);
    this.digit1 = 0;
    this.digit2 = 0;
    this.digit3 = 0;
    this.digit4 = 0;
    this.digit5 = 0;
    this.digit6 = 0;
    this.startState = false;
  }

  stopTime() {
    clearInterval(this.interval);
    this.startState = false;
  }

}
