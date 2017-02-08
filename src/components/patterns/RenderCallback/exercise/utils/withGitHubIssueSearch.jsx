import React from 'react'
import searchGitHubIssues from './searchGitHubIssues'
import { GITHUB_ISSUES_API_URL } from './config'

const withGitHubIssueSearch = MyComponent => (
  class ComponentWithGitHubIssueSearch extends React.Component {
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
      const { issues, isFetching } = this.state

      return <MyComponent
        {...this.props}
        issues={issues}
        fetchNextPage={fetchNextPage}
        isFetching={isFetching}
      />
    }
  }
)

export default withGitHubIssueSearch
