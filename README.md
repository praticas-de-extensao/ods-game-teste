# Game Template — ODS

Este repositório é o **template** para projetos de jogo Web (Godot Web, Phaser, Unity WebGL, etc.) alinhados aos Objetivos de Desenvolvimento Sustentável (ODS).

## Como usar
1. Crie o repositório a partir deste template (via GitHub Classroom ou pelo botão "Use this template").
2. Ajuste o `game.json` com os metadados do seu jogo.
3. Exporte/compile o jogo para Web (pasta `dist/`) **ou** coloque seus arquivos web em `public/` e deixe o script de build copiar para `dist/`.
4. Faça *commit* e *push* em `main`. O GitHub Actions validará o `game.json`, construirá o projeto e publicará em **GitHub Pages**.

## Metadados (`game.json`)
Preencha os campos conforme o Schema em `schemas/game.schema.json`. Exemplo:

```json
{
  "name": "Floresta Sustentável",
  "team": "Equipe Verde",
  "year": 2025,
  "sdgs": [13],
  "engine": "Godot 4 Web",
  "tech": ["Godot", "GDScript"],
  "repo": "https://github.com/<org>/<repo>",
  "play_url": "https://<org>.github.io/<repo>/",
  "thumbnail": "https://<org>.github.io/<repo>/thumb.png",
  "description": "Jogo sobre reflorestamento e emissões.",
  "accessibility": ["keyboard", "captions"]
}
```

## Build rápido (fallback)
Se você não tiver um processo de build específico (Phaser/Vite, Godot ou Unity), coloque arquivos estáticos em `public/`. O script `npm run build` já copia `public/` → `dist/`.

## Tópicos (Topics) GitHub
Adicione `ods-game` e `ods-<n>` (ex.: `ods-13`) nos **Topics** do repositório para que o Portal descubra seu jogo automaticamente.

## Publicação
Ao finalizar o build, seu jogo ficará disponível em:
```
https://<org>.github.io/<repo>/
```
Verifique/ajuste as configurações de **Pages** no repositório (Settings → Pages).

## Licenças
Sugerido: **MIT** para código, **CC BY-SA** para assets. Ajuste conforme necessário.
