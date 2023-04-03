import Style from '../trending/trending.module.css';
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
        'Pic':'trendone.png',
        'Desc':`Men Henlay Neck  Full Sleeve Red Wine`,
        'Alt':'trendone',
        'Price': '399',
        'FakePrice':'1200'
    },
    {
        'Pic':'trendtwo.png',
        'Desc':`Men Henlay Neck Full Sleeve Red Wine`,
        'Alt':'trendtwo',
        'Price': '399',
        'FakePrice':'1200'
    },
    {
        'Pic':'trendthree.png',
        'Desc':`Men Henlay Neck Full Sleeve Red Wine`,
        'Alt':'modalthree',
        'Price': '399',
        'FakePrice':'1200'
    },
    {
        'Pic':'threndfour.png',
        'Desc':`Men Henlay Neck Full Sleeve Red Wine`,
        'Alt':'threndfour',
        'Price': '399',
        'FakePrice':'1200'
    }
   
]


const Featured = () => {
    return(
        <>
           <Stack sx={{mb:8}}>
                <Stack sx={{mb:8}}>
                    <Container>
                        <Stack direction='row' alignItems="center" justifyContent='center' sx={{mb:5}}>
                            <Box sx={{width:'100%', border:1,color:'red'}}></Box>
                                <Stack sx={{width:'80%'}} alignItems="center" justifyContent='center'>
                                    <Typography variant="h4" sx={{fontFamily: 'Playfair Display'}}>
                                        Featured Products
                                    </Typography>
                                </Stack>
                            <Box sx={{width:'100%', border:1,color:'red'}}></Box>
                        </Stack>  
                        <Stack>
                            <Grid container>
                                {
                                    ProductItem.map((item,index)=>(

                                <Grid item key={index} xs={12} sm={12} md={3} lg={3} sx={{mb:6}}>
                                    <Stack alignItems='center' justifyContent="center"  spacing={1}>
                                        <Box className={Style.cardBox}>
                                            <img src={item.Pic} alt={item.Alt} width="100%"  />
                                            <Stack 
                                                className={Style.cardContent} 
                                                spacing={2} 
                                                direction="row" 
                                                alignItems='center' 
                                                justifyContent='center'
                                            >
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
                                        <Typography variant='body' sx={{wordWrap:'breakWord',fontFamily:'Montserrat',width:'60%'}}>
                                            {item.Desc}
                                        </Typography>
                                        <Stack direction='row' alignItems='center' justifyContent='center'>
                                            <Typography varinat="h1" sx={{fontWeight:'bold', fontSize:'24px'}}>
                                                &#x20b9; 
                                            </Typography>

                                            <Typography varinat="h1" sx={{fontWeight:'bold', fontSize:'24px',fontFamily:'montserrat'}}>
                                               {item.Price}
                                            </Typography>

                                            <Typography varinat="body" sx={{color:'red'}}>
                                                <del>{item.FakePrice}</del>
                                            </Typography>
                                        </Stack>
                                        <Stack direction='row' spacing={2}>
                                            <Box  sx={{p:'6px 12px', border:1, borderColor:'#E6E6E6',cursor:'pointer'}}>S</Box>

                                            <Box sx={{p:'6px 12px', border:1, borderColor:'#E6E6E6',cursor:'pointer'}}>M</Box>

                                            <Box sx={{p:'6px 12px', border:1, borderColor:'#E6E6E6',cursor:'pointer'}}>L</Box>

                                            <Box sx={{p:'5px 10px', border:1, borderColor:'#E6E6E6',cursor:'pointer'}}>XL</Box>

                                            <Box sx={{p:'4px 8px', border:1, borderColor:'#E6E6E6',cursor:'pointer'}}>XXL</Box>
                                        </Stack>
                                    </Stack>
                                </Grid>
                                    ))
                                }
                            </Grid>    
                        </Stack>
                        <Button variant='contained' sx={{backgroundColor:'#771314',px:4}}>VIEW ALL</Button>    
                    </Container>
                </Stack>
                <Box>
                    <img src="banner.png" alt='banner' width="100%" />
                </Box>
            </Stack>
        </>
    )
}

export default Featured;
