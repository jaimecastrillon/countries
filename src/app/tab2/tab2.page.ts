import { Component, OnInit } from '@angular/core';
import { CountryService } from '../api/country.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  countries: any;
  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.countryService.getCountries().subscribe((countries: any) => {
      this.countries = countries;
      console.log(countries);
    });
  }

}
