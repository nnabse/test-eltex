import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModules } from '@app/material/material.module';
import { ExpansionPanelComponent } from '@shared/expansion-panel/expansion-panel.component';
import { ToolbarComponent } from '@shared/toolbar/toolbar.component';

@NgModule({
  declarations: [ToolbarComponent, ExpansionPanelComponent],
  imports: [CommonModule, MaterialModules],
  exports: [ToolbarComponent, ExpansionPanelComponent],
})
export class SharedModule {}
