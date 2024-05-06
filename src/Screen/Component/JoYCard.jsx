import * as React from 'react';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';


const JoYCard=({imgUrl,title,location,img2Url,Icons})=> {
  return (
    <Card sx={{ minHeight: '600px', width: 600 }}>
      <CardCover>
        <img
          src={imgUrl}
          srcSet={img2Url}
          loading="lazy"
          alt=""
        />
      </CardCover>
      <CardCover
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
        }}
      />
      <CardContent sx={{ justifyContent: 'flex-end',alignItems:'center' }}>
        <Typography level="title-lg" textColor="#fff">
         {title}
        </Typography>
        <Typography
          startDecorator={Icons}
          textColor="neutral.300"
        >
          {location}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default JoYCard;