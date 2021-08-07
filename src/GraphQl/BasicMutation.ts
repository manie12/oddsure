import { gql } from '@apollo/client';

export const CREATE_BASIC_MUTATION = gql`

mutation createBasicTip( $totalOdds:String! $home:String! $away:String! $oddsToday:String!  ){
    createBasicTip( totalOdds:$totalOdds  home:$home away:$away oddsToday:$oddsToday){
        id totalOdds home away  oddsToday  createdAt

    }
}


   
`