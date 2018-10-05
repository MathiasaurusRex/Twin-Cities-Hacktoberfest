import Document from 'next/document';



class AugustJ extends Document {
    constructor(){
        super();
        
    }
    render() {
        return(
            <div>
              $ {this.props.description}   
                
            </div>
        )
    }

}

export default AugustJ;
