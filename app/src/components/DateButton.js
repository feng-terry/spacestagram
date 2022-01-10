import React, {useState} from 'react'
import { Button, TextField } from '@mui/material'

export default function DateButton(props) {
    const [value, setValue] = useState('')

    function handleChange(e){
        setValue(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()

        const date = {year:value.substring(0,4), month:value.substring(5,7), day:value.substring(9,11)}
        props.setDate(date)
    }

    return (
        <form onSubmit = {handleSubmit}>
            <TextField
                variant="outlined"
                size = 'small'
                type = 'text'
                placeholder = 'YYYY-MM-DD'
                onChange = {handleChange}
                value = {value}
            />
            <Button variant = 'contained' type = 'submit'>
                Search from Date
            </Button>
        </form>
    )
}