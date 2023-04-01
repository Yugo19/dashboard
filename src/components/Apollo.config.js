import {ApolloClient, InMemoryCache} from '@apollo/client';

const cache = new InMemoryCache({
  typePolicies:{
    Query:{
      fields:{
        students:{
          merge(existing, incoming){
            return incoming;
          }
        },
        Teachers:{
          merge(existing, incoming){
            return incoming;
          }
        }
      }
    }
  }
})

const client = new ApolloClient({
	uri:'http://localhost:8000/graphql',
	cache
});

export default  client;