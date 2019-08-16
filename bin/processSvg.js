const Svgo = require('svgo');
const cheerio = require('cheerio')

/**
 * Optimize SVG with `svgo`.
 * @param {string} svg - An SVG string.
 * @returns {Promise<string>}
 */
function optimize(svg) {
  const svgo = new Svgo({
    plugins: [
      { convertShapeToPath: false },
      { mergePaths: false },
      { removeAttrs: { attrs: '(fill|stroke.*)' } },
      { removeTitle: true },
    ],
  });

  return new Promise(resolve => {
    svgo.optimize(svg).then(({ data }) => resolve(data));
  });
}

/**
 * remove SVG element.
 * @param {string} svg - An SVG string.
 * @returns {string}
 */
function removeSVGElement(svg) {
  const $ = cheerio.load(svg);
  return $('body').children().html();
}

/**
 * Process SVG string.
 * @param {string} svg - An SVG string.
 * @param {Promise<string>}
 */
async function processSvg(svg) {
  const optimized = await optimize(svg)
    // remove semicolon inserted by prettier
    // because prettier thinks it's formatting JSX not HTML
    .then(svg => svg.replace(/;/g, ''))
    .then(removeSVGElement)
  return optimized;
}

module.exports = processSvg;
