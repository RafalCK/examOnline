import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-questions-board",
  templateUrl: "./questions-board.component.html",
  styleUrls: ["./questions-board.component.scss"],
})
export class QuestionsBoardComponent implements OnInit {
  name = localStorage.getItem(`name`);
  surename = localStorage.getItem(`surename`);
  answer: string;
  correctAnswer: string;
  toast: string;

  endExam() {
    this.checkAnswers();
  }

  checkAnswers() {
    if (this.answer === this.correctAnswer) {
      this.toast = "Prawidłowa odpowiedz, brawo zdobywasz punkt";
    } else {
      this.toast = "Nieprawidłowa odpowiedz";
    }
  }

  public subjectId;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get("id"));
    this.subjectId = id;
  }
}

interface Question {
  question: string;
  type: string;
}

interface QuestionOpen extends Question {
  anserw: string;
}

interface QuestionChoice extends Question {
  anserwValue: string;
}

interface QuestionMulti extends Question {
  anserwValue: string[];
}
