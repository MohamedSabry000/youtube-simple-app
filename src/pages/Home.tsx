import React, { useContext, useEffect } from 'react'
import { useMediaQuery } from 'usehooks-ts'
import { YoutubeContextType } from '../@types/youtube'
import { getInitial, getList } from '../api'
import Container from '../components/container/Container'

import DesktopHeader from '../components/header/DesktopHeader'
import MobileHeader from '../components/header/MobileHeader'
import List from '../components/list/List'
import TextInput from '../components/text-input/TextInput'
import { YoutubeContext } from '../context/YoutubeContext'

export default function Home() {
  const { loading, error, setLoading, setError, saveVideos } = useContext(YoutubeContext) as YoutubeContextType;

  const matches = useMediaQuery('(max-width: 768px)')

  useEffect(() => {
    search()
  } , []);

  const search = (query = '/') => {
    setLoading(true);
    getList(query).then(data => {
      saveVideos(data);
      setError('');
    }).catch(err => {
      console.error(err.message);
      setError("There is Something wrong with the server");
    }).finally(() => {
      setLoading(false);
    })
  }

  return (
    <div className="home">
      {
        matches ? (
          <MobileHeader>
            <TextInput search={search} />
          </MobileHeader>
        ) : (
          <DesktopHeader>
            <TextInput search={search} />
          </DesktopHeader>
        )
      }
      <Container>
        {
          loading? (
            <div style={styles.loading}>
              <div className="loading-icon">Loading!!!</div>
            </div>
          ) : error?
            <div style={styles.error}>
              <div className="error-icon">{error}</div>
            </div>
            : (
            <List />
          )
        }
      </Container>
    </div>
  )
}

const styles = {
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  },
  error: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    color: 'red'
  }

}