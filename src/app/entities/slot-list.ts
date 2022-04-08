import { Time } from "@angular/common";

export class SlotList {
    "candidateName": string;
    "candidateEmail": string;
    "employeeName": string;
    "employeeEmail": string;
    "date": Date=new Date();
    "time": Time;
    "round": string;
}
