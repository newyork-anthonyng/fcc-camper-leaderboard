console.log('app.js loaded.');

const App = React.createClass({
	render: function() {
		return (
			<div>
				<Title />
				<Leaderboard />
			</div>
		);
	}
});

const Title = React.createClass({
	render: function() {
		return (
			<header>
				<h1>Leaderboard</h1>
			</header>
		);
	}
});

const Leaderboard = React.createClass({
	render: function() {
		const users = [
			{name:'Anthony', pointsInPastMonth: 100, pointsAllTime: 150},
			{name:'Gaby', pointsInPastMonth: 100, pointsAllTime: 150},
			{name:'Angela', pointsInPastMonth: 100, pointsAllTime: 150},
			{name:'Steve', pointsInPastMonth: 100, pointsAllTime: 150},
			{name:'Arin', pointsInPastMonth: 100, pointsAllTime: 150}
		];

		return (
			<table>
				<RowHeader />
				<UserList
					users={users}
				/>
			</table>
		);
	}
});

const RowHeader = React.createClass({
	render: function() {
		return (
			<thead>
				<tr>
					<th>#</th>
					<th>Camper Name</th>
					<th>Points in past 30 days</th>
					<th>All time points</th>
				</tr>
			</thead>
		);
	}
});

const UserList = React.createClass({
	render: function() {
		const users = this.props.users.map((user, index) => (
			<tr key={index}>
				<td>{index}</td>
				<td>
					{user.name}
				</td>
				<td>{user.pointsInPastMonth}</td>
				<td>{user.pointsAllTime}</td>
			</tr>
		));

		return (
			<tbody>
				{users}
			</tbody>
		);
	}
});

ReactDOM.render(
	<App />,
	document.getElementById('content')
);
// App
	// Title
	// Leaderboard
		// Header
		// Userlist
			// User
