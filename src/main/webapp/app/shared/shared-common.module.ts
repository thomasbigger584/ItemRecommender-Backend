import { NgModule } from '@angular/core';

import { ItemrecommenderSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [ItemrecommenderSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [ItemrecommenderSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ItemrecommenderSharedCommonModule {}
