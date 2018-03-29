import React from 'react';

export default class Header extends React.Component {
	render() {
		return (
			<header>
				<div className="container-fluid">
					<div className="row pl-3 pt-3 bg-light justify-content-center sticky-top">
						<ul className="list-inline ">
							<li className="list-inline-item">
								<i className="fa fa-phone fa-2x align-middle text-primary"/><span itemProp="telephone"> <a href="tel:+447555384810">07555 384 810</a></span>
							</li>
							<li className="list-inline-item">
								<i className="fa fa-envelope fa-2x align-middle text-primary"/> <a href="mailto:admin@dorkingladiesjoggers.co.uk">admin@dorkingladiesjoggers.co.uk</a>
							</li>
							<li className="list-inline-item">
								<i className="fa fa-facebook-official fa-2x align-middle text-primary"/> <a href="https://www.facebook.com/dorkingladiesjoggers"> facebook.com/dorkingladiesjoggers</a>
							</li>
						</ul>
					</div>

					<div className={this.props.showLogo ? 'row m-4 justify-content-center' : 'd-none'}>
						<img className="img-fluid" src="images/logo.svg"/>
					</div>
				</div>
			</header>
		);
	}
}

