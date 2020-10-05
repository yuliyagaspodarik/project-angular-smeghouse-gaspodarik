import {Component, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'app-filter-item',
  templateUrl: './filter-item.component.html',
  styleUrls: ['./filter-item.component.css']
})
export class FilterItemComponent {
  @Input()
  id: string;
  @Output()
  checked = new EventEmitter<any>();
  @Output()
  check: boolean = false;

  onChecked(value) {
    this.check = !this.check;
    this.checked.emit(value);
  }
}
