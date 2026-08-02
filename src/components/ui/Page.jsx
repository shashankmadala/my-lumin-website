import { Link } from 'react-router-dom';

// Shared page primitives. Every page composes these so spacing, type scale,
// and card treatment stay consistent site-wide.
//
// Design rules encoded here:
//  - one type scale: h1 clamps at 5xl, body at lg
//  - sections breathe with py-20 (sm:py-24), content maxes at 6xl
//  - cards are white / rounded-2xl / 1px gray border / shadow on hover only
//  - gradients are accents (text, thin rules), never large saturated fills

export function Eyebrow({ icon: Icon, children, tone = 'blue' }) {
  const tones = {
    blue: 'bg-blue-50 text-blue-700 ring-blue-100',
    violet: 'bg-violet-50 text-violet-700 ring-violet-100',
    pink: 'bg-pink-50 text-pink-700 ring-pink-100',
    emerald: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
    amber: 'bg-amber-50 text-amber-700 ring-amber-100',
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ring-1 ring-inset ${
        tones[tone] || tones.blue
      }`}
    >
      {Icon && <Icon className="w-3.5 h-3.5" />}
      {children}
    </span>
  );
}

/** Standard page header: eyebrow → title → subtitle, with optional actions. */
export function PageHero({ eyebrow, icon, tone = 'blue', title, accent, subtitle, children, align = 'center' }) {
  const centered = align === 'center';
  return (
    <header className={`relative pt-28 sm:pt-32 pb-12 sm:pb-16 px-4 ${centered ? 'text-center' : ''}`}>
      {/* single soft wash instead of multiple animated blobs */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-72 -z-10 bg-gradient-to-b from-blue-50/70 via-white to-transparent"
      />
      <div className={`max-w-3xl ${centered ? 'mx-auto' : ''}`}>
        {eyebrow && (
          <div className="mb-5">
            <Eyebrow icon={icon} tone={tone}>{eyebrow}</Eyebrow>
          </div>
        )}
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 leading-[1.1]">
          {title}
          {accent && (
            <>
              {' '}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                {accent}
              </span>
            </>
          )}
        </h1>
        {subtitle && (
          <p className={`mt-5 text-lg text-gray-600 leading-relaxed ${centered ? 'mx-auto' : ''} max-w-2xl`}>
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </header>
  );
}

/** Consistent content section. `first` drops the top padding (sits under a PageHero). */
export function Section({ children, className = '', width = '6xl', tight = false, first = false }) {
  const widths = { '3xl': 'max-w-3xl', '4xl': 'max-w-4xl', '5xl': 'max-w-5xl', '6xl': 'max-w-6xl', '7xl': 'max-w-7xl' };
  // Build padding without emitting conflicting py-*/pt-* utilities.
  const pad = first
    ? (tight ? 'pb-10 sm:pb-14' : 'pb-16 sm:pb-20')
    : (tight ? 'py-10 sm:py-14' : 'py-16 sm:py-20');
  return (
    <section className={`${pad} px-4 ${className}`}>
      <div className={`${widths[width] || widths['6xl']} mx-auto`}>{children}</div>
    </section>
  );
}

/** Section heading used inside pages (smaller than PageHero). */
export function SectionHeading({ eyebrow, icon, tone, title, subtitle, align = 'center' }) {
  const centered = align === 'center';
  return (
    <div className={`mb-10 sm:mb-12 ${centered ? 'text-center' : ''}`}>
      {eyebrow && (
        <div className="mb-3">
          <Eyebrow icon={icon} tone={tone}>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">{title}</h2>
      {subtitle && (
        <p className={`mt-3 text-gray-600 leading-relaxed max-w-2xl ${centered ? 'mx-auto' : ''}`}>{subtitle}</p>
      )}
    </div>
  );
}

/** The one card treatment used across the site. */
export function Card({ children, className = '', hover = true, as: Tag = 'div', ...rest }) {
  return (
    <Tag
      className={`bg-white rounded-2xl border border-gray-200/80 ${
        hover ? 'shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200' : 'shadow-sm'
      } ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

const BUTTON_BASE =
  'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
const BUTTON_SIZES = { sm: 'px-4 py-2 text-sm', md: 'px-5 py-2.5', lg: 'px-6 py-3' };
const BUTTON_VARIANTS = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow focus-visible:ring-blue-600',
  dark: 'bg-gray-900 text-white hover:bg-gray-800 shadow-sm focus-visible:ring-gray-900',
  outline: 'bg-white text-gray-800 border border-gray-300 hover:border-gray-400 hover:bg-gray-50 focus-visible:ring-gray-400',
  ghost: 'text-gray-700 hover:text-blue-700 hover:bg-blue-50 focus-visible:ring-blue-500',
  onDark: 'bg-white text-gray-900 hover:bg-gray-100 focus-visible:ring-white',
};

/** Button that renders as <Link>, <a>, or <button> depending on props. */
export function Button({ to, href, variant = 'primary', size = 'md', className = '', children, ...rest }) {
  const cls = `${BUTTON_BASE} ${BUTTON_SIZES[size]} ${BUTTON_VARIANTS[variant]} ${className}`;
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>;
  if (href) return <a href={href} className={cls} {...rest}>{children}</a>;
  return <button className={cls} {...rest}>{children}</button>;
}

/** Muted page background used by most pages. */
export function PageShell({ children, className = '' }) {
  return <div className={`min-h-screen bg-white ${className}`}>{children}</div>;
}
