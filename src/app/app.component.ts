import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RecipeComponent],
	template: `
		<main class="container">
			<app-recipe class="recipe"></app-recipe>
		</main>
	`,
	styles: `
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
    }

    .recipe {
      width: 91%;
      max-width: 1536px;
    }
  `,
})
export class AppComponent {
	title = 'Activity 33: Angular Recipe Grid';
}
