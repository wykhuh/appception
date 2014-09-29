'use strict';

// This factory interacts with the Github API
angular.module('appceptionApp')
  .factory('github', function ($http, Auth) {

    // Get all repos for the logged in user.
    var getRepos = function(githubLogin) {
      return $http({
        method: 'GET',
        url: '/api/projects',
        params: {githubLogin: githubLogin}
      });
    };

    // Get list and content of repo files for the logged in user.
    var getRepoFiles = function(githubLogin, githubRepo) {
      return $http({
        method: 'GET',
        url: '/api/projects/files',
        params: {
          githubLogin: githubLogin,
          githubRepo: githubRepo
        }
      })
    };

    var createRepo = function(githubLogin, repoName) {
      console.log('inside service createRepo')
      return $http({
        method: 'GET',
        url: '/api/projects/new',
        params: {
          githubLogin: githubLogin,
          repoName: repoName
        }
      })
    };

    var createCommit = function(githubLogin, repoName, message) {
      console.log('inside createCommit')
      return $http({
        method: 'GET',
        url: '/api/projects/commit',
        params: {
          githubLogin: 'kwalker3690',
          repoName: 'app',
          message: 'create commit api'
        }
      })
      .then(function(resp) {
        // console.log('createCommit response sha', resp)
      })
    }

    return {
      getRepos: getRepos,
      getRepoFiles: getRepoFiles,
      createRepo: createRepo,
      createCommit: createCommit
    };
  });
