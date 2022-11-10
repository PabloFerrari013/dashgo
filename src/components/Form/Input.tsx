import React from 'react'
import {
  Input as ChakraInput,
  FormLabel,
  FormControl,
  InputProps as ChakraInputProps
} from '@chakra-ui/react'

interface InputForm extends ChakraInputProps {
  name: string
  label?: string
}

const Input: React.FC<InputForm> = ({ name, label, ...rest }) => {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraInput
        name={name}
        {...rest}
        id={name}
        focusBorderColor="pink.500"
        bg="gray.900"
        variant="filled"
        _hover={{
          bg: 'gray.700'
        }}
        size="lg"
      />
    </FormControl>
  )
}

export default Input
