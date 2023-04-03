import Stack from '@mui/material/Stack';
import Footer from '../page/footer/footer';
import Header from '../page/header/header';
import Box from '@mui/material/Box';
import Container  from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useLocation } from 'react-router-dom';
import StarPurple500OutlinedIcon from '@mui/icons-material/StarPurple500Outlined';
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Badge, Button } from '@mui/material';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Product = () => {
     const { state } = useLocation();



  const getLazy=(data)=>{
    return <Skeleton count={data} />
  }

    return (
        <>
        <Header />
          <Stack sx={{my:5}}>
            <Container>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <box>
                  <img src={state.Pic} alt={state.Alt} width="100%" height="420px" style={{borderRadius:'20px'}} />
                </box>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Stack spacing={3}>
                  <Typography variant="h3" sx={{fontFamily:'Playfair Display',textAlign:'justify'}}>
                    {state.Desc ? state.Desc : getLazy(2)}
                  </Typography>
                  <Typography variant="body" sx={{fontFamily:'Playfair Display',textAlign:'justify'}}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard to make a type specimen book. It has survived not only five centuries....
                  </Typography>
                  <Stack direction='row' spacing={3} alignItems="center" justifyContent="start">
                  <Stack direction='row'>
                    <StarPurple500OutlinedIcon />
                    <StarPurple500OutlinedIcon />
                    <StarPurple500OutlinedIcon />
                    <StarPurple500OutlinedIcon />
                    <StarHalfOutlinedIcon />
                  </Stack>
                    <Badge 
                      sx={{p:0.7,
                      px:1,cursor:'pointer',
                      borderRadius:'10px', 
                      backgroundColor:'green',
                      color:'white'}}>4.5 <StarPurple500OutlinedIcon />
                    </Badge>
                  </Stack >
                  <Stack direction='row' spacing={1} alignItems='center'>
                    <Typography variant="h3" sx={{fontWeight:'bold',fontFamily:'montserrat',textAlign:'justify'}}>
                    &#x20b9;  {state.Price ? state.Price : getLazy(1)}
                    </Typography>
                    
                    <Typography varinat="h6" sx={{color:'red',fontSize:'30px'}}>
                        <del>{state.FakePrice ? state.FakePrice : getLazy(1)}</del>
                    </Typography>
                    
                  </Stack>
                <Stack direction='row' spacing={3}>
                    <Button variant="contained" color="warning"> <ShoppingCartCheckoutOutlinedIcon sx={{mr:2,my:1}} /> Add to Card</Button>
                    <Button variant="contained"> <ShoppingBagOutlinedIcon sx={{mr:2,my:1}} />Buy now</Button>
                </Stack>                
                </Stack>
              </Grid>
            </Grid>
            </Container>
          </Stack>
          <Footer />
        </>
    );
}

export default Product;