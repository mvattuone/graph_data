//Todo: Figure out why the graph looks totally wrong.
//Todo:  Add ticks at the bottom, showing key name rather than associated integer.

$(function() {  


//Settings - This stuff probably gets changed the most, so it goes on top.
	var options = {  
	    legend: {  
	        show: true,  
	        margin: 10,  
	        backgroundOpacity: 0.5  
	    },
	    bars: {
	    	show: true,
	    	lines: { show: false, steps: false },
	    	bars: {show: true, barWidth: 0.75, align: 'left'},
	    },		
	    
	};  
	



	
//This is the part I'm having a hard time with.  How do I get this data to convert into two tuples, with the key set to a corresponding integer ID?
//(desired output should be:  [[1, value], [2, value],… [n, value]]; 


var progress_tabs = {phone_type:3,last_name:27,home_address:30,id_number:27,mailing_address:1,opt_in_sms:8,change_of_address:6,first_name:29,prev_zip_code: 4,date_of_birth:39,has_mailing_address:1,party:24,prev_address:4,phone:26,finished:24,opt_in_email:4,mailing_city:1,mailing_zip_code:1,prev_city:4,name_title:30,race:28,prev_state_id:5};

var progress_accordion = {change_of_address:3,phone_type:1,prev_city:2,last_name:14,date_of_birth:18,prev_address:2,us_citizen:4,id_number:12,name_title:14,prev_zip_code:1,first_name:13,phone:8,finished:8,race:10,prev_state_id:2,home_address:16,party:14,opt_in_email:4};

var progress_singlepage = {phone_type:15,last_name:36,home_address:36,id_number:35,mailing_address:1,opt_in_sms:4,change_of_address:11,prev_first_name:3,first_name:39,prev_name_title:3,prev_last_name:3,prev_zip_code:7,date_of_birth:41,has_mailing_address:7,party:52,prev_address:7,change_of_name:11,phone:27,finished:27,opt_in_email:8,mailing_city:1,mailing_zip_code:1,prev_city:6,mailing_state:1,name_title:39,home_zip_code:1,race:37,prev_state_id:4};

	//Set up our data arrays, empty at first.
	
	var single_data = [];		
	var tabbed_data = [];
	var accord_data = [];

	//Sorts JSON objects alphabetically, so we know that we'll have the same IDs for each value no matter what order they are in (TODO: Check for undefined values in case there are missing values from the defined data structure, and insert a 0 or N/A?).
	
	function SortArrayByKeys(inputarray) {
  		var arraykeys=[];
  		for(var prop in inputarray) {arraykeys.push(prop);}
 		arraykeys.sort();
 		
	//Now we remove the keys, and return the values in the sorted order.  Yay!
  		var outputarray=[];
  for(var i=0; i<arraykeys.length; i++) {
      outputarray.push(inputarray[arraykeys[i]]);
  }
  return outputarray;
}

	//Store new JSON objects.  Could remove.
	var single_data = SortArrayByKeys(progress_singlepage);
	var tabbed_data = SortArrayByKeys(progress_tabs);
	var accord_data = SortArrayByKeys(progress_accordion);
	

	//Add integer in place of the original key values.  We know that the numbers will match the alphabetical order of the keys, so we can ensure consistency in our data plotting.
	var getData = function(object) {
	var keys = [];
	var i = 1;
		for (var prop in object) {	
			keys.push((i), object[prop]);
			i++ }
			return keys;
	}
	
	single_data = getData(single_data);
	tabbed_data = getData(tabbed_data);
	accord_data = getData(accord_data);
	

	//Slice data into smaller arrays and put into large array
	var final_data = [];
	var SpliceArray = function(dataArray) {
	while(dataArray.length) {
		final_data.push(dataArray.splice(0,2));
		}
		return final_data;
	}
	
	var single_data = SpliceArray(single_data);
	var tabbed_data = SpliceArray(tabbed_data);
	var accord_data = SpliceArray(accord_data);
	
	console.log(single_data);
			  
//Data Constructor, takes in a label and data

	var Data = function(label, data) {
		this.label = label;
		this.data = data;
	}						  
					  
//Let's make our dataplot objects
	var single = new Data("Single Form", single_data);
	var tabbed = new Data("Tabbed Form", tabbed_data);
	var accordion = new Data("Accordion Form", accord_data);	

//Put our data into an array
 			 
	var all_data = [single, tabbed, accordion];  
	 
//Set up our graph
    var plotarea = $("#content");  
    $.plot( plotarea , all_data , options )    

});
    
