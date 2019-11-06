import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; // needed for de module decorator
import { AppComponent } from './app.component'; // import the components
import { TestCompComponent } from './test-comp/test-comp.component';
import { FechaActualComponent } from './fecha-actual/fecha-actual.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [ // declare componentes, all the components used in my app must appear
    AppComponent, TestCompComponent, FechaActualComponent, ParentComponent, ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
