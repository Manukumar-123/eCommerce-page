import Stack from '@mui/material/Stack';
import Container  from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';


const Footer = () => {
    return(
        <>
         <Stack sx={{borderTop:1, borderColor:'#ccc'}}>
            <Container sx={{mt:8}} >
                <Grid container>
                    <Grid item xs={12} sm={12} md={4} lg={4} sx={{mb:4}}>
                        <Stack spacing={2}>
                            <Typography 
                                variant='capiton'
                                sx={{textAlign:'start',px:2,fontFamily:'montserrat',lineHeight:'25px'}}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries....
                            </Typography>
                            <Stack direction='row' spacing={1.5}>
                                <Stack sx={{width:'46px',height:'46px',borderRadius:'50%',backgroundColor:'#1077F0',cursor:'pointer'}} alignItems='center' justifyContent="center">
                                    <FacebookOutlinedIcon sx={{color:'white'}} />
                                </Stack>

                                <Stack sx={{width:'46px',height:'46px',borderRadius:'50%',backgroundColor:'#1077F0',cursor:'pointer'}} alignItems='center' justifyContent="center">
                                    <TwitterIcon sx={{color:'white'}} />
                                </Stack>

                                <Stack sx={{width:'46px',height:'46px',borderRadius:'50%',backgroundColor:'#F3278E',cursor:'pointer'}} alignItems='center' justifyContent="center">
                                    <InstagramIcon sx={{color:'white'}} />
                                </Stack>

                                <Stack sx={{width:'46px',height:'46px',borderRadius:'50%',backgroundColor:'#1077F0',cursor:'pointer'}} alignItems='center' justifyContent="center">
                                    <LinkedInIcon sx={{color:'white'}} />
                                </Stack>

                                <Stack sx={{width:'46px',height:'46px',borderRadius:'50%',backgroundColor:'#E60022',cursor:'pointer'}} alignItems='center' justifyContent="center">
                                    <PinterestIcon sx={{color:'white'}} />
                                </Stack>
                            </Stack>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} sm={12} md={2.5} lg={2.5} sx={{mb:4}}>
                        <Stack spacing={4}>
                            <Typography variant="h6" sx={{color:'#770015',fontFamily:'Playfair Display',textAlign:'justify'}}>
                                ONLINE SHOPPING
                            </Typography>
                            <Stack sx={{textAlign:'justify'}} spacing={2}>
                            
                                <Typography variant="small" href="/" sx={{cursor:'pointer',fontFamily:'montserrat'}}>
                                    Men's T-Shirts
                                </Typography>
                                <Typography variant="body" href="/" sx={{cursor:'pointer',fontFamily:'montserrat'}}>
                                    Women's Wear
                                </Typography>
                                <Typography variant="body" href="/" sx={{cursor:'pointer',fontFamily:'montserrat'}}>
                                      Winter Collections
                                </Typography>
                                <Typography variant="body" href="/" sx={{cursor:'pointer',fontFamily:'montserrat'}}>
                                Hooded T-Shirts
                                </Typography>
                                <Typography variant="body" href="/" sx={{cursor:'pointer',fontFamily:'montserrat'}}>
                                Streetwear Collections
                                </Typography>
                              
                            </Stack>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} sm={12} md={3} lg={3} sx={{mb:4}}>
                    <Stack spacing={4}>
                            <Typography variant="h6" sx={{color:'#770015',fontFamily:'Playfair Display',textAlign:'justify'}}>
                                 CUSTOMER POLICIES  
                            </Typography>
                            <Stack sx={{textAlign:'justify'}} spacing={2}>
                            
                                <Typography variant="small" href="/" sx={{cursor:'pointer',fontFamily:'montserrat'}}>
                                    About Us
                                </Typography>
                                <Typography variant="body" href="/" sx={{cursor:'pointer',fontFamily:'montserrat'}}>
                                    Terms & Conditions
                                </Typography>
                                <Typography variant="body" href="/" sx={{cursor:'pointer',fontFamily:'montserrat'}}>
                                    Shipping & Returns Policy
                                </Typography>
                                <Typography variant="body" href="/" sx={{cursor:'pointer',fontFamily:'montserrat'}}>
                                    Cancellation & Refund Policy
                                </Typography>
                                <Typography variant="body" href="/" sx={{cursor:'pointer',fontFamily:'montserrat'}}>
                                    Contact Us
                                </Typography>
                              
                            </Stack>
                    </Stack>
                    </Grid>

                    <Grid item xs={12} sm={12} md={2.5} lg={2.5} sx={{mb:4}}>
                        <Stack spacing={3}>
                            <Typography variant="h6" sx={{color:'#770015',fontFamily:'Playfair Display',textAlign:'justify'}}>
                                    STORE INFORMATION
                            </Typography>
                            <Stack spacing={2.5}>
                                <Stack spacing={2} direction='row' alignItems='center' justifyContent='start'>
                                    <Stack alignItems='center' justifyContent='center'>
                                        <LocationOnOutlinedIcon sx={{fontSize:'30px'}} />
                                    </Stack>
                                    <Stack>
                                        <Typography variant="body" sx={{textAlign:'start',fontFamily:'montserrat'}}>
                                        Lorem Ipsum is simply dummy text of the printing industry. 
                                        </Typography>
                                    </Stack>
                                </Stack>

                                <Stack spacing={2} direction='row' alignItems='center' justifyContent='start'>
                                    <Stack alignItems='center' justifyContent='center'>
                                        <CallOutlinedIcon sx={{fontSize:'30px'}} />
                                    </Stack>
                                    <Stack>
                                        <Typography variant="body" sx={{textAlign:'start',fontFamily:'montserrat'}}>
                                        Call Us : 9708780500. 
                                        </Typography>
                                    </Stack>
                                </Stack>

                                <Stack spacing={2} direction='row' alignItems='center' justifyContent='start'>
                                    <Stack alignItems='center' justifyContent='center'>
                                        <MailOutlinedIcon sx={{fontSize:'30px'}} />
                                    </Stack>
                                    <Stack>
                                        <Typography variant="body" sx={{textAlign:'start',fontFamily:'montserrat'}}>
                                        Email : email@gmail.com 
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
            <Stack 
                sx={{backgroundColor:'black',
                color:'white',p:3}} 
                alignItems="center" 
                justifyContent="center"
            >
                <Typography variant='body' sx={{fontFamily:'Montserrat'}}>
                ©2022-23 Powered By dummy team
                </Typography>
            </Stack>
         </Stack>
        </>
    )
}

export default Footer;