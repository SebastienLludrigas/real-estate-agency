import React from 'react'
import Collapse from './collapse';
import { priceFormatted } from './utils';
import Moment from 'react-moment';

export const Slug = ({property}) => {
   return (
      <div className='mt-4'>
         <h1 className="globalColor">{property.title}</h1>
         <hr className="my-3"/>
         <p>Trouvé dans {property.category.name}</p>
         <p>{property.address}</p>
         <hr className="my-2"/>
         <p className="description mt-4 mb-3">{property.description}</p>
         <Collapse titre='Adresse de la propriété'>
            <section className='mt-3 pl-3'>
               <p className='p'><span className='span'>Ville</span> : {property.city}</p>
               <p className='p'><span className='span'>Adresse</span> : {property.address}</p>
               <p className='p'><span className='span'>Région</span> : Monde</p>
            </section>
         </Collapse>
         <Collapse titre='Détails de la propriété'>
            <section className='mt-3 pl-3'>
               <p className='p'><span className='span'>Surface</span> : {property.surface}</p>
               <p className='p'><span className='span'>Prix</span> : {priceFormatted(property.price)}</p>
               <p className='p'><span className='span'>Chambre(s)</span> : {property.bedrooms}</p>
               <p className='p'><span className='span'>Catégorie</span> : {property.category.name}</p>
               <p className='p'>
                  <span className='span'>Date de création</span>
                  : <Moment format='DD/MM/YYYY à hh:mm:ss'>{property.createdAt}</Moment></p>
            </section>
         </Collapse>
         <style jsx>
            {`
               .description {
                  white-space: pre-line;
               }

               .span {
                  font-weight: bolder;
               }

               .p {
                  line-height: 0.4em;
               }
            `}
         </style>
      </div>
   )
}

