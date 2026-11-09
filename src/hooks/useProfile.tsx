import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
  type MouseEvent,
} from 'react';
import type { ProfileId } from '../data/content';

interface ProfileContextValue {
  activeProfile: ProfileId | null;
  setActiveProfile: (profile: ProfileId | null) => void;
  toggleProfile: (profile: ProfileId) => void;
  navigateToProjects: (e?: MouseEvent<HTMLElement>) => void;
}

const ProfileContext = createContext<ProfileContextValue | null>(null);

function parseProfileFromLocation(): ProfileId | null {
  if (typeof window === 'undefined') return null;

  const params = new URLSearchParams(window.location.search);
  const raw = params.get('perfil')?.toLowerCase().trim();

  if (raw === 'desenvolvedor' || raw === 'developer') {
    return 'developer';
  }
  if (raw === 'designer') {
    return 'designer';
  }

  const hash = window.location.hash.toLowerCase();
  if (hash.includes('perfil=desenvolvedor') || hash.includes('perfil=developer')) {
    return 'developer';
  }
  if (hash.includes('perfil=designer')) {
    return 'designer';
  }

  return null;
}

function syncUrlWithProfile(profile: ProfileId | null, hashOverride?: string) {
  if (typeof window === 'undefined') return;

  const url = new URL(window.location.href);
  if (profile === 'developer') {
    url.searchParams.set('perfil', 'desenvolvedor');
  } else if (profile === 'designer') {
    url.searchParams.set('perfil', 'designer');
  } else {
    url.searchParams.delete('perfil');
  }

  if (hashOverride !== undefined) {
    url.hash = hashOverride;
  } else if (profile !== 'developer' && url.hash === '#projetos') {
    url.hash = '';
  }

  window.history.replaceState(null, '', `${url.pathname}${url.search}${url.hash}`);
}

function scrollToProjectsElement() {
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  const attemptScroll = (retriesLeft: number) => {
    const el = document.getElementById('projetos');
    if (el) {
      el.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
      });
      return;
    }
    if (retriesLeft > 0) {
      window.requestAnimationFrame(() => attemptScroll(retriesLeft - 1));
    }
  };

  window.requestAnimationFrame(() => attemptScroll(10));
}

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [activeProfile, setActiveProfileState] = useState<ProfileId | null>(() =>
    parseProfileFromLocation()
  );

  const setActiveProfile = useCallback((profile: ProfileId | null) => {
    setActiveProfileState(profile);
    syncUrlWithProfile(profile);
  }, []);

  const toggleProfile = useCallback((profile: ProfileId) => {
    setActiveProfileState((prev) => {
      const next = prev === profile ? null : profile;
      syncUrlWithProfile(next);
      return next;
    });
  }, []);

  const navigateToProjects = useCallback((e?: MouseEvent<HTMLElement>) => {
    if (e) {
      e.preventDefault();
    }
    setActiveProfileState('developer');
    syncUrlWithProfile('developer', '#projetos');
    scrollToProjectsElement();
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setActiveProfileState(parseProfileFromLocation());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const value = useMemo<ProfileContextValue>(
    () => ({
      activeProfile,
      setActiveProfile,
      toggleProfile,
      navigateToProjects,
    }),
    [activeProfile, setActiveProfile, toggleProfile, navigateToProjects]
  );

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
}

export function useProfile(): ProfileContextValue {
  const ctx = useContext(ProfileContext);
  if (!ctx) {
    throw new Error('useProfile deve ser usado dentro de um <ProfileProvider>');
  }
  return ctx;
}
