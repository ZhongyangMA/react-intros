import React from "react"

/**
 * 类组件
 * 1. 须继承自 React.Component 类
 * 2. 必须有render方法，并返回一个 react 对象或 null
 */
class ShoppingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gender: "male"
        }
    }

    render() {
        return (
            <div>
                <h1>Shopping List for: {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                </ul>
                <p>{this.state.gender}</p>
            </div>
        );
    }
}

export default ShoppingList
