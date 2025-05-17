import { Routes } from '@angular/router';
import { TemplateFormComponent } from './component/template-form/template-form.component';
import { ReactiveFormComponent } from './component/reactive-form/reactive-form.component';

export const routes: Routes = [
    {
    path: 'template-form',
    component: TemplateFormComponent
}, {
    path: 'reactive-form',
    component: ReactiveFormComponent
}
]