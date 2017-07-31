myApp.controller('ProfileController', ['GithubAPI', function(GithubAPI){


  var vm = this;
  console.log('ProfileController loaded');
  GithubAPI.githubProfile();

}]);
