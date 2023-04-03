import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container  from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Product = [
    {
        'Pic':'modalone.png',
        'Desc':`Men's T-shirt`,
        'Alt':'modalone',
        'Color':'#F1DBE9'
    },
    {
        'Pic':'modaltwo.png',
        'Desc':`Women's Wear`,
        'Alt':'modaltwo',
        'Color':'#DDD3EB'
    },
    {
        'Pic':'modalthree.png',
        'Desc':`Winter Collections`,
        'Alt':'modalthree',
        'Color':'#D3EAEB'
    },
    {
        'Pic':'modalfour.png',
        'Desc':`Hooded T-Shirts`,
        'Alt':'modalfour',
        'Color':'#EFF1D9'
    },
    {
        'Pic':'modalfive.png',
        'Desc':`Polo Neck T-Shirts`,
        'Alt':'modalfive',
        'Color':'#F1DADB'
    },
    {
        'Pic':'modalsix.png',
        'Desc':`Full Sleeves T-Shirts`,
        'Alt':'modalsix',
        'Color':'#D9F1DE'
    }
]

const Modal = () => {
    return(
        <>
           <Stack sx={{mb:8}}>
                <Stack>
                    <Box sx={{mb:8}}>
                        <img src="./headerImage.png" alt="headerImage" width="100%" height="632px" />
                    </Box>
                    <Container>
                        <Stack sx={{mb:8}}>                          
                            <Stack direction="row" spacing={3}  alignItems="center" justifyContent='space-between'>
                                <Grid container rowSpacing={{xs:4,sm:4}}>
                                {
                                    Product.map((item,index)=>(
                                        <Grid key={index} item xs={6} sm={6} md={2} lg={2}>
                                            <Stack 
                                                spacing={2}  
                                                alignItems="center"
                                                justifyContent='space-center'
                                            >
                                                <Stack sx={{borderRadius:'50%',backgroundColor:item.Color,}}>
                                                    <img src={item.Pic} alt={item.Alt} width="170px" height="170px" />
                                                </Stack>
                                                <Typography variant="body" sx={{fontWeight:'bold'}}>
                                                    {item.Desc}
                                                </Typography>
                                            </Stack>
                                        </Grid>
                                    ))
                                }
                                </Grid> 
                            </Stack>
                        </Stack>
                            <Stack sx={{mb:2}}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={12} md={6} lg={6}>
                                        <Box>
                                            <img src="baggy.png" alt="baggy" width='100%' sx={{borderRadius:'5px'}} />
                                        </Box>
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={6} lg={6}>
                                        <Box>
                                            <img src="winter.png" alt="baggy" width='100%' sx={{borderRadius:'5px'}} />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Stack>
                        <Stack>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12} md={4} lg={4}>
                                    <Box>
                                        <img src="women.png" alt="baggy" width='100%' sx={{borderRadius:'5px'}} />
                                    </Box>
                                </Grid>

                                <Grid item xs={12} sm={12} md={4} lg={4}>
                                    <Box>
                                        <img src="bestdeal.png" alt="bestdeal" width='100%' sx={{borderRadius:'5px'}} />
                                    </Box>
                                </Grid>

                                <Grid item xs={12} sm={12} md={4} lg={4}>
                                    <Box>
                                        <img src="trending.png" alt="trendig" width='100%' sx={{borderRadius:'5px'}} />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Stack>                        
                    </Container>
                </Stack>
            </Stack>
        </>
    )
}

export default Modal;
