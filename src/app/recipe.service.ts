import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class RecipeService {
	placeholder = 'https://placehold.co/250';
	private readonly recipes: Recipe[] = [
		{
			id: 1,
			name: 'Chickpea Curry',
			description: 'Made with chickpeas simmered in coconut milk and spices like curry powder.',
			imageUrl: this.placeholder,
		},
		{
			id: 2,
			name: 'Caprese Salad',
			description: 'Made with mozzarella, tomatoes, and basil, drizzled with balsamic glaze and olive oil.',
			imageUrl: this.placeholder,
		},
		{
			id: 3,
			name: 'Banana Bread',
			description: 'A moist quick bread made with mashed ripe bananas, flour, sugar, and nuts.',
			imageUrl: this.placeholder,
		},
		{
			id: 4,
			name: 'Beef Tacos',
			description: ' Ground beef seasoned with spices, served in soft or hard taco shells with toppings.',
			imageUrl: this.placeholder,
		},
		{
			id: 5,
			name: 'Minestrone Soup',
			description: ' A hearty Italian soup packed with vegetables, beans, pasta, and sometimes meat.',
			imageUrl: this.placeholder,
		},
		{
			id: 6,
			name: 'Chicken Tikka Masala',
			description: 'A popular Indian dish featuring marinated chicken pieces grilled and then simmered in a rich,spiced tomato-based sauce.',
			imageUrl: this.placeholder,
		},
		{
			id: 7,
			name: 'Vegetable Stir-Fry',
			imageUrl: this.placeholder,
			description: ' A quick and colorful dish that includes a variety of fresh vegetables stir-fried with soy sauce and sesame oil.',
		},
		{
			id: 8,
			name: 'Spaghetti Carbonara',
			description: 'A classic Italian pasta dish made with egg, cheese, cured pork, and black pepper. The creamy sauce,by mixing the eggs with hot pasta.',
			imageUrl: this.placeholder,
		},
		{
			id: 9,
			name: 'Oven-Baked Salmon',
			description: 'A healthy and easy dish where salmon fillets are seasoned with lemon, garlic, and herbs, then baked until flaky with vegetables or a salad.',
			imageUrl: this.placeholder,
		},
		{
			id: 10,
			name: 'Stuffed Bell Peppers',
			description:'Bell peppers filled with a mixture of rice, ground meat, and spices, then baked until tender,great for meal prep..',
			imageUrl: this.placeholder,
		},
		{
			id: 11,
			name: 'Pancakes',
			description: 'Fluffy breakfast favorites made from a batter of flour, milk, eggs, and baking powder.',
			imageUrl: this.placeholder,
		},
		{
			id: 12,
			name: 'Quinoa Salad',
			description: 'A nutritious salad made with cooked quinoa, chopped vegetables, beans, and a tangy vinaigrette.',
			imageUrl: this.placeholder,
		},
		{
			id: 13,
			name: 'Egg Fried Rice',
			description: 'A popular Asian dish that uses leftover rice stir-fried with eggs, vegetables, and soy sauce.',
			imageUrl: this.placeholder,
			
		},
		{
			id: 14,
			name: 'Chocolate Chip Cookies',
			description: 'Classic cookies made with flour, butter, sugar, and chocolate chips.',
			imageUrl: this.placeholder,
		},
		{
			id: 15,
			name: 'Lemon Garlic Shrimp',
			description: 'Succulent shrimp sautéed with garlic, tossed in zesty lemon.',
			imageUrl: this.placeholder,
		},
	];

	getRecipes(): Observable<Recipe[]> {
		return new Observable<Recipe[]>((subscriber) => {
			subscriber.next(this.recipes);
			subscriber.complete();
		});
	}
}
