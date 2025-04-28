import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

interface BlogPostContent {
  title: string;
  description: string;
  portraid: string;
  content: string;
  date: string;
}

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPostContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/blog/${slug}.md`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text();
        
        // Parsear el contenido del markdown
        const lines = text.split("\n");
        const title = lines[0].replace("# ", "").replace("\r", "");
        const description = lines[1].replace("description: ", "").replace("\r", "");
        const portraid = lines[2].replace("portraid: ", "").replace("\r", "");
        const date = lines[3].replace("date: ", "").replace("\r", "");
        const content = lines.slice(5).join("\n");

        setPost({
          title,
          description,
          portraid,
          content,
          date,
        });
      } catch (error) {
        console.error("Error loading blog post:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Post no encontrado</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-4xl mx-auto">
        <div className="relative h-96 mb-8">
          <img
            src={post.portraid}
            alt={post.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600 mb-8">{post.description}</p>
        <div className="prose prose-lg max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
        <div className="mt-8 text-gray-500">
          Publicado el {post.date}
        </div>
      </article>
    </div>
  );
};

export default BlogPost; 