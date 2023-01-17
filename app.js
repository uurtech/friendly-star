const fs = require('fs');

require('dotenv').config()

if (!process.env.GITHUB_TOKEN) {
    console.log("please provide github token")
    return 1
}
let rawdata = fs.readFileSync('./friends.json');
let friends_list = JSON.parse(rawdata);

const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
  })


friends_list.forEach(element => {
    
  octokit.request('GET /users/'+element+'/repos{?type,sort,direction,per_page,page}', {
    username: 'USERNAME'
  })
});

  