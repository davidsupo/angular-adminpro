import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme');

  constructor() {
    if (localStorage.getItem('theme')){
      const url = localStorage.getItem('theme');
      this.linkTheme.setAttribute('href', url);
    }
  }

  changeTheme(valor: string): void{
    const url = `./assets/css/colors/${valor}.css`;
    this.linkTheme.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkCurrentTheme();
  }

  checkCurrentTheme(): void{
    const links: NodeListOf<Element> = document.querySelectorAll('.selector');
    links.forEach(elem => {
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme.getAttribute('href');
      if (btnThemeUrl === currentTheme){
        elem.classList.add('working');
      }
    });
  }
}
