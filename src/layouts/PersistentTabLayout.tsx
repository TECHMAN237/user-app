import { useEffect, useRef, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { BottomNavigation } from '../components/BottomNavigation';
import { isTabRoute, ROUTES, type TabRoute } from '../routing/routes';
import { useAppState } from '../core/AppStateContext';
import { HomeDashboard } from '../pages/home_dashboard';
import { ExploreOpportunities } from '../pages/explore_opportunities';
import { EcoquestChallenges } from '../pages/ecoquest_challenges';
import { LearnGrow } from '../pages/learn_grow';
import { ProfileSettingsUpdated } from '../pages/profile_settings_updated';

const TAB_COMPONENTS: Record<TabRoute, () => ReactNode> = {
  [ROUTES.home]: () => <HomeDashboard />,
  [ROUTES.explore]: () => <ExploreOpportunities />,
  [ROUTES.ecoquest]: () => <EcoquestChallenges />,
  [ROUTES.learn]: () => <LearnGrow />,
  [ROUTES.profile]: () => <ProfileSettingsUpdated />,
};

export function PersistentTabLayout() {
  const { pathname } = useLocation();
  const { saveScrollPosition, getScrollPosition } = useAppState();
  const mountedRef = useRef<Set<TabRoute>>(new Set([ROUTES.home]));
  const scrollRef = useRef<HTMLDivElement>(null);
  const prevPathRef = useRef(pathname);

  if (isTabRoute(pathname)) {
    mountedRef.current.add(pathname);
  }

  useEffect(() => {
    if (isTabRoute(prevPathRef.current) && scrollRef.current) {
      saveScrollPosition(prevPathRef.current, scrollRef.current.scrollTop);
    }
    prevPathRef.current = pathname;
  }, [pathname, saveScrollPosition]);

  useEffect(() => {
    if (isTabRoute(pathname) && scrollRef.current) {
      scrollRef.current.scrollTop = getScrollPosition(pathname);
    }
  }, [pathname, getScrollPosition]);

  if (!isTabRoute(pathname)) {
    return null;
  }

  const mountedTabs = [...mountedRef.current];

  return (
    <div className="flex flex-col min-h-screen max-w-2xl mx-auto w-full">
      <div ref={scrollRef} className="flex-1 overflow-y-auto pb-24">
        {mountedTabs.map((tab) => (
          <div key={tab} className={tab === pathname ? 'block page-enter' : 'hidden'} aria-hidden={tab !== pathname}>
            {TAB_COMPONENTS[tab]()}
          </div>
        ))}
      </div>
      <BottomNavigation />
    </div>
  );
}

export function DetailLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen max-w-2xl mx-auto w-full page-enter">
      <div className="flex-1 pb-8">{children}</div>
    </div>
  );
}
