import { FaEnvelope, FaFilePdf, FaGithub, FaLinkedin } from 'react-icons/fa';
import resumepdf from '../../assets/hfresume.pdf';

export const buttons_data = {
  GitHub: {
    icon: FaGithub,
    href: 'https://github.com/haroonf',
  },
  LinkedIn: {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/haroonfeisal/',
  },
  Email: {
    icon: FaEnvelope,
    href: 'mailto:haroonf@gmail.com',
  },
  Resume: {
    icon: FaFilePdf,
    href: resumepdf,
  },
};
