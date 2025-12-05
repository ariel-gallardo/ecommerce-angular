import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { JwtUser } from '@models/jwt-user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private normalizeClaims(raw: any): any {
    const normalized: any = {};
    Object.keys(raw).forEach(key => {
      const short = key.includes("/")
        ? key.substring(key.lastIndexOf("/") + 1)
        : key;

      normalized[short] = raw[key];
    });
    return normalized;
  }


  private get DecodedToken(): Promise<JwtUser | null> {
    return this.Token.then(c => {
      try {
        if (!c?.value) return null;

        const raw = jwtDecode<any>(c.value);
        const normalized = this.normalizeClaims(raw);

        return normalized as JwtUser;
      } catch (err) {
        console.error('Invalid JWT token', err);
        return null;
      }
    });
  }

  public get Token(){
    return cookieStore.get('token');
  }

  public setToken(token: string){
    cookieStore.set('token',token);
  }

  public removeToken(){
    cookieStore.delete('token');
  }

  public get Role(): Promise<string | null> {
    return this.DecodedToken.then(t => t?.role ?? null);
  }

  public get NameIdentifier(): Promise<string | null> {
    return this.DecodedToken.then(t => t?.nameidentifier ?? null);
  }

  public get Name(): Promise<string | null> {
    return this.DecodedToken.then(t => t?.name ?? null);
  }

  public get Email(): Promise<string | null> {
    return this.DecodedToken.then(t => t?.emailaddress ?? null);
  }

  public get GivenName(): Promise<string | null> {
    return this.DecodedToken.then(t => t?.givenname ?? null);
  }

  public get Surname(): Promise<string | null> {
    return this.DecodedToken.then(t => t?.surname ?? null);
  }

  public get Street(): Promise<string | null> {
    return this.DecodedToken.then(t => t?.street ?? null);
  }

  public get Number(): Promise<string | null> {
    return this.DecodedToken.then(t => t?.number ?? null);
  }

  public get Neighborhood(): Promise<string | null> {
    return this.DecodedToken.then(t => t?.neighborhood ?? null);
  }

  public get Description(): Promise<string | null> {
    return this.DecodedToken.then(t => t?.description ?? null);
  }

  public get Latitude(): Promise<string | null> {
    return this.DecodedToken.then(t => t?.latitude ?? null);
  }

  public get Longitude(): Promise<string | null> {
    return this.DecodedToken.then(t => t?.role ?? null);
  }

  public get Expiration(): Promise<Date | null> {
    return this.DecodedToken.then(t => t?.exp ? new Date(t.exp! * 1000) : null);
  }

  public get IsExpired(): Promise<boolean> {
    return this.DecodedToken.then(t => {
      if (!t?.exp) return true;
      const now = Date.now() / 1000;
      return now > t.exp;
    });
  }

}
