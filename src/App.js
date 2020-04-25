import React, { Component } from "react";
import Video from "./components/Video";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      videosPopular: [],
      videosLatest: [],
      searchterm: "javascript",
      baseUrlPopular: `https://www.googleapis.com/youtube/v3/search?part=snippet&order=relevance&key=AIzaSyAYy5Nt9VovU2cFibqY9hdifV1wFDmz_fs&q=`,
      baseUrlLatest:
        "https://www.googleapis.com/youtube/v3/search?part=snippet&order=date&q=",
    };
  }
  fetchData() {
    fetch(this.state.baseUrlPopular + this.state.searchterm)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          ...this.state,
          videosPopular: data.items.map((item) => (
            <Video videoId={item.id.videoId} key={Math.random(100)} />
          )),
        })
      )
      .catch((err) => console.log(err));
  }
  componentDidMount() {
    this.fetchData();
  }
  render() {
    return <div>{this.state.videosPopular && this.state.videosPopular}</div>;
  }
}
