import NextLink from 'next/link';

interface ContentProps {
  categories?: Array<any>;
}


export default function Content({
  categories
}: ContentProps) {
  return (
    <div
      sx={{
        padding: "10px 20px",
        background: "#333",
        backgroundImage: "url('/backgrounds/office.png')",
        margin: [null, " 0px"],
        display: "flex",
        justifyContent: "center",
      }}
    >
      <p
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "4rem",
        }}
      >
        {categories && categories.map((category, index) => (
          <NextLink key={index} href={`/blog/?search=${category.id}`} sx={{ variant: "styles.a" }}>
            <span sx={{ color: "#fff" }}>{category.title}</span>
          </NextLink>
        ))}
      </p>
    </div>
  );
}

