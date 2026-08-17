import { argumentCards, concepts, lessons } from '@/content'

/**
 * Local search. Deliberately a hand-rolled token match rather than a dependency:
 * the corpus is a few hundred short records, so an index built once at module
 * load answers every query in well under a millisecond.
 */

export type SearchKind = 'lesson' | 'concept' | 'argument'

export interface SearchResult {
  kind: SearchKind
  id: string
  title: string
  subtitle: string
  href: string
  score: number
}

interface IndexEntry extends Omit<SearchResult, 'score'> {
  /** Lower-cased haystack: title plus body text, searched as a whole. */
  haystack: string
  titleLower: string
}

const index: IndexEntry[] = [
  ...lessons.map((lesson) => ({
    kind: 'lesson' as const,
    id: lesson.id,
    title: lesson.title,
    subtitle: lesson.summary,
    href: `/learn/lesson/${lesson.id}`,
    titleLower: lesson.title.toLowerCase(),
    haystack: [
      lesson.title,
      lesson.summary,
      ...lesson.sections.map((section) =>
        section.kind === 'definition'
          ? `${section.term} ${section.body}`
          : section.kind === 'misconception'
            ? `${section.claim} ${section.correction}`
            : section.kind === 'argument'
              ? (section.note ?? '')
              : section.body,
      ),
    ]
      .join(' ')
      .toLowerCase(),
  })),

  ...concepts.map((concept) => ({
    kind: 'concept' as const,
    id: concept.id,
    title: concept.term,
    subtitle: concept.short,
    href: `/library/concept/${concept.id}`,
    titleLower: concept.term.toLowerCase(),
    haystack: `${concept.term} ${concept.short} ${concept.body}`.toLowerCase(),
  })),

  ...argumentCards.map((argument) => ({
    kind: 'argument' as const,
    id: argument.id,
    title: argument.title,
    subtitle: argument.form ?? argument.tags.join(', '),
    href: `/library/argument/${argument.id}`,
    titleLower: argument.title.toLowerCase(),
    haystack: [
      argument.title,
      argument.form ?? '',
      argument.tags.join(' '),
      ...argument.premises.map((premise) => `${premise.text} ${premise.support ?? ''}`),
      argument.conclusion,
    ]
      .join(' ')
      .toLowerCase(),
  })),
]

/**
 * Scores by where the match lands: a title prefix beats a title substring,
 * which beats a body match. Every token must appear somewhere, so extra words
 * narrow results rather than widening them.
 */
export function search(query: string, limit = 20): SearchResult[] {
  const trimmed = query.trim().toLowerCase()
  if (trimmed.length === 0) return []

  const tokens = trimmed.split(/\s+/)

  const results: SearchResult[] = []

  for (const entry of index) {
    if (!tokens.every((token) => entry.haystack.includes(token))) continue

    let score = 1
    if (entry.titleLower.startsWith(trimmed)) score = 100
    else if (entry.titleLower.includes(trimmed)) score = 50
    else if (tokens.every((token) => entry.titleLower.includes(token))) score = 25

    results.push({
      kind: entry.kind,
      id: entry.id,
      title: entry.title,
      subtitle: entry.subtitle,
      href: entry.href,
      score,
    })
  }

  return results
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
    .slice(0, limit)
}

export const SEARCH_CORPUS_SIZE = index.length
