import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container  from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


const Offers = () => {
    return(
        <>
           <Stack sx={{mb:8}}>
                <Container sx={{mb:8}}>                        
                    <Stack>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Stack sx={{width:'100%',height:'auto',backgroundColor:'#CCCEA7',py:4}} 
                                    alignItems="center" 
                                    justifyContent="center"
                                    spacing={3}
                                >
                                    <Box>
                                        <img src="diamond.png" alt="diamond" width="100%" />
                                    </Box>

                                    <Typography variant='h3' sx={{fontFamily:'playfair Display'}}>
                                        Hurry Up!
                                    </Typography>

                                    <Typography variant='h1' sx={{fontFamily:'playfair Display'}}>
                                        85% OFF
                                    </Typography>
                                    
                                    <Typography variant='h3' sx={{fontFamily:'playfair Display'}}>
                                        Sale
                                    </Typography>

                                    <Box>
                                        <Button 
                                            variant="outlined" 
                                            sx={{ fontSize:'20px',border:1,borderColor:'white',color:'white',px:6, py:1}}>SHOP NOW</Button>
                                    </Box>

                                </Stack>
                            </Grid>

                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Stack sx={{width:'100%',height:'auto',backgroundColor:'#D6BEBE',py:4}} 
                                    alignItems="center" 
                                    justifyContent="center"
                                    spacing={3}
                                >
                                    <Box>
                                        <img src="prize.png" alt="prize" width="100%" />
                                    </Box>

                                    <Typography variant='h3' sx={{fontFamily:'playfair Display'}}>
                                        Hurry Up!
                                    </Typography>

                                    <Typography variant='h1' sx={{fontFamily:'playfair Display'}}>
                                        75% OFF
                                    </Typography>
                                    
                                    <Typography variant='h3' sx={{fontFamily:'playfair Display'}}>
                                        Sale
                                    </Typography>

                                    <Box>
                                        <Button 
                                            variant="outlined" 
                                            sx={{ fontSize:'20px',border:1,borderColor:'white',color:'white',px:6, py:1}}>SHOP NOW</Button>
                                    </Box>

                                </Stack>
                            </Grid>
                        </Grid>    
                    </Stack>
                </Container>
                <Stack 
                    sx={{backgroundColor:'#F5F4F2',p:6,mb:6, position:'relative'}} 
                    alignItems="center" 
                    justifyContent="center" 
                    direction="row"
                    spacing={{sm:2,xs:2,md:20,lg:20}}
                >
                        <Box>
                            <img src="return.png" alt="return" width="100%" />
                        </Box>
                        <Box>
                            <img src="prizeicon.png" alt="return" width="100%" />
                        </Box>
                        <Box>
                            <img src="bag.png" alt="return" width="100%" />
                        </Box>
                        <Box>
                            <img src="group.png" alt="return" width="100%" />
                        </Box>
                    
                    <Stack 
                        sx={{width:'200px',
                            height:'200px',
                            borderRadius:'50%',
                            backgroundColor:'#771314',
                            position:'absolute',
                            bottom:'-100px',
                            left:'-260px',
                        }}>
                     </Stack>   

                    <Stack sx={{
                        width:'200px',
                        height:'200px',
                        position:'absolute',
                        top:'-100px',
                        right:'0px',
                        backgroundColor:'#771314',
                        clipPath: 'circle(50% at 100% 50%)'
                    }}> 
                     </Stack>
                     
                </Stack>
                <Container sx={{position:'relative'}}>
                    <Stack 
                        sx={{backgroundColor:'#921919',
                            color:'#fff',
                            p:7
                        }} 
                            alignItems="center"
                            justifyContent="center"
                        >
                        <Typography variant="h4" 
                        sx={{fontFamily:'Playfair Display',
                            fontWeight:'bold',mb:3}}>
                            Subscribe to get updates exciting offers <br /> & Deals
                        </Typography>

                        <Stack direction='row' sx={{width:{md:'70%', sm:'100%'}}}>
                            <input 
                                placeholder='Enter Your Email' 
                                style={{padding:'25px 30px',
                                width:'100%',
                                backgroundColor:'#B35263',
                                color:'#fff',
                                fontSize:'20px',
                                outline:'none'
                                }} />
                            <button 
                                style={{backgroundColor:'white',
                                fontSize:'20px',
                                 color:'#921919',
                                 padding:'0px 40px'}}>Subscribe</button>
                        </Stack>
                    </Stack>
                    <Box sx={{position:'absolute',left:0, top:0,}}>
                        <img 
                            src="leftround.png" 
                            alt="leftround" 
                            width="100%" 
                            />
                    
                    </Box>
                    <Box sx={{position:'absolute',right:0, top:0,}}>
                        <img 
                            src="rightround.png" 
                            alt="rightround" 
                            width="100%" 
                            />
                    
                    </Box>
                </Container>
            </Stack>
        </>
    )
}

export default Offers;
