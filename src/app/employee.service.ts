import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee'; // Import the Employee interface

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:5000/api/employees'; // Update the URL to match your backend API

  constructor(private http: HttpClient) { }

  // Fetch all employees
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  // Fetch a single employee by ID
  getEmployee(id: string): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}/${id}`);
  }

  // Add a new employee
  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl, employee);
  }

  // Update an existing employee
  updateEmployee(id: string, employee: Employee): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, employee);
  }

  // Delete an employee by ID
  deleteEmployee(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
