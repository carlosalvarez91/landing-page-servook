/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'components/link';
import LogoSvg from 'components/icons/logo';
import ServookLogoDark from 'assets/images/servook-purple-text-side.png'
import ServookLogoWhite from 'assets/images/servook-white-text-side.png'
import Image from 'components/image';

export default function Logo({ isWhite, ...props }) {
  return (
    <Link path="/" sx={styles.logo} {...props}>
      <Image src={isWhite ? ServookLogoWhite : ServookLogoDark} alt="servook"  width={130}/>
    </Link>
  );
}
const styles = {
  logo: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    svg: {
      height: 'auto',
      width: [128, null, '100%'],
    },
  },
};
