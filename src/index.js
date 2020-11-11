import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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
            <p>函数式组件：{props.name}</p>
        </div>
    )
}

/**
 * 类组件
 * 1. 须继承自 React.Component 类
 * 2. 必须有render方法，并返回一个 react 对象或 null
 */

class ShoppingList extends React.Component {
    render() {
        return (
            <div>
                <h1>Shopping List for: {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                </ul>
            </div>
        );
    }
}

/**
 * 渲染入口
 */
ReactDOM.render(
    <ShoppingList name="Test Name.." />,
    document.getElementById("root")
);
