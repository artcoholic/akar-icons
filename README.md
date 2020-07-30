# Icon Automation Workflow Using Figma

It's a repository for [Figma Icon Automation Plugin](https://github.com/leadream/figma-icon-automation).

## Development
Create a `.env` in the root directory. Put your Figma file url and Figma token inside.

```
FIGMA_FILE_URL=https://www.figma.com/file/********************/juuust-react-icon
FIGMA_TOKEN=********************************
```

### fetch SVG file
Run `yarn fetch` to fetch SVG files from Figma file. This will pull your SVGs in `./src/svg/`.

### generate React components for icons
Run `yarn generate` to generate component files from SVG files. This will pull your component files in `./src/icons/`.

### Develop in local
Run `yarn dev` to develop the application in which you can see all icons.

### Develop in local
Run `yarn build` to build Pages.
