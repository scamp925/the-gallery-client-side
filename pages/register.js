import React from 'react';
import { useAuth } from '../utils/context/authContext';
import RegisterForm from '../components/RegisterForm';

export default function Register() {
  const { user, updateUser } = useAuth();

  return (
    <RegisterForm user={user} updateUser={updateUser} />
  );
}