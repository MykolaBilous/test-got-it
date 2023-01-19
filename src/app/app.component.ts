import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  date: Date = new Date()
  title: string = '';
  archiveHeader: boolean = false

  constructor(private route: Router) {}
    setHeader() {
      this.archiveHeader = false
      let path = this.route.url.split('/')[1]
      this.title = decodeURIComponent(path)

      if (this.title == 'archive') {
        this.archiveHeader = true
      }
    }

    openFilterContainer() {
      document.getElementById("filter-container").classList.toggle('hiden')
    }

    openMobileMenu() {
      document.getElementById("mobile-menu").classList.toggle('hiden')
    }
}
