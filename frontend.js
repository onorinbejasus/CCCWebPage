$(function(){
	pageTemplate();

});

function pageTemplate()
{
	var $table = $("<table />");
	$("body").append($table);
	
	//top content
	var $top_tr = $("<tr id='toptr' />");
	var $top_td = $("<td colspan='2'/>");
	var $top_div = $("<div id='top' />");
	
	$top_tr.append($top_td);
	$top_td.append($top_div);
	
	//placeholder for canvas
	var $canvas_tr = $("<tr id='canvastr' />");
	var $canvas_td = $("<td id='canvastd' colspan='2' />");
	$canvas_tr.append($canvas_td);
	var $canvas_div = $("<div id='canvasdiv' />");
	var $canvas = $("<canvas />");
	$canvas_div.append($canvas);
	$canvas_td.append($canvas_div);
	
	
	
	//main content section
	var $middle_tr = $("<tr id='middletr' />");
	var $left_td = $("<td id='blogSection' />");
	var $right_td = $("<td id = 'currentEvents' />");
	var $right = $("<div id='right' />");
	var $left = $("<div id='left' />");
	$middle_tr.append($left_td).append($right_td);
	$right_td.append($right);
	$left_td.append($left);
	
	//bottom stuff
	var $bottom_tr = $("<tr id='bottomtr' />");
	var $bottom_td = $("<td id='bottomtd' colspan='2' />");
	var $bottom = $("<div id='bottom' />");
	$bottom_tr.append($bottom_td);
	$bottom_td.append($bottom);
	
	$table.append($top_tr).append($canvas_tr).append($middle_tr).append($bottom_tr);
	
	//--------------------------------------------
	//populate content
	var $sample_tag = $("<a class='tag'>BOOGER</a>");
	$top_div.append($sample_tag.clone()).append($sample_tag.clone())
		.append($sample_tag.clone()).append($sample_tag.clone())
		.append($sample_tag.clone()).append($sample_tag.clone())
		.append($sample_tag.clone()).append($sample_tag.clone())
		.append($sample_tag.clone());
	
	//sample canvas rectangle
	var ctx=$canvas[0].getContext("2d");
	ctx.fillStyle="#FF0000";
	ctx.fillRect(50,50,150,75);
	
	$left.text("One does not simply herp when he derps");
	
	$right.text("Err Mer Gerd.  News.");
	
	$bottom.text("This is my rifle, this is my gun.  This is for fighting, this is for fun.");
	
}