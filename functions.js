
//Put in our data

var single = eval({phone_type:15,last_name:36,home_address:36,id_number:35,mailing_address:1,opt_in_sms:4,change_of_address:11,prev_first_name:3,first_name:39,prev_name_title:3,prev_last_name:3,prev_zip_code:7,date_of_birth:41,has_mailing_address:7,party:52,prev_address:7,change_of_name:11,phone:27,finished:27,opt_in_email:8,mailing_city:1,mailing_zip_code:1,prev_city:6,mailing_state:1,name_title:39,home_zip_code:1,race:37,prev_state_id:4});

var tabs = eval({phone_type:3,last_name:27,home_address:30,id_number:27,mailing_address:1,opt_in_sms:8,change_of_address:6,first_name:29,prev_zip_code:4,date_of_birth:39,has_mailing_address:1,party:24,prev_address:4,phone:26,finished:24,opt_in_email:4,mailing_city:1,mailing_zip_code:1,prev_city:4,name_title:30,race:28,prev_state_id:5});

var acc = eval({change_of_address:3,phone_type:1,prev_city:2,last_name:14,date_of_birth:18,prev_address:2,us_citizen:4,id_number:12,name_title:14,prev_zip_code:1,first_name:13,phone:8,finished:8,race:10,prev_state_id:2,home_address:16,party:14,opt_in_email:4});

//Function should push key value pairs into an array

var keysByValue = function(object) {
	var values = [];
	var keys = [];
	
	for (var prop in object) {
		if(object.hasOwnProperty(prop)) { keys.push([prop, object[prop]]);}
	} //Returns unsorted key value pairs;
	keys.sort(function(a,b) {
		var a1 = a[1], b1 = b[1];
		return a1-b1;  //Returns sorted key value pairs;
	});
	for(var i=0,len=keys.length;i<len;i++) {
		keys[i] = keys[i][0];
		if(typeof(keys[i]) === "number") {
	 		values.push(keys[i]);
	 		console.log(values);
		} else {
			keys[i];
		}
	}		

	return keys;
}

var keys = keysByValue(tabs);
console.log(keys);


