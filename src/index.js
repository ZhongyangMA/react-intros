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

ReactDOM.render(
    <Welcome name={"test"} />,
    document.getElementById("root")
);
