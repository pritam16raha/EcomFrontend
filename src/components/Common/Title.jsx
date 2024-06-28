import React from 'react'
import { TitleWrapper } from '../../styles/styles';

const Title = ({ titleText }) => {
  return (
    <TitleWrapper>
        <h3>{titleText}</h3>
    </TitleWrapper>
  )
}

export default Title;

