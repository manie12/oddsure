import { gql } from '@apollo/client';


export const FETCH_VIP = gql`
{
    getVipTip{
        id
    totalOdds
    home
    away
    oddsToday
    createdAt
    }
}

`