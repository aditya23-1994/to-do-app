import React from 'react';
import ToDo from './pages/todo/todo.component';
import { CreateTask } from './pages/createPage/createpage.component';
import { UpdateTask } from './pages/updatePage/updatepage.component';
import { Redirect, Route } from 'react-router-dom';
import nextId from 'react-id-generator';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
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
      }

  }



  }

  submitTasks = () => {
    let taskId =   this.state.todo[this.state.todo.length - 1].id;
    let Id = nextId();
//Creating a variable list to find and hold the to-do item.
    let todoTask=this.state.todo.filter(todo =>(todo.id === taskId));
    const tempTodo = todoTask[0];

//Creating a new todo list which does not have the old todo list.
    let newTodo = this.state.todo.filter(todo =>todo.id !== taskId);

    this.setState({tasks: {...this.state.tasks, id: Id, refId: taskId}},()=>(
    this.setState({values: {...tempTodo, items: [this.state.tasks]}},
      ()=>{
        this.setState({todo: [...newTodo,this.state.values]}, () =>{

          this.setState({values:
          {id: '', 'title': '', 'desc': '', 'branch': '', tag: '', date: '',items:[]},
          tasks:{refID:'', id: '', text: '', isDone:false}})
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

  render(){
    return (
    <div>

      <Route exact path='/'  component={ToDo} />
      <Route exact path='/create-task' 
      render={ ({match, history}) => <CreateTask 
                match= {match}
                history={history}
                submitTasks = {this.submitTasks}
                handleChange = {this.handleChange}
                handleSubmit = {this.handleSubmit}
                checkboxChange = {this.checkboxChange}
                values = {this.state.values}
                tasks = {this.state.tasks}  />} />
      <Route exact path='/update-task' 
                render={ ({match, history}) => <UpdateTask 
                          match= {match}
                          history={history}
                          submitTasks = {this.submitTasks}
                          handleChange = {this.handleChange}
                          handleSubmit = {this.handleSubmit}
                          checkboxChange = {this.checkboxChange}
                          values = {this.state.values}
                          tasks = {this.state.tasks}  />} />
    </div>
  )}
}

export default App;

