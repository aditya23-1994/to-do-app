import React from 'react';
import {ToDo} from './pages/todo/todo.component';
import { CreateTask } from './pages/createPage/createpage.component';
import {EditTodo} from './components/edit/edit.component';
import { Redirect, Route, useParams } from 'react-router-dom';
import nextId from 'react-id-generator';
import {Login} from './pages/loginPage/login.component';
import axios from 'axios';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      email: '',
      password: '',
      user:{
        email:'',
        password: '',
      },
      todo:[],
      values:{ id: '',
         title: '', 
              desc: '', 
              branch:'',
              tag:'', 
              date: '',
              items:[],
    },
      tasks:{
        refId: '',
        id: '',
        text: '',
        isDone: false,
      },
      redirect: null,
      loggedin: true,


  }

  }

  submitTasks = (e) => {
    e.preventDefault();
    let taskId = this.state.todo[this.state.todo.length - 1].id;
    let Id = nextId();
//Creating a variable list to find and hold the to-do item.
    let todoTask= this.state.todo.filter(todo =>(todo.id === taskId));
    const tempTodo = todoTask[0];

//Creating a new todo list which does not have the old todo list.
    let newTodo = this.state.todo.filter(todo =>todo.id !== taskId);

    this.setState({tasks: {...this.state.tasks, id: Id, refId: taskId}},()=>(
    this.setState({values: {...tempTodo, items: [...tempTodo.items,this.state.tasks]}},
      ()=>{
        this.setState({todo: [...newTodo,this.state.values]}, () =>{
          e.target.reset();
  
          this.setState({values:
          {id: '', 'title': '', 'desc': '', 'branch': '', tag: '', date: '',items:[]},
          tasks:{refId:'', id: '', text: '', isDone:false}})
        })  
      })
    ));
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let id = nextId();

    this.setState({values: {...this.state.values, id: id}}, () => 
    this.setState({ todo: [...this.state.todo,this.state.values]}, 
    ()=> { this.setState({values:{...this.state.values,
      id: '', 'title': '', 'desc': '', 'branch': '', tag: '', date: '',items:[]}})
    }));
  }


// to-do list handle change
  handleChange = (e) =>{
    const {value, name} = e.target;
    this.setState({values: {...this.state.values,
                [name] : value}})

  }

//to-do sub list handle change

  taskChange = (e)=> {
    const {value, name} = e.target;
    this.setState({tasks: {...this.state.tasks,
      [name]:value}})
  }

  checkboxChange = (e) => {
    this.setState({tasks: {...this.state.tasks, isDone: e.target.checked}});
  }

