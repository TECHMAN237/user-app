import { useNavigate } from 'react-router-dom';
import { MaterialIcon } from '../components/MaterialIcon';
import { ROUTES } from '../routing/routes';
import { useAppState } from '../core/AppStateContext';

const CATEGORIES = [
  { id: 'environmental-guides', title: 'Environmental Guides', icon: 'menu_book' },
  { id: 'articles', title: 'Articles', icon: 'article' },
  { id: 'diy-projects', title: 'DIY Projects', icon: 'construction' },
  { id: 'tips-tricks', title: 'Tips & Tricks', icon: 'lightbulb' },
  { id: 'tutorials', title: 'Step-by-Step Tutorials', icon: 'school' },
  { id: 'do-you-know', title: 'Do You Know?', icon: 'quiz' },
  { id: 'climate-facts', title: 'Climate Facts', icon: 'thermostat' },
  { id: 'recycling-guides', title: 'Recycling Guides', icon: 'recycling' },
  { id: 'waste-management', title: 'Waste Management', icon: 'delete' },
  { id: 'plastic-reduction', title: 'Plastic Reduction', icon: 'water_drop' },
  { id: 'water-conservation', title: 'Water Conservation', icon: 'waves' },
  { id: 'tree-planting', title: 'Tree Planting', icon: 'forest' },
  { id: 'biodiversity', title: 'Biodiversity', icon: 'pets' },
  { id: 'renewable-energy', title: 'Renewable Energy', icon: 'solar_power' },
];

export function LearnGrow() {
  const navigate = useNavigate();
  const { setSelected, setSearchQuery } = useAppState();

  return (
    <div className="min-h-screen bg-background pb-4">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
        <div className="flex justify-between items-center w-full px-margin-mobile h-16 max-w-2xl mx-auto">
          <h1 className="font-headline-md text-headline-md font-bold text-primary">Learn &amp; Grow</h1>
          <div className="flex gap-4">
            <button type="button" onClick={() => navigate(ROUTES.searchResults)} className="active:scale-95 transition-transform">
              <MaterialIcon name="search" className="text-on-surface-variant" />
            </button>
            <button type="button" onClick={() => navigate(ROUTES.notifications)} className="active:scale-95 transition-transform">
              <MaterialIcon name="notifications" className="text-on-surface-variant" />
            </button>
          </div>
        </div>
      </header>
      <main className="pt-20 px-margin-mobile max-w-2xl mx-auto space-y-md">
        <p className="text-body-lg text-on-surface-variant">Expand your environmental knowledge with curated content.</p>
        <div className="relative">
          <input
            type="search"
            placeholder="Search articles, guides, tutorials..."
            className="w-full bg-surface-container-high rounded-full px-5 py-3 pl-12 text-body-sm border-none focus:ring-2 focus:ring-primary-container"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && navigate(ROUTES.searchResults)}
          />
          <MaterialIcon name="search" className="absolute left-4 top-1/2 -translate-y-1/2 text-outline" />
        </div>
        <div className="grid grid-cols-2 gap-sm">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                setSelected({ categoryId: cat.id });
                navigate(ROUTES.learnCategory);
              }}
              className="bg-white p-sm rounded-2xl shadow-soft flex flex-col gap-2 text-left border border-surface-container-highest hover:border-primary/30 active:scale-[0.98] transition-all"
            >
              <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                <MaterialIcon name={cat.icon} />
              </div>
              <span className="font-bold text-body-sm text-on-surface">{cat.title}</span>
            </button>
          ))}
        </div>
        <section>
          <div className="flex justify-between items-end mb-sm">
            <h2 className="font-headline-md text-headline-md font-bold">Featured Articles</h2>
            <button type="button" onClick={() => navigate(ROUTES.savedArticles)} className="text-primary font-bold text-body-sm">
              Saved
            </button>
          </div>
          <button
            type="button"
            onClick={() => {
              setSelected({ articleId: 'article-1' });
              navigate(ROUTES.learnArticle);
            }}
            className="w-full bg-white rounded-3xl p-sm shadow-soft flex items-center gap-4 text-left active:scale-[0.98] transition-transform"
          >
            <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 bg-primary-container/20 flex items-center justify-center">
              <MaterialIcon name="eco" className="text-primary text-[32px]" filled />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-body-lg">Sustainable Living in Cameroon</h3>
              <p className="text-on-surface-variant text-body-sm">A practical guide for everyday eco-actions</p>
            </div>
            <MaterialIcon name="chevron_right" className="text-on-surface-variant" />
          </button>
        </section>
      </main>
    </div>
  );
}
