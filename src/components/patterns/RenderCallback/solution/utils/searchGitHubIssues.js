import jsonp from 'jsonp'

// https://api.github.com/search/issues?q=react+label:bug+language:javascript+state:open&sort=created&order=asc

const searchGitHubIssues = (url, callback) => {
  jsonp(url, (error, response) => {
    const links = response.meta.Link.reduce(
      (links, link) => {
        links[link[1].rel] = link[0]
        return links
      }, {})
    callback(response.data.items, links)
  })
}

export default searchGitHubIssues
