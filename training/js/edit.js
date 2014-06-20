var repos = $.getJSON('https://api.mongolab.com/api/1/databases/feedbackforms/collections/paulforms?apiKey=qAFrws2KkmfZCyl6U2aZbn8N7EU2v0xu');

repos.done(function (repos) {
  var c = [];
  $.each(repos, function(key, value) { 
	c.push("<thead><tr><th> First Name </th>");
	c.push("<th> Last Name </th>");
	c.push("<th> Birthday </th>");
    c.push("<th> HC Number </th>");
    c.push("<th> GP </th>");
    c.push("<th> Ward </th>");
    c.push("<th> Rating </th>");
    c.push("<th> Rate </th>");
    c.push("<th> Services </th>");
    c.push("<th> Date </th>");
    c.push("<th> Comments </th></tr><thead>");
   
       
    c.push("<tbody><tr><td>" + value.firstName + "</td>");
    c.push("<td>" + value.lastName + "</td>");
    c.push("<td>" + value.birthday + "</td>");
    c.push("<td>" + value.hcnumber + "</td>");
    c.push("<td>" + value.gp + "</td>");
    c.push("<td>" + value.ward + "</td>");
    c.push("<td>" + value.rating + "</td>");
    c.push("<td>" + value.rate + "</td>");
    c.push("<td>" + value.services + "</td>");
    c.push("<td>" + value.date + "</td>");
    c.push("<td>" + value.Comments + "</td></tr></tbody>");
    
    if (value = "undefined")
    	console.log("not correct");

    });
        
  $('#records_table').html(c.join(""));
});

$(function() {

	//when a td element within tbody is clicked
	$('td').on('click','td',function() {
		//call displayform, passing td jQuery element
		displayForm( $(this) );
	});

});

function displayForm( cell ) {

	var column = cell.attr('class'),//class of td corresponds to database table column
		id = cell.closest('tr').attr('id'),//id of tr corresponds to database primary key
		cellWidth = cell.css('width'),//get width of cell for styling width of input field
		prevContent = cell.text(),//store previous value
		//form action prevents page refresh when enter pressed.  hidden fields pass primary key and column name
		form = '<form action="javascript: this.preventDefault"><input type="text" size="4" name="newValue" value="'+
			   prevContent+'" /><input type="hidden" name="id" value="'+id+'" />'+
			   '<input type="hidden" name="column" value="'+column+'" /></form>';

	//insert form into td and change focus to input field, set width
	cell.html(form).find('input[type=text]')
		.focus()
		.css('width',cellWidth);

	//disable listener on individual cell once clicked
	cell.on('click', function(){return false});

	//on keypress within td
	cell.on('keydown',function(e) {
		if (e.keyCode == 13) {//13 == enter
			changeField(cell, prevContent);//update field
		} else if (e.keyCode == 27) {//27 == escape
			cell.text(prevContent);//revert to original value
			cell.off('click'); //reactivate editing
		}
	});

}

