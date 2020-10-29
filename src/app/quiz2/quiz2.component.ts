import { Component, OnInit } from '@angular/core';
import {QuizServiceService} from '../quiz-service.service'

@Component({
  selector: 'app-quiz2',
  templateUrl: './quiz2.component.html',
  styleUrls: ['./quiz2.component.scss']
})
export class Quiz2Component implements OnInit {
  i=0;
  answer="";
  mark=0;
  txt:string;
  correct:boolean;
 constructor(public q1:QuizServiceService) { }
 ngOnInit(): void {
 }
 onChange(){
   if(this.q1.quiz1[this.i].orgAnswer==this.q1.quiz1[this.i].answer){
      this.correct=true;
      this.txt="Correct";
   }else if(this.q1.quiz1[this.i].orgAnswer!=this.q1.quiz1[this.i].answer){
     this.correct=true;
     this.txt="Wrong";
   }
 }
 onClick(){
   this.i++;
   this.correct=false;
 }
 onClick2(){
   if(this.i>0){
   this.i--;
   }
   this.correct=false;
 }
onSubmit(){
 for(let j=0;j<this.q1.quiz1.length;j++){
   if(this.q1.quiz1[j].orgAnswer==this.q1.quiz1[j].answer){
     this.mark++;
   }
 }

}
}
