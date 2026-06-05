import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { TasksComponent } from './tasks/tasks.component';

export const routes: Routes = [

{
 path:'',
 component:HomeComponent
},

{
 path:'about',
 component:AboutComponent
},

{
 path:'tasks',
 component:TasksComponent
}

];