import { Box, Stack, Text } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

interface NavSectionProps {
  title: string
  children: ReactNode
}

const NavSection: React.FC<NavSectionProps> = ({ title, children }) => {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">
        {title}
      </Text>

      <Stack spacing="8" mt="4" align="stretch">
        {children}
      </Stack>
    </Box>
  )
}

export default NavSection
