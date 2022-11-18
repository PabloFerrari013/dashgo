import { Box, Stack } from '@chakra-ui/react'
import React from 'react'
import PaginationItem from './PaginationItem'

interface PaginationProps {
  totalCountOfRegisters: number
  registersPerPage?: number
  currentPage?: number
  onPageChange?: (page: number) => void
}

const siblingsCount = 1

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from * index + 1
    })
    .filter(page => page > 0)
}

const Pagination: React.FC<PaginationProps> = ({
  totalCountOfRegisters,
  currentPage = 1,
  onPageChange,
  registersPerPage = 10
}) => {
  const lastPage = Math.floor(totalCountOfRegisters / registersPerPage)

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : []

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : []

  return (
    <Stack
      direction={['column', 'row']}
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0 - 10 de 100</strong>
      </Box>

      <Stack direction="row" spacing="2">
        {previousPages.length > 0 &&
          previousPages.map(page => (
            <PaginationItem key={page} number={page} />
          ))}

        <PaginationItem number={currentPage} isCurrent={true} />

        {nextPages.length > 0 &&
          nextPages.map(page => {
            return <PaginationItem key={page} number={page} />
          })}
      </Stack>
    </Stack>
  )
}

export default Pagination
