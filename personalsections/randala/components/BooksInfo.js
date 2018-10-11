import Document from 'next/document';

class BooksInfo extends Document {
  constructor(props) {
      super(props);

      this.state = { city: '' }; 
  }


  render() {
    return (
        <div>
            BooksInfo.js
            {this.props.searchState}
        </div>
    );
  } 
}

export default BooksInfo;