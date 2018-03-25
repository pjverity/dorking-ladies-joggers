import React from 'react';

export default class Schedules extends React.Component {
	render() {
		return (
			<div>

				<div className="row m-4 justify-content-center">
					<div className="col">
						<hr className="d-none d-sm-block"/>
					</div>
					<div className="h4">Upcoming Courses</div>
					<div className="col">
						<hr className="d-none d-sm-block"/>
					</div>
				</div>

				<div className="row mb-4 justify-content-center">
					<div className="col">
						<table className="table table-sm table-striped">
							<thead>
							<tr>
								<th scope="col">Day</th>
								<th scope="col">Time</th>
								<th scope="col">Group</th>
								<th scope="col">Meeting Place</th>
							</tr>
							</thead>
							<tbody>
							<tr>
								<th scope="row">Wednesday</th>
								<td>09:15</td>
								<td>Introduction to Trail Running</td>
								<td>Dorking Garden Centre, Dorking</td>
							</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
}



