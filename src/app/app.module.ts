import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { InputTextModule } from "primeng/inputtext";
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";
import { AccordionModule } from "primeng/accordion";
import { RadioButtonModule } from "primeng/radiobutton";
import { CheckboxModule } from "primeng/checkbox";
import { PanelModule } from "primeng/panel";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { AppRoutingModule } from "./app-routing.module";
import { ExamCardComponent } from "./exam-card/exam-card.component";
import { FormsModule } from "@angular/forms";
import { QuestionsComponent } from "./questions/questions.component";
import { QuestionOpenComponent } from "./question-open/question-open.component";
import { QuestionChoiceComponent } from "./question-choice/question-choice.component";
import { QuestionMultiComponent } from "./question-multi/question-multi.component";
import { QuestionsBoardComponent } from "./questions-board/questions-board.component";
import { ExamComponent } from "./exam/exam.component";
import { UserInfoComponent } from "./user-info/user-info.component";
import { ExamResultComponent } from "./exam-result/exam-result.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ExamCardComponent,
    QuestionsComponent,
    QuestionOpenComponent,
    QuestionChoiceComponent,
    QuestionMultiComponent,
    QuestionsBoardComponent,
    ExamComponent,
    UserInfoComponent,
    ExamResultComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    InputTextModule,
    CardModule,
    ButtonModule,
    AccordionModule,
    AppRoutingModule,
    RadioButtonModule,
    CheckboxModule,
    FormsModule,
    PanelModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
