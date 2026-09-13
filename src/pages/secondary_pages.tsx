import { useNavigate } from 'react-router-dom';
import { PlaceholderPage, shareNative, BackHeader } from '../components/PlaceholderPage';
import { MaterialIcon } from '../components/MaterialIcon';
import { useAppState } from '../core/AppStateContext';
import { ROUTES } from '../routing/routes';
import { PostDetail } from './post_detail';

export function OpportunityDetail() {
  return <PostDetail />;
}

export function CreatePost() {
  const navigate = useNavigate();
  const { draftPost, setDraftPost } = useAppState();
  return (
    <div className="min-h-screen bg-background">
      <BackHeader title="Create Post" />
      <main className="pt-20 px-margin-mobile pb-12 max-w-2xl mx-auto">
        <textarea
          value={draftPost}
          onChange={(e) => setDraftPost(e.target.value)}
          placeholder="Share your environmental impact story..."
          className="w-full h-48 bg-white rounded-2xl p-4 border border-outline-variant text-body-lg resize-none focus:ring-2 focus:ring-primary-container"
        />
        <button
          type="button"
          onClick={() => {
            setDraftPost('');
            navigate(ROUTES.community);
          }}
          className="w-full mt-md bg-primary text-on-primary py-3 rounded-2xl font-bold active:scale-[0.98] transition-transform"
        >
          Publish
        </button>
      </main>
    </div>
  );
}

export function ChallengeDetail() {
  return (
    <PlaceholderPage
      title="Challenge Details"
      subtitle="Plant a Tree — Plant and nurture a tree in your community."
      backTo={ROUTES.ecoquest}
      icon="nature_people"
      actions={[
        { label: 'Join Challenge', route: ROUTES.challengeRegistration },
        { label: 'View Leaderboard', route: ROUTES.leaderboard },
        { label: 'View Rewards', route: ROUTES.rewards },
      ]}
    />
  );
}

export function ChallengeRegistration() {
  return (
    <PlaceholderPage
      title="Challenge Registration"
      subtitle="Confirm your participation in this EcoQuest challenge."
      backTo={ROUTES.challengeDetail}
      icon="how_to_reg"
      actions={[{ label: 'Confirm Registration', route: ROUTES.rewards }]}
    />
  );
}

export function Rewards() {
  return (
    <PlaceholderPage
      title="Rewards"
      subtitle="Redeem your 8,450 EcoPoints for exclusive environmental rewards."
      backTo={ROUTES.home}
      icon="workspace_premium"
      actions={[
        { label: 'View Certificates', route: ROUTES.certificate },
        { label: 'My Impact Journey', route: ROUTES.myImpact },
      ]}
    />
  );
}

export function Leaderboard() {
  return (
    <PlaceholderPage
      title="Leaderboard"
      subtitle="Top Eco Champions across Cameroon this month."
      backTo={ROUTES.ecoquest}
      icon="leaderboard"
    />
  );
}

export function Analytics() {
  return (
    <PlaceholderPage
      title="Detailed Analytics"
      subtitle="In-depth charts and statistics about your environmental impact."
      backTo={ROUTES.myImpact}
      icon="analytics"
    />
  );
}

export function EditProfile() {
  return (
    <PlaceholderPage title="Edit Profile" subtitle="Update your photo, bio, and personal details." backTo={ROUTES.profile} icon="person_edit" />
  );
}

export function LearnCategory() {
  const navigate = useNavigate();
  const { selected, setSelected } = useAppState();
  const categoryTitle = selected.categoryId?.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) ?? 'Category';
  const articles = ['Understanding Climate Change in Central Africa', 'Community-Led Conservation', 'Urban Gardening in Yaoundé'];
  return (
    <div className="min-h-screen bg-background">
      <BackHeader title={categoryTitle} onBack={() => navigate(ROUTES.learn)} />
      <main className="pt-20 px-margin-mobile pb-12 max-w-2xl mx-auto space-y-4">
        {articles.map((title, i) => (
          <button
            key={title}
            type="button"
            onClick={() => {
              setSelected({ articleId: `article-${i + 1}` });
              navigate(ROUTES.learnArticle);
            }}
            className="w-full bg-white rounded-2xl p-4 shadow-soft flex items-center justify-between text-left active:scale-[0.98] transition-transform"
          >
            <span className="font-bold text-body-lg text-on-surface">{title}</span>
            <MaterialIcon name="chevron_right" className="text-outline" />
          </button>
        ))}
      </main>
    </div>
  );
}

export function LearnArticle() {
  const navigate = useNavigate();
  const { toggleBookmarkArticle, selected } = useAppState();
  return (
    <div className="min-h-screen bg-background">
      <BackHeader
        title="Article"
        onBack={() => navigate(ROUTES.learnCategory)}
        right={
          <div className="flex gap-2">
            <button type="button" onClick={() => toggleBookmarkArticle(selected.articleId ?? 'article-1')} className="p-2 rounded-full hover:bg-surface-variant">
              <MaterialIcon name="bookmark" className="text-primary" />
            </button>
            <button type="button" onClick={() => shareNative('EcoLink Article', 'Read this on EcoLink Cameroon')} className="p-2 rounded-full hover:bg-surface-variant">
              <MaterialIcon name="share" className="text-on-surface-variant" />
            </button>
          </div>
        }
      />
      <main className="pt-20 px-margin-mobile pb-12 max-w-2xl mx-auto">
        <h2 className="font-display-lg-mobile text-display-lg-mobile font-bold mb-4">Sustainable Living in Cameroon</h2>
        <p className="text-body-lg text-on-surface-variant leading-relaxed mb-6">
          Discover practical ways to reduce your environmental footprint while supporting local communities across Cameroon.
        </p>
        <button type="button" onClick={() => navigate(ROUTES.learnArticle)} className="text-primary font-bold text-body-sm">
          Related: Water Conservation Tips →
        </button>
      </main>
    </div>
  );
}

