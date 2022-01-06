import React from 'react';
import './App.css';

class App extends React.Component{
    constructor(props){
      super(props);
      this.state={
        newItem:"",
        list:[]
      }
    }

      /* Track input */
      updateInput(key, value){
        this.setState({[key]: value})
      }

      /* Make new item with id */
      addItem(){
        const newItem={
          id: 1 + Math.random(),
          value: this.state.newItem.slice()
      };

        /* copy of list */ 
        const list = [...this.state.list];

        list.push(newItem);

        /* Updates list and resets input */
        this.setState({
          list,
          newItem:""
        });
      }
    
      /* Remove item by id */
      deleteItem(id){
        const list = [...this.state.list];

        const updatedList = list.filter(item => item.id !== id);

        this.setState({ list: updatedList });
      }

    render() {
        return (
          <div className='App'>
            <div>
              <h1>To-Do List</h1>
              {/* Input that runs updateInput when typing to track input */}
              <input 
                type="text"
                placeholder="Add to-do item here"
                value={this.state.newItem}
                onChange={e => this.updateInput("newItem", e.target.value)}
                class="add-slot"
              />
              {/* Add button */}
              <button class="add-btn" onClick={() => this.addItem()}>
                Add
              </button>
              {/* List of items with remove by id button */}
              <ul>
                {this.state.list.map(item => {
                  return(
                    <li key={item.id}>
                      {item.value}
                      <button onClick={() => this.deleteItem(item.id)}>X</button>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        );
      }
    }
export default App;
