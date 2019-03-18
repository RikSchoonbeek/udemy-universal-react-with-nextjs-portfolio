import { Component } from "react";
import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";

class About extends Component {
  // state = {
  //   user: null
  // };

  static async getInitialProps() {
    const res = await fetch("https://api.github.com/users/reedbarger");
    const data = await res.json();

    return { user: data };
  }

  render() {
    const { user } = this.props;
    return (
      <Layout title="About">
        <p>{user.name}</p>
        <img src={user.avatar_url} alt="Rikkert" height="200px" />
      </Layout>
    );
  }
}

export default About;
