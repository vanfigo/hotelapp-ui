import { Component, OnInit } from '@angular/core';
import { Bed } from '../../../interfaces/bed.interface';
import { BedService } from '../../../providers/bed.service';
import { faPlusCircle, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-bed',
  templateUrl: './bed.component.html',
  styleUrls: ['./bed.component.css']
})
export class BedComponent implements OnInit {
  faPlusCircle = faPlusCircle;
  faPencilAlt = faPencilAlt;
  faTrash = faTrash;
  beds: Bed[];

  constructor(private bedService: BedService) { }

  ngOnInit() {
    this.bedService.findAll().subscribe((data: Bed[]) => this.beds = data);
  }

  delete = (id: number) => this.bedService.deleteById(id).subscribe(() => this.beds = this.beds.filter((bed: Bed) => bed.id !== id));

}
