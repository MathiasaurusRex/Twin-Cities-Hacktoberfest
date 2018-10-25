import Document from 'next/document';

class TravelInfo extends Document {
  constructor(props) {
      super(props);

      this.state = { city: '' }; 
  }

  //include header for the API-Key
  async componentDidMount() {
    const { id } = this.props.searchState;
    const res = await fetch(
      `https://api.sygictravelapi.com/1.1/en/places/list?parents=${id}&categories=sightseeing&limit=10` 
    );
    const post = await res.json();
    this.setState({Travel: post});
  } 

  render() {
    return (
        <div>
            TravelInfo.js
            {this.props.searchState}
        </div>
    );
  } 
}

export default TravelInfo;