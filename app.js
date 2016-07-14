console.log('app.js loaded.');

const App = React.createClass({
	getInitialState: function() {
		return {
			users: [],
			sortByAllTimePoints: false
		};
	},

	componentDidMount: function() {
		this.getTopUsersInPastMonth();
	},

	handlePointsInPastMonthClick: function() {
		this.getTopUsersInPastMonth();
	},

	handlePointsAllTimeClick: function() {
		this.getTopUsersAllTime();
	},

	getTopUsersInPastMonth: function() {
		helper.getTopUsersInPastMonth((data) => {
			const users = this.formatUsersInfo(data);

			this.setState({users: users});
		});
	},

	getTopUsersAllTime: function() {
		helper.getTopUsersAllTime((data) => {
			const users = this.formatUsersInfo(data);

			this.setState({users: users});
		});
	},

	formatUsersInfo: function(users) {
		return users.map((user, index) => {
			return {
				name: user.username,
				pointsInPastMonth: user.recent,
				pointsAllTime: user.alltime,
				img: user.img
			};
		});
	},

	render: function() {
		return (
			<div>
				<Title />
				<Leaderboard
					users={this.state.users}
					onPointsInPastMonthClick={this.handlePointsInPastMonthClick}
					onPointsAllTimeClick={this.handlePointsAllTimeClick}
					sortByAllTimePoints={this.state.sortByAllTimePoints}
				/>
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
		return (
			<table>
				<RowHeader
					onPointsInPastMonthClick={this.props.onPointsInPastMonthClick}
					onPointsAllTimeClick={this.props.onPointsAllTimeClick}
					sortByAllTimePoints={this.props.sortByAllTimePoints}
				/>
				<UserList
					users={this.props.users}
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
					<th>Camper Name {this.props.sortByAllTimePoints ? 'All Time' : 'Past 30 Days'}</th>
					<th
						onClick={this.props.onPointsInPastMonthClick}
					>Points in past 30 days</th>
					<th
						onClick={this.props.onPointsAllTimeClick}
					>All time points</th>
				</tr>
			</thead>
		);
	}
});

const UserList = React.createClass({
	render: function() {
		const users = this.props.users.map((user, index) => (
			<tr key={index}>
				<td>{index + 1}</td>
				<td>
					<img src={user.img} alt={user.name + ' Profile Picture'}></img>
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
