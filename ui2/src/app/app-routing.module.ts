import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent} from './main/main.component';

const routes = [
    {
        path: '',
        component: MainComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {useHash: false})
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }
export const routedComponents: any[] = [];
