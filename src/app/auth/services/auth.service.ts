import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthResponse, User } from '../interfaces/interfaces';
import { catchError, map, of, tap, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL: string = environment.ApiEndpoint;
  private _user!: User;

  get userServ(){
    return {...this._user};
  }

  registerServ( name: string, email: string, password: string){

    const url  = `${ this.baseURL }/auth/new`;
    const body =  {name, email, password};

    return this.http.post<AuthResponse>(url, body)
    .pipe(
        tap( resp =>{ 
          if (resp.ok) {
            console.log('print resp');
            console.log(resp);
            
            localStorage.setItem('token', resp.token!);
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

  constructor( private http: HttpClient) { }

  login( email: string, password: string){

    const url  = `${ this.baseURL }/auth`;
    const body =  {email, password};

    return this.http.post<AuthResponse>(url, body)
                .pipe(
                    tap( resp =>{ 
                      if (resp.ok) {
                        
                        localStorage.setItem('token', resp.token!);
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

  validateToken(): Observable<boolean>{
 
    const url  = `${ this.baseURL }/auth/renew`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '');

    return this.http.get<AuthResponse>( url, { headers } )//{headers: headers}
             .pipe(
              map( resp => {
                //console.log(resp.token);
                
                localStorage.setItem('token', resp.token!);
                this._user = {
                  name: resp.name!,
                  uid: resp.uid!
                }

                return resp.ok;
              }),
              catchError(err => of( false ) ) 
             ) 


  }

  logout(){
    //localStorage.removeItem('token')
    localStorage.clear();
  }

}
