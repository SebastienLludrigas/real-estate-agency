import React, { useState, useEffect } from 'react';
import { Layout } from '../../components/layout';
import { useRouter } from 'next/router';
import api from '../../auth/axios';
import { Card } from '../../components/card';
import { SearchFilter } from '../../components/searchFilter';

const Search = () => {
   const router = useRouter();
   const [properties, setProperties] = useState('');

   useEffect(() => {
      async function getProperty() {
         const { data } = await api.post('/property/list/search', {
            filters: {
               title: router.query.title,
               category: router.query.category
            }
         })
         setProperties(data);
      }
      getProperty();
   }, [router.query.title, router.query.category])

   const NbPropertiesFound = (properData) => {
      return properData.size > 1 ? `${properData.size} biens trouvés` : `${properData.size} bien trouvé`;
   }

   return (
      <Layout>
         <SearchFilter />
         <div className="container">
            {router.query.category || router.query.title ? (
               <div>
                  <div className="mb-4 text-center globalColor font-weight-bolder">
                     {NbPropertiesFound(properties)}
                  </div>
                  <Card properties={properties.data} />
               </div>
            ) : null}
         </div>
      </Layout>
   )
}

export default Search;
