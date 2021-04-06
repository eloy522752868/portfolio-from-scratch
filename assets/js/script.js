//Eloy Gonzalez 04/06/2021
//Declaration of variables/array
var docLocation = "./assets/images/Eloy Gonzalez 2020 Resume.pdf";
var linkIn = "https://www.linkedin.com/in/egonzalez1/";
var gitHubRepos = ["https://github.com/mknowlton89/trademark_search","https://github.com/eloy522752868/interview-coding-assessment","https://github.com/eloy522752868/employees-passwords-generator","https://github.com/eloy522752868/work-day-scheduler","https://github.com/eloy522752868?tab=repositories"];

//Event listeners
//on click resume 
$('#resume-detail').on("click", function(){ 
    resumeGenerator();

});

//on click linkedIn 
$('#linked-in').on("click", function()
{ 
    linkInsSite();
});

//on click git hub
$('#git-hub').on("click", function()
{ 
    gitHubReposGeneralRepo();
});

//on click linkedin profile picture
$('#img-profile').on("click", function(){ 
    linkInsSite();
});

//on click github trademark project app
$('#trademark-project').on("click", function(){ 
    gitHubReposTradeSearch();
});

//on click github quiz challenge app 
$('#coding-quiz-challengeid').on("click", function(){ 
    gitHubReposCodingAssessment();
});

//on click password generation app
$('#employees-passwords-generatorid').on("click", function(){ 
    gitHubReposPasswordsGenerator();
});

//on click work skeduler app
$('#WorkdaySchedulerid').on("click", function(){ 
    gitHubReposWorkDayScheduler();
});

//Functions 

function linkInsSite()
 {
    window.open(linkIn,"resizeable,_none"); 
 }


 function resumeGenerator()
 {
    window.open(docLocation,"resizeable,scrollbar"); 
 }

 function gitHubReposTradeSearch()
 {
    window.open(gitHubRepos[0],"_none"); 
 }

 function gitHubReposCodingAssessment()
 {
    window.open(gitHubRepos[1],"_none"); 
 }

 function gitHubReposPasswordsGenerator()
 {
    window.open(gitHubRepos[2],"_none"); 
 }

 function gitHubReposWorkDayScheduler()
 {
    window.open(gitHubRepos[3],"_none"); 
 }

 
 function gitHubReposGeneralRepo()
 {
    window.open(gitHubRepos[4],"_none"); 
 }
