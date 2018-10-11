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
                //value = {this.state.city}
                onChange={event => this.props.UpdateSearch(event.target.value)} />

                {/* <input 
                value = {this.state.city}
                onChange={event => this.setState({ city: event.target.value})} /> */}
        </div>
    );
  } 
}

export default SearchBar;