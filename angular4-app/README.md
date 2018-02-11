<!--# Angular4App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).-->


#Data Binding(transfer data between typescript to HTML and vice versa)
String Interpolation {{data}}
or 
TYPE SCRIPT-->HTML (property binding)
Property Binding ([Property]="data") : ONE WAY
HTML -->TYPE SCRIPT (event Binding)
Event Binding ((event)="expression"): ONE WAY 

TWO WAY Data Binding
[(ngModel)]="data"

#String Interpolation :
String interpolation : we can wrtie any typescript code in the string interpolation but it should returns string in the end and we cannot able to write block statments.

#Directives:
*ngIf --> * which indicates that this is the structoral directive, which alters the DOM 

# COMPONENT COMMINICATION 
@@ FROM PARENT -- > CHILD {app.component-->server.compoment}}
-->Using Property Binding using @Input() decorative 

@@ FROM CHILD --> PARENT(cockpit.component-->app.component)
-->Using Event Emitter and @Output decorative




#Augury : Developer tool Google Chrome Plugin 

#encapsulation:ViewEncapsulation: 
-->to override the compoment CSS (if we write component specific CSS, even thugh we can override the css using viewEncapsulation

#LocalReference : if is one way Binding from HTML-->TS then localreference instead of ngModel to increase the performance 
<input #localRefereceName/> , directly access in TS with 'localRefereceName'

#viewChild: To get the HTML Element reference in TS 

#ng-content : to keep HTML code in the between custom component code like below. And this approach used to build HTML dynamic widgets 
<custom-component>
<p>SOME TEXT </p>
</custom-component>

#LIFE CYCLE HOOK 
1. ngOnChanges: Called after a bound input property changes 
(constrctor) will invike before ngOnInit 
2. ngOnInit: Called once the component is initialzed 
3. ngDoCheck : Called during every change detection 
4. ngAfterContentInit :Called after (ng-content) has been projected into the view 
5. ngAfterContentChcked: Called everytime the projected content has been checked 
6. ngAfterViewInit: called after the component's view (and child views) has been initialzed
7. ngAfterViewChecked : Called everytime the view(and child vires) has been checked 
8. ngOnDestroy: Called once the component is about to destroyed 


# Directives
structoral directives:which can change the structor of the DOM ,ex *ngIf, *ngFor
Attribute Directives : Just sit on element like attribute, will not destroy the DOM , jsut change the property of DOM like BG color 

# It is not possible to keep more than one structoral directive on one element.
--><li *ngIf="some condtion" *ngFor="some loop"></li>  : is not allowed and throw an error 
-->Directives does not have viewOnInit life cycle hook in its life cycle 
--> "this.elementRef.nativeElement" : this is not the good way access the element inside the directive

# SERVICES
-->Common code which we can reuse in all the components 
-->Sharing the data between the components 
-->Services or instances will not propagate to Parent compoments, instead they go down to all its child components and it self 
-->Services can be injected into another services 
-->(heirarchial Injection)Each import of services will creae a seperate instance of it(hence if you import in parent component and PROVIDERS array,  then child component of it should include SERVICEs instance inside  PROVIDERS array to avoid seperate instance creation of service for OVERRIDE )
-->If we import services into main module i.e app.module and it is available across the application 
--> We can CROSS-COMMUNICATE in between the components using common service which is imported in both componets and app.module as well ? HOW
	-->reuirements: COMPONENT-A and COMPONENT-B and COMMON-SERVICE(which is imported in both components)
	-->Register an Event in COMMON-SERVICE : private myStatus = new EventEmitter<string>()
	-->EMIT the same Event which is registered in COMMON-SERVICE from COMPONENT-A: this.COMMON-SERVICE.myStatus.emit('any data')
	-->Listen/Subscribe/Capture in COMPONENT-B : this.COMMON-SERVICE.myStatus.subsribe((anyData)=>{alert(anyData)})
-->Services can imorted in parent component and providers array should also update in parent component but in its child compoment only we have import and inject  in constrctor and no need to add in providers array of child component 

-->Sending data between components using service : COMPONENT-A -->COMPONENT-B (of same heirarchy)
   -->COMPONENT-A create a service for COMPONENT-A(compA.service) and send data its service
   --> COMPONENT-B has its own (compB.service) which can manages its all child components 
   --> INJECT COMPONENT-B's service (compB.service) into compA.service(make sure that you have icluded the Injectable() decorative in compA.service)
   -->compB.service can send the data to its all child components 
   
 ## ROUTERS
 -->Relative Path: link1 : append the existing URL with link which you have mentioned in the routerLink
 -->Absolute path : ./link1 : it just loads with new URL which you have mentioned in routerLink 
 --> COnvert String to  a NUMBER :
     -->  const serverId = this.route.snapshot.params['id'];   (string)
	 -->  const serverId = +this.route.snapshot.params['id'];  (Number) added + operator in the beginning of the line 
    #RESOLVER: 
	-->a piece of code runs, before routes pitch into an action.
	--> resolver are used to fetch the data asynchrounsly before routing can happens 
	-->Resolver will help us to load the data in advance
 -->Once you create the Observable by your own , do not forget to clean or unsubscribe in component destroy method. The observable which angular exposes are autmatically angular will clean those.
 
 ##OBSERVABLES
 -->Observable are from rxJS third part library and used to handle asynchrounse situation like button Emit Event ,HTTP call and others 
 -->We can our own custom objservables 
 -->Obeservable Emit the data and Observer(subsribe) will capture the data 
 -->Do not forget  unsubscribe the custom created observable,because it leads to memory leak in the browser 
 -->OnNgDestroy we have to unsubscribe the objservables
 
 #CROSS COMPONENT COMMINICATION: SUBJECT from RXJS library instead of EVENT EMITTER 
 
 ## FORMS
 -->There are two approaches which angular shifts with 
   -->Template Driver(HTML -->TYPESCRIPT)
   -->REACTIVE Approach(TS-->HTML)
   ## TD(Template Driven)
   -->Include FormsModule in app.module 
   -->We can access the form data in TS using onSubmit as well as using ViewChild decorative with local veriable reference 
   -->setValue-->update entire form value 
   -->patchValue ---> to update each field value in the form 
   -->by adding ngModel directive in form control, from this we are insisting to Angular to add a form control for consideration 
   ## REACTIVE Approach:
   -->We have to include : ReactiveFormModule in app.module 
 
 ##PIPES :Pipes are used to tranform output in HTML template 
 -->Pipe will parse the string or object from left to right for ex:{{objectName | date:'fullDate' | uppercase}}
 --> In above example date will execute first and then uppercase pipe will execute on date pipe 
 --> if you reverse the pipe order in above example , throw an error : because it cannot convert digits of date and  : charactor to uppercase 	since     it is not a string  
 -->Chaning the array OR object  on the page (which is used for pipe), wont trigger the pipe again and again, because to increase the performance of the application from angular side 
 -->async pipe: can be used on the data which comes after some delay or service OR async pipe can subsribe to observable by default 
 -->Angular execute the object which returns from some promise or service, this is due to performance because angular has to wait till promise get resolve , to tackle this we have to use async pipe 
 
 ##HTTP:
	-->map() method which transforms the data which returns from previous observable and returns the new objservable after wrapping the transformed data 

## MODULES(Own MODULES)
-->APP MODULE -->FEATURE MODULE 1(RecipeModule) and FEATURE MODULE 2(ShoppingListModule)
   -->If custom directive(appDropDown) are used in  app module's component like(headercomponent) as well as in FEATURE MODULE in that case if we import same directive either in app Module or Feature module(RecipeModule) will not work the appDropDown directive in Featture module but only works in App Module(headercomponent). To solve this problem we have to SHAREDMODULE and we have to import that directive and import this SHAREDMODULE in both Featture Modules 
   
-->Difference between component selector and router : If we try to import <sample-selector></sample-selector> in some module where in its parent module if we not import(in declarations array) the <sample-selector> compoment then application will throw error that <sample-selector> HTML tag is not defined. But Router is not like that you can import(any component) where you need but (make sure that router link should be import before its access) and access where you need. 
   For example if you import Featture Module(ShoppingListModule) Router link into app.module's app-routing.module but still component is imported inside the Feature Module only but this scenario will not throw error 
   
##CommonModule like FormsModule, will unlocks all the directive like ngClass,ngStyle and so on for that particular module 

##Lazy Loading : Do not load the component on the app launching time and instead, whenever you need then load the respective component vis loadChildren property of router(so which all the compone are not require at the time of app launch just it remove all from app.module file )

	-->If some services were planned to load in the lazyloaded component but even we need those service in the other modules(no lazy loaded) later of point, but these lazy loaded services are available in all the module across the app and this is because due to ROOT INJECTOR and in angular framework only one injector can manage all these task hence the services whih is imported in lazyloaded module will available in across the application.
	
	-->If you inject the service(LogService) in LazyLoad(RecipeModule) which is imported in AppMOdule and Featture Module, hence it create a seperate instance of LogService in LazyLoad loaded Module(RecipeModule).
	
   -->*** Do not PROVIDE services in SHAREDMODULE !, Especially if you planned to use it them in LazyLoaded Modules.
   
   ## CORE MODULE (which includes header component ) and this module can be import only on App.Module : The component wchich can used in app.component can be considered as CORE MODULE COMPONENT
   
## AOT and JOT Compilation :
	-->Compilation : In Angular terminology : Convert HTML template into Javasript templates to increase the performance. Like accessing the DOM than accessing JS created HTML element is more faster and DOM access 

	-->JIT : Just in time compilation : Development -->Production-->App Download in Browser(boots up using bootstrap module)-->Angular Parse and Compiles template to JS)

	-->AOT: Ahead of time compilation : Development-->Angular parse HTML template to JS-->Production-->App download to browser(bootstrap using Angular) and Runs
	-->Advantage of AOT :
		1.Faster start up: parsing and compilation will no be done in browser 
		2.Template parsing error get caught in console rather than showing in browser console 
		3.File Size Reduced: Angular Compiler will not shipped to browser since all templates compiled in AOT and by using AOT compiler it should know whether its need to ship the directives or any elements to browser in the time of AOT only if we used any directives in the templates. For ex if *ngIf is not used in the template then due to AOT compilation will not ship that directive to production code and hence it is reduced on the file size.
	-->ng build --prod --aot (to compiled down the code from AOT using ng CLI)


## PRE LOAD THE LAZY LOADED COMPONENT to avoid little mil seconds hang delay on the application:	
	-->Load the lazy loaded component while user is operating on some other components or some point of time but not at the time of load 
	  --> we can enable this feature by enabling "preloadingStrategy":PreloadAllModules in app-routing.modules.
	  


## ANIMATION 


##UNIT TESTING :
This Module only provides a brief and basic Introduction to Angular 2 Unit Tests and the Angular 2 Testing Suite. This Course isn't focused on Testing.

If you want to dive deeper, the official Docs actually are a great place to start. There you'll also find a Non-CLI Setup!

Official Docs: https://angular.io/docs/ts/latest/guide/testing.html

I can also recommend the following Article: https://semaphoreci.com/community/tutorials/testing-components-in-angular-2-with-jasmine

For more Information on how to run Tests with the CLI have a look at their official Docs:

=> Unit Tests: https://github.com/angular/angular-cli#running-unit-tests

=> E2E Tests: https://github.com/angular/angular-cli#running-end-to-end-tests	  
