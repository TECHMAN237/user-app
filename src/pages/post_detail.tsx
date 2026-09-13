import html from './post_detail.html?raw';
import { HtmlPageView } from '../components/HtmlPageView';
import { shareNative } from '../components/PlaceholderPage';
import { postDetailNav } from '../utils/navigationResolvers';
import { useAppState } from '../core/AppStateContext';

export function PostDetail() {
  const { toggleLike } = useAppState();
  return (
    <HtmlPageView
      html={html}
      pageId="post_detail"
      resolveNav={postDetailNav}
      onLike={() => toggleLike('post-1')}
      onShare={() => shareNative('EcoLink Post', 'Proud to have completed the Community Environmental Leadership Program!')}
    />
  );
}
