function page1($scope) {
	$scope.user = {
		title: 'Developer',
		email: 'ipsum@lorem.com',
		firstName: '',
		lastName: '',
		company: 'Google',
		address: '1600 Amphitheatre Pkwy',
		city: 'Mountain View',
		state: 'CA',
		biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
		postalCode: '94043'
	};

	$scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
	'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
	'WY').split(' ').map(function(state) {
		return {abbrev: state};
	});
}

function page2($scope) {
	$scope.title1 = 'Button';
	$scope.title4 = 'Warn';
	$scope.isDisabled = true;

	$scope.googleUrl = 'http://google.com';

}

function page3($scope) {
	$scope.items = [1,2,3,4,5];
	$scope.selected = [1];
	$scope.toggle = function (item, list) {
		var idx = list.indexOf(item);
		if (idx > -1) {
			list.splice(idx, 1);
		}
		else {
			list.push(item);
		}
	};

	$scope.exists = function (item, list) {
		return list.indexOf(item) > -1;
	};

	$scope.isIndeterminate = function() {
		return ($scope.selected.length !== 0 && $scope.selected.length !== $scope.items.length);
	};

	$scope.isChecked = function() {
		return $scope.selected.length === $scope.items.length;
	};

	$scope.toggleAll = function() {
		if ($scope.selected.length === $scope.items.length) {
			$scope.selected = [];
		} else if ($scope.selected.length === 0 || $scope.selected.length > 0) {
			$scope.selected = $scope.items.slice(0);
		}
	};
}


function page3_2($scope) {

	$scope.items = [1,2,3,4,5];
	$scope.selected = [];

	$scope.toggle = function (item, list) {
		var idx = list.indexOf(item);
		if (idx > -1) {
			list.splice(idx, 1);
		}
		else {
			list.push(item);
		}
	};

	$scope.exists = function (item, list) {
		return list.indexOf(item) > -1;
	};
}

function page4($scope) {

	$scope.color = {
		red: Math.floor(Math.random() * 255),
		green: Math.floor(Math.random() * 255),
		blue: Math.floor(Math.random() * 255)
	};

	$scope.rating1 = 3;
	$scope.rating2 = 2;
	$scope.rating3 = 4;

	$scope.disabled1 = Math.floor(Math.random() * 100);
	$scope.disabled2 = 0;
	$scope.disabled3 = 70;

	$scope.invert = Math.floor(Math.random() * 100);

	$scope.isDisabled = true;
}

function page5($scope) {
	$scope.data = {
		cb1: true,
		cb4: true,
		cb5: false
	};

	$scope.message = 'false';

	$scope.onChange = function(cbState) {
		$scope.message = cbState;
	};
}
