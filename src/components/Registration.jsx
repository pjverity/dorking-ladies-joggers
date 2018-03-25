import React from 'react';

export default class Registration extends React.Component
{
	render() {
		return (
			<div className="row m-4 pt-4 pb-4 align-items-center">


				<div className="col-md-6 col-sm-12">
					<h4 className="text-center text-md-right">Get your first run for <span className="text-success font-italic">FREE!</span></h4>

					<p className="text-center text-md-right">Simply register your details and follow the instructions in the email to claim your free token</p>
					<p className="font-weight-light text-center text-md-right border-left border-right pl-2 pr-2 border-warning" style={{'fontSize': '.75em'}}>If you haven't got a mail in your <strong>Inbox</strong> in the next minute or two, it's probably sitting
						in your Junk/Spam folder. Open it and click <strong> Not Junk</strong> to avoid missing out!</p>
				</div>


				<div className="col-md-6 col-sm-12">
					<form id="enquiry-form">
						<div className="row form-group">


							<div className="col-6">
								<input type="text" className="form-control" name="firstName" autoComplete="home firstName" placeholder="First name" required/>
							</div>


							<div className="col-6">
								<input type="text" className="form-control" name="lastName" autoComplete="home lastName" placeholder="Last name" required/>
							</div>
						</div>


						<div className="row form-group">
							<div className="col">
								<div className="input-group">
									<div className="input-group-prepend">
										<span className="input-group-text"><i className="fa fa-fw fa-phone"/></span>
									</div>
									<input type="tel" className="form-control" name="phone" autoComplete="home phone" placeholder="Phone number (optional)"/>
								</div>
							</div>
						</div>


						<div className="row form-group">
							<div className="col">
								<div className="input-group">
									<div className="input-group-prepend">
										<span className="input-group-text"><i className="fa fa-fw fa-envelope"/></span>
									</div>
									<input type="email" id="email" name="email" autoComplete="home email" className="form-control" placeholder="me@home.com" required/>
										<div className="input-group-append">
											<button type="submit" className="btn btn-info"><i className="fa fa-fw fa-send" style={{'WebkitFilter': 'blur(0)'}}/></button>
										</div>
								</div>
							</div>
						</div>

					</form>
					<div className="row justify-content-center">
						<div className="col">
							<div id="form-errors" className="alert alert-danger d-none" role="alert">
								<ul className="list-unstyled mb-0"/>
							</div>

							<div id="form-success" className="card border-0 text-center d-none" role="alert">
								<div className="card-body">
									<h4><i className="text-success align-middle fa fa-fw fa-2x fa-check-circle"/> Thanks for Registering!</h4>
									<small className="text-muted">Confirmation has been sent to: <span id="confirm-email" className="text-info"/><br/>
										(Please note the information regarding Junk/Spam)
									</small>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

	);
	}
}

