import React, { Component } from 'react';
import Addform from './addform';
import Habit from './habit';

class Habits extends Component {
    

    handleIncrement=(habit) =>{
        this.props.onIncrement(habit);
    };

    handleDecrement=(habit)=>{
        this.props.onDecrement(habit);
    };

    handleDelete=(habit)=>{
        this.props.onDelete(habit);
    };

    handleAdd=(name)=>{
        this.props.onAdd(name);
    }

    render() {
        return (
            <>
            <Addform onAdd={this.handleAdd}></Addform>
            <ul>
                {this.props.habits.map(habit =>(
                    <Habit 
                        key={habit.id} 
                        habit={habit} 
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onDelete={this.handleDelete}                        
                        >
                    </Habit>
                ))}
            </ul>
            </>
        );
    }
}

export default Habits;