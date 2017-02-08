import React from 'react'
import searchGitHubIssues from './utils/searchGitHubIssues'

const GITHUB_ISSUES_API_URL = 'https://api.github.com/search/issues'

class GitHubIssuesSearcher extends React.Component {
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
    //return <pre>{JSON.stringify(this.state, null, 2)}</pre>
    const fetchNextPage = !this.state.isFetching && this.state.links.next ?
      this.fetchNextPage :
      null

    const { issues, isFetching } = this.state

    return this.props.children({ fetchNextPage, result: issues, isFetching })
  }
}

GitHubIssuesSearcher.propTypes = {
  children: React.PropTypes.func.isRequired
}

export default GitHubIssuesSearcher
