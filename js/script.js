// Define a new module for our app
var app = angular.module("instantSearch", []);

// Create the instant search filter

app.filter('searchFor', function(){

	// All filters must return a function. The first parameter
	// is the data that is to be filtered, and the second is an
	// argument that may be passed with a colon (searchFor:searchString)
	return function(arr, searchFrom, searchTo, searchDate){
		if(!searchFrom && !searchTo && !searchDate){
			// return arr;
		}
		// if(searchDate || searchFor || searchTo){
		// 	// var new_margin = "1%";
		// 	// var myEl = angular.element(document.querySelector( '#header-c' ));
		// 	// myEl.css('class','.altheader-content');
		// }

		var result = [];

		searchFrom = searchFrom.toLowerCase();
		searchTo = searchTo.toLowerCase();


		// Using the forEach helper method to loop through the array
		angular.forEach(arr, function(item){

			var flag = true;
			if (searchFrom) {
				if (!(item.from.toLowerCase().indexOf(searchFrom) !== -1)){
					flag = false;
				}
			}

			if (searchTo) {
				if (!(item.to.toLowerCase().indexOf(searchTo) !== -1)){
					flag = false;
				}
			}
			if (searchDate) {
				if (!(item.date.indexOf(searchDate) !== -1)){
					flag = false;
				}
			}
			if (!searchFrom && !searchDate && !searchTo){
				flag = false
			}
			if (flag) {
				result.push(item);
			}
		});

		return result;
	};

});

// The controller

function InstantSearchController($scope){

	// The data model. These items would normally be requested via AJAX,
	// but are hardcoded here for simplicity. See the next example for
	// tips on using AJAX.

	$scope.items = [
		{
			from: 'San Francisco',
			to: 'Davis',
			pickup: 'Daly City',
			dropoff: 'UC Davis MU',
			date: '11/13/16',
			time: '10:30pm',
			price: '10',
			driver: 'John Smith',
			image: 'https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-1/p100x100/11898851_903271413094867_1779698220245697585_n.jpg?oh=d5492a4997dfd2fecd8f42d46216bd72&oe=58CD9982'
		},
		{
			from: 'San Francisco',
			to: 'Davis',
			pickup: 'Balboa BART',
			dropoff: 'University Mall',
			date: '11/13/16',
			time: '1:30pm',
			price: '10',
			driver: 'Jane Doe',
			image: 'https://scontent-sjc2-1.xx.fbcdn.net/v/l/t1.0-1/p100x100/15036725_1260255060662263_1819812102944851135_n.jpg?oh=1ff135b04c00d82e43fdcbc63475f2de&oe=588F7282'
		},
		{
			from: 'San Francisco',
			to: 'Davis',
			pickup: 'Trader Joes on California and Hyde',
			dropoff: 'University Mall',
			date: '11/13/16',
			time: '2pm',
			price: '10',
			driver: 'John Smith',
			image: 'https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-1/c0.17.100.100/p100x100/13631491_10206906860886363_2647810033896225241_n.jpg?oh=8a6da36ffdc05895e85a8386ddba8fbe&oe=5894F2F1'
		},
		{
			from: 'San Jose',
			to: 'Davis',
			pickup: 'Oakridge Mall',
			dropoff: 'University Mall',
			date: '11/12/16',
			time: '4pm',
			price: '10',
			driver: 'John Smith',
			image: 'https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-1/p100x100/10649495_1107959409257041_876276097232166808_n.jpg?oh=b585994af214f1ed2902159473d4d30a&oe=58D51923'
		},
		{
			from: 'Davis',
			to: 'Berkeley',
			pickup: 'University Mall',
			dropoff: 'Anywhere',
			date: '11/12/16',
			time: '4pm',
			price: '10',
			driver: 'John Smith',
			image: 'https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-1/p100x100/14572377_10209352737709755_6056821152589047422_n.jpg?oh=61a9679a29ddd1adf8c32de2146cbcc8&oe=58CDE0ED'
		},
		{
			from: 'San Jose',
			to: 'Davis',
			pickup: 'Oakridge Mall',
			dropoff: 'University Mall',
			date: '11/12/16',
			time: '4pm',
			price: '10',
			driver: 'John Smith',
			image: 'http://www.tutorialspoint.com/android/images/android-mini-logo.jpg'
		},
		{
			from: 'San Jose',
			to: 'Davis',
			pickup: 'Oakridge Mall',
			dropoff: 'University Mall',
			date: '11/12/16',
			time: '4pm',
			price: '10',
			driver: 'John Smith',
			image: 'http://www.tutorialspoint.com/android/images/android-mini-logo.jpg'
		},
		{
			from: 'San Jose',
			to: 'Davis',
			pickup: 'Oakridge Mall',
			dropoff: 'University Mall',
			date: '11/12/16',
			time: '4pm',
			price: '10',
			driver: 'John Smith',
			image: 'http://www.tutorialspoint.com/android/images/android-mini-logo.jpg'
		},
		{
			from: 'San Jose',
			to: 'Davis',
			pickup: 'Oakridge Mall',
			dropoff: 'University Mall',
			date: '11/12/16',
			time: '4pm',
			price: '10',
			driver: 'John Smith',
			image: 'http://www.tutorialspoint.com/android/images/android-mini-logo.jpg'
		},
		{
			from: 'San Jose',
			to: 'Davis',
			pickup: 'Oakridge Mall',
			dropoff: 'University Mall',
			date: '11/12/16',
			time: '4pm',
			price: '10',
			driver: 'John Smith',
			image: 'http://www.tutorialspoint.com/android/images/android-mini-logo.jpg'
		},
		{
			from: 'San Jose',
			to: 'Davis',
			pickup: 'Oakridge Mall',
			dropoff: 'University Mall',
			date: '11/12/16',
			time: '4pm',
			price: '10',
			driver: 'John Smith',
			image: 'http://www.tutorialspoint.com/android/images/android-mini-logo.jpg'
		}
	];


}
