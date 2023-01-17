const octokit = new Octokit({
    auth: 'YOUR-TOKEN'
  })
  
  await octokit.request('GET /users/{username}/repos{?type,sort,direction,per_page,page}', {
    username: 'USERNAME'
  })