import React from 'react'
import { TETROMINOS } from '../helpers/tetrominos';
import { StyledCell } from './styles/StyledCell';

 const Cell = ({type}) => {
   
  return (
    <StyledCell type={'L'} color={TETROMINOS['L'].color} />
  )
}

export default Cell;
