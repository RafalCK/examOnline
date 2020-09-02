import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { ExamComponent } from "./exam/exam.component";
import { QuestionsBoardComponent } from "./questions-board/questions-board.component";
import { ExamResultComponent } from "./exam-result/exam-result.component";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "egzamin", component: ExamComponent },
  { path: "egzamin/:id", component: QuestionsBoardComponent },
  { path: "pytania", component: QuestionsBoardComponent },
  { path: "result", component: ExamResultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
