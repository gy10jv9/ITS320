import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
  
@Injectable({ 
    providedIn: 'root'
}) 
export class ApiService_User { 
    constructor(private http: HttpClient) { }

    get_user() {
        return this.http.get(
            'http://localhost:3000/owner'
        )
    }
    post_user = (data: any) => {
        return this.http.post( 
            'http://localhost:3000/owner', data
        );
    }
}