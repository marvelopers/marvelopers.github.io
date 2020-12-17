const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

function getSlug(node, getNode) {
  // 문서에 permalink가 있을 경우 이것을 사용
  // const { permalink } = node.frontmatter
  // if (permalink) {
  //   return `${permalink.startsWith("/") ? "" : "/"}${permalink}`
  // }

  // 날짜로 시작하는 파일 이름을 다음과 같이 변경한다.
  // yymmdd_how_to_be.md -> yy/mmdd/how_to_be
  const base = path.parse(node.fileAbsolutePath).name // 'yy/mmdd/how_to_be'
  const ptn = /^(\d\d)(\d\d\d\d)_(.+)/
  const hasDate = ptn.test(base)
  if (hasDate) {
    let slug = base.replace(ptn, "/$1/$2/$3")
    if (node.frontmatter.category) {
      slug = `/${node.frontmatter.category}${slug}.html`
    }

    return slug
  }

  // 기본값
  return createFilePath({ node, getNode })
}

function getDate(node, getNode) {
  // 문서에 date가 있을 경우 이것을 사용
  if (node.frontmatter.date) {
    return new Date(node.frontmatter.date)
  }

  // 날짜로 시작하는 파일 이름을 다음과 같이 변경한다.
  // yymmdd_how_to_be.md -> yy/mmdd/how_to_be
  const base = path.parse(node.fileAbsolutePath).name // 'yy/mmdd/how_to_be'
  const ptn = /^(\d\d)(\d\d)(\d\d)_(.+)/
  const hasDate = ptn.test(base)
  if (hasDate) {
    return new Date(base.substr(0, 10))
  }

  return ""
}

exports.createMarkdown = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  const slug = getSlug(node, getNode)
  console.log('THIS IS SLUG', slug)
  createNodeField({ name: `slug`, value: slug, node })

  const date = getDate(node, getNode)
  createNodeField({ name: `date`, value: date, node })

  if (!slug || !date) {
    throw "NO slug or date!!"
  }
}