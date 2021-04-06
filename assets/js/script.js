var docLocation = "./assets/images/Eloy Gonzalez 2020 Resume.pdf";
var linkIn = "https://www.linkedin.com/in/egonzalez1/";
var gitHubRepos = ["https://github.com/mknowlton89/trademark_search","https://github.com/eloy522752868/interview-coding-assessment","https://github.com/eloy522752868/employees-passwords-generator","https://github.com/eloy522752868/work-day-scheduler","https://github.com/eloy522752868?tab=repositories"];


console.log(gitHubRepos);
//Add class to resume nav link when clicked egonSadd 
$('#resume-detail').on("click", function(){ 
    resumeGenerator();

});

//Add pro


$('#linked-in').on("click", function()
{ 
    linkInsSite();
});

$('#git-hub').on("click", function()
{ 
    gitHubReposGeneralRepo();
});

$('#img-profile').on("click", function(){ 
    linkInsSite();
});

$('#trademark-project').on("click", function(){ 
    gitHubReposTradeSearch();
});

$('#coding-quiz-challengeid').on("click", function(){ 
    gitHubReposCodingAssessment();
});

$('#employees-passwords-generatorid').on("click", function(){ 
    gitHubReposPasswordsGenerator();
});

$('#WorkdaySchedulerid').on("click", function(){ 
    gitHubReposWorkDayScheduler();
});


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
