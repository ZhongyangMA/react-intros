import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from "./Hello";

/**
 * 函数组件
 * 1. 函数名必须以大写字母开头，React 以此来判断是不是组件
 * 2. 函数必须有返回值，可以是 null 或 JSX 对象
 * 3. 返回的 JSX 必须有一个根元素
 * 4. 组件的返回值用（）包裹，避免换行问题
 */
function Welcome(props) {
    return (
        <div>
            <h1>函数式组件</h1>
            <p>姓名：{props.name}</p>
            <p>年龄：{props.age}</p>
            <Hello name={props.name} />
        </div>
    )
}

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

/**
 * 渲染入口
 */
ReactDOM.render(
    <ShoppingList name="Jack Ma" age={58} />,
    document.getElementById("root")
);
