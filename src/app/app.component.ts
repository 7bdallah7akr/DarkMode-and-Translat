import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TranslateModule} from "@ngx-translate/core";
import {TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isDarkMode : boolean = false;
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.body.classList.add('bg-dark', 'text-white');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('bg-dark', 'text-white');
      localStorage.setItem('theme', 'light');
    }
  }
  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDarkMode = true;
      document.body.classList.add('bg-dark', 'text-white');
    }
  }
  // ////////////////////////////////////////////////////////////////////////
  currentLang: string = 'en';
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['ar', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    this.translate.use(this.translate.getBrowserLang() || "en");
  }
  useLanguage(language: string): void {
    this.translate.use(language);
    this.currentLang = language;
}
}