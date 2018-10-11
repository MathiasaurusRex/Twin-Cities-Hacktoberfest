import Document from 'next/document';

class Visual extends Document {
  constructor(props) {
      super(props);

      this.state = { city: '' }; 
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