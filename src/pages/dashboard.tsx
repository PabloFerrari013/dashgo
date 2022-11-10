import React from 'react'
import Header from '../components/Header'
import { Flex, SimpleGrid, Box, Text, theme } from '@chakra-ui/react'
import SideBar from '../components/Sidebar'
import dynamic from 'next/dynamic'
import { ApexOptions } from 'apexcharts'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const Dashboard: React.FC = () => {
  const options: ApexOptions = {
    chart: {
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      },
      foreColor: theme.colors.gray[500]
    },
    grid: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    tooltip: {
      enabled: false
    },
    xaxis: {
      type: 'datetime',
      axisBorder: {
        color: theme.colors.gray[600]
      },
      axisTicks: {
        color: theme.colors.gray[600]
      },
      categories: [
        '2022-11-10T00:00:00.000z',
        '2022-12-10T00:00:00.000z',
        '2022-13-10T00:00:00.000z',
        '2022-14-10T00:00:00.000z',
        '2022-15-10T00:00:00.000z',
        '2022-16-10T00:00:00.000z',
        '2022-17-10T00:00:00.000z'
      ]
    }
  }

  const series = [
    {
      name: 'series1',
      data: [12, 356, 45, 20, 45, 35, 87]
    }
  ]

  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <SideBar />

        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-start"
        >
          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text fontSize="large" mb="4">
              Inscritos da semana
            </Text>

            <Chart options={options} series={series} type="area" height={160} />
          </Box>

          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text fontSize="large" mb="4">
              taxa de abertura
            </Text>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}

export default Dashboard
