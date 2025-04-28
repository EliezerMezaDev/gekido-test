import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  portraid: string;
  date: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  async function getBlogFiles() {
    const markdownFiles = [
      "autodefensa.md",
    ];

    return Promise.all(
      markdownFiles.map(async (filename) => {
        try {
          const response = await fetch(`/blog/${filename}`);

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const text = await response.text();

          const lines = text.split("\n");

          const title = lines[0].replace("# ", "").replace("\r", "");
          const slug = filename.replace(".md", "");
          const description = lines[1]
            .replace("description: ", "")
            .replace("\r", "");
          const portraid = lines[2].replace("portraid: ", "").replace("\r", "");
          const date = lines[3].replace("date: ", "").replace("\r", "");

          return {
            slug,
            title,
            description,
            portraid,
            date,
          };
        } catch (error) {
          console.error(`Error loading post ${filename}:`, error);
          return null;
        }
      })
    );
  }

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsData = await getBlogFiles();

        const validPosts = postsData.filter(
          (post): post is BlogPost => post !== null
        );
        console.log("Posts cargados:", validPosts);
        setPosts(validPosts);
      } catch (error) {
        console.error("Error loading blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link key={post.slug} to={`/blog/${post.slug}`} className="group">
            <article className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300">
              <div className="relative h-48">
                <img
                  src={post.portraid}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 group-hover:text-red-600">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="text-red-600 group-hover:underline">
                    Leer más →
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;

/*


useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Obtener la lista de archivos de la carpeta
        const response = await fetch("/src/assets/data/blog/");
        const text = await response.text();
        
        // Crear un DOM parser para analizar la respuesta
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, "text/html");
        
        // Obtener todos los enlaces que terminan en .md
        const markdownFiles = Array.from(doc.querySelectorAll("a"))
          .map(link => link.href)
          .filter(href => href.endsWith(".md"))
          .map(href => {
            const url = new URL(href);
            return url.pathname.split("/").pop() || "";
          });

        // Leer cada archivo markdown
        const postsData = await Promise.all(
          markdownFiles.map(async (filename) => {
            try {
              const response = await fetch(`/src/assets/data/blog/${filename}`);
              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }
              const text = await response.text();
              
              // Parsear el contenido del markdown
              const lines = text.split("\n");
              const title = lines[0].replace("# ", "");
              const slug = lines[1].replace("slug: ", "");
              const description = lines[2].replace("description: ", "");
              const portraid = lines[3].replace("portraid: ", "");
              const date = lines[4].replace("date: ", "");

              return {
                slug,
                title,
                description,
                portraid,
                date,
              };
            } catch (error) {
              console.error(`Error loading post ${filename}:`, error);
              return null;
            }
          })
        );

        // Filtrar los posts que se cargaron correctamente
        const validPosts = postsData.filter((post): post is BlogPost => post !== null);
        console.log("Posts cargados:", validPosts);
        setPosts(validPosts);
      } catch (error) {
        console.error("Error loading blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);


*/
