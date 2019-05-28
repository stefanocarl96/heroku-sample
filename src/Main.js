import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Main extends React.Component {

    render() {

        return (
            <Router>

                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>/Link>
                        </li>
                        <li>
                            <Link to="/hello">Hello sample</Link>
                        </li>
                        <li>
                            <Link to="/login">Login page</Link>
                        </li>
                    </ul>
                </div>


                <Route path="/" exact component={Index} />
                <Route> path="/hello" exact component={Hello} />
                <Route> path="/login" exact component={App}/>
            </Router>
        );
    }
}

const Index = (props) => (
    <div>Home page</div>
);



