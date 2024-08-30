import {Component, HostListener} from '@angular/core';
import {MatToolbarModule, MatToolbarRow} from "@angular/material/toolbar";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {MatCard, MatCardImage} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatGridList, MatGridListModule, MatGridTile} from "@angular/material/grid-list";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from "@angular/material/sidenav";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarRow,
    MatIcon,
    MatToolbarModule,
    MatIconModule,
    NgOptimizedImage,
    MatCardImage,
    MatFormField,
    MatCard,
    MatCheckbox,
    MatGridTile,
    MatGridList,
    MatButton,
    MatInput,
    MatLabel,
    MatIconButton,
    NgIf,
    MatGridListModule,
    MatDrawer,
    MatDrawerContainer,
    MatDrawerContent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isSearchDropdownVisible:boolean = false;

  toggleSearchDropdown() {
    this.isSearchDropdownVisible = !this.isSearchDropdownVisible;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const targetElement = event.target as HTMLElement;
    const isClickInside = targetElement.closest('.search-dropdown') || targetElement.closest('.search-icon');

    if (!isClickInside) {
      this.isSearchDropdownVisible = false;
    }
  }

}
