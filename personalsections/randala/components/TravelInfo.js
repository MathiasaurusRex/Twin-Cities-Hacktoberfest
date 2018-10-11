import Document from 'next/document';

class TravelInfo extends Document {
  constructor(props) {
      super(props);

      this.state = { city: '' }; 
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