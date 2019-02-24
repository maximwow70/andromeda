import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnHomeComponent } from './an--home/an--home.component';

const routes: Routes = [
	{ path: 'home', component: AnHomeComponent },
	{
		path: '',
		pathMatch: 'full',
		redirectTo: '/home'
	},
	// { path: 'error', component: PageErrorComponent },
	// { path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
