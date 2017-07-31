myApp.controller('RepositoryController',['GithubAPI', function(GithubAPI){
  console.log("repo controller has loaded");
  var vm = this;

  vm.retrieveRepo = function (){
    GithubAPI.githubRepos().then(function(response){
      console.log('logging retreive response in-->:', response);
      vm.holdrepo = response;
    });
};
vm.retrieveRepo();
}]);
