import html from './community_feed.html?raw';
import { HtmlPageView } from '../components/HtmlPageView';
import { shareNative } from '../components/PlaceholderPage';
import { communityFeedNav } from '../utils/navigationResolvers';
import { useAppState } from '../core/AppStateContext';
import { ROUTES } from '../routing/routes';

export function CommunityFeed() {
  const { toggleLike, setSelected } = useAppState();

  const resolveNav = (el: HTMLElement, container: HTMLElement) => {
    const result = communityFeedNav(el, container);
    if (result === ROUTES.postDetail) {
      setSelected({ postId: 'post-1' });
    }
    if (result === ROUTES.publicProfile) {
      setSelected({ profileId: 'profile-1' });
    }
    return result;
  };

  return (
    <HtmlPageView
      html={html}
      pageId="community_feed"
      resolveNav={resolveNav}
      onLike={() => toggleLike('post-1')}
      onShare={() => shareNative('EcoLink Community', 'Check out this post on EcoLink Cameroon!')}
    />
  );
}
