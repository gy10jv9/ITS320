import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
  
@Injectable({ 
    providedIn: 'root'
}) 
export class ApiService { 
    constructor(private http: HttpClient) { } 
    // getMessage() { 
    //     return this.http.get( 
    //         'http://localhost:3000/tasks'
    //     ); 
    // }
    // postMessage(data: any) { 
    //     return this.http.post( 
    //         'http://localhost:3000/tasks', data
    //     ); 
    // }

    post_todolist = (data: any) => {
        return this.http.post( 
            'http://localhost:3000/task/add', data
        );
    }
}