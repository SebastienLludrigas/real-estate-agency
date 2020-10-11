import React, { useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { Layout } from '../components/layout';
import useAuth from '../auth/context';
import { useRouter } from 'next/router'

const FormPage = () => {

   const [values, setValues] = useState({
      username: "",
      password: ""
   })

   const router = useRouter;

   const { login, isAuthenticated } = useAuth();

   const handleChange = evt => {
      setValues({
         ...values,
         [evt.target.name] : evt.target.value
      })
   }

   const onSubmit = evt => {
      evt.preventDefault();
      login(values.username, values.password)
   }

   return (
      <Layout>
         <MDBContainer>
            <form onSubmit={onSubmit}>
            <p className="h5 text-center my-4">Connexion</p>
            <div className="grey-text">
               <MDBInput 
                  label="Nom d'utilisateur"   
                  icon="user" 
                  name="username"
                  type='text'
                  onChange={handleChange}
               />
               <MDBInput 
                  label="Mot de passe" 
                  name='password'
                  onChange={handleChange}
                  icon="lock" 
                  type="password" 
                  validate 
               />
            </div>
            <div className="text-center">
               <button type='submit' className='globalButton'>
                  Connexion
               </button>
            </div>
            </form>
         </MDBContainer>
      </Layout>
   );
};

export default FormPage;