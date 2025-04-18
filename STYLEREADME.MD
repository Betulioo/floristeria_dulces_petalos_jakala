# Guía de Uso: Design System Utilities

Esta documentación muestra los estilos disponibles con sus valores permitidos.

---

## 2. Colores

Cada paleta dispone de variantes numéricas:

- **primary**, **secondary**, **accent**, **neutral**, **error**, **warning**, **success**
- Niveles disponibles: `10`, `50`, `100`, `200`, `300`, `400`, `500`, `600` (algunas paletas incluyen más, como `700`–`1000`).

### Clases

```html
<div class="bg-primary-200"></div>
<span class="text-error-500"></span>
<button class="border-success-100"></button>
```

---

## 3. Tipografía

### Familias de fuente

- **Nunito**: `.font-nunito`  
- **DM Sans**: `.font-dm-sans`

### Pesos de fuente

- `regular` (400): `.fw-regular`  
- `medium` (500): `.fw-medium`  
- `bold` (700): `.fw-bold`

### Variantes tipográficas

- **Headings**: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`
- **Body**: `b-1`, `b-2`, `b-3`, `b-4`

#### Propiedades aplicadas

- `font-size` en px
- `line-height` en px
- `letter-spacing` en px

```html
<h2 class="h2 font-dm-sans fw-bold">Título</h2>
<p class="b-2 font-nunito fw-regular">Lorem ipsum dolor…</p>
```

---

## 4. Espaciado (Spacing)

Suffix disponibles: `3xs` (4px), `2xs` (8px), `xs` (16px), `s` (24px), `md` (32px), `lg` (48px), `xl` (64px), `2xl` (80px), `3xl` (120px), `4xl` (96px)

```html
<div class="p-md m-xs pt-2xs"></div>
```

- `.p-<suffix>`: padding en todos los ejes
- `.m-<suffix>`: margin en todos los ejes
- `.pt-<suffix>`, `.pr-<suffix>`, etc.

---

## 5. Bordes redondeados (Radius)

Nombres: `none`, `2xs` (12px), `xs` (24px), `s` (36px), `md` (48px), `lg` (72px), `xl` (84px), `3xl` (120px), `full` (999px)

```html
<img class="rounded-md" src="flower.jpg" />
```

---

## 6. Grosor de bordes (Stroke)

Niveles: `s` (0px), `m` (1px), `l` (2px), `xl` (4px), `2xl` (6px), `3xl` (8px), `4xl` (10px), `7xl` (12px)

```html
<button class="border-m border-radius-s">Click</button>
```

---

## 7. Efectos (Shadows)

Nombres: `E0`, `E1`, `E2`, `E3`, `E4`, `E5`, `E6`, `E7`, `E8`, `E9`  
Valores aproximados:

```scss
E0: none
E1: 0px 1px 2px rgba(0,0,0,0.05)
E2: 0px 2px 4px rgba(0,0,0,0.05)
…
E9: 0px 28px 56px rgba(0,0,0,0.15)
```

```html
<div class="shadow-E4">Card con shadow E4</div>
```

---
