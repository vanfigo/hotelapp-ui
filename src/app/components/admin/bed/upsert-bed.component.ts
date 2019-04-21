import { Component, OnInit, Input } from '@angular/core';
import { Bed } from '../../../interfaces/bed.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { faSave, faBackspace } from '@fortawesome/free-solid-svg-icons';
import { BedService } from '../../../providers/bed.service';

@Component({
  selector: 'app-upsert-bed',
  templateUrl: './upsert-bed.component.html',
  styles: []
})
export class UpsertBedComponent implements OnInit {
  faSave = faSave;
  faBackspace = faBackspace;
  bed: Bed;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private bedService: BedService) {
    this.activatedRoute.params
      .subscribe(params => {
        if(params['id'])
          this.bedService.findById(params['id']).subscribe((data: Bed) => this.bed = data);
        else
          this.bed = {
            name: '',
            people: null,
            width: null,
            height: null
          };
      });
  }

  ngOnInit() {
  }

  upsert = () => {
    if(this.bed.id)
      this.bedService.update(this.bed).subscribe(this.redirectBed);
    else
      this.bedService.save(this.bed).subscribe(this.redirectBed);
  }

  redirectBed = () => {
    this.router.navigate(['/admin/beds']);
  }

}
