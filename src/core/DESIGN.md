---
name: EcoLink Cameroon Core
colors:
  surface: '#f7fbf3'
  surface-dim: '#d7dbd4'
  surface-bright: '#f7fbf3'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f5ed'
  surface-container: '#ebefe8'
  surface-container-high: '#e5e9e2'
  surface-container-highest: '#e0e4dd'
  on-surface: '#181d18'
  on-surface-variant: '#3f4940'
  inverse-surface: '#2d322d'
  inverse-on-surface: '#eef2eb'
  outline: '#6f7a70'
  outline-variant: '#bfc9be'
  surface-tint: '#166c3b'
  primary: '#005128'
  on-primary: '#ffffff'
  primary-container: '#146b3a'
  on-primary-container: '#97e9ab'
  inverse-primary: '#87d89c'
  secondary: '#006d36'
  on-secondary: '#ffffff'
  secondary-container: '#8cf6a8'
  on-secondary-container: '#007239'
  tertiary: '#792b38'
  on-tertiary: '#ffffff'
  tertiary-container: '#97424e'
  on-tertiary-container: '#ffcace'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#a2f5b6'
  primary-fixed-dim: '#87d89c'
  on-primary-fixed: '#00210d'
  on-primary-fixed-variant: '#005229'
  secondary-fixed: '#8ff9ab'
  secondary-fixed-dim: '#73dc91'
  on-secondary-fixed: '#00210c'
  on-secondary-fixed-variant: '#005227'
  tertiary-fixed: '#ffdadc'
  tertiary-fixed-dim: '#ffb2b9'
  on-tertiary-fixed: '#400010'
  on-tertiary-fixed-variant: '#7a2c38'
  background: '#f7fbf3'
  on-background: '#181d18'
  surface-variant: '#e0e4dd'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 32px
  xl: 48px
  margin-mobile: 20px
  gutter-mobile: 16px
---

## Brand & Style

The design system is built to bridge the gap between environmental activism and premium mobile experiences. It targets a community of eco-conscious users in Cameroon, evoking a sense of purpose, prestige, and institutional trust. 

The visual style is **Corporate / Modern** with a focus on **High-Fidelity Minimalism**. It utilizes heavy whitespace to allow high-impact environmental photography to breathe, creating an emotional connection to the land. The aesthetic is defined by crisp borders, sophisticated depth through soft shadows, and a verdant color palette that feels both organic and professional.

## Colors

The palette is rooted in the lush landscapes of Cameroon. 
- **Primary Green (#146B3A)**: Used for brand identity, primary actions, and the active state of navigation components.
- **Secondary & Accent Greens**: Used for status indicators, progress bars, and subtle gradients to provide depth.
- **Surface Strategy**: A clean white surface is used for cards and interactive containers, sitting atop a slightly cool off-white background to create subtle layered contrast without the need for heavy borders.

## Typography

This design system utilizes **Inter** to achieve a highly legible, systematic, and premium feel similar to modern OS interfaces. 

- **Hierarchy**: Large titles use tight letter spacing and bold weights to command attention.
- **Body Text**: Maintains generous line-heights to ensure readability during long-form reading of environmental reports or community posts.
- **UI Labels**: Small, all-caps labels provide a structured, "pro" utility look for metadata, category tags, and secondary navigation elements.

## Layout & Spacing

The system follows a **Fixed-Fluid Hybrid** model optimized for mobile. 
- **The 8pt Grid**: All margins, padding, and component heights align to a 4px/8px baseline.
- **Margins**: A standard 20px safe-area margin is maintained on mobile devices to prevent content from crowding the screen edges.
- **Rhythm**: Use 16px (sm) for internal card padding and 24px (md) for vertical spacing between distinct content sections.

## Elevation & Depth

Visual hierarchy is established through a combination of **Tonal Layers** and **Ambient Shadows**:
- **Level 0 (Background)**: #F7F8F7 — The canvas.
- **Level 1 (Cards/Sheet)**: #FFFFFF — Used for the primary content containers. 
- **Shadows**: Use highly diffused, low-opacity shadows (e.g., `0px 4px 20px rgba(0, 0, 0, 0.05)`) to lift cards from the background without creating a dated, heavy look.
- **Overlays**: Modals and bottom sheets use a 40% opacity black backdrop with a 10px backdrop blur (Glassmorphism) to maintain context.

## Shapes

The shape language is organic yet controlled. 
- **Standard Radius**: 16px for most cards and input fields.
- **Large Radius**: 24px for featured hero cards and main "EcoQuest" containers to emphasize a soft, approachable feel.
- **Pill Shapes**: Used for buttons, tags, and the active navigation indicator to create a distinct interactive signature.

## Components

### Bottom Navigation
The primary navigation uses a 5-tab persistent bar. The **Active State** is a high-contrast pill: a primary green (#146B3A) background with white icons and text. **Inactive States** use the secondary text color (#6B7280) with no background container.

### Buttons
Primary buttons are full-width or large-scale capsules with the Primary Green background. Text should be bold and centered. Secondary buttons use an outline or a light green tint with dark green text.

### Cards & Progress
Impact cards should feature heavy use of iconography and "EcoPoints" data. Progress rings and bars use the Accent Green (#34C759) to denote positive movement. All cards must have a 16px or 24px corner radius.

### Input Fields & Chips
Search bars and text inputs use a light gray stroke or subtle background fill (#EDF0F2) to differentiate from the pure white cards. Segmented controls (Chips) should use a toggle-pill style, moving from a light gray inactive state to a primary green active state.

### Imagery
Photography is a core component. Use high-resolution, full-bleed imagery with subtle dark gradients at the bottom to ensure white text overlay remains legible.