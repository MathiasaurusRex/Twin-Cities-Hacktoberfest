import React, { Component }from 'react'; 
import ReactDOM from 'react-dom'; 
import SearchBar from './components/SearchBar';
const SkyScanner_API_KEY = "";
const OpenLibrary_API_KEY = "";
const SygicTravel_API_KEU = "";
const Twitter_API_KEY = ""; //news api or registry or facts api


class App extends Component {
  constructor(props) {
      super(props);

    } 
  
  render() {
    return ( 
        <div> 
        <SearchBar />
        </div> 
    );
  }
}

/*const Randala = props => (
    <div>
      <NameCard />
    </div>
  
  );*/

ReactDOM.render(<App />, document.querySelector('.container'));  
