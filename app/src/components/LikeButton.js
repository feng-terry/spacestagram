import React, {useState, useEffect} from 'react'
import { Checkbox } from '@mui/material'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

export default function LikeButton(props) {
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        setChecked(localStorage.getItem(props.img) === 'true')
    }, [])

    function handleLike(){
        setChecked(!checked)
        localStorage.setItem(props.img, !checked)
    }

    return (
        <div>
            <Checkbox label='Like' checked = {checked} onClick = {handleLike} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        </div>
    )
}