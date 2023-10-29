import { Component, OnInit } from '@angular/core';
import { TimeConversionService } from '../services/time-conversion.service';


@Component({
  selector: 'app-time-conversion',
  templateUrl: './time-conversion.component.html',
  styleUrls: ['./time-conversion.component.less']
})
export class TimeConversionComponent {
  currentTime: any = '---';
  pacificTime: any = '---';
  easternTime: any = '---';
  westernTime: any = '---';
  gmtTime:any = '---';

  constructor(private timeConversionService: TimeConversionService){

  }

  ngOnInit() {
    this.getCurrentTime();
  }

  getCurrentTime(){
    // getCurrentTime
    this.timeConversionService.getCurrentTime().subscribe((response: any) => {
      // initialize currentTime
      response.seconds = response.seconds.toString().length == 1 ? '0'+response.seconds : response.seconds;
      this.currentTime = `${response.year}-${response.month}-${response.day} ${response.time}:${response.seconds}`;
      this.getTime('America/Los_Angeles', this.currentTime);
      this.getTime('America/New_York', this.currentTime) ;
      this.getTime('Australia/Perth', this.currentTime);
      this.getTime('Etc/GMT', this.currentTime);
    });
  }

  getTime(timeZone: string, currentTime: string) {
    // convert current time to specifid timezone
    this.timeConversionService.getTimeForTimeZone(timeZone, currentTime).subscribe((response: any) => {
      let convertedTime = response.conversionResult;
      convertedTime.seconds = convertedTime.seconds.toString().length == 1 ? '0'+convertedTime.seconds : convertedTime.seconds;
      convertedTime = `${convertedTime.year}-${convertedTime.month}-${convertedTime.day} ${convertedTime.time}:${convertedTime.seconds}`;

      // set the converted time result
      if(timeZone == 'America/Los_Angeles'){
        this.pacificTime = convertedTime;
      }else if(timeZone == 'America/New_York'){
        this.easternTime = convertedTime;
      }else if(timeZone == 'Australia/Perth'){
        this.westernTime = convertedTime;
      }else if(timeZone == 'Etc/GMT'){
        this.gmtTime = convertedTime;
      }else{}
    });
    
  }
}
