import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // Localize string with a custom id and a default value
  title = $localize`:@@app.title:Welcome to the Angular i18n demo in english`;

  changeLocale(locale: string) {
    // Store the user's preferred locale in localStorage
    localStorage.setItem('locale', locale);

    // Reload the page to apply the new locale
    location.reload();
  }
}
