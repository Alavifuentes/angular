import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
@Input() control: FormControl;
@Input() model: string;
@Input() campo: string;
  constructor(translate: TranslateService) { }

  ngOnInit(): void {
  }
  get errorMessage(): string {
    const validate = '';
    for ( const propertyName in this.control.errors) {
      if ( this.control.errors.hasOwnProperty(propertyName)
        && (this.control.touched || !this.control.pristine )){
        console.log('propertyName', this.model + '.' + this.campo + '.' + propertyName);
        return this.model + '.' + this.campo + '.' + propertyName;
      }
    }
  }


}
