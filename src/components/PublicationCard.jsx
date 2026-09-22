import { ArrowUpRight } from "lucide-react";
import { SCHOLAR_URL, AUTHOR_SURNAME } from "@/lib/publications";

/**
 * Renders the byline with his own name picked out, so a reader can see his
 * position on each paper without reading every author.
 */
function Byline({ authors }) {
  return (
    <p className="text-xs text-zinc-500 leading-relaxed">
      {authors.map((author, i) => (
        <span key={author}>
          {author.includes(AUTHOR_SURNAME) ? (
            <span className="text-gold font-medium">{author}</span>
          ) : (
            author
          )}
          {i < authors.length - 1 ? ", " : ""}
        </span>
      ))}
    </p>
  );
}

export default function PublicationCard({ publication }) {
  const { title, authors, venue, volume, year, citations, area, summary } = publication;

  return (
    <article className="card-lift h-full flex flex-col bg-black border border-hairline rounded-[1.25rem] overflow-hidden">
      {/* The cover is generated from the paper's own facts — its citation
          count, venue and year — rather than decorated with a stock photo
          that would have nothing to do with the research. */}
      <div className="paper-cover" data-area={area}>
        <div className="relative z-10">
          <p className="paper-cover-figure">{citations}</p>
          <p className="type-label text-on-gold/70">
            {citations === 1 ? "Citation" : "Citations"}
          </p>
        </div>
        <p className="paper-cover-venue relative z-10">
          {year} &middot; {venue}
          {volume ? ` ${volume}` : ""}
        </p>
      </div>

      <div className="flex flex-col flex-1 gap-3.5 p-6">
        <h3 className="type-heading text-lg text-ink">{title}</h3>

        <Byline authors={authors} />

        <p className="text-sm text-zinc-300 leading-relaxed flex-1">{summary}</p>

        <a
          href={SCHOLAR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="type-label inline-flex items-center gap-1.5 text-gold hover:text-ink transition-colors pt-1"
        >
          View on Scholar
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </article>
  );
}
