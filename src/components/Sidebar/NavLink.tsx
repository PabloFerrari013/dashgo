import { Icon, Link as ChakraLink, LinkProps, Text } from '@chakra-ui/react'
import React, { ElementType } from 'react'
import ActiveLink from '../ActiveLink'

interface NavLinkProps extends LinkProps {
  icon: ElementType
  children: string
  href: string
}

const NavLink: React.FC<NavLinkProps> = ({ children, icon, href, ...rest }) => {
  return (
    <ActiveLink href={href}>
      <ChakraLink as="span" display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize="20" />

        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  )
}

export default NavLink
