import React, { Component } from "react"
import Layout from "../components/layout"
import styles from "../components/products.module.css"
export default class products extends Component {
  render() {
    return (
      <Layout>
        <div className={styles.page}>
        <h1>These are our Products...</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
        </div>
      </Layout>
    )
  }
}
