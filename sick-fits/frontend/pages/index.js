import React from "react"
import Link from "next/link"

class Home extends React.Component {
  render() {
    return(
      <div>
        <Link href="/sell">
          <a>Sell</a>
        </Link>
      </div>
    )
  }
}

export default Home
