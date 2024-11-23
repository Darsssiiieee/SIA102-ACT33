import { Component, inject, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { NgForOf } from '@angular/common';

@Component({
	selector: 'app-recipe',
	standalone: true,
	imports: [NgForOf],
	templateUrl: './recipe.component.html',
	styleUrl: './recipe.component.css',
})
export class RecipeComponent implements OnInit {
	private readonly recipeService = inject(RecipeService);
	recipes: Recipe[] = [];

	ngOnInit(): void {
		this.recipeService.getRecipes().subscribe((recipes: Recipe[]) => {
			this.recipes = recipes;
		});
	}

	viewRecipe() {
		alert('The recipe has been shown!');
	}

	addToFavorite() {
		alert('The recipe has been added to the Favorites!');
	}
}
