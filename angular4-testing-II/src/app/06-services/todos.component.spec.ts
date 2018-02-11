import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service:TodoService; 

  beforeEach(() => {
    //since we are not making the real HTTP call, hence I am passing the null to TodoService method
    service = new TodoService(null);
    component = new TodosComponent(service);

  });

  it('should set todos property by items which returned from server', () => {
    //AAA: Arrange,Act and Assert

    let todos = [
      {id:'1',name:'a'},
      {id:'2',name:'b'},
      {id:'3',name:'c'}
    ]
    //Arrange
    spyOn(service,'getTodos').and.callFake(()=>{
      return Observable.from([todos]);
    })

    //Act
    component.ngOnInit();

    //Assert
    expect(component.todos.length).toBeGreaterThan(0);
    expect(component.todos).toBe(todos);
  });

  it('should add the new todos which are returned from the server',()=>{
    //AAA
    let spy;
    //Arrange
    spy = spyOn(service,'add').and.callFake(()=>{
      //do not bother what server is returning becase it is a fake call
      return Observable.empty();
    })

    //Act 
    component.add();

    //Asssert
    expect(spy).toHaveBeenCalled();
  });

  it('should add new todo item to todo array',()=>{
    //AAA
    let spy;
    let todo ={id:'1',name:'a'};
    //Arrange
    spy = spyOn(service,'add').and.callFake(()=>{
      //do not bother what server is returning becase it is a fake call
      return Observable.from([todo]);
    })

    //Act 
    component.add();

    //Asssert
    //expect(component.todos.length).toBe(1);
    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  })

  it('should set the message property if server returns the error while adding the todos',()=>{
    //AAA
    let spy;
    let error = 'server error';
    //Arrange
    spy = spyOn(service,'add').and.callFake(()=>{
      //do not bother what server is returning becase it is a fake call
      return Observable.throw(error)
    })

    //Act 
    component.add();

    //Asssert    
    expect(component.message).toBe(error);
  });


  //ADD 

  it('should call the delete service if user confirms',()=>{
    //user is confirming by confirm method and now we have to spy on window.confirm()

    //Arrange
    spyOn(window,'confirm').and.returnValue(true);
    let spy = spyOn(service,'delete').and.returnValue(Observable.empty());

    //Act
    component.delete(1);

    //Assert
    //expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(1);

  });

  it('should NOT call the delete service if user confirms FAILS',()=>{
    //user is confirming by confirm method and now we have to spy on window.confirm()

    //Arrange
    spyOn(window,'confirm').and.returnValue(false);
    let spy = spyOn(service,'delete').and.returnValue(Observable.empty());

    //Act
    component.delete(1);

    //Assert
    //expect(spy).toHaveBeenCalled();
    expect(spy).not.toHaveBeenCalled();
  })
});