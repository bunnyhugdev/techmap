import { Component, OnInit } from '@angular/core'
import { CompanyService } from '../company.service'

@Component({
  selector: 'app-tech-list',
  templateUrl: './tech-list.component.html',
  styleUrls: ['./tech-list.component.scss']
})
export class TechListComponent implements OnInit {

  techs

  constructor (public companyService: CompanyService) {
  }

  ngOnInit () {
    this.companyService.init()
    this.techs = this.companyService.techs.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
  }

}
