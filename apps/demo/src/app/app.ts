import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from '@acme/ui';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Hero],
  template: `
    <lib-hero
      title="Welcome demo"
      subtitle="Build something amazing today"
      cta="Get Started"
    ></lib-hero>
  `,
})
export class App {}