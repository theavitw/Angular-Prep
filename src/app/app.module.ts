import { MatSliderModule } from '@angular/material/slider';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { FormHandlingComponent } from './form-handling/form-handling.component';
import { CounterComponent } from './counter/counter.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { ChildComponent } from './PerentToChild/child/child.component';
import { PerentComponent } from './PerentToChild/perent/perent.component';
import { ChildCompComponent } from './ChildToParent/child-comp/child-comp.component';
import { ParentComponent } from './ChildToParent/parent/parent.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipe } from './pipes/custom.pipe';
import { StudentDataComponent } from './student-data/student-data.component';
import { StudentServicesService } from './Services/student-services.service';
import { CallingApiComponent } from './calling-api/calling-api.component';
import { HttpClientModule } from '@angular/common/http';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { CustomDirective } from './shared/custom.directive';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { RoutingComponent } from './routing/routing.component';
import { AboutComponent } from './routing/about/about.component';
import { ContactComponent } from './routing/contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentsDynamicRoutingComponent } from './students-dynamic-routing/students-dynamic-routing.component';
import { TShirtsComponent } from './Products/t-shirts/t-shirts.component';
import { PantsComponent } from './Products/pants/pants.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './Products/product-details/product-details.component';
import { ContactProejctionComponent } from './contact-proejction/contact-proejction.component';

@NgModule({
  declarations: [
    AppComponent,
    EventBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    FormHandlingComponent,
    CounterComponent,
    TwoWayBindingComponent,
    StructuralDirectivesComponent,
    ChildComponent,
    PerentComponent,
    ChildCompComponent,
    ParentComponent,
    PipesComponent,
    CustomPipe,
    StudentDataComponent,
    CallingApiComponent,
    TemplateDrivenFormComponent,
    ReactiveFormsComponent,
    CustomDirective,
    CustomDirectiveComponent,
    RoutingComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent,
    StudentsDynamicRoutingComponent,
    TShirtsComponent,
    PantsComponent,
    ProductsComponent,
    ProductDetailsComponent,
    ContactProejctionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSliderModule,
    MatButtonModule, MatDividerModule, MatIconModule, HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    StudentServicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
