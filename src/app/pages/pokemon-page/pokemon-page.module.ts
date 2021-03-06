import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { pokemonCardSharedModule } from 'src/app/SharedModule/pokemonCardShared.module';
import { PokemonPageComponent } from './pokemon-page.component';

const routes : Routes = [{
    path: '',
    component: PokemonPageComponent
}];

@NgModule({
    declarations:[ PokemonPageComponent],
    imports:[RouterModule.forChild(routes), CommonModule, NgbModule,pokemonCardSharedModule],
    exports:[RouterModule]
})
export class PokemonPageModule{}


