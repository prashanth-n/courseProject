import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceipesComponent } from './receipes/receipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './receipes/recipe-start/recipe-start.component';
import { ReceipeDetailsComponent } from './receipes/receipe-details/receipe-details.component';

const routes: Routes = [
    { path: '', redirectTo: '/recipe', pathMatch: 'full' },
    {
        path: 'recipe', component: ReceipesComponent, children: [
            { path: '', component: RecipeStartComponent },
            { path: ':id', component: ReceipeDetailsComponent }
        ]
    },
    { path: 'shopping-list', component: ShoppingListComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
