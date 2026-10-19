<!-- Project guide: describes the current source layout and how to preview the site. -->

# Personal Website

Tahsan Ul Alam's personal portfolio, built with plain HTML, CSS, and JavaScript.
Website: https://tahsan-alam.github.io/Personal-Website/index.html

## Source organization

```text
Personal-Website/
├── index.html              # Introduction and two featured project previews
├── projects.html           # Three research project case studies
├── contact.html            # School email, personal email, and social links
├── style.css               # Shared typography, colors, layouts, and responsive rules
├── script.js               # Image viewer, focus restoration, and footer year updates
├── assets/                 # Images and icon used by the current website
│   └── legacy/             # Preserved original images and the previous portrait
├── INFORMATION_NEEDED.md   # Missing project links and optional content
└── README.md               # This guide
```

The page files stay at the root so existing navigation and GitHub Pages URLs work.
All currently used image paths point into `assets/`. Files in `assets/legacy/` are
retained for reference and are not used by the current pages.

## Preview

Open `index.html` in a browser. No installation or build step is required.
An internet connection is needed to load the original Moderustic Google font;
otherwise, the browser uses the fallback font.

## Editing

Edit content in the relevant HTML page, shared styling in `style.css`, and
interactive behavior in `script.js`. Add new images to `assets/` and use relative
paths so links also work when the site is hosted under a repository URL.

Code files contain section comments, and JavaScript functions have purpose comments.
