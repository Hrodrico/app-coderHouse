# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

E-commerce CRA (react-scripts 4). Datos desde mock local `src/mock/api.js` (productos en memoria, órdenes en localStorage); Firestore (`src/firebase/`) ya no se usa. Comandos npm: `start`, `build`, `test -- --watchAll=false`, `test -- -t "nombre"`. Capturas del README en `docs/screenshots/`. `src/App.test.js` es el boilerplate de CRA y falla.

- Node 24: `start`/`build` usan `NODE_OPTIONS=--openssl-legacy-provider` (webpack 4); no quitarlo.
- Config en `.env` (`REACT_APP_*`: Firebase + textos UI).
- Imports absolutos desde `src` (`components/...`); los alias `@/` no funcionan. Para `db` usar ruta relativa a `firebase/FirebaseConfig`.
- Estado global en `context/CartContext.js`: carro, `step` del checkout y `purchaseOrder`.
- Checkout en `components/Cart/CartConteiner` según `step`: 1 Review → 2 Transport (escribe `purchaseOrder`) → 3 Pay (escribe `purchaseOrderPay`) → 4 Resumen. Productos en colección `product`.
- Diseño: paleta por roles en variables CSS (`src/index.css`, modo oscuro vía `body.dark-mode`) + clases `.btn`, `.eyebrow`, `.container`; usar esas variables, no colores fijos. Catálogo/header/footer son componentes propios; el checkout sigue con Semantic UI (sobrescrito en `index.css`). Toasts con SweetAlert2 (`utils/Swal`).
