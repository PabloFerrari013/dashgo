import React, { forwardRef, ForwardRefRenderFunction } from 'react'
import {
  Input as ChakraInput,
  FormLabel,
  FormControl,
  InputProps as ChakraInputProps,
  FormErrorMessage
} from '@chakra-ui/react'
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'

interface InputProps extends ChakraInputProps {
  name: string
  label?: string
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
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
        ref={ref}
      />
      {!!error && <FormErrorMessage>{String(error.message)}</FormErrorMessage>}
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)
