import React from "react"

class BindTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: "msg: init"
        }
    }

    handleBtnClick(arg1, arg2) {
        this.setState({
            msg: "msg: " + arg1 + arg2
        })
    }

    render() {
        return (
            <div>
                <h1>Bind Test Component</h1>
                <p>{this.state.msg}</p>
                <br/>
                通过bind绑定：
                <button onClick={this.handleBtnClick.bind(this, "通过", "bind")}>Bind Test</button>
                <br/>
                通过箭头函数绑定：
                <button onClick={() => {this.handleBtnClick("箭头","函数")}}>Bind Test</button>
            </div>
        );
    }
}

export default BindTest