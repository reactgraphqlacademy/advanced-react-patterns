import React from "react";

class RandomImage extends React.Component {
  state = {
    imageUrl: undefined,
  };

  componentDidMount = () => {
    this.fetchRandomImage();
  };

  fetchRandomImage = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/photos?_limit=100"
    );
    const data = await response.json();
    const image = data[Math.floor(Math.random() * data.length)];
    this.setState({ imageUrl: image.thumbnailUrl });
  };

  render() {
    const { imageUrl } = this.state;

    return <img src={imageUrl} alt={imageUrl} />;
  }
}

export default RandomImage;
