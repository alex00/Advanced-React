import React from "react"
import Head from "next/head"

class Meta extends React.PureComponent {
  render() {
    return (
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="utf-8" />
        <link rel="shortcut icon" href="/static/flavicon.png" />
        <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
        <title>Sick Fits!</title>
      </Head>
    )
  }
}

export default Meta
