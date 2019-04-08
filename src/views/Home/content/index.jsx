import React from 'react';
import { Route, Switch } from "react-router-dom";

class Content extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        console.log(this.props, 999999)
    }

    render() {
        return (
            <div>
                <Switch>
                    {
                        this.props.route.map((row, index) => {
                            return <Route path={row.path} component={row.component} key={index}></Route>
                        })
                    }
                </Switch>
            </div>
        )
    }
}

export default Content