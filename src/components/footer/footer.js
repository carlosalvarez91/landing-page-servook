/** @jsx jsx */
import { jsx, Flex, Box, Text, Container, Image } from 'theme-ui';
import { rgba } from 'polished';
import { Link } from 'components/link';
import Logo from 'components/logo';
import instagram from 'assets/images/icons/instagram.svg'
import facebook from 'assets/images/icons/facebook.svg'
import linkedin from 'assets/images/icons/linkedin.svg'
import googlePlay from 'assets/images/icons/google-play.svg'


const menuItems = [
  {
    path: '#home',
    label: 'Home',
  },
  {
    path: '#advertise',
    label: 'Advertise',
  },


];

export default function Footer() {
  return (
    <Box as="footer" sx={styles.footer}>
      <Container>
        <Flex sx={styles.footerInner}>
          <Flex sx={styles.copyright}>
            <Logo isWhite />
            <Text as="span">
              &copy; Copyright by {new Date().getFullYear()} Servook
            </Text>
          </Flex>
          <Flex as="ul" sx={styles.footerNav}>
              <li>
                <a href="https://play.google.com/store/apps/details?id=com.servook.twa" target="_blank"><Image src={googlePlay} width={25}/></a>
              </li>
              <li >
                <a href="https://facebook.com/Servook-101899664704519/" target="_blank"> <Image src={instagram}/></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/servook/" target="_blank"><Image src={facebook} /></a>
              </li>
              <li>
                <a href="https://www.instagram.com/servook_app/" target="_blank"><Image src={linkedin} /></a>
              </li>
        
          </Flex>
        </Flex>
        <Flex sx={styles.footerLinks}>
        <p><a href="https://app.servook.com/cleaners">Cleaners in Dublin</a></p>
        <p><a href="https://app.servook.com/childminders">Childminders in Dublin</a></p>
        <p><a href="https://app.servook.com/pet-caring">Dog walkers in Dublin</a></p>
        <p><a href="https://app.servook.com/personal-training">Personal Trainers in Dublin</a></p>
        <p><a href="https://app.servook.com/garden-n-home">Gardeners in Dublin</a></p>
        <p><a href="https://app.servook.com/barbers">Barbers in Dublin</a></p>
        <p><a href="https://app.servook.com/pc-repairs">PC Repairs in Dublin</a></p>
        <p><a href="https://app.servook.com/massage">Massage therapists in Dublin</a></p>
        <p><a href="https://app.servook.com/beauty">Beauty professionals in Dublin</a></p>
        <p><a href="https://app.servook.com/waste-removal">Waste removal in Dublin</a></p>
        <p><a href="https://app.servook.com/plumbing-heating">Plumbers in Dublin</a></p>
        <p><a href="https://app.servook.com/carpentry">Carpenters in Dublin</a></p>
        <p><a href="https://app.servook.com/electrical">Electrical services in Dublin</a></p>

        </Flex>
      </Container>
    </Box>
  );
}

const styles = {
  footer: {
    backgroundColor: '#000',
    pt: [6],
    pb: [6],
  },
  footerLinks:{
    marginTop: 30,
    display:'block',
    a:{
      color:"#FFFF",
      textDecoration: 'none'
    }
  },
  footerInner: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: ['column', null, null, null, 'row'],
  },
  copyright: {
    alignItems: 'center',
    flexDirection: ['column', null, null, null, 'row'],
    span: {
      color: 'white',
      fontSize: 1,
      lineHeight: '18px',
      ml: [null, null, null, null, 3],
      mt: [3, null, null, null, 0],
    },
  },
  footerNav: {
    color:"#FFFF",
    listStyle: 'none',
    // flexDirection: ['column', null, null, null, 'row'],
    m: ['25px 0 0', null, null, null, 0],
    p: 0,
    li: {
      '+ li': {
        ml: [3, null, null, null, 4],
      },
      a: {
        color: 'white',
        cursor: 'pointer',
        textDecoration: 'none',
        fontSize: [1, null, null, 2],
      },
    },
  },
};
