import { Component } from "react";
import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import Error from "./_error";

class About extends Component {
  // state = {
  //   user: null
  // };

  static async getInitialProps() {
    const res = await fetch("https://api.github.com/users/rikschoonbeek");

    // a 200 status code is a success,  but for fetching data,
    // anything higher than 200 is an error.
    const statusCode = res.status > 200 ? res.status : false;

    const data = await res.json();

    return { user: data, statusCode };
  }

  render() {
    const { user, statusCode } = this.props;

    if (statusCode) {
      return <Error statusCode={statusCode} />;
    }

    return (
      <Layout title="About">
        <p>{user.name}</p>
        <img src={user.avatar_url} alt="Rikkert" height="200px" />
      </Layout>
    );
  }
}

export default About;
