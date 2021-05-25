import React, { Component } from 'react';
import './app.css';
import Habit from './components/habit';
import Habits from './components/habits';
import Navbar from './components/navbar';
import Addform from './components/addform';

class App extends Component {
  state = {
    habits:[
        {id: 1, name : 'Reading', count: 0},
        {id: 2, name : 'Running', count: 0},
        {id: 3, name : 'Coding', count: 0},
    ],
};

handleIncrement=(habit) =>{
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({habits: habits});
};

handleDecrement=(habit)=>{
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count-1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({habits: habits});
};

handleDelete=(habit)=>{
    //const habits = [...this.state.habits];
    //const index = habits.indexOf(habit);
    //habits.splice(index,1);
    const habits = this.state.habits.filter(item=>item.id!==habit.id);
    this.setState({habits: habits});
};
 
handleAdd=(name)=>{
  //const habits=[...this.state.habits, {id:Date.now(), name:name,count:0}]; 
  const habits=[...this.state.habits]
  const habit = {id:Date.now(), name:name,count:0};
  habits.push(habit);
  console.log(this.state.habits);
  this.setState({habits: habits});
}

  render() {
    return( 
    <>
      <Navbar totalCount={this.state.habits.filter(item=>item.count>0).length}>
      
      </Navbar>
      
      <Habits 
      habits={this.state.habits}
      onIncrement={this.handleIncrement}
      onDecrement={this.handleDecrement}
      onDelete={this.handleDelete}
      onAdd={this.handleAdd}  
      >
      </Habits>
    </>
    );
  }
}

export default App;
