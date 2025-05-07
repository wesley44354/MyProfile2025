# 🧑‍💻 Portfólio | Wesley Alves

Este é o portfólio profissional de **Wesley Alves**, desenvolvido com **Next.js**, focado em exibir minhas habilidades, experiências, projetos e redes sociais. A aplicação é totalmente responsiva e otimizada para SEO e redes sociais.

## 🚀 Tecnologias Utilizadas

- **Next.js** (Static Site Generation)
- **TypeScript**
- **Tailwind CSS**
- **React**
- **Sanity CMS** (Headless CMS para gerenciamento de conteúdo)
- **Vercel** (Deploy)

## 📁 Estrutura de Componentes

- `Header`: Cabeçalho com links para seções e redes sociais.
- `Hero`: Apresentação principal do desenvolvedor.
- `Skills`: Lista de habilidades técnicas.
- `WorkExperience`: Experiências profissionais.
- `Projects`: Projetos realizados.
- `CursorShadow`: Efeito visual com o cursor.

## 📦 Conteúdo Dinâmico via Sanity

O conteúdo como habilidades, projetos, experiências e informações pessoais é gerenciado via **Sanity.io** e carregado estaticamente com `getStaticProps`.

### Variáveis de ambiente usadas

```env
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_PROJECT_ID=afv0f5cv
NEXT_PUBLIC_BASE_URL=http://localhost:3000/
```

> ⚠️ Nenhuma variável sensível é exposta no frontend. Apenas dados públicos são carregados via Sanity.

## 🛠️ Como executar localmente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

# Acesse o diretório
cd seu-repositorio

# Instale as dependências
npm install

# Crie um arquivo .env.local e adicione as variáveis de ambiente
touch .env.local
```

```env
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_PROJECT_ID=afv0f5cv
NEXT_PUBLIC_BASE_URL=http://localhost:3000/
```

```bash
# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## 🌐 Deploy

Este site está hospedado na [Vercel](https://vercel.com). Para fazer deploy:

1. Crie uma conta na Vercel.
2. Conecte o repositório GitHub.
3. Adicione as variáveis de ambiente no painel da Vercel.
4. Deploy automático a cada push na `main`.

## 🔍 SEO e Compartilhamento

O projeto inclui:

- Meta tags para SEO (`title`, `description`, `keywords`)
- Meta tags Open Graph (compartilhamento em redes sociais)
- Suporte multilíngue (pt-BR e en-US)
- Favicon e imagem de thumbnail

## 🖼️ Imagem para compartilhamento social

A imagem usada no Open Graph está localizada em:

```
/public/thumbnail.png
```

## 📄 Licença

```text
MIT License

Copyright (c) 2025 Wesley

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

> Desenvolvido com 💻 por Wesley Alves.
