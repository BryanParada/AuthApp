import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthResponse, User } from '../interfaces/interfaces';
import { catchError, map, of,tap } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL: string = environment.ApiEndpoint;
  private _user!: User;

  get userServ(){
    return {...this._user};
  }

  constructor( private http: HttpClient) { }

  login( email: string, password: string){

    const url  = `${ this.baseURL }/auth`;
    const body =  {email, password};

    return this.http.post<AuthResponse>(url, body)
                .pipe(
                    tap( resp =>{
                      if (resp.ok) {
                        this._user = {
                          name: resp.name!,
                          uid: resp.uid!
                        }
                      }
                      
                    }),
                    map( resp=> resp.ok ),
                    catchError(err => of(err.error.msg) ) //of para convertir a observable
                );

  }
}
