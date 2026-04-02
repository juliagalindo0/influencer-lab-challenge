# Influencers Lab.ia — Desafio Técnico Frontend

Interface do fluxo **"Crie sua influencer"**, desenvolvida como parte do processo seletivo para a vaga de Desenvolvedor Frontend na Influencers Lab.ia.

---

## 🚀 Como rodar o projeto

### Pré-requisitos
- Node.js 18+
- npm

### Instalação e execução
```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) — o projeto redireciona automaticamente para `/create`.

### Deploy
O projeto está publicado em produção:
🔗 **[https://influencer-lab-challenge.vercel.app](https://influencer-lab-challenge.vercel.app)**

---

## 🛠️ Decisões técnicas

### Stack
- **Next.js 15** com App Router
- **TypeScript** para tipagem estática e segurança no código
- **Tailwind CSS** para estilização
- **Framer Motion** para animações de transição entre steps

### Por que Tailwind CSS?
Escolhi Tailwind CSS pela agilidade no desenvolvimento de interfaces pixel-perfect. A capacidade de escrever estilos diretamente no JSX, sem alternar entre arquivos, acelera o processo de desenvolvimento e mantém o código coeso. Para um projeto com design system bem definido (como este, com cores e espaçamentos específicos do Figma), o Tailwind permite mapear os tokens de design diretamente nas classes utilitárias.

### Arquitetura e componentização
O projeto segue uma estrutura de **Feature-based architecture**, isolando toda a lógica do fluxo de criação em `app/features/create-influencer/`:
```
features/create-influencer/
├── components/
│   ├── layout/
│   │   ├── CreateLayout.tsx      # Layout principal (sidebar + stepper + card)
│   │   ├── Sidebar.tsx           # Navegação lateral isolada
│   │   └── Stepper.tsx           # Barra de progresso dos steps com a11y
│   ├── steps/
│   │   ├── Step1DnaBase.tsx      # Step 1 — DNA Base com drag & drop
│   │   └── Step2EstiloCabelo.tsx # Step 2 — Estilo e Cabelo
│   └── ui/
│       ├── OptionCard.tsx        # Card de seleção reutilizável com a11y
│       ├── ColorDot.tsx          # Indicador de cor
│       └── StepTransition.tsx    # Wrapper de animação entre steps
├── context/
│   └── InfluencerContext.tsx     # Estado global do formulário
└── types/
    └── influencer.ts             # Tipagens do formulário
```

Cada componente tem **uma única responsabilidade**, facilitando manutenção, testes e reuso.

### Gerenciamento de estado
Utilizei **React Context API** para compartilhar o estado do formulário entre os steps. A escolha foi intencional — para um fluxo linear de steps sem necessidade de cache persistente ou sincronização com servidor, o Context é suficiente e evita a complexidade desnecessária de bibliotecas externas como Redux ou Zustand.

### Acessibilidade (a11y)
Foram implementadas boas práticas de acessibilidade em todos os componentes principais:
- `role="radio"` e `aria-checked` nos cards de seleção
- `role="radiogroup"` nos grupos de opções
- `aria-label` em todos os botões e inputs
- `aria-current="step"` no step ativo do Stepper
- `aria-hidden="true"` em elementos decorativos
- `<fieldset>` e `<legend>` nos grupos de formulário
- `<label>` associado ao input de nome via `htmlFor`
- Navegação por teclado na dropzone de upload (`onKeyDown`)
- Textos para leitores de tela com `.sr-only` no Stepper

### Diferenciais implementados
- ✅ **Drag & drop** funcional no upload de imagem (Step 1)
- ✅ **Animações de transição** entre steps com Framer Motion (slide + fade)
- ✅ **Deploy publicado** na Vercel
- ✅ **Boas práticas de acessibilidade (a11y)** em todos os componentes principais

---

## 💡 O que faria diferente com mais tempo

### 1. Completar os Steps 3 e 4
Os steps de **Pele e Detalhes** e **Resultado Final** não foram implementados pois o design no Figma ainda não estava disponível no momento do desenvolvimento. Com mais tempo, implementaria ambos seguindo o mesmo padrão dos anteriores.

### 2. Testes automatizados
Adicionaria testes unitários nos componentes principais com **Jest + Testing Library**, especialmente no `InfluencerContext` e nos componentes de UI reutilizáveis.

### 3. Responsividade mobile
O projeto foi desenvolvido focando em **desktop** (requisito principal). Com mais tempo, implementaria um layout responsivo completo para mobile, com sidebar em menu hamburguer e layout em coluna única para os steps.

### 4. Validação do formulário
Implementaria validação antes de avançar entre steps — por exemplo, exigir que o nome do influenciador seja preenchido antes de prosseguir.

### 5. Persistência de estado
Salvaria o progresso do formulário no `localStorage` para que o usuário não perca os dados ao recarregar a página.

### 6. Testes de acessibilidade automatizados
Integraria ferramentas como **axe-core** ou **jest-axe** para garantir que nenhuma regressão de acessibilidade seja introduzida durante o desenvolvimento.

---

## 📁 Estrutura do projeto
```
├── app/
│   ├── create/
│   │   └── page.tsx                    # Página principal do fluxo
│   ├── features/
│   │   └── create-influencer/          # Feature isolada
│   ├── layout.tsx                      # Layout raiz com fonte Inter
│   └── page.tsx                        # Redirect para /create
├── public/
│   ├── icons/
│   │   └── sidebar/                    # Ícones organizados por contexto
│   └── images/
│       └── Logo.svg                    # Logo da Influencers Lab.ia
└── ...
```

---

Desenvolvido por **Julia Galindo** 🚀
