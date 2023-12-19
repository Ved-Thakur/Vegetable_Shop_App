import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SureComponent } from '../sure/sure.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private router: Router, private dialog: MatDialog) {}
  shouldDisplay(): boolean {
    return this.router.url !== '/';
  }
  logOut() {
    const pop = this.dialog.open(SureComponent, {
      width: '200px',
      height: '100px',
    });

    pop.disableClose = true;
    pop.afterClosed().subscribe((res) => {
      if (res) {
        this.router.navigate(['/']);
      }
    });
  }
}
