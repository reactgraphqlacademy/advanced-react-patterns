import React from 'react'
import withGitHubIssueSearch from './utils/withGitHubIssueSearch'
import ScrollNotifier from './utils/ScrollNotifier'

const GitHubIssueSearcher = ({ issues, fetchNextPage, isFetching }) => (
  <ScrollNotifier
    style={{ height: 400 }}
    onScrollAtTheBottom={ fetchNextPage }
  >
    <ul className="issue-list">
      {issues.map(item => (
        <li key={item.id}>
          <a href={item.html_url} target="_blank">
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </a>
        </li>
      ))}
      {!isFetching ? null : <li className="text-center" key="loading">
          <h2><i className="fa fa-cog fa-spin fa-3x fa-fw margin-bottom"></i></h2>
        </li>
      }
    </ul>
  </ScrollNotifier>
)

export default withGitHubIssueSearch(GitHubIssueSearcher)
