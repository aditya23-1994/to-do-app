import React from 'react';
import {ToDo} from './pages/todo/todo.component';
import { CreateTask } from './pages/createPage/createpage.component';
import { UpdateTask } from './pages/updatePage/updatepage.component';
import { Redirect, Route } from 'react-router-dom';
import nextId from 'react-id-generator';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todo:[{id:'1',
       title:'hello world', 
       desc:'this is a desc',
       branch:'todo',
       tag:'personal',
       date:'24',
      items:[{text:'sub 1',id:'4',isDone:false,refId:'1'},{text:'sub 2',id:'5',isDone:false,refId:'1'}]},
       {id:'2',
        title:'hello aditya',
         desc:'this is a desc for aditya',
       branch:'inProgress',
       tag:'official',date:'24',
        items:[{text:'sub 1', id:'6',isDone:false,refId:'2'},{text:'sub 2', id:'7',isDone:false,refId:'2'}]},
       {id:'3',
        title:'hello React',
         desc:'this is a desc for React',
       branch:'done',
       tag:'misc',date:'24',
        items:[{text:'sub 1', id:'8',isDone:false,refId:'3'},{text:'sub 2', id:'9',isDone:false,refId:'3'}]} ],
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
      }

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
      [name]:value}}, ()=>console.log(this.state))
  }

  checkboxChange = (e) => {
    this.setState({tasks: {...this.state.tasks, isDone: e.target.checked}});
  }

  editCheckbox = (id, refId, e) => {

    let value = this.state.todo.filter(todo=> (todo.id === refId));
    let todo = this.state.todo.filter(todo=> (todo.id !== refId));
    let item = value[0].items.filter(item=> (item.id === id));
    let items = value[0].items.filter(item=> (item.id !== id) );
    let newItem = item[0];
    let newValue = value[0];
    this.setState({tasks:{...newItem, isDone: e.target.checked}}, ()=>{
    this.setState({values:{...newValue,items:[...items, this.state.tasks]}}, ()=>{
    this.setState({todo:[...todo, this.state.values]})},()=> console.log(this.state))
    })
    
  }

  render(){
    return (
    <div>

      <Route exact path='/'  render={(props) =><ToDo 
                              todo={this.state.todo} 
                              editCheckbox={this.editCheckbox}/>} />
      <Route exact path='/create-task' 
      render={ ({match, history}) => <CreateTask 
                match= {match}
                history={history}
                submitTasks = {this.submitTasks}
                taskChange = {this.taskChange}
                handleChange = {this.handleChange}
                handleSubmit = {this.handleSubmit}
                checkboxChange = {this.checkboxChange}
                values = {this.state.values}
                tasks = {this.state.tasks}
                todo = {this.state.todo}  />} />
      <Route exact path='/update-task' 
                render={ ({match, history}) => <UpdateTask 
                          match= {match}
                          history={history}
                          submitTasks = {this.submitTasks}
                          handleChange = {this.handleChange}
                          handleSubmit = {this.handleSubmit}
                          checkboxChange = {this.checkboxChange}
                          todo = {this.state.todo}  />}/>
    </div>
  )}
}

export default App;

