export interface Research {
  title: string;
  abstract: string;
  image: string;
  tags: string[];
}

export interface Paper {
  title: string;
  authors: string[];
  conference: string;
  year: number;
  abstract: string;
  link: string;
  image: string;
  tags: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  titles: string[];
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


export function validateResearch(research: unknown): research is Research {
  const r = research as Research;
  const isValid = 
    typeof r.title === 'string' &&
    typeof r.abstract === 'string' &&
    typeof r.image === 'string' &&
    Array.isArray(r.tags) &&
    r.tags.every(tag => typeof tag === 'string');

  if (!isValid) {
    console.warn('Invalid research data:', {
      paper: r,
      validationErrors: {
        title: typeof r.title !== 'string' ? 'Invalid title type' : null,
        abstract: typeof r.abstract !== 'string' ? 'Invalid abstract type' : null,
        image: typeof r.image !== 'string' ? 'Invalid image type' : null,
        tags: !Array.isArray(r.tags) || !r.tags.every(tag => typeof tag === 'string') 
          ? 'Invalid tags array' : null,
      }
    });
  }

  return isValid;
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
    typeof p.image === 'string';

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
    Array.isArray(m.titles) &&
    m.titles.every(exp => typeof exp === 'string') &&
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
        expertise: !Array.isArray(m.titles) || !m.titles.every(exp => typeof exp === 'string') 
          ? 'Invalid titles array' : null,
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

export const mailto = "mailto:goodailab@gmail.com?subject=Inquiry%20About%20Joining%20The%20Good%20AI%20Lab&body=Hello%20Good%20AI%20Lab%20Team,%0A%0AI%20would%20like%20to%20learn%20more%20about%20your%20organization%20and%20the%20opportunities%20to%20get%20involved.%0A%0ABest%20regards,%0A[Your%20Name]";
