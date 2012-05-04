
$(function() {  


//Settings - This stuff probably gets changed the most, so it goes on top.
	var options = {  
			    legend: {  
			        show: true,  
			        margin: 10,  
			        backgroundOpacity: 0.5  
			    },
			    series: {
			    	stack: 0,
                	lines: { show: false, steps: false },
                	bars: {show: true, barWidth: 0.9, align: 'center'},
                },
       			xaxis: {
       				ticks: [[1,'One'], [2,'Two'], [3,'Three'], [4,'Four'], [5,'Five']]}
	};  
	
//The idea is to store JSON key object data as integers, since they will stay the same on our voter registration form (in theory…).  Even if they don't, it will not be hard to change the ID values for three form factors.

//Data Constructor, takes in a label and data

	var Data = function(label, data) {
		this.label = label;
		this.data = data;
	}
	
//Let's make some instances of data - TODO: Assign integers to keys so that they can be passed in as x-axis data.  Take the values and match those to their corresponding key integers, and place them in the y-axis.

var progress_tabs = eval({phone_type:3,last_name:27,home_address:30,id_number:27,mailing_address:1,opt_in_sms:8,change_of_address:6,first_name:29,prev_zip_code: 4,date_of_birth:39,has_mailing_address:1,party:24,prev_address:4,phone:26,finished:24,opt_in_email:4,mailing_city:1,mailing_zip_code:1,prev_city:4,name_title:30,race:28,prev_state_id:5});
var progress_accordion = eval({change_of_address:3,phone_type:1,prev_city:2,last_name:14,date_of_birth:18,prev_address:2,us_citizen:4,id_number:12,name_title:14,prev_zip_code:1,first_name:13,phone:8,finished:8,race:10,prev_state_id:2,home_address:16,party:14,opt_in_email:4});
var progress_singlepage = eval({phone_type:15,last_name:36,home_address:36,id_number:35,mailing_address:1,opt_in_sms:4,change_of_address:11,prev_first_name:3,first_name:39,prev_name_title:3,prev_last_name:3,prev_zip_code:7,date_of_birth:41,has_mailing_address:7,party:52,prev_address:7,change_of_name:11,phone:27,finished:27,opt_in_email:8,mailing_city:1,mailing_zip_code:1,prev_city:6,mailing_state:1,name_title:39,home_zip_code:1,race:37,prev_state_id:4});



	//We want to have data be something roughly like - single_data = [[JSON key, JSON value]]
	
	var single_data = [];		
	var tabbed_data = [];
	var accord_data = [];

	
	for(i=0;i<=formFields.length;i++) {
		for (var prop in object) {
		if(object.hasOwnProperty(prop)) { keys.push([prop, object[prop]]);}
	}
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
    
