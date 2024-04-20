import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
  
@Injectable({ 
    providedIn: 'root'
}) 
export class ApiService { 
    constructor(private http: HttpClient) { } 
    get(module: string) { 
        return this.http.get( 
            `http://localhost:3000/${module}`
        ); 
    }

    postMessage(data: any) { 
        return this.http.post( 
            'http://localhost:3000/tasks', data
        ); 
    }
}