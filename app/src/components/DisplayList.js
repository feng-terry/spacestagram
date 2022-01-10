import React, { useState, useEffect } from 'react'
import Display from './Display'
import { Container } from '@mui/material'

export default function DisplayList(props) {
    const [dispElems, setDispElems] = useState([])

    useEffect(() => {
        setDispElems(props.APIRes ? props.APIRes : [])
    }, [props.APIRes])

    const displayComponents = dispElems.map(res =>
        <Display
            img={res.media_type === 'image' ? res.url : res.thumbnail_url}
            title={res.title}
            date={res.date}
            description={res.explanation}
            key={res.url}
        />).reverse()

    return (
        <div>
            <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'column', 'align-items': 'stretch' }}>
                {displayComponents}
            </Container>

        </div>
    )
}