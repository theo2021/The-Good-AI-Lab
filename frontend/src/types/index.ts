export interface Paper {
  title: string;
  authors: string[];
  conference: string;
  year: number;
  abstract: string;
  link: string;
  image: string;
  tags: string[];
  category: 'stable-diffusion' | 'adaptive-agents' | 'vision';
}

export interface CommunityPaper {
  title: string;
  authors: string[];
  institution: string;
  year: number;
  abstract: string;
  link: string;
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  expertise: string[];
  links: {
    scholar?: string;
    linkedin?: string;
  };
}

export interface NewsItem {
  title: string;
  source: string;
  date: string;
  excerpt: string;
  link: string;
  image: string;
}

export function validatePaper(paper: unknown): paper is Paper {
  const p = paper as Paper;
  const isValid = 
    typeof p.title === 'string' &&
    Array.isArray(p.authors) &&
    p.authors.every(author => typeof author === 'string') &&
    typeof p.conference === 'string' &&
    typeof p.year === 'number' &&
    typeof p.abstract === 'string' &&
    typeof p.link === 'string' &&
    typeof p.image === 'string' &&
    Array.isArray(p.tags) &&
    p.tags.every(tag => typeof tag === 'string') &&
    ['stable-diffusion', 'adaptive-agents', 'vision'].includes(p.category);

  if (!isValid) {
    console.warn('Invalid paper data:', {
      paper: p,
      validationErrors: {
        title: typeof p.title !== 'string' ? 'Invalid title type' : null,
        authors: !Array.isArray(p.authors) || !p.authors.every(author => typeof author === 'string') 
          ? 'Invalid authors array' : null,
        conference: typeof p.conference !== 'string' ? 'Invalid conference type' : null,
        year: typeof p.year !== 'number' ? 'Invalid year type' : null,
        abstract: typeof p.abstract !== 'string' ? 'Invalid abstract type' : null,
        link: typeof p.link !== 'string' ? 'Invalid link type' : null,
        image: typeof p.image !== 'string' ? 'Invalid image type' : null,
        tags: !Array.isArray(p.tags) || !p.tags.every(tag => typeof tag === 'string') 
          ? 'Invalid tags array' : null,
        category: !['stable-diffusion', 'adaptive-agents', 'vision'].includes(p.category) 
          ? 'Invalid category' : null,
      }
    });
  }

  return isValid;
}

export function validateCommunityPaper(paper: unknown): paper is CommunityPaper {
  const p = paper as CommunityPaper;
  const isValid = 
    typeof p.title === 'string' &&
    Array.isArray(p.authors) &&
    p.authors.every(author => typeof author === 'string') &&
    typeof p.institution === 'string' &&
    typeof p.year === 'number' &&
    typeof p.abstract === 'string' &&
    typeof p.link === 'string' &&
    typeof p.image === 'string';

  if (!isValid) {
    console.warn('Invalid community paper data:', {
      paper: p,
      validationErrors: {
        title: typeof p.title !== 'string' ? 'Invalid title type' : null,
        authors: !Array.isArray(p.authors) || !p.authors.every(author => typeof author === 'string') 
          ? 'Invalid authors array' : null,
        institution: typeof p.institution !== 'string' ? 'Invalid institution type' : null,
        year: typeof p.year !== 'number' ? 'Invalid year type' : null,
        abstract: typeof p.abstract !== 'string' ? 'Invalid abstract type' : null,
        link: typeof p.link !== 'string' ? 'Invalid link type' : null,
        image: typeof p.image !== 'string' ? 'Invalid image type' : null,
      }
    });
  }

  return isValid;
}

export function validateTeamMember(member: unknown): member is TeamMember {
  const m = member as TeamMember;
  const isValid = 
    typeof m.name === 'string' &&
    typeof m.role === 'string' &&
    typeof m.image === 'string' &&
    typeof m.bio === 'string' &&
    Array.isArray(m.expertise) &&
    m.expertise.every(exp => typeof exp === 'string') &&
    typeof m.links === 'object' &&
    (!m.links.scholar || typeof m.links.scholar === 'string') &&
    (!m.links.linkedin || typeof m.links.linkedin === 'string');

  if (!isValid) {
    console.warn('Invalid team member data:', {
      member: m,
      validationErrors: {
        name: typeof m.name !== 'string' ? 'Invalid name type' : null,
        role: typeof m.role !== 'string' ? 'Invalid role type' : null,
        image: typeof m.image !== 'string' ? 'Invalid image type' : null,
        bio: typeof m.bio !== 'string' ? 'Invalid bio type' : null,
        expertise: !Array.isArray(m.expertise) || !m.expertise.every(exp => typeof exp === 'string') 
          ? 'Invalid expertise array' : null,
        links: typeof m.links !== 'object' ? 'Invalid links object' : null,
      }
    });
  }

  return isValid;
}

export function validateNewsItem(item: unknown): item is NewsItem {
  const n = item as NewsItem;
  const isValid = 
    typeof n.title === 'string' &&
    typeof n.source === 'string' &&
    typeof n.date === 'string' &&
    typeof n.excerpt === 'string' &&
    typeof n.link === 'string' &&
    typeof n.image === 'string';

  if (!isValid) {
    console.warn('Invalid news item data:', {
      item: n,
      validationErrors: {
        title: typeof n.title !== 'string' ? 'Invalid title type' : null,
        source: typeof n.source !== 'string' ? 'Invalid source type' : null,
        date: typeof n.date !== 'string' ? 'Invalid date type' : null,
        excerpt: typeof n.excerpt !== 'string' ? 'Invalid excerpt type' : null,
        link: typeof n.link !== 'string' ? 'Invalid link type' : null,
        image: typeof n.image !== 'string' ? 'Invalid image type' : null,
      }
    });
  }

  return isValid;
} 