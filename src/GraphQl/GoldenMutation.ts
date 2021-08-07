import { gql } from '@apollo/client';

export const CREATE_GOLDEN_MUTATION = gql`

mutation createGoldenTip( $totalOdds:String! $home:String! $away:String! $oddsToday:String!  ){
    createGoldenTip( totalOdds:$totalOdds  home:$home away:$away oddsToday:$oddsToday){
        id totalOdds home away  oddsToday createdAt

    }
}


   
`