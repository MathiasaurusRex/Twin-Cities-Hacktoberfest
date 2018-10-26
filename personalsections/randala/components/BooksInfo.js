import Document from 'next/document';



class BooksInfo extends Document {
  constructor(props) {
      super(props);

      this.state = { city: '' }; 

  }



  async componentDidMount() {
    const { id } = this.props.searchState;
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=travel+${id}` 
    );
    const post = await res.json();
    this.setState({Books: post});
  } 
  

  render() {
    return (
        <div>
            BooksInfo.js
            {this.props.searchState}
            <style jsx>
            {`div {color: red !important}`

            }
            </style>
        </div>
    );
  } 
}

export default BooksInfo;