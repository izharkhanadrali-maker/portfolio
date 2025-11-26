import { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const pageRoutes = [
  '/',
  '/projects',
  '/education',
  '/experience',
  '/blog',
  '/skills',
  '/contact'
];

export const useAutoPageScroll = () => {
  // Auto-scroll hook is disabled to prevent continuous page redirects
  // Users can navigate manually via navbar or natural scrolling
};

export default useAutoPageScroll;
