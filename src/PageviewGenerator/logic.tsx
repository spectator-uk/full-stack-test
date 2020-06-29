import cuid from 'cuid'
import { useState } from 'react'
import { loremIpsum } from "lorem-ipsum";

interface Pageview {
  id: string
  created_at: Date
  title: string
  description: string
  tags: string[]

  user: {
    id: string
    created_at: Date
  }
}

export const usePageviewGenerator = () => {
  const [pageview, setPageview] = useState<Pageview | null>(null)

  const generate = () => {
    setPageview({
      id: cuid(),
      created_at: new Date(),
      title: loremIpsum(),
      description: 'a',
      tags: ['test', 'another'],

      user: {
        id: `USER${cuid()}`,
        created_at: new Date()
      }
    })
  }

  return {
    generate,
    pageview
  }
}
