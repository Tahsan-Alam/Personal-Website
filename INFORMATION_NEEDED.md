<!-- Maintainer handoff: missing values are deliberately not replaced with guessed links. -->

# Information needed

The new design is implemented locally. The supplied repositories are linked in
`projects.html`. Public platform or demo URLs remain blank below, and no buttons
are shown for those missing URLs.

| Project | Repository URL | Public platform or demo URL |
| --- | --- | --- |
| Neuron Segmentation Platform | [Frontend repository](https://github.com/Glykys-Lab/NeuronSegmentationfrontend) | |
| LabStats | [Statistics in R](https://github.com/Glykys-Lab/Statistics-in-R) | |

The segmentation project also links to the existing
[ANMAF](https://github.com/Glykys-Lab/ANMAF) and
[SWIN](https://github.com/Glykys-Lab/SWIN) model repositories.

Public platform or demo links can be added if available. If a project has no
public demo, its repository links are sufficient.

Optional additions:

- A segmentation result image, preferably an input/output pair.
- A LabStats graph or results screenshot.
- Project dates and verified usage or performance measurements, if you want those displayed.

Current images and the existing portrait are already integrated. The KANI DARE
repository and direct research poster PDF links are already present.

## Source organization

- `index.html`: introduction and two featured project previews.
- `projects.html`: all three research projects and their images.
- `contact.html`: school email, personal email, LinkedIn, and GitHub contact actions.
- `style.css`: shared colors, layouts, components, and responsive rules.
- `script.js`: image enlargement, focus restoration, and footer year updates.
- `assets/`: current portrait, project screenshots, full poster preview, backgrounds, and icon.
- `assets/legacy/`: preserved original images and the previous portrait; unused by the current pages.
- `README.md`: source layout and local preview instructions.

Every changed website code file contains explanatory comments. Each JavaScript
function has a comment describing its purpose. No build step is required.
