import { gql } from '@apollo/client';

export const CREATE_PREVIOUS_MUTATION = gql`

mutation createPreviousGame( $date:String! $home:String! $away:String! $gameType:String!  ){
    createPreviousGame( date:$date  home:$home away:$away gameType:$gameType){
        id date home away  gameType

    }
}


   
`