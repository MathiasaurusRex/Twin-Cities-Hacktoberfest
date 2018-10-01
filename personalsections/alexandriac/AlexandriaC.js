import Document from 'next/document';

const INITIAL_STATE = {
    friendsName: "",
    number1: "",
}

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value
});

class AlexandriaC extends Document {
    constructor(){
        super();
        this.state = {
            ...INITIAL_STATE
        }
    }
    render() {
        return(
            <div>
                <div>
                   <label htmlFor="friendsName">Friend's Name</label>
                    <input name="friendsName" type="text" onChange={event =>
                        this.setState(
                            byPropKey("friendsName", event.target.value))} />
                    <label htmlFor="number1">Number</label>
                    <input name="number1" type="text" onChange={event =>
                        this.setState(
                            byPropKey("number1", event.target.value))} />
                            div
                </div>
                <div>
                My friend <span> {this.state.friendsName}'s</span> house is over <span> {this.state.number1} </span> years old and haunted! 
                </div>
            </div>
        )
    }

}

export default AlexandriaC;
