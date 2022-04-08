export class Candidate {
    "name": string;
    "email": string;
    "contactNo": string;
    "gender": string;
    "resumeLink": string;
    "candidateId": number;







    







    
     constructor(id : number,name : string,email : string , contact : string , gender : string ,link : string){
         this.candidateId=id;
         this.contactNo = contact;
         this.email=email;
         this.gender=gender;
         this.name = name;
         this.resumeLink = link;
     }
     
}
//const candidate = new Candidate(1,"ashutosh","as@gmail.com","5432267543","male","null");
