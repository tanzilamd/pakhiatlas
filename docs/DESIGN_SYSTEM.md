# Design system

Warm paper, deep forest, sage and muted ochre. Serif editorial headings and system sans body with Bengali system fallbacks. Original botanical artwork explicitly separated from species photographs. Four-column bird grid, three-column guide grid, single-column mobile articles, visible focus rings and reduced-motion support. CSS variables support light/dark. No external font/CDN dependencies. The generic artwork must not be recoloured and called a photograph of a species.

## Photo framing (latest owner preference)

No side gutters around bird-card images: previews fill4:3 boxes with object-fit:cover, prioritizing the head/crest through optional objectPosition metadata. Variety image previews follow the same rule. Main profile photographs span the article width with natural height; original image proportions remain available in the local viewer. Do not restore contain-style letterboxing on cards. Unpictured variety entries use compact editorial notes, with no empty image frame.
