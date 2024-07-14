import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = false;
  private userRole: string | null = null;

  constructor() {
    const storedLoggedIn = localStorage.getItem('loggedIn');
    const storedUserRole = localStorage.getItem('userRole');
    this.loggedIn = storedLoggedIn === 'true';
    this.userRole = storedUserRole;
  }

  login(role: string) {
    this.loggedIn = true;
    this.userRole = role;
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('userRole', role);
  }

  logout() {
    this.loggedIn = false;
    this.userRole = null;
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('userRole');
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  getRole(): string | null {
    return this.userRole;
  }
}
