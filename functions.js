//Todo: Should we normalize this??  How do we do that since there there isn't validation between sections on the single page element?

var lookupTable = ["home_address", "home_zip_code", "has_mailing_address","mailing_address","mailing_city","mailing_state_id","mailing_zip_code", "change_of_address","prev_address","prev_city","prev_state_id","prev_zip_code","name_title","first_name","last_name","change_of_name","prev_name_title","prev_first_name","prev_last_name","id_number","date_of_birth","opt_in_email","phone","phone_type","opt_in_sms","race", "party","us_citizen","finished"];
				
var progress_tabs = {phone_type:3,last_name:27,home_address:30,id_number:27,mailing_address:1,opt_in_sms:8,change_of_address:6,first_name:29,prev_zip_code: 4,date_of_birth:39,has_mailing_address:1,party:24,prev_address:4,phone:26,finished:24,opt_in_email:4,mailing_city:1,mailing_zip_code:1,prev_city:4,name_title:30,race:28,prev_state_id:5};
	
var progress_accordion = {change_of_address:3,phone_type:1,prev_city:2,last_name:14,date_of_birth:18,prev_address:2,us_citizen:4,id_number:12,name_title:14,prev_zip_code:1,first_name:13,phone:8,finished:8,race:10,prev_state_id:2,home_address:16,party:14,opt_in_email:4};
	
var progress_singlepage = {phone_type:15,last_name:36,home_address:36,id_number:35,mailing_address:1,opt_in_sms:4,change_of_address:11,prev_first_name:3,first_name:39,prev_name_title:3,prev_last_name:3,prev_zip_code:7,date_of_birth:41,has_mailing_address:7,party:52,prev_address:7,change_of_name:11,phone:27,finished:27,opt_in_email:8,mailing_city:1,mailing_zip_code:1,prev_city:6,mailing_state:1,name_title:39,home_zip_code:1,race:37,prev_state_id:4};



$(function() {  
	
	//Generates ticks for the x-axis [works]
	function makeTicks(array) {
	var ticks = [];
	for(i=0;i<lookupTable.length;i++) {
		ticks.push([i+1,lookupTable[i]]);
	}
	return ticks;		
}
	
	//Takes in an unsorted object 
	function lookupCheck(object) {
		var i = 1;
		var sortedData = [];
		for (var prop in lookupTable) {
			if(object[lookupTable[prop]] === undefined) {
				sortedData.push([i, 0]);
			} else {
				sortedData.push([i, object[lookupTable[prop]]]);
			}
			i++;
		}
		return sortedData;
	};
	
	
	var single_data = lookupCheck(progress_singlepage);
	var tabbed_data = lookupCheck(progress_tabs);
	var accord_data = lookupCheck(progress_accordion); 
	
	
		
	//Data Constructor, takes in a label, data, and color

	var Data = function(label, data, color) {
		this.label = label;
		this.data = data;
		this.color = color;
	}						  
					  
	//Let's make our dataplot objects
	var singleData = new Data("Single Form", single_data, '#409628');
	var tabbedData = new Data("Tabbed Form", tabbed_data, '#2918DB');
	var accordionData = new Data("Accordion Form", accord_data, '#988166');	
	
	//Make ticks 
	var ticks = makeTicks(lookupTable);
	 
	//Settings
	var options = {  
		selection: {
			 mode: "xy" },
        grid: { 
        	hoverable: true, 
        	clickable: true },
	    legend: {  
	        show: true,  
	        margin: 10,  
	        backgroundOpacity: 0.5  
	    },
	    series: {
	    	bars: {
	    		show: true, 
	    		barWidth: 0.45, 
	    		align: 'center'},
	    },		
	    xaxis: { 
	    	ticks: ticks
	    		}
	  }   
	  
	var allData = [singleData, tabbedData, accordionData];
	 
	//Set up our graph
    var allPlot = $("#content");  
    $.plot( allPlot , allData, options )   
    
    var singlePlot = $("#content_singlepage");  
    $.plot( singlePlot , [singleData], options )   
    
    var tabbedPlot = $("#content_tabbed");  
    $.plot( tabbedPlot , [tabbedData] , options )
    
    var accordionPlot = $("#content_accordion");  
    $.plot( accordionPlot , [accordionData] , options ) 
    
    //Settings 



});
    
