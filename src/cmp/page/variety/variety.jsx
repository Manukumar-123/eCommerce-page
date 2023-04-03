import Style from './variety.module.css';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container  from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

const ProductItem = [
    {
        'Pic':'newone.png',
        'Name':'Streetwear Collection',
        'Alt':'newone',
        'color':'#5AB9A6'
    },
    {
        'Pic':'newtwo.png',
        'Name':'Stripped T-Shirts',
        'Alt':'newtwo',
        'color':'#80E8FD'
     
    },
    {
        'Pic':'newthree.png',
        'Name':'Round Neck T-Shirts',
        'Alt':'modalthree',
        'color':'#DC493A'

    },
    {
        'Pic':'newfour.png',
        'Name':'Printed T-Shirts',
        'Alt':'threndfour',
        'color':'#D7B2FF'
    },
    {
        'Pic':'newfive.png',
        'Name':'Oversized T-Shirts',
        'Alt':'newfice',
        'color':'#F0BC8C'
    },
    {
        'Pic':'newsix.png',
        'Name':'Half Sleevs T-Shirts',
        'Alt':'newsix',
        'color':'#4B92F1'
    }
   
];


const Variety = () => {
    return(
        <>
           <Stack sx={{mb:8}}>
                <Stack>
                    <Container>                        
                        <Stack>
                            <Grid container>
                                {
                                    ProductItem.map((item,index)=>(
                                        <Grid item key={index} xs={12} sm={12} md={4} lg={4} sx={{mb:6}}>
                                            <Stack alignItems='center' justifyContent="center">
                                                <Box className={Style.cardBox} sx={{backgroundColor:item.color}}>
                                                    <img src={item.Pic} alt={item.Alt} width="100%"  />
                                                    <Stack 
                                                        className={Style.cardContent} 
                                                        spacing={2} 
                                                        direction="row" 
                                                        alignItems='center' 
                                                        justifyContent='center'
                                                    >
                                                        <Box sx={{position:'absolute',top:'15px',text:'center'}}>
                                                            <Typography variant='body' sx={{fontSize:'20px',color:'white'}}>
                                                                {item.Name}
                                                            </Typography>
                                                        </Box>
                                                        <Stack alignItems='center' justifyContent='center'
                                                            sx={{height:'54px',width:'54px',background:'white',borderRadius:'50%', cursor:'pointer'}}>
                                                                <ShoppingCartIcon sx={{fontSize:'26px',color:'#771314'}} />
                                                        </Stack>

                                                        <Stack alignItems='center' justifyContent='center'
                                                            sx={{height:'54px',width:'54px',background:'white',borderRadius:'50%',cursor:'pointer'}}>
                                                                <FavoriteIcon sx={{fontSize:'26px',color:'#771314'}} />
                                                        </Stack>

                                                        <Stack alignItems='center' justifyContent='center'
                                                            sx={{height:'54px',width:'54px',background:'white',borderRadius:'50%',cursor:'pointer'}}>
                                                                <ShareIcon sx={{fontSize:'26px', color:'#771314'}} />
                                                        </Stack>
                                                    </Stack>
                                                </Box>
                                            
                                            </Stack>
                                        </Grid>
                                    ))
                                }
                            </Grid>    
                        </Stack>
                    </Container>
                    <Box>
                        <img src="loose.png" width="100%" alt="loose" />
                    </Box>
                </Stack>
            </Stack>
        </>
    )
}

export default Variety;
