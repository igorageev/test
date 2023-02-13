import { Component, Input } from '@angular/core';
import { iChild } from "../../../../models/child"

@Component({
  selector: 'app-children-bar',
  templateUrl: './children-bar.component.html',
  styleUrls: ['./children-bar.component.scss']
})
export class ChildrenBarComponent {
  @Input() child: iChild
}
