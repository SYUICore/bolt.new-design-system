import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Search } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      category: "Teste",
      title: "Gato soltando muito pelo: É normal? Como resolver?",
      date: "28/08/2025",
      image: "/public/section-1__asset-1.png",
    },
    {
      id: 2,
      category: "Teste",
      title: "Gato soltando muito pelo: É normal? Como resolver?",
      date: "28/08/2025",
      image: "/public/section-1__asset-2.png",
    },
    {
      id: 3,
      category: "Teste",
      title: "Gato soltando muito pelo: É normal? Como resolver?",
      date: "28/08/2025",
      image: "/public/section-1__asset-3.png",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFAF3]">
      <header className="border-b-2 border-[#161616] bg-[#FFFAF3]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-3xl font-bold text-[#161616]">Catlife</h1>
            <nav className="flex items-center gap-6">
              <a href="#" className="text-base font-bold text-[#161616] hover:text-[#F99830]">
                Blog
              </a>
              <button className="flex items-center gap-2 text-base font-bold text-[#161616] hover:text-[#F99830]">
                Categorias
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="secondary" size="md">
              Newsletter
            </Button>
            <Button variant="secondary" size="md">
              Newsletter
            </Button>
            <button className="p-2">
              <Search className="w-6 h-6 text-[#161616]" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16">
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-lg font-bold text-[#F99830]">Teste</span>
              <h2 className="text-5xl font-bold text-[#161616] leading-tight">
                Gato soltando muito pelo: É normal? Como resolver?
              </h2>
              <p className="text-lg text-[#78716C] leading-relaxed">
                É natural pelos de gato caírem. Porém, quando essa perda de pelos se torna excessiva
                pode-se criar uma preocupação. Entenda o que significa.
              </p>
              <span className="text-base text-[#78716C]">28/08/2025</span>
            </div>
            <div className="relative">
              <img
                src="/public/section-1__asset-4.png"
                alt="Gato se coçando"
                className="w-full h-[400px] object-cover rounded-[32px] border-2 border-[#161616]"
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden border-2 border-[#161616] hover:shadow-[4px_4px_0px_#F99830] transition-all">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-[240px] object-cover"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <span className="text-sm font-bold text-[#F99830]">{post.category}</span>
                  <h3 className="text-xl font-bold text-[#161616] leading-tight">
                    {post.title}
                  </h3>
                  <span className="text-sm text-[#78716C] block">{post.date}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="flex justify-center mb-20">
          <Button variant="secondary" size="lg">
            Ver mais
          </Button>
        </div>

        <section className="mb-16">
          <Card className="bg-[#FFF1DC] border-2 border-[#161616] p-12">
            <div className="max-w-2xl mx-auto text-center space-y-8">
              <h2 className="text-4xl font-bold text-[#161616]">
                Inscreva-se na nossa newsletter!
              </h2>
              <Button variant="secondary" size="lg">
                Assinar newsletter
              </Button>
            </div>
          </Card>
        </section>
      </main>

      <footer className="bg-[#FDCC94] border-t-2 border-[#161616] py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm text-[#161616]">Powered by BODIÉ</p>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
