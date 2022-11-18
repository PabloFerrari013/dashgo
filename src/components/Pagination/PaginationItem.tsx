import { Button } from '@chakra-ui/react'
import React from 'react'

interface PaginationItemProps {
  isCurrent?: boolean
  number: number
}

const PaginationItem: React.FC<PaginationItemProps> = ({
  isCurrent = false,
  number
}) => {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bgColor: 'pink.500',
          cursor: 'default'
        }}
      >
        {number}
      </Button>
    )
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      colorScheme="gray.700"
      _hover={{ bg: 'gray.500' }}
    >
      {number}
    </Button>
  )
}

export default PaginationItem
