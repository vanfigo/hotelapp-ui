import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { BedService } from '../../../../providers/bed.service';
import { Bed } from '../../../../interfaces/bed.interface';

@Component({
  selector: 'app-select-room',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectBedComponent implements OnInit {

  beds: Bed[];
  bed: Bed
  @Output() bedSelected = new EventEmitter<Bed>();
  @Input() bedId: number;

  constructor(private bedService: BedService) {
  }

  ngOnInit() {
    this.bedService.findAll().subscribe((data: Bed[]) => {
      this.beds = data;
      if (this.bedId > 0)
        this.bed = this.beds.find((_bed: Bed) => _bed.id === this.bedId);
      else
        this.bed = null;
    });
  }

  change = () => {
    this.bedSelected.emit(this.bed);
  }

}
