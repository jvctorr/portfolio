# Soshito Portfolio — João Victor

Portfólio pessoal estático em estética preto e branco, mangá, RPG pixel art e horror psicológico minimalista, com detalhes vermelhos estratégicos.

## Tecnologias

- HTML5 puro
- CSS3 puro (sem framework)
- JavaScript Vanilla
- Google Fonts (Archivo Black, Bebas Neue, VT323, Space Mono, Press Start 2P)

Sem dependências, sem build, sem Node. Basta abrir `index.html`.

## Estrutura

```
/soshito-portfolio
├── index.html
├── style.css
├── script.js
├── README.md
├── /assets
│   ├── /images     ← fotos, mockups, retratos
│   ├── /videos     ← vídeos de fundo (opcional)
│   ├── /icons      ← ícones SVG/PNG
│   └── /textures   ← halftone, ruído, grão
└── /docs
    └── instructions.md
```

## Como abrir localmente

1. Baixe ou clone o projeto.
2. Abra `index.html` diretamente no navegador (duplo clique).
3. Pronto.

> Para evitar problemas de cache de imagens, você pode rodar um servidor local simples:
> ```bash
> npx serve .
> # ou
> python3 -m http.server 8080
> ```
> e acessar `http://localhost:8080`.

## Como hospedar

### Cloudflare Pages
1. Suba o projeto em um repositório no GitHub.
2. Em Cloudflare Pages → Create Project → Connect to Git.
3. Build command: **(deixe vazio)**. Output directory: `/`.
4. Deploy.

### Netlify
1. Arraste a pasta `soshito-portfolio` em https://app.netlify.com/drop  
2. Pronto, link gerado.

### Vercel
1. `vercel` na pasta do projeto (CLI) ou suba pelo painel.
2. Framework: **Other**. Output: `./`.

### GitHub Pages
1. Suba o repositório no GitHub.
2. Settings → Pages → Branch: `main`, pasta `/root`.
3. Acesse `https://seu-usuario.github.io/soshito-portfolio/`.

## Onde editar

### Trocar imagens
- Substitua arquivos em `assets/images/` mantendo o mesmo nome,  
  **ou** edite os `src="..."` no `index.html` (todos comentados com `<!-- TROCAR IMAGEM ... -->`).
- Imagens chave:
  - `hero-portrait.jpg` → foto da hero e ficha do personagem.
  - `project-01.jpg` ... `project-04.jpg` → galeria de portfólio.

### Trocar vídeos
- Coloque arquivos `.mp4` em `assets/videos/`.
- Em `index.html`, troque uma `<img>` por:
  ```html
  <video autoplay muted loop playsinline poster="assets/images/poster.jpg">
    <source src="assets/videos/seu-video.mp4" type="video/mp4">
  </video>
  ```

### Trocar link do GitHub
- Em `script.js`, procure por `TROCAR AQUI` e substitua `"#"` pela URL do seu GitHub.
- Há também 3 links no HTML com `id="github-link"`, `github-link-2`, `github-link-3`.

### Trocar WhatsApp
- Procure no `index.html` por `wa.me/5585986301108` e substitua pelo seu número (formato `55DDDNUMERO`).

### Editar textos
- Todos os textos estão diretamente no `index.html`. Cada seção é comentada com `<!-- ============ SEÇÃO ============ -->`.

### Editar cores
- Em `style.css`, no topo, o bloco `:root { ... }` define todas as cores. Por exemplo:
  ```css
  --red: #d11224;
  --black: #050505;
  ```

## Créditos

- Site criado por **soshito** (João Victor).
- Inspiração estética: mangá, RPG pixel art, horror psicológico minimalista, portfólios editoriais.
- Nenhum asset, personagem, sprite ou logo de obra protegida foi utilizado.
