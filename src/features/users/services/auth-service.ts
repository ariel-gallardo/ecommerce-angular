import { Injectable, signal, WritableSignal } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { JwtUser } from '@models/jwt-user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private user: WritableSignal<JwtUser | null> = signal(null);
  private hasToken: boolean = false;

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


  public async DecodeToken() {
    const token = await this.Token;
    try {
      if (!token?.value) return;
      const raw = jwtDecode<any>(token.value);
      const normalized = this.normalizeClaims(raw);
      this.user.set(normalized as JwtUser);
      this.hasToken = true;
    } catch (err) {
      console.error('Invalid JWT token', err);
      this.user.set(null);
    }
  }

  public get HasToken(){
    return this.hasToken;
  }
  
  public get Token() {
    return cookieStore.get('token');
  }

  public setToken(token: string) {
    cookieStore.set('token', token);
    this.DecodeToken();
  }

  public removeToken() {
    cookieStore.delete('token');
  }

  public get Role(): string | null {
    return this.user()?.role ?? null;
  }

  public get NameIdentifier(): string | null {
    return this.user()?.nameidentifier ?? null;
  }

  public get Name(): string | null {
    return this.user()?.name ?? null;
  }

  public get Email(): string | null {
    return this.user()?.emailaddress ?? null;
  }

  public get GivenName(): string | null {
    return this.user()?.givenname ?? null;
  }

  public get Surname(): string | null {
    return this.user()?.surname ?? null;
  }

  public get Street(): string | null {
    return this.user()?.street ?? null;
  }

  public get Number(): number | null {
    return this.user() && this.user()?.number ? Number(this.user()!.number) : null;
  }

  public get Neighborhood(): string | null {
    return this.user()?.neighborhood ?? null;
  }

  public get Description(): string | null {
    return this.user()?.description ?? null;
  }

  public get Latitude(): number | null {
    return this.user() && this.user()?.latitude ? Number(this.user()!.latitude) : null;
  }

  public get Longitude(): number | null {
    return this.user() && this.user()?.longitude ? Number(this.user()!.longitude) : null;
  }

  public get Expiration(): Date | null {
    return this.user()?.exp ? new Date(this.user()!.exp! * 1000) : null;
  }

  public get IsExpired(): boolean {
    if (!this.user()) return true;
    const now = Date.now() / 1000;
    return now > this.user()!.exp!;
  }

}
