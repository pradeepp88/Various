import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'attribute-propery-binding',
  templateUrl: 'attribute-binding.component.html' 
})
export class AttributeBindingComponent  {
  title = "Attribute vs Property Binding asdfasf"
  colspan = 2;
  imageUrl = "http://lorempixel.com/400/200";
  isActive=false;
  constructor() { }

  

}
