import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../../styles/Card.css';


const createContent = () => {
  return (
    <React.Fragment>
      <CardContent>
        <Typography variant="h6" color="text.primary" >
          Prompt:
        </Typography>
        <Typography variant="body1" component="div" color="text.secondary" gutterBottom>
          benevolent
        </Typography>
        <Typography variant="h6" color="text.primary">
          Response:
        </Typography>
        <Typography variant="body1" component="div" color="text.secondary" gutterBottom>
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </React.Fragment>
  );
}

const PromptCard = () => {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card className='prompt-card' variant="outlined">{createContent()}</Card>
    </Box>
  );
}

export default PromptCard 
