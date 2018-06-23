import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent} from './main/main.component';
import { IntroComponent } from './intro/intro.component';
import { RequestComponent } from './main/request/request.component';

const routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'request',
                component: RequestComponent
            }
        ]
    },
    {
        path: 'intro',
        component: IntroComponent
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
