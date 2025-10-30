# CatLife Design System

Sistema de design unificado para o projeto CatLife, com componentes padronizados e reutilizáveis.

## Estrutura

```
design-system/
├── tokens.ts              # Design tokens (cores, tipografia, espaçamentos)
├── components/
│   ├── Button.tsx         # Componente de botão com variantes
│   ├── Card.tsx          # Componente de card
│   └── Input.tsx         # Componente de input
└── index.ts              # Exports centralizados
```

## Instalação e Uso

### Importar o Design System Completo

```typescript
import { Button, Card, Input, designTokens } from './design-system';
```

### Importar Componentes Individuais

```typescript
import { Button } from './design-system/components/Button';
import { Card } from './design-system/components/Card';
import { Input } from './design-system/components/Input';
```

## Componentes

### Button

Botão com 4 variantes e 3 tamanhos, seguindo o padrão visual do CatLife.

**Variantes:**
- `primary` - Botão primário (fundo preto, borda laranja, sombra laranja)
- `secondary` - Botão secundário (fundo laranja, sem sombra inicial)
- `outline` - Botão com borda (transparente com borda preta)
- `ghost` - Botão fantasma (transparente, borda aparece no hover)

**Tamanhos:**
- `sm` - Pequeno (h-10, px-6, text-base)
- `md` - Médio (h-12, px-8, text-lg) [padrão]
- `lg` - Grande (h-14, px-10, text-xl)

**Características:**
- Bordas arredondadas completas (rounded-full)
- Sombra padrão: `2px 2px 0px #F99830`
- Transições suaves em todos os estados
- Estados hover e active com feedback visual
- Fonte bold em todos os botões
- Ring focus de 2px para acessibilidade

**Exemplo:**

```tsx
<Button variant="primary" size="md">
  Simular plano
</Button>

<Button variant="secondary" size="lg">
  Vamos lá
</Button>

<Button variant="outline" size="sm">
  Entrar
</Button>
```

### Card

Componente de card com glassmorphism e sombras internas.

**Subcomponentes:**
- `Card` - Container principal
- `CardHeader` - Cabeçalho do card
- `CardTitle` - Título do card
- `CardDescription` - Descrição do card
- `CardContent` - Conteúdo principal
- `CardFooter` - Rodapé do card

**Características:**
- Border radius: 32px
- Background: rgba(255, 250, 243, 0.2) com backdrop blur
- Sombras internas para efeito de profundidade
- Estilo glassmorphism

**Exemplo:**

```tsx
<Card>
  <CardContent>
    <CardTitle>Encontre a opção ideal</CardTitle>
    <CardDescription>Configure seu plano</CardDescription>
  </CardContent>
</Card>
```

### Input

Campo de input estilizado seguindo o padrão visual.

**Características:**
- Altura: 48px (h-12)
- Border radius completo (rounded-full)
- Borda: 2px sólida #FFFAF3
- Background semi-transparente
- Padding: 16px horizontal
- Font size: 18px (text-lg)
- Ring focus de 2px para acessibilidade
- Transições suaves

**Exemplo:**

```tsx
<Input
  placeholder="Nome do seu pet"
  type="text"
/>
```

## Design Tokens

### Cores

```typescript
colors: {
  primary: {
    dark: '#161616',      // Preto principal
    orange: '#F99830',    // Laranja para acentos
    light: '#FFFAF3',     // Branco/creme
    beige: '#F5E6D3',     // Bege de fundo
  },
  card: {
    specialist: '#E86F1F',  // Laranja escuro
    procedures: '#F9A858',  // Laranja médio
    discounts: '#F9B968',   // Laranja claro
    coverage: '#E8C89E',    // Bege/pêssego
  },
  text: {
    primary: '#161616',     // Texto principal
    secondary: '#78716C',   // Texto secundário
  },
}
```

### Tipografia

```typescript
typography: {
  fontFamily: {
    primary: "'Roc_Grotesk-Bold', sans-serif",
    regular: "'Roc_Grotesk-Regular', sans-serif",
    medium: "'Roc_Grotesk-Medium', sans-serif",
  },
  fontSize: {
    sm: '16px',
    base: '18px',
    lg: '20px',
    xl: '23px',
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
}
```

### Espaçamentos

```typescript
spacing: {
  xs: '8px',
  sm: '12px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '40px',
  '3xl': '48px',
}
```

### Border Radius

```typescript
borderRadius: {
  sm: '8px',
  md: '16px',
  lg: '32px',
  full: '1000px',  // Círculo completo
}
```

### Sombras

```typescript
shadows: {
  button: '2px 2px 0px',           // Sombra offset para botões
  card: '0 4px 12px rgba(0, 0, 0, 0.15)',  // Sombra suave para cards
}
```

### Transições

```typescript
transitions: {
  fast: '150ms ease-in-out',
  normal: '300ms ease-in-out',
  slow: '500ms ease-in-out',
}
```

## Padrões Visuais

### Botões
- Todos os botões usam `rounded-full` (bordas completamente arredondadas)
- Fonte bold em todos os botões
- Sombra offset característica: `2px 2px 0px #F99830`
- Transições suaves em hover e active
- Feedback visual claro (movimento e sombra)

### Espaçamentos
- Sistema baseado em múltiplos de 8px
- Padding consistente entre componentes similares
- Gap de 24px para grids e layouts

### Cores
- Paleta baseada em laranjas e tons neutros
- Contraste adequado para acessibilidade
- Uso consistente de #161616 para texto e elementos escuros
- Laranja #F99830 como cor de acento principal

## Exportação

Para exportar apenas o design system para outro projeto:

```bash
# Copie a pasta design-system
cp -r src/design-system /caminho/para/outro/projeto/src/

# Ou crie um pacote npm
cd src/design-system
npm init -y
# Configure o package.json com exports adequados
```

## Manutenção

Ao adicionar novos componentes:
1. Crie o arquivo em `design-system/components/`
2. Siga os padrões de tokens existentes
3. Exporte no `design-system/index.ts`
4. Atualize a documentação

Ao modificar tokens:
1. Atualize `design-system/tokens.ts`
2. Verifique impacto em todos os componentes
3. Teste acessibilidade (contraste, foco)
