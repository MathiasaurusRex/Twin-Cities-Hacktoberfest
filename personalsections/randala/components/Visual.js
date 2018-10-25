import Document from 'next/document';

class Visual extends Document {
  constructor(props) {
      super(props);

      this.state = { city: '' }; 
  }

//include header for the API-Key
  async componentDidMount() {
    const { id } = this.props.searchState;
    const res = await fetch(
      `https://api.sygictravelapi.com/1.1/en/places/${id}/media` 
    );
    const post = await res.json();
    this.setState({visuals: post});
  } 

  render() {
    return (
        <div>
            Visual.js
            {this.props.searchState}
        </div>
    );
  } 
}

export default Visual;