export function SavedOpportunities() {
  return <PlaceholderPage title="Saved Opportunities" subtitle="Your bookmarked volunteer opportunities." backTo={ROUTES.profile} icon="bookmark" />;
}

export function SavedArticles() {
  return <PlaceholderPage title="Saved Articles" subtitle="Articles you have bookmarked for later." backTo={ROUTES.learn} icon="bookmarks" />;
}

export function CertificateViewer() {
  return <PlaceholderPage title="Certificate Viewer" subtitle="View and download your environmental achievement certificates." backTo={ROUTES.profile} icon="workspace_premium" />;
}

export function PublicProfile() {
  return <PlaceholderPage title="Public Profile" subtitle="View community member profile and activity." backTo={ROUTES.community} icon="person" />;
}

export function RegistrationFlow() {
  return (
    <PlaceholderPage
      title="Registration"
      subtitle="Register for this environmental opportunity."
      backTo={ROUTES.opportunityDetail}
      icon="how_to_reg"
      actions={[{ label: 'Confirm Registration', route: ROUTES.explore }]}
    />
  );
}

export function OrganizationInfo() {
  return <PlaceholderPage title="Organization Information" subtitle="Learn about the organizing NGO." backTo={ROUTES.opportunityDetail} icon="business" />;
}

export function MapView() {
  return <PlaceholderPage title="Map View" subtitle="Event location on the map." backTo={ROUTES.opportunityDetail} icon="map" />;
}

export function ImageViewer() {
  return <PlaceholderPage title="Image Viewer" subtitle="Full-screen image gallery." backTo={ROUTES.postDetail} icon="image" />;
}

export function CommentThread() {
  return <PlaceholderPage title="Comment Thread" subtitle="View and reply to comments." backTo={ROUTES.postDetail} icon="chat_bubble" />;
}

export function AchievementDetail() {
  return <PlaceholderPage title="Achievement Details" subtitle="Tree Guardian badge — earned for consistency." backTo={ROUTES.myImpact} icon="trophy" />;
}

export function BadgeDetail() {
  return <PlaceholderPage title="Badge Details" subtitle="Green Pioneer — planted 50+ trees." backTo={ROUTES.myImpact} icon="military_tech" />;
}

export function SystemDetails() {
  return <PlaceholderPage title="System Notification" subtitle="App update and system information." backTo={ROUTES.notifications} icon="info" />;
}

export function Preferences() {
  return <PlaceholderPage title="Preferences" subtitle="Customize your app experience." backTo={ROUTES.profile} icon="tune" />;
}

export function NotificationSettings() {
  return <PlaceholderPage title="Notification Settings" subtitle="Manage push and email notifications." backTo={ROUTES.profile} icon="notifications_active" />;
}

export function PrivacySettings() {
  return <PlaceholderPage title="Privacy Settings" subtitle="Control your data and visibility." backTo={ROUTES.profile} icon="shield" />;
}

export function HelpCentre() {
  return <PlaceholderPage title="Help Centre" subtitle="FAQs and support resources." backTo={ROUTES.profile} icon="help" />;
}

export function AboutEcoLink() {
  return <PlaceholderPage title="About EcoLink" subtitle="Cameroon's premier environmental community platform." backTo={ROUTES.profile} icon="eco" />;
}

export function SearchResults() {
  const { searchQuery } = useAppState();
  return (
    <PlaceholderPage
      title="Search Results"
      subtitle={searchQuery ? `Results for "${searchQuery}"` : 'Browse search results across opportunities, community, and learning content.'}
      backTo={ROUTES.explore}
      icon="search"
      actions={[
        { label: 'Explore Opportunities', route: ROUTES.explore },
        { label: 'Community Feed', route: ROUTES.community },
        { label: 'Learn & Grow', route: ROUTES.learn },
      ]}
    />
  );
}

export function AuthPage() {
  const { login } = useAppState();
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-margin-mobile">
      <MaterialIcon name="eco" className="text-primary text-[64px] mb-4" filled />
      <h1 className="font-display-lg-mobile text-display-lg-mobile font-bold text-primary mb-2">EcoLink Cameroon</h1>
      <p className="text-body-sm text-on-surface-variant mb-8 text-center">Every action today creates a greener Cameroon tomorrow.</p>
      <button
        type="button"
        onClick={() => {
          login();
          navigate(ROUTES.home);
        }}
        className="w-full max-w-sm bg-primary text-on-primary py-3 rounded-2xl font-bold active:scale-[0.98] transition-transform"
      >
        Sign In
      </button>
    </div>
  );
}

export function SplashScreen() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAppState();

  return (
    <div className="min-h-screen bg-primary-container flex flex-col items-center justify-center">
      <MaterialIcon name="eco" className="text-on-primary-container text-[80px] mb-4" filled />
      <h1 className="font-display-lg text-display-lg font-bold text-on-primary-container">EcoLink</h1>
      <p className="text-on-primary-container/80 mt-2 mb-12">Cameroon</p>
      <button
        type="button"
        onClick={() => navigate(isAuthenticated ? ROUTES.home : ROUTES.auth)}
        className="bg-on-primary text-primary px-8 py-3 rounded-full font-bold active:scale-95 transition-transform"
      >
        Get Started
      </button>
    </div>
  );
}
