import { Component, OnInit } from '@angular/core';
import { PersonService } from '../service/service';
import { Person } from '../model/person';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {
  
  personList: Person[]

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    
//    this.personService.getPerson().subscribe(p => this.peopleList = p)
//    this.personList = this.personService.getPerson();
    this.personService.getPersonWeb().subscribe((users) => {
      this.personList = users;
      console.log(users);
    });
  }

}
