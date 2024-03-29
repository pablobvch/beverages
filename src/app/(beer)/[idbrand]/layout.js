import React from 'react'

import { Main } from '@/components/ui/Main'

const ProductLayout = ({children}) => {
  return (
    <Main>
      <div>{children}</div>
    </Main>
  )
}

export default ProductLayout