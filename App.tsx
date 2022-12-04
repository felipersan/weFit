import AppRoutes from './src/presentation/routes'
import theme from './src/presentation/styles/theme'
import { RepositoryProvider } from './src/presentation/context/repository'
import { ThemeProvider } from 'styled-components'
import { QueryClient, QueryClientProvider } from 'react-query'
import React, { useRef } from 'react'

import { useFonts, Roboto_500Medium } from '@expo-google-fonts/roboto'

import { Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter'
import { StatusBar } from 'react-native'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Inter_400Regular,
    Inter_700Bold
  })

  const queryClient = useRef(new QueryClient())

  return (
    <QueryClientProvider client={queryClient.current}>
      <ThemeProvider theme={theme}>
        <RepositoryProvider>
          <>
            <AppRoutes />
            <StatusBar hidden={true} />
          </>
        </RepositoryProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
