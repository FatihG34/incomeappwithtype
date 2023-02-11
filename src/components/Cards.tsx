import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';

const More = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div className='' style={{cursor:'pointer'}}>
      <button aria-describedby={id} type="button" onClick={handleClick}>
        <MoreVertIcon style={{cursor:'pointer'}} />
      </button>
      <Popper id={id} open={open} anchorEl={anchorEl} placement={'right-end'} sx={{ boxShadow: 4 }}>
        <Box sx={{ p: 1, bgcolor: 'background.paper', cursor: 'pointer' }} onClick={handleClick}>
          <AddCircleOutlineIcon /> <span>Add a Member</span>
        </Box>
        <Box sx={{ p: 1, bgcolor: 'background.paper', cursor: 'pointer' }} onClick={handleClick}>
          <DeleteForeverIcon /> Remove This Member
        </Box>
      </Popper>
    </div>
  );
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Cards = () => {




  return (
    <Card sx={{ maxWidth: 300 }}>
      <Box style={{display:'flex',justifyContent:'space-between', padding:'1rem'}}>
        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          R
        </Avatar>
<input type="text" value={'sdfghj'} />

        <IconButton aria-label="settings" style={{cursor:'pointer'}}>
          <More />
        </IconButton>
      </Box>
      <CardHeader>
        <input type="text" value={'ssdfgh'} />
      </CardHeader>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      {/* <CardActions disableSpacing style={{display:'flex',justifyContent:'space-between', padding:'1rem'}}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="delete">
          <ShareIcon />
        </IconButton>

      </CardActions> */}
    </Card>
  );
}

export default Cards
