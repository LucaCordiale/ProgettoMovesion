import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { companies } from 'src/companies';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  company = {
    name: '',
    phone: '',
    address: '',
    revenue: ''
  }
  companyList: Array<companies> = [];

  constructor() { }
  Submit(companyForm: NgForm) {
    if (companyForm.valid) {
      this.companyList.push(companyForm.value)
    } else {
      alert('form non compilato')
    }

  }
  ngOnInit(): void {
  }

}
