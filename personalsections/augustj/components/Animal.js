import Document from 'next/document';



class Animal extends Document {
    constructor(){
        super();
        
    }
    render() {
        return(
            <div className={this.props.classModifier}>
                <h1>{this.props.animalname}</h1>
                <p> {this.props.classModifier}</p><p> {this.props.classModifier}</p>
                <p> {this.props.classModifier}</p><p> {this.props.classModifier}</p><p> {this.props.classModifier}</p>
                <p>{this.props.animaldescription}</p>
            </div>
              
                
            
        )
    }

}

export default Animal;
