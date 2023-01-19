import { Component, OnInit } from '@angular/core';
import { ArchiveDataProcessingService, ListEntries } from '../archive/archive-data-processing.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  lastMovie: ListEntries
  lastSeries: ListEntries
  getListEntries: ListEntries[] = []

  // constructor(public archiveDataProcessingService: ArchiveDataProcessingService){}

  ngOnInit(): void {
    // this.archiveDataProcessingService.getList().subscribe(list => {
    //   this.getListEntries = list.entries.filter(listelem => listelem.programType == "movies").sort(this.archiveDataProcessingService.sortByYear)
    //   this.lastMovie = this.getListEntries[0]
      // this.getListEntries = list.entries.filter(listelem => listelem.programType == "series").sort(this.archiveDataProcessingService.sortByYear)
      // this.lastSeries = this.getListEntries[0]
    // })
  }

}
