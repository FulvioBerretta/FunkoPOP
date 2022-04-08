import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import {MatCardModule} from "@angular/material/card";
import {StrengthPipe} from "../core/layout/pipe/strength.pipe";
import { FormComponent } from './form/form.component';
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatCheckboxModule} from "@angular/material/checkbox";



@NgModule({
    declarations: [
        CardComponent,
        StrengthPipe,
        FormComponent
    ],
    exports: [
        CardComponent,
        StrengthPipe,
        FormComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        FormsModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatCheckboxModule
    ]
})
export class SharedModule { }
