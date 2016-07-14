console.log('helper.js loaded.');

const helper = (function() {
	let topUsersInPastMonth;
	let topUsersAllTime;

	const requestTopUsersInPastMonth = function(cb) {
		const myUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';

		$.ajax({
			url: myUrl,
			method: 'GET',
			dataType: 'json',
			success: function(data) {
				topUsersInPastMonth = data;
				cb(topUsersInPastMonth);
			}
		});
	};

	const requestTopUsersAllTime = function(cb) {
		const myUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

		$.ajax({
			url: myUrl,
			method: 'GET',
			dataType: 'json',
			success: function(data) {
				topUsersAllTime = data;
				cb(topUsersAllTime);
			}
		});
	};

	const getTopUsersInPastMonth = function(cb) {
		if(!topUsersInPastMonth) {
			requestTopUsersInPastMonth(cb);
		} else {
			cb(topUsersInPastMonth);
		}
	};

	const getTopUsersAllTime = function(cb) {
		if(!topUsersAllTime) {
			requestTopUsersAllTime(cb);
		} else {
			cb(topUsersAllTime);
		}
	};

	return {
		getTopUsersInPastMonth: getTopUsersInPastMonth,
		getTopUsersAllTime: getTopUsersAllTime
	};
})();


