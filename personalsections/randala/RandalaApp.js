import Document from 'next/document';
import SearchBar from './components/SearchBar';
import BooksInfo from './components/BooksInfo';
import TravelInfo from './components/TravelInfo';
import Visual from './components/Visual';





class RandalaApp extends Document {
    constructor(props) {
        super(props);
  
        this.state = { city: '' }; 
        this.UpdateSearch = this.UpdateSearch.bind(this); 
    }

    UpdateSearch(searchString) {
       this.setState({city: searchString});
    }
 

    //displaySearch
    

  render() {
        return ( 
            <div> 
            <SearchBar UpdateSearch={this.UpdateSearch} />
            <BooksInfo  searchState={this.state.city} /> 
            {/* searchState = this.searchState* or DisplayUserSearch={this.displaySearch/}
            {/* DisplayUserSearch should be used in the child - this is a way to send event handler*/ /*-- 
            or include value={this.state.userInput}*/}
            <TravelInfo searchState={this.state.city}/>
            <Visual searchState={this.state.city}/>
            </div> 
        );

    }

}


export default RandalaApp;
