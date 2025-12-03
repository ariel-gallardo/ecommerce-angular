import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { JwtUser } from '@models/jwt-user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private get DecodedToken(): JwtUser | null {
    const token = localStorage.getItem('access_token');
    if (!token) return null;

    try {
      return jwtDecode<JwtUser>(token);
    } catch (err) {
      console.error('Invalid JWT token', err);
      return null;
    }
  }

  public setToken(token: string){
    localStorage.setItem('access_token',token);
  }

  public get Role(): string | null {
    return this.DecodedToken?.role ?? null;
  }

  public get NameIdentifier(): string | null {
    return this.DecodedToken?.nameIdentifier ?? null;
  }

  public get Name(): string | null {
    return this.DecodedToken?.name ?? null;
  }

  public get Email(): string | null {
    return this.DecodedToken?.email ?? null;
  }

  public get GivenName(): string | null {
    return this.DecodedToken?.givenName ?? null;
  }

  public get Surname(): string | null {
    return this.DecodedToken?.surname ?? null;
  }

  public get Street(): string | null {
    return this.DecodedToken?.street ?? null;
  }

  public get Number(): string | null {
    return this.DecodedToken?.number ?? null;
  }

  public get Neighborhood(): string | null {
    return this.DecodedToken?.neighborhood ?? null;
  }

  public get Description(): string | null {
    return this.DecodedToken?.description ?? null;
  }

  public get Latitude(): string | null {
    return this.DecodedToken?.latitude ?? null;
  }

  public get Longitude(): string | null {
    return this.DecodedToken?.longitude ?? null;
  }
}
