import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() dataSource: any[] = [];
  @Input() displayedColumns: string[] = [];
  @Input() allowInput: boolean = false;
  @Output() buttonClick = new EventEmitter<number>();

  constructor() {}

  onButtonClick(row: number) {
    this.buttonClick.emit(row);
  }
}
