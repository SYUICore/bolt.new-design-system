# CatLife Design System

A complete UI component library following the shadcn/ui philosophy, built with React, TypeScript, Tailwind CSS, and class-variance-authority (cva).

## Philosophy

This design system follows these principles:

- **Copy & Paste**: Components are designed to be copied directly into your project
- **Customizable**: Easily modify components to match your design requirements
- **Accessible**: Built with accessibility in mind
- **Type-safe**: Full TypeScript support
- **Framework-agnostic styling**: Uses Tailwind CSS with cva for variant management

## Installation

This design system requires the following dependencies:

```bash
npm install tailwindcss tailwind-merge class-variance-authority
npm install @radix-ui/react-slot lucide-react
npm install clsx
```

## Core Utilities

### cn() utility

All components use the `cn()` utility function for merging Tailwind classes:

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

## Components

### Button

A versatile button component with multiple variants and sizes.

**Variants:**
- `primary` - Dark background with orange border and shadow (default)
- `secondary` - Orange background with black border
- `outline` - Transparent with border, fills on hover
- `ghost` - Transparent, shows border on hover
- `destructive` - Red background for destructive actions

**Sizes:**
- `sm` - Small (h-10)
- `md` - Medium (h-12, default)
- `lg` - Large (h-14)
- `icon` - Square icon button (h-12 w-12)

```tsx
import { Button } from "@/components/ui/button";

<Button variant="primary" size="md">Click me</Button>
<Button variant="outline" size="lg">Outline</Button>
<Button variant="secondary">Secondary</Button>
```

### Input

Text input field with consistent styling.

```tsx
import { Input } from "@/components/ui/input";

<Input type="text" placeholder="Enter your name" />
<Input type="email" placeholder="email@example.com" />
```

### Card

Container component with glassmorphic styling.

**Sub-components:**
- `Card` - Main container
- `CardHeader` - Header section
- `CardTitle` - Title heading
- `CardDescription` - Description text
- `CardContent` - Main content area
- `CardFooter` - Footer section

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here</CardDescription>
  </CardHeader>
  <CardContent>
    Your content here
  </CardContent>
</Card>
```

### Typography

Semantic typography components with consistent styling.

**Heading:**
- Levels: `h1`, `h2`, `h3`, `h4`
- Responsive font sizes
- Bold Roc Grotesk font

```tsx
import { Heading, Text, Blockquote } from "@/components/ui/typography";

<Heading level="h1">Main Title</Heading>
<Heading level="h2" as="h3">Subtitle</Heading>
<Text variant="body">Body text content</Text>
<Text variant="large">Larger text</Text>
<Text variant="muted">Muted secondary text</Text>
<Blockquote>A meaningful quote</Blockquote>
```

### Badge

Small status or category indicators.

**Variants:**
- `default` - Orange with black border
- `secondary` - Light background
- `outline` - Transparent with border
- `success` - Green
- `warning` - Yellow
- `error` - Red

**Sizes:**
- `sm`, `md`, `lg`

```tsx
import { Badge } from "@/components/ui/badge";

<Badge variant="default" size="md">New</Badge>
<Badge variant="success">Active</Badge>
<Badge variant="warning">Pending</Badge>
```

### Accordion

Expandable content sections.

**Sub-components:**
- `Accordion` - Container
- `AccordionItem` - Individual item
- `AccordionTrigger` - Clickable header
- `AccordionContent` - Collapsible content

**Variants:**
- `default` - Rounded cards with spacing
- `minimal` - Minimal styling with border-bottom

```tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

<Accordion variant="default">
  <AccordionItem value="item-1">
    <AccordionTrigger>Question 1</AccordionTrigger>
    <AccordionContent isOpen={true}>
      Answer to question 1
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

### Select

Native select dropdown with custom styling.

```tsx
import { Select, SelectOption } from "@/components/ui/select";

<Select variant="default" size="md">
  <SelectOption value="1">Option 1</SelectOption>
  <SelectOption value="2">Option 2</SelectOption>
  <SelectOption value="3">Option 3</SelectOption>
</Select>
```

### Checkbox

Checkbox input with optional label and description.

**Variants:**
- `default` - Orange when checked
- `primary` - Black when checked
- `secondary` - Light orange when checked

**Sizes:**
- `sm`, `md`, `lg`

```tsx
import { Checkbox } from "@/components/ui/checkbox";

<Checkbox
  label="Accept terms and conditions"
  description="You must agree to continue"
  variant="default"
  size="md"
/>
```

## Design Tokens

The design system uses consistent color and spacing tokens:

### Colors

- **Primary Text**: `#161616` (near black)
- **Background**: `#FFFAF3` (warm white)
- **Accent**: `#F99830` (orange)
- **Secondary**: `#F9A858` (light orange)
- **Muted**: `#78716C` (gray)

### Spacing

Follows an 8px grid system for consistent spacing.

### Typography

- **Font Family**: Roc Grotesk
- **Weights**: Regular (400), Medium (500), Bold (700)
- **Line Heights**: 120% for headings, 150% for body

## Customization

All components use Tailwind CSS classes and can be customized by:

1. **Passing className prop**: Override styles on any component
2. **Modifying variants**: Edit the cva() definitions in each component
3. **Extending components**: Create new variants by editing the component files

## Example: Custom Button Variant

```typescript
// In Button.tsx, add to variants:
const buttonVariants = cva("...", {
  variants: {
    variant: {
      // ... existing variants
      custom: "bg-blue-500 text-white border-2 border-blue-700"
    }
  }
});
```

## Export to New Project

To use this design system in a new project:

1. Copy the entire `/src/components/ui` folder
2. Copy the `/src/lib/utils.ts` file
3. Ensure dependencies are installed
4. Import and use components as needed

```tsx
import { Button, Card, Heading } from "@/components/ui";
```

## Contributing

When adding new components:

1. Follow the existing patterns (cva + forwardRef)
2. Add TypeScript types for all props
3. Include variants and sizes where appropriate
4. Update this README with component documentation
5. Export from `index.ts`

## License

This design system is based on the shadcn/ui philosophy and is free to use and modify.
