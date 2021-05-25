import React, { Component } from 'react';

class Addform extends Component {
    
    inputRef = React.createRef();
    onSubmit=(e)=>{
        e.preventDefault();
        console.log(this.inputRef.current.value);
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        this.inputRef.current.value='';
     };

    render() {
        return (
            <form className="inputbox" onSubmit={this.onSubmit}>
                <input 
                className="input" 
                type="text" 
                placeholder="Habit"
                ref={this.inputRef}
                />

                <button 
                className="addBtn"
                >Add</button>
            </form>
        );
    }
}

export default Addform;