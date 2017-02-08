import React from 'react'
import searchGitHubIssues from './utils/searchGitHubIssues'
import ScrollNotifier from './utils/ScrollNotifier'
import { GITHUB_ISSUES_API_URL } from './utils/config'

class GitHubIssueSearcher extends React.Component {
  constructor() {
    super()
    this.state = {
      isFetching: false,
      issues: [],
      links: {}
    }
  }

  componentDidMount() {
    const {
      query = 'react',
      label = 'bug',
      language = 'javascript',
      state = 'open',
      sort = 'sort',
      order = 'asc'
    } = this.props

    this.fetch(`${GITHUB_ISSUES_API_URL}?q=${query}+label:${label}+language:${language}+state:${state}&sort=${sort}&order=${order}`)
  }

  fetchNextPage = () => {
    this.fetch(this.state.links.next)
  }

  fetch = (url) => {
    this.setState({ isFetching: true })
    searchGitHubIssues(url, (issues, links) => {
      this.setState({
        isFetching: false,
        issues: [...this.state.issues, ...issues],
        links
      })
    })
  }

  render() {
    const fetchNextPage = !this.state.isFetching && this.state.links.next ?
      this.fetchNextPage :
      null

    const fetchingComponent = !this.state.isFetching ? null : (
      <li className="text-center" key="loading">
        <h2><i className="fa fa-cog fa-spin fa-3x fa-fw margin-bottom"></i></h2>
      </li>
    )

    return (
      <ScrollNotifier
        style={{ height: 400 }}
        onScrollAtTheBottom={fetchNextPage}
      >
        <ul className="issue-list">
          {this.state.issues.map(issue => (
            <li key={issue.id}>
              <a href={issue.html_url} target="_blank">
                <h3>{issue.title}</h3>
                <p>{issue.body}</p>
              </a>
            </li>
          ))}
          {fetchingComponent}
        </ul>
      </ScrollNotifier>
    )
  }
}

export default GitHubIssueSearcher
