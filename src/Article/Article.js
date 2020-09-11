import React from 'react';
import './Article.css';
import cardData from './articleData/cardData';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff"
  },
  blogContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}));

function Article() {
  const classes = useStyles();
  let i=0;
  const gridItems = cardData.map((data) => (
    <Grid item xs={12} sm={6} md={4} key={i++}>
        <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={data.imgUrl}
                title={data.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h3">
                  {data.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {data.articleData}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" href={data.learnMoreUrl}>
                Learn more
              </Button>
            </CardActions>
      </Card>
    </Grid>
));

  return (
    <div className="App">

      <div className="heroStyle">
        
      </div>
      
      <Container className={classes.blogContainer} maxWidth="lg">
          <Typography variant="h4" className={classes.blogTitle}>
            Articles
          </Typography>
          <Grid container spacing={3}>

            {gridItems}

          </Grid>
      </Container>

    </div>
  );
}

export default Article;
