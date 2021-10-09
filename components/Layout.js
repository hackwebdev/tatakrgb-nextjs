import React from 'react'
import Head from 'next/head'
import { AppBar, Toolbar, Typography, Container } from '@mui/material'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Tatak RGB</title>
      </Head>
      <AppBar position='fixed' color='primary'>
        <Toolbar>
          <Typography variant='h6'>Tatak RGB</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer>
        <Typography>All rights reserved. Next Tatak RGB</Typography>
      </footer>
    </div>
  )
}
