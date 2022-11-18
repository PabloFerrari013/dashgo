import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

interface ProfileProps {
  showProfileData?: boolean
}

const Profile: React.FC<ProfileProps> = ({ showProfileData = true }) => {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Pablo Ferrari</Text>
          <Text color="gray.300" fontSize="small">
            pabloferrari@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Pablo Ferrari"
        src="https://github.com/PabloFerrari013.png"
      />
    </Flex>
  )
}

export default Profile
