import React, { useState } from 'react';
import {
   MDBNavbar, 
   MDBNavbarBrand,
   MDBNavbarNav, 
   MDBNavItem, 
   MDBNavbarToggler, 
   MDBCollapse, 
   MDBFormInline,
   MDBDropdown, 
   MDBDropdownToggle, 
   MDBDropdownMenu, 
   MDBDropdownItem,
   MDBIcon,
} from "mdbreact";
import Link from 'next/link';
import useAuth from '../auth/context';
import {useRouter} from 'next/router';

export const Header = () => {

   const [isOpen, setIsOpen] = useState(false);

   const handleToggle = (info) => {
      setIsOpen(!info);
   }

   const {logout, user, isAuthenticated} = useAuth();
   const router = useRouter();

   return (
      <MDBNavbar color="default-color-dark" expand='md' dark>
         <MDBNavbarToggler 
            onClick={() => {
               handleToggle(isOpen)
            }} 
         />
         <MDBCollapse id='navbarCollapse' navbar isOpen={isOpen}>
            <MDBNavbarNav left>
               <MDBNavItem active={router.pathname === '/'}>
                  <Link href='/'>
                     <a className="nav-link">
                        <MDBIcon icon="home" className="mr-1"/>Homelander
                     </a>
                  </Link>
               </MDBNavItem>
               <MDBNavItem active={router.pathname === '/properties'}>
                  <Link href='/properties'>
                     <a className="nav-link">
                        Liste des biens
                     </a>
                  </Link>
               </MDBNavItem>
               {isAuthenticated && user.role === 'admin' && (
                  <MDBNavItem active={router.pathname === '/property/list'}>
                     <Link href='/property/list'>
                        <a className="nav-link">
                           Dashboard
                        </a>
                     </Link>
                  </MDBNavItem>
               )}
            </MDBNavbarNav>
            <MDBNavbarNav right>
               <MDBNavItem active={router.pathname === '/contact'}>
                  <Link href='/contact'>
                     <a className="nav-link">
                        <MDBIcon icon='address-book' className='mr-1' />
                        Contact
                     </a>
                  </Link>
               </MDBNavItem>
               {!isAuthenticated && (
                  <MDBNavItem active={router.pathname === '/login'}>
                     <Link href='/login'>
                        <a className="nav-link">
                           <MDBIcon icon='user-alt' className='mr-1' />
                           Connexion
                        </a>
                     </Link>
                  </MDBNavItem>
               )}
               {isAuthenticated && (
                  <>
                     <MDBNavItem>
                        <div className="nav-link">
                           <MDBIcon icon='user-alt' className='mr-1' />
                           Bonjour <span style={{fontWeight: 'bold'}}>{user.username}</span>
                        </div>
                     </MDBNavItem>
                     <MDBNavItem>
                        <div 
                           className="nav-link" 
                           onClick={logout}
                           style={{cursor: 'pointer'}}
                        >
                           <MDBIcon icon='power-off' className='mr-1' />
                           Deconnexion
                        </div>
                     </MDBNavItem>
                  </>
               )}
            </MDBNavbarNav>
         </MDBCollapse>
      </MDBNavbar>
   )
}