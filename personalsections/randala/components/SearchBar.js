import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
      super(props);
      
    //only inside the constructor function, we manpiulate state/ other places, we use this.setState
      this.state = { city: '' }; 
  }


  render() {
    return (
        <div>
            <input 
                Value = {this.state.city}
                onChange={event => this.setState({ city: event.target.value})} />
        </div>
    );
  } 
}
export default SearchBar;