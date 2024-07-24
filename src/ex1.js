import React from "react";
class Ex extends React.Component{
    name = "ReactJS";
    count = 0;
    constructor(){
        super();
        this.state={
            number:1
        };
        console.log("Constructor is called");
    }
    componentDidMount(){
        console.log("Mounted");
        console.log(this.count);
        console.log(this.count+1);
        console.log(this.state.number+1);
    }
    componentDidUpdate(){
        console.log("Incremented");
    }
    componentWillUnmount(){
        console.log("Will be unmounted");
    }

    funcExBtnClick= () => {
        console.log("Button click!!");
        console.log(this.count+1);
        this.setState({number: this.state.number+1});
    }
    render(){
        return(
            <div>
                <h1>This is Class Component {this.name} {this.count} </h1>
                <button class="btn btn-primary"
                onClick={this.funcExBtnClick}
                >Click Here</button>
            </div>
        );
    }
}
export default Ex;