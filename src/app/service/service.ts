export class Service {
	
	import { HttpClient, HttpHeaders } from '@angular/common/http';
	import { Injectable } from "@angular/core";
	import { Observable } from 'rxjs';
//	import { Http, Response } from "@angular/http";i
	import { Person } from '../model/person';
	
//	var person = new Person();
//	
//	person.firstName = "John";
//	person.lastName = "Smith";
//	person.phoneNumber = "1234567890";
//	
//	console.log(person);
	
	@Injectable({providedIn: 'root'})
	export class PersonService {
//		personUrl = 'http://localhost:4200/list-component';
		personUrl = 'http://localhost:8080/api/users';
		
		 
//		async delay(ms: number) {
//		await new Promise(resolve => setTimeout(()=>resolve(), ms));
//		}
//		
		constructor(private http: HttpClient) {}

		getPersonWeb(): Observable<any>
		{
			return this.http.get<any>(this.personUrl);

		};
		
		getPerson() {
			 
//			this.delay(4000);
//			return ["John Bob", "William Morris", "Tony Robbins"];
		}
		
//		getPerson(): Observable<Person>()> {
//			return of(PEOPLE);
////			return ["John Bob", "William Morris", "Tony Robbins"];
////			return [{"John", "Smith", "123-4567-890"}];
//		}
	}
}
