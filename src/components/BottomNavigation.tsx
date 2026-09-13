import { NavLink, useLocation } from 'react-router-dom';
import { ROUTES, type TabRoute } from '../routing/routes';
import { MaterialIcon } from './MaterialIcon';

const tabs: { route: TabRoute; label: string; icon: string }[] = [
  { route: ROUTES.home, label: 'Home', icon: 'home' },
  { route: ROUTES.explore, label: 'Explore', icon: 'explore' },
  { route: ROUTES.ecoquest, label: 'EcoQuest', icon: 'nature_people' },
  { route: ROUTES.learn, label: 'Learn', icon: 'school' },
  { route: ROUTES.profile, label: 'Profile', icon: 'person' },
];

export function BottomNavigation() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 w-full z-50 flex justify-around items-center px-xs py-base bg-surface shadow-[0px_-4px_20px_rgba(0,0,0,0.05)] h-20 max-w-2xl mx-auto left-0 right-0">
      {tabs.map(({ route, label, icon }) => {
        const isActive = location.pathname === route;
        return (
          <NavLink
            key={route}
            to={route}
            className={`flex flex-col items-center justify-center transition-all active:scale-90 duration-150 active-pill ${
              isActive
                ? 'bg-primary-container text-on-primary-container rounded-full px-4 py-1'
                : 'text-on-surface-variant p-2 hover:bg-surface-container-highest rounded-full'
            }`}
          >
            <MaterialIcon name={icon} filled={isActive} />
            <span className="font-label-caps text-label-caps mt-0.5">{label}</span>
          </NavLink>
        );
      })}
    </nav>
  );
}
