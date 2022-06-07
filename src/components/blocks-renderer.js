import React from "react"
import { graphql } from "gatsby"
import BlockRichText from "./block-rich-text"

const componentsMap = {
  StrapiComponentSharedRichText: BlockRichText,
}

const Block = ({ block }) => {
  const Component = componentsMap[block.__typename]

  if (!Component) {
    return null
  }

  return <Component data={block} />
}

const BlocksRenderer = ({ blocks }) => {
  return (
    <div>
      {blocks.map((block, index) => (
        <Block key={`${index}${block.__typename}`} block={block} />
      ))}
    </div>
  )
}

export const query = graphql`
  fragment Blocks on StrapiComponentSharedRichText {
    __typename
    ... on StrapiComponentSharedRichText {
      body
    }
  }
`

export default BlocksRenderer
