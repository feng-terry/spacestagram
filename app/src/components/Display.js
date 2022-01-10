import React from 'react'
import LikeButton from './LikeButton';
import { Card, CardContent, Box, Typography, CardMedia } from '@mui/material';

export default function Display(props) {

    return (
        <div>
            <Card sx={{ margin: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <CardMedia
                    component="img"
                    image={props.img}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent>
                        <Typography component="div" variant="h6">
                            {props.title}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {props.date}
                        </Typography>
                        <Typography variant="subtitle2" component="div">
                            {props.description}
                        </Typography>
                    </CardContent>
                </Box>
                <LikeButton img = {props.img}/>
            </Card>
        </div>
    )
}