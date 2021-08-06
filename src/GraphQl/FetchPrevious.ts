import { gql } from '@apollo/client';


export const FETCH_PREVIOUS = gql`
{
    getPreviouis{
        id

    date
    home
    away
    gameType

    }
}

`