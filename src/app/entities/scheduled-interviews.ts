import { Time } from "@angular/common";

export class ScheduledInterviews {
    "sno": number;
    "empId": string;
    "candidateId": number;
    "date": Date =new Date();
    "time": Time;
    "round": string;
}
