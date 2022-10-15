import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import Burger from './Burger';
import { motion } from 'framer-motion';

const navbar = {
  hidden: { opacity: 0, y: -90 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      when: 'beforeChildren', // delayChildren: 0.5,
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.25,
    },
  },
};

export default function Navbar() {
  return (
    <Nav initial={{ y: -90 }} animate={{ y: 0 }} transition={{ duration: 0.1 }}>
      <Link href='/'>
        <a>
          <Image
            width={230}
            height={40}
            src='/img/RCM-Logo.webp'
            alt='RCM-Logo'
          />
        </a>
      </Link>
      <Burger />
    </Nav>
  );
}
const Nav = styled(motion.nav)`
  position: fixed;
  background: rgba(255, 255, 255, 0.97);
  width: 100vw;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  /* box-shadow: 0 7px 10px 0 rgba(122, 207, 255, 0.3); */
  align-items: center;
  z-index: 3;
`;
