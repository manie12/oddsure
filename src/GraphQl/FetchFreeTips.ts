import { gql } from '@apollo/client';


export const FETCH_FREETIP = gql`
{
    getFreeTip{
        id home away pick
    }
}

`