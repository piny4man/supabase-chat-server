import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { Session, SupabaseClient } from '@supabase/supabase-js'
import { Auth, Chat } from '../components'
import styles from '../styles/Home.module.css'

interface IProps {
  session: Session,
  supabase: SupabaseClient
}

const Home: NextPage<IProps> = ({ session, supabase }) => {
  const [ loggedIn, setLoggedIn ] = useState(false)

  useEffect(() => {
    setLoggedIn(!!session)
  }, [ session ])

  return (
    <div className={styles.container}>
      <Head>
        <title>Supabase chat app</title>
      </Head>

      <main className={styles.main}>
        {
          loggedIn
            ? <Chat supabase={ supabase } />
            : <Auth supabase={ supabase } />
        }
      </main>
    </div>
  )
}

export default Home
