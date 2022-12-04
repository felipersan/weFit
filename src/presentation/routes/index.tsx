import React, { useRef } from 'react'
import StackRouter from './Stack.router'
import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from 'react-query'

export default function AppRoutes() {
  const queryClient = useRef(new QueryClient())
  return (
    <QueryClientProvider client={queryClient.current}>
      <NavigationContainer>
        <StackRouter />
      </NavigationContainer>
    </QueryClientProvider>
  )
}
