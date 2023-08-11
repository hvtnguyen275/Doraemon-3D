import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import '../Styles/Header.css';
import { useNavigate } from 'react-router-dom';
import doraemonIcon from '../Assets/doraemon-icon.png';

function Header({ typo }: { typo?: string }) {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate('/');
  };

  return (
    <>
      <AppBar component='nav' position='sticky' color='inherit'>
        <Toolbar>
          <Container className='buttonDoraemon'>
            <Box>
              {typo ? (
                <Button onClick={navigateHome}>
                  <Avatar
                    src={doraemonIcon}
                    className='doraemonImg'
                    alt='Doraemon'
                  />
                  <h3 className='typo'>{typo}</h3>
                </Button>
              ) : (
                <IconButton onClick={navigateHome}>
                  <Avatar
                    src={doraemonIcon}
                    className='doraemonImg'
                    alt='Doraemon'
                  />
                </IconButton>
              )}
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default Header;
