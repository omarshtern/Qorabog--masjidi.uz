import React from 'react'
import {Container} from '@material-ui/core'

export const SingleAyah = ({ayah}) => {

    const { number, } = ayah
    return (
        <Container>
            <p style={{textAlign: 'right'}}>{ayah.text}</p> <hr />
            <div>

            </div>
        </Container>
    )
}