import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Header from "./Header.jsx";
import Main from "./Main.jsx";
import TokenClaimFailed from "./TokenClaimFailed.jsx";
import TokenClaimOk from "./TokenClaimOk.jsx";
import Footer from "./Footer.jsx";

export default class App extends React.Component {
	render() {
		return (
			<div>
				<Header/>
				<Router>
					<div>
						<Route exact path="/" component={Main}/>
						<Route path="/token-claim-failed" component={TokenClaimFailed}/>
						<Route path="/token-claim-ok" component={TokenClaimOk}/>
					</div>
				</Router>
				<Footer style="{{'font-size': '.75em'}}" className="mt-3"/>
			</div>
		);
	}
}