// methods for editing tasks

  editCheckbox = (id, refId, e) => {
    let value = this.state.todo.filter(todo=> (todo.id === refId));
    let newTodo = this.state.todo.filter(todo=> (todo.id !== refId));
    let item = value[0].items.filter(item=> (item.id === id));
    let items = value[0].items.filter(item=> (item.id !== id) );
    let newItem = item[0];
    let newValue = value[0];
    this.setState({tasks:{...newItem, isDone: e.target.checked}}, ()=>{
    this.setState({values:{...newValue,items:[...items, this.state.tasks]}}, ()=>{
    this.setState({todo:[...newTodo, this.state.values]})})
    })
    
  }

  submitEditedTask = (id,e) => {
    e.preventDefault();
    let value = this.state.todo.filter(todo=>(todo.id === id));
    console.log("value of the list",value, id);
    let newTodo = this.state.todo.filter(todo=> (todo.id !== id));
    let newValue = value[0];
    this.setState({tasks:{...newValue.items}}, ()=>
      this.setState({values:{...this.state.values,id:id, items:[...newValue.items]}}, () =>{
        this.setState({todo:[...newTodo, this.state.values]},()=> console.log(this.state))
      })
      )
  }

  submitEditedTodo= (id, e) => {
    e.preventDefault();
    let Id = nextId();

    let todoTask= this.state.todo.filter(todo =>(todo.id === id));
    const tempTodo = todoTask[0];
    console.log(tempTodo);
//Creating a new todo list which does not have the old todo list.
    let newTodo = this.state.todo.filter(todo =>todo.id !== id);

    this.setState({tasks: {...this.state.tasks, id: Id, refId: id}},()=>{
      console.log('tasks-data: ', this.state.tasks);
    this.setState({values: {...tempTodo, items: [...tempTodo.items,this.state.tasks]}},
      ()=>{
        this.setState({todo: [...newTodo,this.state.values]}, () =>{
          e.target.reset();
          console.log('todo after addition: ', this.state.todo);
          this.setState({values:
          {id: '', 'title': '', 'desc': '', 'branch': '', tag: '', date: '',items:[]},
          tasks:{refId:'', id: '', text: '', isDone:false}})
        })  
      })
  });
    
  }

  deleteTask = (id, refId, e) => {
    e.preventDefault();

    let newTodo = this.state.todo.filter(todo=>(todo.id !== refId));
    let todoTask= this.state.todo.filter(todo =>(todo.id === refId));
    const tempTodo = todoTask[0];
    let tempTasks = tempTodo.items.filter(item=>(item.id !== id));

    this.setState({values:{...tempTodo, items:[...tempTasks]}},()=>{
      this.setState({todo: [...newTodo, this.state.values]}, ()=>{
        console.log(this.state.todo);
        this.setState({values:
          {id: '', 'title': '', 'desc': '', 'branch': '', tag: '', date: '',items:[]}})     
      }
        
        
    )})
    
  }


  deleteTodo = (id, e) => {
    let newTodo = this.state.todo.filter(todo=> (todo.id !== id));
    console.log('this is new todo: ', newTodo);
    this.setState({todo:[...newTodo]}, ()=>{
    console.log(this.state.todo);
    });
    this.setState({redirect: "/"});
  }


  // Functions for login and logout....


  handleLoginSubmit = (e) =>{
    e.preventDefault();
    this.setState({user:{email: this.state.email, password: this.state.password}},()=>{
      axios.post('https://reqres.in/api/login', this.state.user).then(
        res => {
          localStorage.setItem('token', res.data.token);
        }).then(
          this.setState({loggedin:true})
        ).then(
          this.setState({redirect: '/'})
        ).catch(err => {
          console.log(err)
        })
    })


  };

  handleLogin = (e) =>{
    const {value, name} = e.target;
    this.setState({[name]:  value})
  }

  render(){

    if (this.state.redirect){
      return <Redirect to={this.state.redirect}/>
    }
    return (
    <div>

      <Route path='/login' render={(props)=><Login handleLogin={this.handleLogin}
                                          handleLoginSubmit={this.handleLoginSubmit} 
                                          email={this.state.email} password={this.state.password}
                                          />} />
      
      <Route exact path='/'  render={(props) =>(
                                                this.state.loggedin===false ?
                                                  <Redirect to={'/login'} />
                                                  :<ToDo
                                                  todo={this.state.todo}
                                                  editCheckbox={this.editCheckbox} 
                                                  {...props}/>)}/>

      <Route exact path='/create-task' 
      render={ ({match, history}) => (
        this.state.loggedin===false ?
        <Redirect to={'/login'} />
        :   <CreateTask 
                match= {match}
                history={history}
                submitTasks = {this.submitTasks}
                taskChange = {this.taskChange}
                handleChange = {this.handleChange}
                handleSubmit = {this.handleSubmit}
                checkboxChange = {this.checkboxChange}
                values = {this.state.values}
                tasks = {this.state.tasks}
                todo = {this.state.todo}  />)} />

        <Route path="/edit/:id" render={({match}) => (
          this.state.loggedin===false ?
          <Redirect to={'/login'} />:
          <EditTodo
                className="Container-main"
                todo={this.state.todo.find(t => t.id === match.params.id)}
                submitEditedTask={this.submitEditedTask}
                handleEditChange={this.handleChange}
                editCheckbox={this.editCheckbox}
                values={this.state.values}
                submitEditedTodo={this.submitEditedTodo}
                deleteTask={this.deleteTask}
                tasks={this.state.tasks}
                taskChange={this.taskChange} 
                deleteTodo={this.deleteTodo}
                />)} />

    </div>
  )}
}

export default App;

