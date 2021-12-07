import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-update-questions-modal',
  templateUrl: './update-questions-modal.component.html',
  styleUrls: ['./update-questions-modal.component.css'],
})
export class UpdateQuestionsModalComponent implements OnInit {
  editMode: boolean;
  constructor(public _activeModal: NgbActiveModal) {
    this.editMode = false;
  }

  ngOnInit(): void {}
}
