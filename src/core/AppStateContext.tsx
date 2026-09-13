import { createContext, useCallback, useContext, useMemo, useRef, useState, type ReactNode } from 'react';
import type { TabRoute } from '../routing/routes';

export type NotificationType =
  | 'challenge'
  | 'community'
  | 'opportunity'
  | 'reward'
  | 'learning'
  | 'achievement'
  | 'system';

export interface AppNotification {
  id: string;
  type: NotificationType;
  title: string;
  body: string;
  time: string;
  read: boolean;
}

export interface SelectedItems {
  opportunityId: string | null;
  postId: string | null;
  challengeId: string | null;
  articleId: string | null;
  categoryId: string | null;
  profileId: string | null;
}

export interface AppState {
  isAuthenticated: boolean;
  notifications: AppNotification[];
  bookmarkedOpportunities: string[];
  bookmarkedArticles: string[];
  likedPosts: Record<string, boolean>;
  draftPost: string;
  draftComment: string;
  searchQuery: string;
  selected: SelectedItems;
  scrollPositions: Record<string, number>;
}

interface AppContextValue extends AppState {
  login: () => void;
  logout: () => void;
  markAllNotificationsRead: () => void;
  markNotificationRead: (id: string) => void;
  toggleLike: (postId: string) => void;
  toggleBookmarkOpportunity: (id: string) => void;
  toggleBookmarkArticle: (id: string) => void;
  setDraftPost: (text: string) => void;
  setDraftComment: (text: string) => void;
  setSearchQuery: (query: string) => void;
  setSelected: (partial: Partial<SelectedItems>) => void;
  saveScrollPosition: (key: string, y: number) => number;
  getScrollPosition: (key: string) => number;
}

const defaultNotifications: AppNotification[] = [
  {
    id: '1',
    type: 'reward',
    title: 'Reward Earned',
    body: 'You earned 250 EcoPoints for completing "Plant a Tree" challenge.',
    time: '10m ago',
    read: false,
  },
  {
    id: '2',
    type: 'opportunity',
    title: 'Event Reminder',
    body: 'Limbe Coastal Cleanup starts tomorrow at 8:00 AM.',
    time: '1h ago',
    read: false,
  },
  {
    id: '3',
    type: 'achievement',
    title: 'Certificate Available',
    body: 'Your certificate for Environmental Leadership is ready.',
    time: '3h ago',
    read: true,
  },
  {
    id: '4',
    type: 'challenge',
    title: 'New Achievement',
    body: 'You earned the "Tree Guardian" badge.',
    time: '5h ago',
    read: true,
  },
  {
    id: '5',
    type: 'community',
    title: 'NGO Announcement',
    body: 'WWF Cameroon launched a new sustainability challenge.',
    time: '1d ago',
    read: true,
  },
];

const AppContext = createContext<AppContextValue | null>(null);

export function AppStateProvider({ children }: { children: ReactNode }) {
  const scrollRef = useRef<Record<string, number>>({});
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [notifications, setNotifications] = useState(defaultNotifications);
  const [bookmarkedOpportunities, setBookmarkedOpportunities] = useState<string[]>([]);
  const [bookmarkedArticles, setBookmarkedArticles] = useState<string[]>([]);
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({ 'post-1': true });
  const [draftPost, setDraftPost] = useState('');
  const [draftComment, setDraftComment] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selected, setSelectedState] = useState<SelectedItems>({
    opportunityId: null,
    postId: null,
    challengeId: null,
    articleId: null,
    categoryId: null,
    profileId: null,
  });

  const login = useCallback(() => setIsAuthenticated(true), []);
  const logout = useCallback(() => setIsAuthenticated(false), []);

  const markAllNotificationsRead = useCallback(() => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  }, []);

  const markNotificationRead = useCallback((id: string) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)));
  }, []);

  const toggleLike = useCallback((postId: string) => {
    setLikedPosts((prev) => ({ ...prev, [postId]: !prev[postId] }));
  }, []);

  const toggleBookmarkOpportunity = useCallback((id: string) => {
    setBookmarkedOpportunities((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  }, []);

  const toggleBookmarkArticle = useCallback((id: string) => {
    setBookmarkedArticles((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  }, []);

  const setSelected = useCallback((partial: Partial<SelectedItems>) => {
    setSelectedState((prev) => ({ ...prev, ...partial }));
  }, []);

  const saveScrollPosition = useCallback((key: string, y: number) => {
    scrollRef.current[key] = y;
    return y;
  }, []);

  const getScrollPosition = useCallback((key: string) => scrollRef.current[key] ?? 0, []);

  const value = useMemo<AppContextValue>(
    () => ({
      isAuthenticated,
      notifications,
      bookmarkedOpportunities,
      bookmarkedArticles,
      likedPosts,
      draftPost,
      draftComment,
      searchQuery,
      selected,
      scrollPositions: scrollRef.current,
      login,
      logout,
      markAllNotificationsRead,
      markNotificationRead,
      toggleLike,
      toggleBookmarkOpportunity,
      toggleBookmarkArticle,
      setDraftPost,
      setDraftComment,
      setSearchQuery,
      setSelected,
      saveScrollPosition,
      getScrollPosition,
    }),
    [
      isAuthenticated,
      notifications,
      bookmarkedOpportunities,
      bookmarkedArticles,
      likedPosts,
      draftPost,
      draftComment,
      searchQuery,
      selected,
      login,
      logout,
      markAllNotificationsRead,
      markNotificationRead,
      toggleLike,
      toggleBookmarkOpportunity,
      toggleBookmarkArticle,
      setSelected,
      saveScrollPosition,
      getScrollPosition,
    ],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppState() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useAppState must be used within AppStateProvider');
  return ctx;
}

export type { TabRoute };
