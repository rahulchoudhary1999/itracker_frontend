export class Candidate {
    "name": string;
    "email": string;
    "contactNo": string;
    "gender": string;
    "resumeLink": string;
    "candidateID": number;







    







    
     constructor(id : number,name : string,email : string , contact : string , gender : string ,link : string){
         this.candidateID=id;
         this.contactNo = contact;
         this.email=email;
         this.gender=gender;
         this.name = name;
         this.resumeLink = link;
     }
     
}
//const candidate = new Candidate(1,"ashutosh","as@gmail.com","5432267543","male","null");
