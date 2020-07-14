//check off list
$("ul").on("click","li",function(){
$(this).toggleClass("completed");
});

//click on X to deleted todo
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	
	event.stopPropagation();		//jQuery method fr bubbling up
});

$("input[type='text']").keypress(function(event){
	if(event.which===13){
		//grapping new todo text from input
		var todoText=$(this).val();
		$(this).val("");   //gives empty input after todo entered
		//create new li & add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" +todoText+ "</li>");
	}
});

$(".fa-pencil").click(function(){
$("input[type='text']").fadeToggle();
});



