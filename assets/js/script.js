var docLocation = "./assets/images/Eloy Gonzalez 2020 Resume.pdf";

//Add class to resume nav link when clicked
$('#resume-detail').on("click", function(e){ 
 
 window.open(docLocation,"resizeable,scrollbar"); 
 e.preventDefault(); 

});

