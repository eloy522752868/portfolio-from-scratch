//Eloy Gonzalez 04/06/2021
//Declaration of variables/array
//Modified: 03/30/2021
//Made change to click to show latest project.
var docLocation = "./assets/images/Eloy Gonzalez 2021 Resume.pdf";
var linkIn = "https://www.linkedin.com/in/egonzalez1/";
var gitHubRepos = [
  "https://github.com/eloy522752868/e-commerce-back-end",
  "https://github.com/eloy522752868/note-taker",
  "https://github.com/eloy522752868/tech-blog",
  "https://github.com/eloy522752868/exershare",
];

//Event listeners
//on click resume
$("#resume-detail").on("click", function () {
  resumeGenerator();
});

//on click linkedIn
$("#linked-in").on("click", function () {
  linkInsSite();
});

//on click git hub
$("#git-hub").on("click", function () {
  gitHubReposGeneralRepo();
});

//on click linkedin profile picture
$("#img-profile").on("click", function () {
  linkInsSite();
});

//on click github trademark project app
$("#ecommerce").on("click", function () {
  gitHubReposTradeSearch();
});

//on click github quiz challenge app
$("#canvas").on("click", function () {
  gitHubReposCodingAssessment();
});

//on click password generation app
$("#techblog").on("click", function () {
  gitHubReposPasswordsGenerator();
});

//on click work skeduler app
$("#exershare").on("click", function () {
  gitHubReposWorkDayScheduler();
});

//Functions

function linkInsSite() {
  window.open(linkIn, "resizeable,_none");
}

function resumeGenerator() {
  window.open(docLocation, "resizeable,scrollbar");
}

function gitHubReposTradeSearch() {
  window.open(gitHubRepos[0], "_none");
}

function gitHubReposCodingAssessment() {
  window.open(gitHubRepos[1], "_none");
}

function gitHubReposPasswordsGenerator() {
  window.open(gitHubRepos[2], "_none");
}

function gitHubReposWorkDayScheduler() {
  window.open(gitHubRepos[3], "_none");
}

function gitHubReposGeneralRepo() {
  window.open(gitHubRepos[4], "_none");
}
