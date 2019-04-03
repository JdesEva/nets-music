/**
 * 异步加载组件
 * 主要作用是 在 路由按需引入组合打包时提供方便(保证不会报错)
 * 
 * 包裹import()引入体即可
 * 
 * 具体参考router.js文件中的使用方法
 */

import React from 'react'

export default function Import(ImportComponent) {
    class AsyncImport extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                component: null
            }
        }

        async componentDidMount() {
            const { default: component } = await ImportComponent();
            this.setState({
                component: component
            })
        }

        render() {
            const C = this.state.component
            return C ? <C {...this.props}></C> : null
        }
    }
    return AsyncImport
}