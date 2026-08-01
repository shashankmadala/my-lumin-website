import { Suspense } from 'react';
import {
  Info, Lightbulb, AlertTriangle, FlaskConical, Globe, GraduationCap,
  BookMarked, ExternalLink, Rocket, Quote,
} from 'lucide-react';
import InlineText from './InlineText';
import VideoEmbed from './VideoEmbed';
import Checkpoint from './Checkpoint';
import { interactiveComponents } from './interactiveRegistry';

const CALLOUT_STYLES = {
  info:      { icon: Info,          box: 'bg-blue-50 border-blue-200',    accent: 'text-blue-600',    heading: 'text-blue-900' },
  tip:       { icon: Lightbulb,     box: 'bg-emerald-50 border-emerald-200', accent: 'text-emerald-600', heading: 'text-emerald-900' },
  warning:   { icon: AlertTriangle, box: 'bg-amber-50 border-amber-200',  accent: 'text-amber-600',   heading: 'text-amber-900' },
  example:   { icon: FlaskConical,  box: 'bg-purple-50 border-purple-200', accent: 'text-purple-600',  heading: 'text-purple-900' },
  realworld: { icon: Globe,         box: 'bg-cyan-50 border-cyan-200',    accent: 'text-cyan-600',    heading: 'text-cyan-900' },
  teacher:   { icon: GraduationCap, box: 'bg-rose-50 border-rose-200',    accent: 'text-rose-600',    heading: 'text-rose-900' },
};

