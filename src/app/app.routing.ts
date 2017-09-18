import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceipesComponent } from './receipes/receipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
    { path: 'recipe', component: ReceipesComponent },
    { path: 'shopping-list', component: ShoppingListComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}