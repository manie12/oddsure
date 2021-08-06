import { gql } from '@apollo/client';


export const FETCH_BASIC = gql`
{
    getBasicTip{
        id
    totalOdds
    home
    away
    oddsToday
    }
}

`