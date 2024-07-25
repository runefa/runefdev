import { FaEnvelope, FaFilePdf, FaGithub, FaLinkedin } from 'react-icons/fa';
import resumepdf from '../../assets/rfresume.pdf';

export const buttons_data = {
  GitHub: {
    icon: FaGithub,
    href: 'https://github.com/runefa',
  },
  LinkedIn: {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/runefeisal/',
  },
  Email: {
    icon: FaEnvelope,
    href: 'mailto:runefswe@gmail.com',
  },
  Resume: {
    icon: FaFilePdf,
    href: resumepdf,
  },
};
