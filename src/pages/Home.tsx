import React from 'react'
import { useMediaQuery } from 'usehooks-ts'
import Container from '../components/container/Container'

import DesktopHeader from '../components/header/DesktopHeader'
import MobileHeader from '../components/header/MobileHeader'
import List from '../components/list/List'
import TextInput from '../components/text-input/TextInput'

export default function Home() {
  const [text, setText] = React.useState('')

  const matches = useMediaQuery('(max-width: 768px)')

  return (
    <div className="home">
      {
        matches ? (
          <MobileHeader>
            <TextInput value={text} onChange={setText} />
          </MobileHeader>
        ) : (
          <DesktopHeader>
            <TextInput value={text} onChange={setText} />
          </DesktopHeader>
        )
      }
      <Container>
        <List />
      </Container>
    </div>
  )
}
