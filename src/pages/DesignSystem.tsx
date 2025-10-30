import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Search, Heart, Plus, Settings } from "lucide-react";

const DesignSystem = () => {
  return (
    <div className="min-h-screen bg-[#FFFAF3] py-12 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-[#161616]">Catlife Design System</h1>
          <p className="text-xl text-[#78716C]">Componentes e variantes disponíveis</p>
        </div>

        <section className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-[#161616] mb-2">Buttons</h2>
            <p className="text-lg text-[#78716C] mb-8">Todas as variantes e tamanhos disponíveis</p>
          </div>

          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#161616]">Primary Variant</h3>
              <div className="flex flex-wrap gap-4 items-center p-8 bg-white rounded-lg border-2 border-[#161616]">
                <Button variant="primary" size="sm">Small Button</Button>
                <Button variant="primary" size="md">Medium Button</Button>
                <Button variant="primary" size="lg">Large Button</Button>
                <Button variant="primary" size="icon"><Plus /></Button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#161616]">Secondary Variant</h3>
              <div className="flex flex-wrap gap-4 items-center p-8 bg-white rounded-lg border-2 border-[#161616]">
                <Button variant="secondary" size="sm">Small Button</Button>
                <Button variant="secondary" size="md">Medium Button</Button>
                <Button variant="secondary" size="lg">Large Button</Button>
                <Button variant="secondary" size="icon"><Settings /></Button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#161616]">Outline Variant</h3>
              <div className="flex flex-wrap gap-4 items-center p-8 bg-white rounded-lg border-2 border-[#161616]">
                <Button variant="outline" size="sm">Small Button</Button>
                <Button variant="outline" size="md">Medium Button</Button>
                <Button variant="outline" size="lg">Large Button</Button>
                <Button variant="outline" size="icon"><Heart /></Button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#161616]">Ghost Variant</h3>
              <div className="flex flex-wrap gap-4 items-center p-8 bg-white rounded-lg border-2 border-[#161616]">
                <Button variant="ghost" size="sm">Small Button</Button>
                <Button variant="ghost" size="md">Medium Button</Button>
                <Button variant="ghost" size="lg">Large Button</Button>
                <Button variant="ghost" size="icon"><Search /></Button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#161616]">Destructive Variant</h3>
              <div className="flex flex-wrap gap-4 items-center p-8 bg-white rounded-lg border-2 border-[#161616]">
                <Button variant="destructive" size="sm">Small Button</Button>
                <Button variant="destructive" size="md">Medium Button</Button>
                <Button variant="destructive" size="lg">Large Button</Button>
                <Button variant="destructive" size="icon">×</Button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#161616]">Disabled State</h3>
              <div className="flex flex-wrap gap-4 items-center p-8 bg-white rounded-lg border-2 border-[#161616]">
                <Button variant="primary" disabled>Disabled Primary</Button>
                <Button variant="secondary" disabled>Disabled Secondary</Button>
                <Button variant="outline" disabled>Disabled Outline</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-[#161616] mb-2">Cards</h2>
            <p className="text-lg text-[#78716C] mb-8">Estrutura de cards com diferentes configurações</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-[#161616]">
              <CardHeader>
                <CardTitle>Card Básico</CardTitle>
                <CardDescription>Este é um card com título e descrição</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-[#78716C]">Conteúdo do card aparece aqui.</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#161616]">
              <CardHeader>
                <CardTitle>Card com Footer</CardTitle>
                <CardDescription>Card incluindo footer com ações</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-[#78716C]">Este card possui um footer com botões de ação.</p>
              </CardContent>
              <CardFooter className="gap-2">
                <Button variant="outline" size="sm">Cancelar</Button>
                <Button variant="primary" size="sm">Confirmar</Button>
              </CardFooter>
            </Card>

            <Card className="border-2 border-[#161616]">
              <div className="h-40 bg-gradient-to-br from-[#F9A858] to-[#F99830] rounded-t-[30px]"></div>
              <CardHeader>
                <CardTitle>Card com Imagem</CardTitle>
                <CardDescription>Card com área de imagem no topo</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-[#78716C]">Ideal para posts de blog ou produtos.</p>
              </CardContent>
            </Card>

            <Card className="bg-[#FFF1DC] border-2 border-[#161616]">
              <CardHeader>
                <CardTitle>Card Colorido</CardTitle>
                <CardDescription>Background customizado</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-[#78716C]">Cards podem ter backgrounds personalizados.</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#161616] hover:shadow-[4px_4px_0px_#F99830] transition-all cursor-pointer">
              <CardHeader>
                <CardTitle>Card Interativo</CardTitle>
                <CardDescription>Com efeito hover</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-[#78716C]">Passe o mouse para ver o efeito de shadow.</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#161616]">
              <CardHeader>
                <CardTitle>Card Completo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-[#78716C]">Este é um exemplo completo com múltiplos elementos.</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-[#F9A858] text-[#161616] text-sm font-bold rounded-full">Tag 1</span>
                  <span className="px-3 py-1 bg-[#F9A858] text-[#161616] text-sm font-bold rounded-full">Tag 2</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" size="sm" className="w-full">Ver Mais</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-[#161616] mb-2">Inputs</h2>
            <p className="text-lg text-[#78716C] mb-8">Campos de entrada de texto</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-[#161616]">
              <CardHeader>
                <CardTitle>Input Padrão</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Digite seu texto aqui..." />
                <Input placeholder="Input com valor" defaultValue="Texto de exemplo" />
              </CardContent>
            </Card>

            <Card className="border-2 border-[#161616]">
              <CardHeader>
                <CardTitle>Input Desabilitado</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Input desabilitado" disabled />
                <Input defaultValue="Não editável" disabled />
              </CardContent>
            </Card>

            <Card className="border-2 border-[#161616]">
              <CardHeader>
                <CardTitle>Tipos de Input</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input type="email" placeholder="seu@email.com" />
                <Input type="password" placeholder="Senha" />
                <Input type="number" placeholder="123" />
              </CardContent>
            </Card>

            <Card className="border-2 border-[#161616]">
              <CardHeader>
                <CardTitle>Input com Label</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#161616]">Nome completo</label>
                  <Input placeholder="João Silva" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#161616]">Email</label>
                  <Input type="email" placeholder="joao@email.com" />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-[#161616] mb-2">Typography</h2>
            <p className="text-lg text-[#78716C] mb-8">Hierarquia tipográfica do design system</p>
          </div>

          <Card className="border-2 border-[#161616]">
            <CardContent className="p-8 space-y-6">
              <div>
                <h1 className="text-5xl font-bold text-[#161616]">Heading 1</h1>
                <p className="text-sm text-[#78716C] mt-2">text-5xl font-bold</p>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-[#161616]">Heading 2</h2>
                <p className="text-sm text-[#78716C] mt-2">text-4xl font-bold</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#161616]">Heading 3</h3>
                <p className="text-sm text-[#78716C] mt-2">text-3xl font-bold</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-[#161616]">Heading 4</h4>
                <p className="text-sm text-[#78716C] mt-2">text-2xl font-bold</p>
              </div>
              <div>
                <h5 className="text-xl font-bold text-[#161616]">Heading 5</h5>
                <p className="text-sm text-[#78716C] mt-2">text-xl font-bold</p>
              </div>
              <div>
                <p className="text-lg text-[#161616]">Body Large - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="text-sm text-[#78716C] mt-2">text-lg</p>
              </div>
              <div>
                <p className="text-base text-[#161616]">Body Medium - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="text-sm text-[#78716C] mt-2">text-base</p>
              </div>
              <div>
                <p className="text-sm text-[#78716C]">Body Small - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="text-sm text-[#78716C] mt-2">text-sm text-[#78716C]</p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-[#161616] mb-2">Colors</h2>
            <p className="text-lg text-[#78716C] mb-8">Paleta de cores do design system</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 border-[#161616]">
              <CardContent className="p-6 space-y-4">
                <div className="h-24 bg-[#161616] rounded-lg border-2 border-[#161616]"></div>
                <div>
                  <p className="font-bold text-[#161616]">Primary</p>
                  <p className="text-sm text-[#78716C]">#161616</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#161616]">
              <CardContent className="p-6 space-y-4">
                <div className="h-24 bg-[#F99830] rounded-lg border-2 border-[#161616]"></div>
                <div>
                  <p className="font-bold text-[#161616]">Accent</p>
                  <p className="text-sm text-[#78716C]">#F99830</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#161616]">
              <CardContent className="p-6 space-y-4">
                <div className="h-24 bg-[#F9A858] rounded-lg border-2 border-[#161616]"></div>
                <div>
                  <p className="font-bold text-[#161616]">Secondary</p>
                  <p className="text-sm text-[#78716C]">#F9A858</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#161616]">
              <CardContent className="p-6 space-y-4">
                <div className="h-24 bg-[#FFFAF3] rounded-lg border-2 border-[#161616]"></div>
                <div>
                  <p className="font-bold text-[#161616]">Background</p>
                  <p className="text-sm text-[#78716C]">#FFFAF3</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#161616]">
              <CardContent className="p-6 space-y-4">
                <div className="h-24 bg-[#FFF1DC] rounded-lg border-2 border-[#161616]"></div>
                <div>
                  <p className="font-bold text-[#161616]">Background Alt</p>
                  <p className="text-sm text-[#78716C]">#FFF1DC</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#161616]">
              <CardContent className="p-6 space-y-4">
                <div className="h-24 bg-[#78716C] rounded-lg border-2 border-[#161616]"></div>
                <div>
                  <p className="font-bold text-[#161616]">Muted</p>
                  <p className="text-sm text-[#78716C]">#78716C</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#161616]">
              <CardContent className="p-6 space-y-4">
                <div className="h-24 bg-[#FDCC94] rounded-lg border-2 border-[#161616]"></div>
                <div>
                  <p className="font-bold text-[#161616]">Footer</p>
                  <p className="text-sm text-[#78716C]">#FDCC94</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#161616]">
              <CardContent className="p-6 space-y-4">
                <div className="h-24 bg-[#EF4444] rounded-lg border-2 border-[#161616]"></div>
                <div>
                  <p className="font-bold text-[#161616]">Destructive</p>
                  <p className="text-sm text-[#78716C]">#EF4444</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DesignSystem;
