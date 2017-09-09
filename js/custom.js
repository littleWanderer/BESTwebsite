$( document ).ready(function(){

	 $(".button-collapse").sideNav();
	
})



// about us sidebar
$(document).ready(function() { // better to use $(document).ready(function(){
    $('#dropdown_m').on('click', function() {

    	$myList = $('#theList')
		if ( $myList.children().length === 0 ) {


	        $("ul#theList").append("<li><a href='about_us.html#about_best'>BEST</a></li>");
	        $("ul#theList").append("<li><a href='about_us.html#about_best_bg'>BEST Beograd</a></li>");
	        $("ul#theList").append("<li><a href='about_us.html#io'>IO</a></li>");
	    }
	    else{
	    	$("ul#theList").empty();
	    }

    });
});

//projects sidebar
$(document).ready(function() { // better to use $(document).ready(function(){
    $('#dropdown_m_projects').on('click', function() {
        
    	$myList = $('#theList_projects')
		if ( $myList.children().length === 0 ) {


	        $("ul#theList_projects").append("<li><a href='url-here'>EBEC</a></li>");
	        $("ul#theList_projects").append("<li><a href='url-here'>Code Beyond</a></li>");
	        $("ul#theList_projects").append("<li><a href='url-here'>BDW</a></li>");
	        $("ul#theList_projects").append("<li><a href='url-here'>Job Fair</a></li>");
	        $("ul#theList_projects").append("<li><a href='url-here'>Kurs</a></li>");
	        $("ul#theList_projects").append("<li><a href='url-here'>GA</a></li>");
	    }
	    else{
	    	$("ul#theList_projects").empty();
	    }


    });
});


//partners dropdown sidebar 

$(document).ready(function() { // better to use $(document).ready(function(){
    $('#dropdown_m_partners').on('click', function() {
        
    	$myList = $('#theList_partners')
		if ( $myList.children().length === 0 ) {


	        $("ul#theList_partners").append("<li><a href='url-here'>Godišnji</a></li>");
	        $("ul#theList_partners").append("<li><a href='url-here'>Partnerske organizacije</a></li>");
	        $("ul#theList_partners").append("<li><a href='url-here'>Medijski pokrovitelji</a></li>");
	        
	    }
	    else{
	    	$("ul#theList_partners").empty();
	    }


    });
});