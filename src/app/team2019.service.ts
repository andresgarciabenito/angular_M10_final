import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Team2019Service {

  team:any[] = [
    {
      position: '1',
      name: 'MATHEW FRASER',
      points: '984',
      firstCut:'1st (15:07.70) 100 pts',
      secondCut:'1st (5:37.02) 100 pts',
      ruck:'17th (25:50.09) 68 pts',
      sprintCouplet:'21st (1:50.08) 40 pts',
      mary:'2nd (675 rep) 96 pts',
      sprint:'15th (6 pt) 30 pts',
      splitTriplet: '1st (15:36.60) 100pts',
      clean: '1st (380.0 lb) 100 pts',
      swimPaddle:'5th (29:04.68) 60 pts',
      ringer1:'2nd (3:49.52) 90 pts',
      ringer2:'2nd (3:49.52) 90 pts',
      theStandard:'2nd (3:49.52) 90 pts',

    },
    {
      position: '2',
      name: 'NOAH OLSEN',
      points: '949',
      firstCut:'16th (17:02.14) 70 pts',
      secondCut:'7th (6:13.01) 88 pts',
      ruck:'24th (26:27.77) 54 pts',
      sprintCouplet:'2nd (1:28.40) 97 pts',
      mary:'1st (677 rep) 100 pts',
      sprint:'3rd (18 pt) 90 pts',
      splitTriplet: '2nd (16:35.90) 90 pts',
      clean: '5th (355.0 lb) 60 pts',
      swimPaddle:'3rd (27:45.69) 80 pts',
      ringer1:'4th (4:06.75) 70 pts',
      ringer2:'5th (3:31.98) 60 pts',
      theStandard:'2nd (8:09.97) 90 pts',
    },
    {
      position: '3',
      name: 'BJÖRGVIN KARL GUÐMUNDSSON',
      points: '888',
      firstCut:'4th (16:08.51) 94 pts',
      secondCut:'30th (7:00.18) 45 pts',
      ruck:'16th (25:49.44) 70 pts',
      sprintCouplet:'19th (1:49.67) 46 pts',
      mary:'9th (598 rep) 68 pts',
      sprint:'2nd (19 pt) 95 pts',
      splitTriplet: '3rd (16:42.75) 80 pts',
      clean: '4th (365.0 lb) 70 pts',
      swimPaddle:'4th (28:14.96) 70 pts',
      ringer1:'4th (28:14.96) 70 pts',
      ringer2:'2nd (3:15.61) 90 pts',
      theStandard:'3rd (8:22.80) 80 pts',
    },
    {
      position: '4',
      name: 'SCOTT PANCHIK',
      points: '795',
      firstCut:'3rd (16:05.95) 96 pts',
      secondCut:'6th (6:10.12) 90 pts',
      ruck:'41st (27:57.70) 20 pts',
      sprintCouplet:'14th (1:45.68) 61 pts',
      mary:'4th (645 rep) 88 pts',
      sprint:'7th (14 pt) 70 pts',
      splitTriplet: '6th (19:05.50) 50 pts',
      clean: '2nd (375.0 lb) 90 pts',
      swimPaddle:'8th (32:40.83) 30 pts',
      ringer1:'6th (4:35.27) 50 pts',
      ringer2:'3rd (3:25.95) 80 pts',
      theStandard:'4th (8:35.65) 70 pts',
    },
    {
      position: '5',
      name: 'JAMES NEWBURY',
      points: '728',
      firstCut:'6th (16:21.19) 90 pts',
      secondCut:'4th (6:08.09) 94 pts',
      ruck:'5th (24:47.93) 92 pts',
      sprintCouplet:'26th (1:52.74) 30 pts',
      mary:'23T (515 rep) 22 pts',
      sprint:'9th (12 pt) 60 pts',
      splitTriplet: '5th (17:17.46) 60 pts',
      clean: '7th (345.0 lb) 40 pts',
      swimPaddle:'2nd (27:22.91) 90 pts',
      ringer1:'1st (3:47.25) 100 pts',
      ringer2:'8th (4:44.95) 30 pts',
      theStandard:'9th (10:58.69) 20 pts',
    },
    {
      position: '6',
      name: 'JACOB HEPPNER',
      points: '694',
      firstCut:'13th (16:47.94) 76 pts',
      secondCut:'10th (6:23.63) 82 pts',
      ruck:'6th (24:55.28) 90 pts',
      sprintCouplet:'29th (1:58.98) 24 pts',
      mary:'3rd (660 rep) 92 pts',
      sprint:'17th (4 pt) 20 pts',
      splitTriplet: '4th (17:07.03) 70 pts',
      clean: '8th (335.0 lb) 30 pts',
      swimPaddle:'7th (31:16.53) 40 pts',
      ringer1:'5th (4:27.13) 60 pts',
      ringer2:'4th (3:29.73) 70 pts',
      theStandard:'7th (9:01.96) 40 pts',
    },
    {
      position: '7',
      name: 'MATT MCLEOD',
      points: '671',
      firstCut:'40th (19:21.19) 35 pts',
      secondCut:'44th (7:27.51) 31 pts',
      ruck:'18th (25:53.24) 66 pts',
      sprintCouplet:'1st (1:27.30) 100 pts',
      mary:'5th (622 rep) 84 pts',
      sprint:'4th (17 pt) 85 pts',
      splitTriplet: '7th (19:14.46) 40 pts',
      clean: '9th (325.0 lb) 20 pts',
      swimPaddle:'1st (25:12.29) 100 pts',
      ringer1:'7th (4:39.15) 40 pts',
      ringer2:'9th (4:59.00) 20 pts',
      theStandard:'6th (8:57.50) 50 pts',
    },
    {
      position: '8',
      name: 'ADRIAN MUNDWILER',
      points: '632',
      firstCut:'25th (17:47.72) 52 pts',
      secondCut:'16th (6:36.38) 70 pts',
      ruck:'15th (25:42.44) 72 pts',
      sprintCouplet:'7th (1:40.00) 82 pts',
      mary:'12th (577 rep) 56 pts',
      sprint:'13T (8 pt) 40 pts',
      splitTriplet: '8th (CAP+6) 30 pts',
      clean: '3rd (365.0 lb) 80 pts',
      swimPaddle:'10th (35:52.24) 10 pts',
      ringer1:'8th (4:41.25) 30 pts',
      ringer2:'6th (3:37.85) 50 pts',
      theStandard:'5th (8:52.84) 60 pts',
    },
    {
      position: '9',
      name: 'SAXON PANCHIK',
      points: '587',
      firstCut:'20th (17:11.38) 62 pts',
      secondCut:'19th (6:42.90) 64 pts',
      ruck:'46th (28:52.94) 10 pts',
      sprintCouplet:'8th (1:40.37) 79 pts',
      mary:'8th (600 rep) 72 pts',
      sprint:'1st (20 pt) 100 pts',
      splitTriplet: '10th (CAP+134) 10 pts',
      clean: '6th (355.0 lb) 50 pts',
      swimPaddle:'6th (29:35.41) 50 pts',
      ringer1:'9th (4:41.66)20 pts',
      ringer2:'7th (3:42.24) 40 pts',
      theStandard:'8th (10:06.60) 30 pts',
    },
    {
      position: '10',
      name: 'WILL MOORAD',
      points: '485', 
      firstCut:'14th (16:49.47) 74 pts',
      secondCut:'46th (7:38.64) 29 pts',
      ruck:'25th (26:37.06) 52 pts',
      sprintCouplet:'3rd (1:30.09) 94 pts',
      mary:'7th (615 rep) 76 pts',
      sprint:'5th (16 pt) 80 pts',
      splitTriplet: '9th (CAP+113) 20 pts',
      clean: '10th (0.0 lb) 10 pts',
      swimPaddle:'9th (33:35.52) 20 pts',
      ringer1:'10th (5:02.65) 10 ptss',
      ringer2:'10th (CAP+40) 10 pts',
      theStandard:'10th (CAP+90) 10 pts',
    },
  ]

  constructor() { 
    console.log('service works');
  }

  getTeam(){
    return this.team;
  }
}
