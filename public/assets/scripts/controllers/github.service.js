myApp.service('GithubAPI', function($http) {
  //Enter your token and username here:
  var oauthToken = '0548997b1086a30a72821504d6dd23c43649888e';
  var username = 'jblue96';


  //Call to Github API to fetch user's profile info
  this.githubProfile = function(){

    return $http({
      method: 'GET',
      url: 'https://api.github.com/users/' + username,
      headers: {
        'Authorization': 'token '+ oauthToken}
      }
    ).then(function(response) {
      console.log(response.data);
      return response.data;
    });
  };

  //Call to Github API to fetch list of user's repos
  this.githubRepos = function(){

    return $http({
      method: 'GET',
      url: 'https://api.github.com/users/' + username + '/repos',
      headers: {
        'Authorization': 'token '+ oauthToken}
      }
    ).then(function(repo) {
      console.log(repo.data);
      return repo.data;

    });
  };
});
