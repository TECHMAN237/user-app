import { Navigate, Route, Routes } from 'react-router-dom';
import { useAppState } from '../core/AppStateContext';
import { PersistentTabLayout, DetailLayout } from '../layouts/PersistentTabLayout';
import { ROUTES } from './routes';
import { CommunityFeed } from '../pages/community_feed';
import { PostDetail } from '../pages/post_detail';
import { MyImpactJourney } from '../pages/my_impact_journey';
import { Notifications } from '../pages/notifications';
import {
  AboutEcoLink,
  AchievementDetail,
  Analytics,
  AuthPage,
  BadgeDetail,
  CertificateViewer,
  ChallengeDetail,
  ChallengeRegistration,
  CommentThread,
  CreatePost,
  EditProfile,
  HelpCentre,
  ImageViewer,
  Leaderboard,
  LearnArticle,
  LearnCategory,
  MapView,
  NotificationSettings,
  OpportunityDetail,
  OrganizationInfo,
  Preferences,
  PrivacySettings,
  PublicProfile,
  RegistrationFlow,
  Rewards,
  SavedArticles,
  SavedOpportunities,
  SearchResults,
  SplashScreen,
  SystemDetails,
} from '../pages/secondary_pages';

function AuthGuard({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAppState();
  if (!isAuthenticated) {
    return <Navigate to={ROUTES.auth} replace />;
  }
  return <>{children}</>;
}

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  return <AuthGuard>{children}</AuthGuard>;
}

export function AppRouter() {
  return (
    <Routes>
      <Route path={ROUTES.splash} element={<SplashScreen />} />
      <Route path={ROUTES.auth} element={<AuthPage />} />

      {/* Tab routes with persistent state */}
      <Route
        path={ROUTES.home}
        element={<ProtectedRoute><PersistentTabLayout /></ProtectedRoute>}
      />
      <Route
        path={ROUTES.explore}
        element={<ProtectedRoute><PersistentTabLayout /></ProtectedRoute>}
      />
      <Route
        path={ROUTES.ecoquest}
        element={<ProtectedRoute><PersistentTabLayout /></ProtectedRoute>}
      />
      <Route
        path={ROUTES.learn}
        element={<ProtectedRoute><PersistentTabLayout /></ProtectedRoute>}
      />
      <Route
        path={ROUTES.profile}
        element={<ProtectedRoute><PersistentTabLayout /></ProtectedRoute>}
      />

      {/* Detail & secondary routes */}
      <Route path={ROUTES.community} element={<ProtectedRoute><DetailLayout><CommunityFeed /></DetailLayout></ProtectedRoute>} />
      <Route path={ROUTES.postDetail} element={<ProtectedRoute><DetailLayout><PostDetail /></DetailLayout></ProtectedRoute>} />
      <Route path={ROUTES.createPost} element={<ProtectedRoute><CreatePost /></ProtectedRoute>} />
      <Route path={ROUTES.opportunityDetail} element={<ProtectedRoute><DetailLayout><OpportunityDetail /></DetailLayout></ProtectedRoute>} />
      <Route path={ROUTES.registration} element={<ProtectedRoute><RegistrationFlow /></ProtectedRoute>} />
      <Route path={ROUTES.organizationInfo} element={<ProtectedRoute><OrganizationInfo /></ProtectedRoute>} />
      <Route path={ROUTES.mapView} element={<ProtectedRoute><MapView /></ProtectedRoute>} />
      <Route path={ROUTES.challengeDetail} element={<ProtectedRoute><ChallengeDetail /></ProtectedRoute>} />
      <Route path={ROUTES.challengeRegistration} element={<ProtectedRoute><ChallengeRegistration /></ProtectedRoute>} />
      <Route path={ROUTES.rewards} element={<ProtectedRoute><Rewards /></ProtectedRoute>} />
      <Route path={ROUTES.leaderboard} element={<ProtectedRoute><Leaderboard /></ProtectedRoute>} />
      <Route path={ROUTES.myImpact} element={<ProtectedRoute><DetailLayout><MyImpactJourney /></DetailLayout></ProtectedRoute>} />
      <Route path={ROUTES.analytics} element={<ProtectedRoute><Analytics /></ProtectedRoute>} />
      <Route path={ROUTES.notifications} element={<ProtectedRoute><Notifications /></ProtectedRoute>} />
      <Route path={ROUTES.editProfile} element={<ProtectedRoute><EditProfile /></ProtectedRoute>} />
      <Route path={ROUTES.learnCategory} element={<ProtectedRoute><LearnCategory /></ProtectedRoute>} />
      <Route path={ROUTES.learnArticle} element={<ProtectedRoute><LearnArticle /></ProtectedRoute>} />
      <Route path={ROUTES.savedOpportunities} element={<ProtectedRoute><SavedOpportunities /></ProtectedRoute>} />
      <Route path={ROUTES.savedArticles} element={<ProtectedRoute><SavedArticles /></ProtectedRoute>} />
      <Route path={ROUTES.certificate} element={<ProtectedRoute><CertificateViewer /></ProtectedRoute>} />
      <Route path={ROUTES.publicProfile} element={<ProtectedRoute><PublicProfile /></ProtectedRoute>} />
      <Route path={ROUTES.imageViewer} element={<ProtectedRoute><ImageViewer /></ProtectedRoute>} />
      <Route path={ROUTES.commentThread} element={<ProtectedRoute><CommentThread /></ProtectedRoute>} />
      <Route path={ROUTES.achievementDetail} element={<ProtectedRoute><AchievementDetail /></ProtectedRoute>} />
      <Route path={ROUTES.badgeDetail} element={<ProtectedRoute><BadgeDetail /></ProtectedRoute>} />
      <Route path={ROUTES.systemDetails} element={<ProtectedRoute><SystemDetails /></ProtectedRoute>} />
      <Route path={ROUTES.preferences} element={<ProtectedRoute><Preferences /></ProtectedRoute>} />
      <Route path={ROUTES.notificationSettings} element={<ProtectedRoute><NotificationSettings /></ProtectedRoute>} />
      <Route path={ROUTES.privacySettings} element={<ProtectedRoute><PrivacySettings /></ProtectedRoute>} />
      <Route path={ROUTES.helpCentre} element={<ProtectedRoute><HelpCentre /></ProtectedRoute>} />
      <Route path={ROUTES.about} element={<ProtectedRoute><AboutEcoLink /></ProtectedRoute>} />
      <Route path={ROUTES.searchResults} element={<ProtectedRoute><SearchResults /></ProtectedRoute>} />

      <Route path="*" element={<Navigate to={ROUTES.splash} replace />} />
    </Routes>
  );
}
