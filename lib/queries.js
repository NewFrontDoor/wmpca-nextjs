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
  }
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

const defaultQuery = `
  *[_id == "global-config"][0] {
    "image": logo
  }
`;

export {mainQuery, menuQuery, pageQuery, defaultQuery};
