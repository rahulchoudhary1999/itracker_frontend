import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Onlyskills } from './onlyskills';
import { Skills } from './skills';
import { SkillsService } from './skills.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-viewskill',
  templateUrl: './viewskill.component.html',
  styleUrls: ['./viewskill.component.scss']
})
export class ViewskillComponent implements OnInit {

  public skill: Skills;
  public skills: Skills[];
  public skillsAvailable: Onlyskills[];
  public deleteSkill: Skills | null;

  constructor(private skillService: SkillsService) { }

  ngOnInit(): void {
    this.skillService.getSkillsByEmpId().subscribe((data: Skills[]) =>{
      this.skills= data;
    })

    this.skillService.getAllSkills().subscribe((data: Onlyskills[])=>{
      this.skillsAvailable=data;
    })}
    public getSkillsByEmpId():void{
      this.skillService.getSkillsByEmpId().subscribe(
        (response: Skills[]) =>{
          this.skills = response;
          console.log(this.skills);
        },
          (error: HttpErrorResponse)=>{
            alert(error.message);
          }
      );
    }
  
    public getAllSkills():void{
      this.skillService.getAllSkills().subscribe(
        (response: Onlyskills[])=>{
          this.skillsAvailable = response;
          console.log(this.skillsAvailable);
        },
        (error: HttpErrorResponse)=>{
          alert(error.message);
        }
      )
    }
    public onAddSkill(addSkillForm: NgForm): void{
      document.getElementById('add-employee-form')?.click();
      // console.log(addSkillForm.value);
      this.skillService.addSkill(addSkillForm.value).subscribe(
        (response: Skills)=>{
          console.log(response);
  
          this.getSkillsByEmpId();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      )
      
    }
  
    public onDeleteSkill(id?: number):void{
      this.skillService.deleteSkill(id).subscribe(
        (response: void) =>{
          console.log(response);
          this.getSkillsByEmpId();
        },
        (error: HttpErrorResponse)=>{
          alert(error.message);
        }
      );
    }
  
    public onOpenModal(skill: Skills, mode: string): void{
      const container= document.getElementById('main-container');
      const button= document.createElement('button');
      button.type = "button";
      button.style.display = 'none';
      button.setAttribute('data-toggle','modal');
  
      if(mode === 'add'){
        button.setAttribute('data-target','#addSkillModal');
      }
  
      
      if(mode === 'delete'){
        this.deleteSkill = skill;
        button.setAttribute('data-target','#deleteSkillModal');
      }
  
      container?.appendChild(button);
      button.click();
    }
  }
