import { Button } from '@chakra-ui/react'
import React from 'react'

interface PaginationItemProps {
  isCurrent?: boolean
  number: number
  onPageChange: (page: number) => void
}

const PaginationItem: React.FC<PaginationItemProps> = ({
  isCurrent = false,
  number,
  onPageChange
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
        onClick={() => {
          onPageChange(number)
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
      bg="gray.700"
      _hover={{ bg: 'gray.500' }}
      onClick={() => {
        onPageChange(number)
      }}
    >
      {number}
    </Button>
  )
}

export default PaginationItem