function Callout({ variant = 'info', title, text }) {
  const style = CALLOUT_STYLES[variant] || CALLOUT_STYLES.info;
  const Icon = style.icon;
  return (
    <div className={`my-6 p-5 rounded-2xl border ${style.box} flex gap-3.5`}>
      <Icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${style.accent}`} />
      <div className="min-w-0">
        {title && <p className={`font-semibold mb-1 ${style.heading}`}>{title}</p>}
        <p className="text-gray-700 leading-relaxed"><InlineText text={text} /></p>
      </div>
    </div>
  );
}

function KeyTerms({ title = 'Key terms', terms }) {
  return (
    <div className="my-8">
      <div className="flex items-center gap-2 mb-3">
        <BookMarked className="w-5 h-5 text-indigo-600" />
        <h3 className="font-semibold text-gray-900">{title}</h3>
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        {terms.map((t, i) => (
          <div key={i} className="p-4 rounded-xl bg-gray-50 border border-gray-200">
            <p className="font-semibold text-indigo-700 mb-1">{t.term}</p>
            <p className="text-sm text-gray-600 leading-relaxed"><InlineText text={t.definition} /></p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ResourceLinks({ title = 'Explore further', items }) {
  return (
    <div className="my-8">
      <h3 className="font-semibold text-gray-900 mb-3">{title}</h3>
      <div className="grid gap-3">
        {items.map((item, i) => (
          <a
            key={i}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 rounded-xl border border-gray-200 bg-white hover:border-blue-300 hover:shadow-md transition-all flex items-start justify-between gap-4"
          >
            <div className="min-w-0">
              <p className="font-medium text-gray-900 group-hover:text-blue-700 transition-colors">{item.label}</p>
              {item.description && <p className="text-sm text-gray-500 mt-0.5">{item.description}</p>}
              <p className="text-xs text-gray-400 mt-1 truncate">{item.url.replace(/^https?:\/\//, '')}</p>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500 flex-shrink-0 mt-1 transition-colors" />
          </a>
        ))}
      </div>
    </div>
  );
}

function TryIt({ title, intro, steps, url, urlLabel }) {
  return (
    <div className="my-8 rounded-2xl border-2 border-teal-200 bg-teal-50/60 overflow-hidden">
      <div className="px-5 py-3 bg-teal-100/80 flex items-center gap-2">
        <Rocket className="w-5 h-5 text-teal-700" />
        <span className="font-semibold text-teal-900">{title}</span>
      </div>
      <div className="p-5">
        {intro && <p className="text-gray-700 mb-4 leading-relaxed"><InlineText text={intro} /></p>}
        <ol className="space-y-2.5 mb-4">
          {steps.map((step, i) => (
            <li key={i} className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-teal-600 text-white text-sm font-semibold flex items-center justify-center flex-shrink-0">
                {i + 1}
              </span>
              <span className="text-gray-700 leading-relaxed"><InlineText text={step} /></span>
            </li>
          ))}
        </ol>
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-600 text-white font-medium rounded-xl hover:bg-teal-700 transition-colors shadow-sm"
          >
            {urlLabel || 'Open the activity'}
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}

function DataTable({ headers, rows }) {
  return (
    <div className="my-8 overflow-x-auto rounded-xl border border-gray-200">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            {headers.map((h, i) => (
              <th key={i} className="text-left px-4 py-3 font-semibold text-gray-900">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 1 ? 'bg-gray-50/60' : 'bg-white'}>
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-gray-700 align-top leading-relaxed">
                  <InlineText text={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function InteractiveBlock({ component, caption, props: widgetProps, onInteractiveComplete }) {
  const Widget = interactiveComponents[component];
  if (!Widget) {
    return (
      <div className="my-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
        Unknown interactive: {component}
      </div>
    );
  }
  return (
    <div className="my-8">
      <Suspense
        fallback={
          <div className="p-10 rounded-2xl border border-gray-200 bg-gray-50 text-center text-gray-400 animate-pulse">
            Loading interactive…
          </div>
        }
      >
        <Widget {...(widgetProps || {})} onComplete={onInteractiveComplete} />
      </Suspense>
      {caption && <p className="mt-2 text-sm text-gray-500 italic text-center">{caption}</p>}
    </div>
  );
}

export default function LessonRenderer({ blocks, onCheckpointAnswered, onInteractiveComplete }) {
  return (
    <div>
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'intro':
            return (
              <p key={i} className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8 pb-6 border-b border-gray-100">
                <InlineText text={block.text} />
              </p>
            );
          case 'heading':
            return (
              <h2 key={i} className="text-2xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-3">
                <span className="w-1.5 h-7 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full flex-shrink-0" />
                {block.text}
              </h2>
            );
          case 'subheading':
            return <h3 key={i} className="text-xl font-semibold text-gray-900 mt-8 mb-3">{block.text}</h3>;
          case 'text':
            return (
              <p key={i} className="text-gray-700 leading-relaxed mb-4">
                <InlineText text={block.text} />
              </p>
            );
          case 'list': {
            const Tag = block.ordered ? 'ol' : 'ul';
            return (
              <Tag key={i} className={`mb-5 space-y-2 ${block.ordered ? 'list-none counter-list' : ''}`}>
                {block.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    {block.ordered ? (
                      <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {j + 1}
                      </span>
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex-shrink-0 mt-2.5" />
                    )}
                    <span className="text-gray-700 leading-relaxed"><InlineText text={item} /></span>
                  </li>
                ))}
              </Tag>
            );
          }
          case 'callout':
            return <Callout key={i} {...block} />;
          case 'keyTerms':
            return <KeyTerms key={i} title={block.title} terms={block.terms} />;
          case 'video':
            return <VideoEmbed key={i} {...block} />;
          case 'links':
            return <ResourceLinks key={i} title={block.title} items={block.items} />;
          case 'tryIt':
            return <TryIt key={i} {...block} />;
          case 'checkpoint':
            return (
              <Checkpoint
                key={i}
                question={block.question}
                options={block.options}
                correct={block.correct}
                explanation={block.explanation}
                onAnswered={onCheckpointAnswered}
              />
            );
          case 'interactive':
            return (
              <InteractiveBlock
                key={i}
                component={block.component}
                caption={block.caption}
                props={block.props}
                onInteractiveComplete={onInteractiveComplete}
              />
            );
          case 'table':
            return <DataTable key={i} headers={block.headers} rows={block.rows} />;
          case 'quote':
            return (
              <blockquote key={i} className="my-8 pl-5 border-l-4 border-indigo-300 flex gap-3">
                <Quote className="w-5 h-5 text-indigo-300 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg text-gray-700 italic leading-relaxed">
                    <InlineText text={block.text} />
                  </p>
                  {block.attribution && <p className="mt-2 text-sm font-medium text-gray-500">— {block.attribution}</p>}
                </div>
              </blockquote>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
