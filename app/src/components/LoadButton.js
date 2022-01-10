import React, { useState } from 'react'
import { Button } from '@mui/material'

export default function LoadButton(props) {
    function handleSubmit(e) {
        e.preventDefault()
        props.setCount(prev => (prev + 5))
    }

    return (
        <Button variant='contained' onClick={handleSubmit}>
            Load More
        </Button>
    )
}