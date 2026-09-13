import { useNavigate } from 'react-router-dom';
import { MaterialIcon } from './MaterialIcon';

interface PlaceholderPageProps {
  title: string;
  subtitle?: string;
  backTo?: string;
  icon?: string;
  actions?: { label: string; route: string }[];
}

export function PlaceholderPage({ title, subtitle, backTo, icon = 'eco', actions = [] }: PlaceholderPageProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md flex items-center gap-4 px-margin-mobile h-16 max-w-2xl mx-auto">
        <button
          type="button"
          onClick={() => (backTo ? navigate(backTo) : navigate(-1))}
          className="p-2 -ml-2 hover:bg-surface-variant rounded-full transition-colors active:scale-95"
        >
          <MaterialIcon name="arrow_back" className="text-primary" />
        </button>
        <h1 className="font-headline-md text-headline-md font-bold text-primary">{title}</h1>
      </header>
      <main className="pt-24 px-margin-mobile pb-12 max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl p-md shadow-soft border border-surface-container-highest text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary-container/20 flex items-center justify-center">
            <MaterialIcon name={icon} className="text-primary text-[32px]" filled />
          </div>
          <h2 className="font-headline-md text-headline-md font-bold text-on-surface mb-2">{title}</h2>
          {subtitle && <p className="text-body-sm text-on-surface-variant mb-6">{subtitle}</p>}
          {actions.length > 0 && (
            <div className="flex flex-col gap-3">
              {actions.map((action) => (
                <button
                  key={action.route}
                  type="button"
                  onClick={() => navigate(action.route)}
                  className="w-full bg-primary text-on-primary py-3 rounded-2xl font-bold active:scale-[0.98] transition-transform"
                >
                  {action.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

interface BackHeaderProps {
  title: string;
  onBack?: () => void;
  right?: React.ReactNode;
}

export function BackHeader({ title, onBack, right }: BackHeaderProps) {
  const navigate = useNavigate();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="flex justify-between items-center w-full px-margin-mobile h-16 max-w-2xl mx-auto">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => (onBack ? onBack() : navigate(-1))}
            className="p-2 -ml-2 hover:bg-surface-variant rounded-full transition-colors active:scale-95"
          >
            <MaterialIcon name="arrow_back" className="text-primary" />
          </button>
          <h1 className="font-headline-md text-headline-md font-bold text-primary">{title}</h1>
        </div>
        {right}
      </div>
    </header>
  );
}

export function shareNative(title: string, text: string) {
  if (navigator.share) {
    void navigator.share({ title, text, url: window.location.href });
  } else {
    void navigator.clipboard.writeText(`${title}\n${text}\n${window.location.href}`);
    alert('Link copied to clipboard!');
  }
}
