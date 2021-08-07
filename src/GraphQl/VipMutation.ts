import { gql } from '@apollo/client';

export const CREATE_VIP_MUTATION = gql`

mutation getVipTip( $totalOdds:String! $home:String! $away:String! $oddsToday:String!  ){
    getVipTip( totalOdds:$totalOdds  home:$home away:$away oddsToday:$oddsToday){
        id totalOdds home away  oddsToday createdAt

    }
}


   
`