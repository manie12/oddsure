import { gql } from '@apollo/client';

export const CREATE_FREETIP_MUTATION = gql`

mutation createFreeTip( $home:String! $away:String! $pick:String!  ){
    createFreeTip( home:$home away:$away pick:$pick){
        id  home away  pick createdAt

    }
}


   
`