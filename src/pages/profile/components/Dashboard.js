import { Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { FlexColumn } from '../../../App.Styled';

export default function Dashboard() {
    const user = useSelector(state=>state.UserReducer.user);

  return (
    <FlexColumn>
    <Typography margin={"20px 0"}>Hello {user?.name}</Typography>
    <Typography>
    From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</Typography>        
    </FlexColumn>
  )
}
