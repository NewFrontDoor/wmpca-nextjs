const mainQuery = `
*[_type == "main"][0]
`;

const menuQuery = `
*[_type == "main"][0] {
  menuitems[]{
    text,
    childpages[]->{
      title,
      slug,
      'pathname': '/' + slug.current
    }
  },
  "footer": *[_type == "footer"][0]
}
`;

const pageQuery = slug => `
*[_type == "page" && '${slug}' match slug.current][0] {
  ...,
  content[]{
    ...,
    _type == 'reference' => @-> {
      ...,
      blocks[] {
        ...,
        _type == 'reference' => @ -> {
          ...,
          'image': mainImage.asset->url,
          'header': title,
          'link': slug.current
        }
      }
    },
    markDefs[] {
      ...,
      _type == 'internalLink' => {
          'slug': @.reference->slug.current
      }
    }
  },
  'mainImage': mainImage.asset->url
}
`;

const blogPageQuery = `
*[_type == "blog_post"]{
  ...,
  "date": _createdAt,
  categories[]->,
  author->
}
`;

const blogPostQuery = slug => `
*[_type == "blog_post" && '${slug}' match slug.current][0]{
  ...,
  "date": _createdAt,
  categories[]->,
  author->
}
`;

const defaultQuery = `
  *[_id == "global-config"][0] {
    "image": logo
  }
`;

export {
  mainQuery,
  menuQuery,
  pageQuery,
  defaultQuery,
  blogPageQuery,
  blogPostQuery
};
