import React from 'react';
import api from '../../auth/axios';
import { Layout } from '../../components/layout';
import {
   MDBCard,
   MDBCardBody,
   MDBContainer,
   MDBCol,
   MDBRow,
   MDBIcon
} from 'mdbreact';
import {CardCarousel} from '../../components/cardCarousel';
import { Slug } from '../../components/slug';
import { CardVip } from '../../components/cardVip';
import { CardRelated } from '../../components/cardRelated';

const Property = ({property, properties, propertyRelated}) => {

   const styles = {
      cardCar: {
         marginTop: '1.5em'
      },
      info: {
         fontSize: '15px'
      }
   }

   return (
      <>
         {property && (
            <Layout>
               <MDBContainer>
                  <MDBCard style={styles.cardCar}>
                     <MDBCardBody>
                        <MDBRow>
                           <MDBCol md='9' lg='9'>
                              <CardCarousel property={property}/>
                              <Slug property={property}/>
                           </MDBCol>
                           <MDBCol md='3' lg='3'>
                              <h4 className="mt-5">Contactez-nous</h4>
                              <div style={styles.info}>
                                 <MDBIcon icon='calculator' className='mr-1'/>
                                 <span>10 rue des Vainqueurs</span>
                              </div>
                              <div style={styles.info}>
                                 <MDBIcon icon='phone-alt' className='mr-1'/>
                                 <span>+33 55-566-855</span>
                              </div>
                              <div style={styles.info}>
                                 <MDBIcon icon='mobile-alt' className='mr-1'/>
                                 <span>+33 62-556-887</span>
                              </div>
                              <div style={styles.info}>
                                 <MDBIcon icon='envelope' className='mr-1'/>
                                 <span>admin@gmail.com</span>
                              </div>
                              <h3 className="mt-4 mb-3">Biens sponsorisés</h3>
                              <CardVip properties={properties} />
                           </MDBCol>
                        </MDBRow>
                        <hr className="my-4"/>
                        <MDBRow>
                           {propertyRelated && propertyRelated.length !== 0 && (
                              <MDBCol>
                                 <h2 className="mb-5">Biens similaires</h2>
                                 <CardRelated properties={propertyRelated}/>
                              </MDBCol>
                           )}
                        </MDBRow>
                     </MDBCardBody>
                  </MDBCard>
               </MDBContainer>
            </Layout>
         )}
      </>
   )
}

export const getStaticPaths = async () => {
   const {data} = await api.get('/properties?limit=100');
   const properties = data.data;
   const paths = properties.map(property => ({
      params: {slug: property.slug}
   }))

   return {paths, fallback: true}
}

export const getStaticProps = async ({params}) => {
   const {slug} = params;
   const {data: property} = await api.get(`/property/${slug}`);
   const {data: properties} = await api.get('/properties/vip');
   const {data: propertyRelated} = await api.get(`/properties/related/${property._id}`);
   
   return {
      props: {
         property,
         properties,
         propertyRelated
      }
   }
}

export default Property;
