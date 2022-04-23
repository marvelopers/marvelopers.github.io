import path from 'path';
import { createFilePath } from 'gatsby-source-filesystem';

const POST_FILENAME_REGEX = /([0-9]+)\-([0-9]+)\-([0-9]+)\-(.+)/;

const getSlug = (node, getNode) => {
  const base = path.parse(node.fileAbsolutePath).name;
  const hasDate = POST_FILENAME_REGEX.test(base);

  if (hasDate) {
    const [_, year, month, day, filename] = POST_FILENAME_REGEX.exec(base);

    let slug = '';
    if (node.frontmatter.category) {
      slug = `/${node.frontmatter.category}/${year}/${month}/${day}/${filename}`;
    }

    return slug;
  }

  // 기본값
  return createFilePath({ node, getNode });
};

export const getDate = (node, getNode) => {
  // 문서에 date가 있을 경우 이것을 사용
  if (node.frontmatter.date) {
    return new Date(node.frontmatter.date);
  }

  // 날짜로 시작하는 파일 이름을 다음과 같이 변경한다.
  // yymmdd_how_to_be.md -> yy/mmdd/how_to_be
  const base = path.parse(node.fileAbsolutePath).name; // 'yy/mmdd/how_to_be'
  const hasDate = POST_FILENAME_REGEX.test(base);
  if (hasDate) {
    return new Date(base.substring(0, 10)).toJSON();
  }

  return '';
};

export const createMarkdown = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  const slug = getSlug(node, getNode);
  createNodeField({ name: `slug`, value: slug, node });

  const date = getDate(node, getNode);
  createNodeField({ name: `date`, value: date, node });

  if (!slug) {
    throw 'NO slug!!';
  }

  if (!date) {
    throw 'NO date!!';
  }
};

export default createMarkdown;
