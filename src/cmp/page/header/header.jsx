import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CallIcon from '@mui/icons-material/Call';
import Container  from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

 


const Header = () => {
    return(
        <>
            <Stack sx={{p:1, backgroundColor:'black',color:'#FFFFFF'}}>
                <Container>
                    <Stack direction="row" alignItems="center" justifyContent='space-between'>
                        <Box>
                            <Typography variant='body'>
                                Welcome to our store
                            </Typography>
                        </Box>
                        <Stack direction='row' alignItems="center">
                            <IconButton>
                                <CallIcon sx={{mr:2}} />
                            </IconButton>
                            <Typography variant='body'>
                                Call Us :- 9708780500
                            </Typography>
                        </Stack>
                    </Stack>
                </Container>
            </Stack>
            <AppBar position="sticky" sx={{backgroundColor:'white',color:'black'}}>
                <Stack>
                    <Stack sx={{p:2}}>
                        <Container >
                            <Stack direction="row" alignItems='center' justifyContent='space-between'>
                                <Box>
                                    <IconButton>
                                        <MenuIcon />
                                    </IconButton>
                                </Box>

                                <Box>
                                    <Typography variant='body'>
                                        your Logo here
                                    </Typography>
                                </Box>

                                <Stack direction='row' alignItems="center" spacing={1}>
                                    <IconButton>
                                        <SearchIcon />
                                    </IconButton>

                                    <IconButton>
                                        <FavoriteBorderIcon />
                                    </IconButton>

                                    <IconButton>
                                        <Person2OutlinedIcon />
                                    </IconButton>

                                    <IconButton>
                                        <LocalMallOutlinedIcon />
                                    </IconButton>
                                </Stack>
                            </Stack>
                        </Container>
                    </Stack>
                </Stack>
            </AppBar>  
        </>
    );
}
export default Header;