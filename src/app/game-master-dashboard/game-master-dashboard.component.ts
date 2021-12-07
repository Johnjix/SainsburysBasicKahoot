import { Component, OnInit } from '@angular/core';
import {
  NgbActiveModal,
  NgbModal,
  NgbModalRef,
} from '@ng-bootstrap/ng-bootstrap';
import { UpdateQuestionsModalComponent } from '../update-questions-modal/update-questions-modal.component';

@Component({
  selector: 'app-game-master-dashboard',
  templateUrl: './game-master-dashboard.component.html',
  styleUrls: ['./game-master-dashboard.component.css'],
})
export class GameMasterDashboardComponent implements OnInit {
  constructor(private _modalService: NgbModal) {}

  ngOnInit(): void {}
  viewAllQuestions(): void {
    let _modalRef: NgbModalRef = this._modalService.open(
      UpdateQuestionsModalComponent,
      { size: 'xl', scrollable: true }
    );
  }
}
