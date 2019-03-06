import React from "react";

class Example extends React.Component {
  state = {
    data: [],
    loading: false,
    error: undefined
  };

  componentDidMount = async () => {
    this.setState({ loading: true });
    try {
      const response = await fetch(
        "https://api.github.com/gists/public?per_page=3"
      );
      const data = await response.json();
      this.setState({ data });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { error, data, loading } = this.state;

    if (error) {
      return <p>Error: {error}</p>;
    } else if (loading) {
      return <p>Loading...</p>;
    } else if (!data.length) {
      return <p>Empty list :(</p>;
    } else {
      return (
        <React.Fragment>
          <p>
            Display a list of gists from https://api.github.com/gists/public
          </p>
          <ul className="issue-list">
            {data.map(item => (
              <li key={item.id}>
                <a href={item.html_url} target="_blank">
                  <img
                    alt={item.owner.login}
                    src={item.owner.avatar_url}
                    style={{ maxWidth: "100px" }}
                  />
                  {item.description}
                </a>
              </li>
            ))}
          </ul>
        </React.Fragment>
      );
    }
  }
}

export default Example;
