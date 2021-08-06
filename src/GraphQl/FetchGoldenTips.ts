import { gql } from '@apollo/client';


export const FETCH_GOLDEN = gql`
{
    getGoldenTip{
        id
    totalOdds
    home
    away
    oddsToday
    }
}

`