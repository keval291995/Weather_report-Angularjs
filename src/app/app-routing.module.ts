import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { WeatherComponent } from './weather/weather.component';
import { ComparisonComponent } from './comparison/comparison.component';
import { SearchComponent } from './search/search.component';
import { CompareComponent } from './compare/compare.component';

const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'weather_report', component: WeatherComponent },
	{ path: 'weather_comparison', component: ComparisonComponent },
	{ path: 'search', component: SearchComponent },
	{ path: 'compare', component: CompareComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
