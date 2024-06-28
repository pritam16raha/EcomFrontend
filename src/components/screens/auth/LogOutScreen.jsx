import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useMyAuth } from '../../../store/Auth';

export const LogOutScreen = () => {

  const { LogoutUser } = useMyAuth();

  useEffect(() => {
    LogoutUser();
  }, [LogoutUser]);

  return <Navigate to="/signin" />
}