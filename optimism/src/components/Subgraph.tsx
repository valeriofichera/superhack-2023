import React, { useEffect } from "react"

import "./Subgraph.css"
import { useQuery, gql } from "@apollo/client"
import Spinner from "./Spinner"

const GET_ATTESTATIONS = gql` query GetContractTransactions(0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77: String!) {
  transactions(
    where: {
      to: 0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77
      OR: [
        { from: 0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77 }
      ]
    }
    orderBy: timestamp
    orderDirection: desc
  ) {
    id,
    hash,
    timestamp
    from {
      id
    }
    to {
      id
    }
    value,
    fee
  }
}`



function Subgraph() {
  const { loading, error, data } = useQuery(GET_ATTESTATIONS)

  return (
    <div className="cookie3">
      <div className="section3">
        <div>
          {loading && <Spinner />}

          {error && <div className="text-red-700">{error}</div>}

          {data &&
            Array.isArray(data?.transactions) &&
            data.transactios?.map((item) => {
              return (
                <div
                  key={item.id}
                  className="mb-6 flex flex-col items-start w-2/3 mx-auto border-2 border-white rounded-lg p-2 break-all"
                >

                  <p>TX hash: {item.hash}</p>
                  <p>Timestamp: {item.timestamp}</p>
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default Subgraph;
