import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  IconButton,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
  UseQueryProps
} from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import React, { useState } from 'react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import { UseQueryOptions, UseQueryResult } from 'react-query'
import Header from '../../components/Header'
import Pagination from '../../components/Pagination'
import SideBar from '../../components/Sidebar'
import { api } from '../../services/api'
import { getUsers, useUsers } from '../../services/hooks/useUsers'
import { queryClient } from '../../services/queryClient'

interface UserListParams {
  users: {
    id: string
    name: string
    email: string
  }[]
  totalCount: number
}

export default function UserList({ users }: UserListParams) {
  const [page, setPage] = useState(1)

  const { data, isLoading, error, isFetching } = useUsers(page, {
    initialData: users
  })

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  async function handlePrefetchUser(userId: string) {
    await queryClient.prefetchQuery(
      ['user', userId],
      async function () {
        const response = api.get(`user/${userId}`)

        return response
      },
      { staleTime: 1000 * 60 * 10 }
    )
  }

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <SideBar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8" overflowX="auto">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
              {!isLoading && isFetching && (
                <Spinner size="sm" color="gray.500" ml="4" />
              )}
            </Heading>

            <Link href="users/create">
              <Button
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Falha ao obter dados dos usuários</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th px={['4', '4', '6']} color="gray.300" width="8">
                      <Checkbox colorScheme="pink" />
                    </Th>

                    <Th>Usuário</Th>

                    {isWideVersion && <Th>Data de cadastro</Th>}

                    <Th></Th>
                  </Tr>
                </Thead>

                <Tbody>
                  {data?.users.map(user => (
                    <Tr key={user.id}>
                      <Td px={['4', '4', '6']}>
                        <Checkbox colorScheme="pink" />
                      </Td>

                      <Td>
                        <Box>
                          <Box onBlur={() => handlePrefetchUser(user.id)}>
                            <Link href="/">
                              <Text fontWeight="bold">{user.name}</Text>
                            </Link>
                          </Box>

                          <Text fontSize="small" color="gray.300">
                            {user.email}
                          </Text>
                        </Box>
                      </Td>

                      {isWideVersion && <Td>{user.createdAt}</Td>}

                      <Td>
                        {isWideVersion ? (
                          <Button
                            as="a"
                            size="sm"
                            fontSize="sm"
                            colorScheme="purple"
                            leftIcon={<Icon as={RiPencilLine} />}
                          >
                            Editar
                          </Button>
                        ) : (
                          <IconButton
                            aria-label="Edit user"
                            as="a"
                            size="sm"
                            fontSize="sm"
                            colorScheme="purple"
                            icon={<Icon as={RiPencilLine} />}
                          />
                        )}
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>

              <Pagination
                totalCountOfRegisters={data.totalCount}
                currentPage={page}
                onPageChange={setPage}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { users, totalCount } = await getUsers(1)

  return {
    props: {
      users
    }
  }
}
