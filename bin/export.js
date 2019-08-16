const fs = require('fs')
const path = require('path')
const rp = require('request-promise')
const processSvg = require('./processSvg')
require('dotenv').config()

const figmaToken = process.env.FIGMA_TOKEN
const fileKey = process.env.FILE_KEY

// 获取元素节点
const getNodes = async function () {
  const nodes = await rp({
    url: `https://api.figma.com/v1/files/${fileKey}`,
    headers: {
      'X-FIGMA-TOKEN': figmaToken
    }
  })
  console.log('get Nodes successfully!')
  return nodes
}

// 获取 SVG
const getSvgs = async function (ids) {
  const svgs = await rp({
    url: `https://api.figma.com/v1/images/${fileKey}`,
    headers: {
      'X-FIGMA-TOKEN': figmaToken
    },
    qs: { ids, format: 'svg' }
  })
  console.log('get SVG url successfully!')
  return svgs
}

// 获取 SVG 代码
// 输出 { name: 'share', code: '<svg>...</svg>' }
const getSvgCode = async function (icons, url, key) {
  const svgCode = await rp(url)
  const code = await processSvg(svgCode)
  const current = icons.find(icon => {
    return icon.id===key
  })
  console.log(`get ${current.name} code successfully!`)
  return { name: current.name, code }
}

// 导出 SVG 文件
const exportSvgs = async function (iconsArg) {
  let icons
  if (iconsArg) {
    icons = iconsArg
  } else {
    // 输出 [{id: '1', name: 'activity'}]
    icons = await getNodes()
      .then(res => {
        const { components } = JSON.parse(res)
        return Object
          .keys(components)
          .map(key => ({id: key, name: components[key].name}))
      })
  }
  // 输出 '1,2,3,6'
  const ids = icons.map(icon => icon.id).join()

  // 输出 {'1': 'https://path/to/svg'}
  const svgUrls = await getSvgs(ids)
    .then(res => {
      const svgs = JSON.parse(res).images
      return svgs
    })

  // 添加 code，生成 json 文件
  const iconsPromises = Object.keys(svgUrls)
    .map(async key => await getSvgCode(icons, svgUrls[key], key))
  const finalIcons = await Promise.all(iconsPromises)
  const iconsObj = {}
  finalIcons
    .map(icon => {
      iconsObj[icon.name] = icon.code
    })
  console.log('export JSON successfully!')
  fs.writeFileSync(path.join(__dirname, 'icons.json'), JSON.stringify(iconsObj, null, 2))
}

module.exports = exportSvgs
