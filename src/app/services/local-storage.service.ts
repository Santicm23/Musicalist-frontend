import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  public saveToken(token: string): void {
    localStorage.setItem('token', token)
  }

  public getToken(): string | null {
    return localStorage.getItem('token')
  }

  public hasToken(): boolean {
    return !!this.getToken()
  }

  public deleteToken(): void {
    localStorage.removeItem('token')
  }
}
