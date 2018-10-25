import Document from 'next/document';

class SearchBar extends Document {
  constructor(props) {
      super(props);

      this.state = { city: '' }; 
  }

 

  render() {
    return (
        <div>
            <input 
                onChange={event => this.props.UpdateSearch(event.target.value)} />
        </div>
    );
  }
}

SearchBar.defaultProps = {city :'Minneapolis'}//check? 

export default SearchBar;