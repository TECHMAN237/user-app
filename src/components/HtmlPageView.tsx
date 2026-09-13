import { useEffect, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { enhanceInteractiveElements, extractPageContent } from '../utils/htmlPage';
import type { RoutePath } from '../routing/routes';

export type NavResolver = (
  target: HTMLElement,
  container: HTMLElement,
) => RoutePath | null | 'share' | 'like' | 'back';

interface HtmlPageViewProps {
  html: string;
  pageId: string;
  resolveNav: NavResolver;
  onLike?: () => void;
  onShare?: () => void;
}

export function HtmlPageView({ html, pageId, resolveNav, onLike, onShare }: HtmlPageViewProps) {
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);
  const content = useMemo(() => extractPageContent(html), [html]);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    enhanceInteractiveElements(container);

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const clickable = target.closest('button, a, [role=button], .cursor-pointer') as HTMLElement | null;
      if (!clickable || !container.contains(clickable)) return;

      const result = resolveNav(clickable, container);
      if (!result) return;

      e.preventDefault();
      e.stopPropagation();

      if (result === 'share') {
        onShare?.();
        return;
      }
      if (result === 'like') {
        onLike?.();
        return;
      }
      if (result === 'back') {
        navigate(-1);
        return;
      }
      navigate(result);
    };

    container.addEventListener('click', handleClick);
    return () => container.removeEventListener('click', handleClick);
  }, [navigate, resolveNav, onLike, onShare, pageId]);

  return (
    <div
      ref={ref}
      className="html-page-content"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

/** Helper: match button/link by contained text. */
export function textIncludes(el: HTMLElement, ...needles: string[]): boolean {
  const text = el.textContent?.toLowerCase() ?? '';
  return needles.some((n) => text.includes(n.toLowerCase()));
}

/** Helper: match material icon name inside element. */
export function hasIcon(el: HTMLElement, iconName: string): boolean {
  const icon = el.querySelector('.material-symbols-outlined') ?? (el.classList.contains('material-symbols-outlined') ? el : null);
  return icon?.textContent?.trim() === iconName;
}
