import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [],
  exports: [MatInputModule, MatFormFieldModule, FormsModule, MatTableModule],
})
export class MaterialModule {}
