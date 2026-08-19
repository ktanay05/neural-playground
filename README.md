# NN & Control Playground

An interactive, browser-based playground built with **TypeScript**, **Vite**,
**D3**, and **TensorFlow.js**. It has two tabs:

1. **🧠 Neural Network Playground** — a from-scratch reimagining of the classic
   TensorFlow Playground for 2D classification/regression.
2. **🎛️ Control Playground** — a neural network that learns **PID controller
   gains** for a spring-mass-damper system based on your design intent.

**Live demo:** https://ktanay05.github.io/neural-playground/

---

## Table of Contents
- [Neural Network Playground](#-neural-network-playground)
- [Control Playground](#-control-playground)
  - [How to Use It](#how-to-use-it)
  - [How the Network Actually Works](#how-the-network-actually-works)
- [Running Locally](#running-locally)
- [Deploying](#deploying)
- [Tech Stack](#tech-stack)

---

## 🧠 Neural Network Playground

Train a small neural network on 2D toy datasets and watch the decision
boundary form in real time.

![NN Playground overview](docs/screenshots/nn-overview.png)

**Features:**
- Datasets: Circle, XOR, Gaussian, Spiral
- Adjustable **train/test ratio**, **noise**, and **batch size**
- Selectable **input features** (x₁, x₂, x₁², x₂², x₁x₂, etc.)
- Configurable architecture — add/remove **hidden layers** and **neurons** per layer
- **Learning rate**, **activation** (Tanh/ReLU/Sigmoid/Linear),
  **regularization** (L1/L2) and **reg rate**
- Live **decision-boundary heatmap**, **loss curves**, and **network graph**
- Classification and regression modes

Example — a network separating the **Circle** dataset:

![NN Circle dataset](docs/screenshots/nn-circle.png)

> **Changes in this release:** the app was refactored to support a top-level
> **tab bar**. The original NN Playground is now the first tab and its
> functionality is unchanged; a new **Control Playground** tab was added
> alongside it. Tab initialization is lazy — the Control app only boots the
> first time you open its tab.

---

## 🎛️ Control Playground

Instead of classifying points, this tab uses a neural network to **design a
controller**. You describe *what kind of response you want*, and the network
learns the PID gains `[Kp, Ki, Kd]` that achieve it for a spring-mass-damper
(SMD) plant.

![Control Playground overview](docs/screenshots/control-overview.png)

**The plant** is a second-order system:

```
m·ẍ + c·ẋ + k·x = F(t)
```

controlled by a **PID controller**:

```
F = Kp·e + Ki·∫e dt + Kd·(de/dt), e = setpoint − x
```

### How to Use It

The layout has three columns:

**Left column — the problem setup**
- **Plant:** type in the mass `m`, damping `c`, and stiffness `k`.
- **Measurement noise:** add sensor noise to the feedback signal.
- **Design Intent:** two sliders that express *what you want*:
  - **Aggressiveness** ↑ → fast response, tolerates overshoot and control effort.
  - **Robustness** ↑ → smooth response, penalizes overshoot and effort.
- **PID Gains (manual):** drag `Kp/Ki/Kd` yourself to explore the system by hand.

**Middle column — the neural gain tuner**
- Configure the network **architecture** (add/remove hidden layers and neurons),
  **activation**, **learning rate (σ)**, **population size**, and **gain scale**.
- Press **▶ Train** to start learning. Watch the **generation counter** and
  **Best J** (the cost) update live. The network diagram maps the
  5 inputs `[m, c, k, aggressiveness, robustness]` → 3 outputs `[Kp, Ki, Kd]`.

**Right column — the results**
- **Learned Gains:** the network's current best `Kp/Ki/Kd`.
  Click **Apply to Sliders ▲** to load them into the manual gain sliders.
- **Step Response:** the simulated system response (blue) vs. the setpoint
  (orange). Noisy measurements appear as a faint gray trace.
- **Training Progress (Cost J):** the cost decreasing over generations.
- **Performance Metrics:** overshoot, settling time, and steady-state error.

**Typical workflow:**
1. Set your plant `m, c, k`.
2. Choose a design intent (e.g. Robustness = 0.9).
3. Click **Train** and let the cost `J` fall until it plateaus.
4. Click **Apply to Sliders** to see the learned controller's step response.
5. Compare intents: retrain with Aggressiveness = 0.9 and watch the gains and
   response change character (faster but with more overshoot).

### How the Network Actually Works

This is the most important conceptual point:

> **There is no backpropagation in the Control Playground.**

The network is a genuine TensorFlow.js feedforward model, but its weights are
**not** trained with gradient descent. Here's why and how:

**Why not backprop?**
Backpropagation needs a *differentiable* loss so it can compute gradients
`∂Loss/∂weight`. But our loss (the cost `J`) is produced by:
- a **numerical simulation** (`simulate()` — a `for`-loop integrating the ODE), and
- **non-differentiable metrics** like overshoot and settling time (which use
  `max` and threshold `if`-conditions).

Gradients don't flow cleanly through that, so standard backprop isn't available.

**What we use instead: an Evolution Strategy (ES).**
Each **generation**:

*   Take the network's current weights W
*   Create POP noisy copies: W + noise₁, W + noise₂, ...
*   For each copy: forward pass → gains \[Kp, Ki, Kd\] simulate() → trajectory computeCost() → J (a single scalar score)
*   Keep the weights that produced the LOWEST J
*   Repeat


This is "smart guess-and-check": the network's weights genuinely adapt so its
output gains minimize your cost. It's a legitimate ML training method — the same
family of algorithms OpenAI used to train agents on Atari games. It's slower
than backprop but works when the objective isn't differentiable, which is
exactly our situation.

**The cost function** encodes your design intent. The two intent sliders map to
weights on a weighted sum:

```
J = w\_track · Σe² + w\_effort · ΣF² + w\_overshoot · overshoot + w\_settle · t\_settle
```

- Higher **robustness** raises `w_effort` and `w_overshoot`.
- Higher **aggressiveness** raises `w_settle` (penalizes slowness) and relaxes the
  effort penalty.

So the network learns different controllers for different intents because the
*scoring rule itself* changes with the sliders.

**Project structure (Control tab):**
```
neural-playground/
├── index.html              # UI layout
├── package.json            # Dependencies & scripts
├── src/
│   ├── main.ts             # App logic, controls, training loop
│   ├── style.css           # Styling
│   ├── network/
│   │   ├── dataset.ts      # Dataset generators (circle, xor, gaussian, spiral)
│   │   ├── features.ts     # Feature engineering definitions
│   │   └── model.ts        # TensorFlow.js model builder & training
│   └── viz/
│   │   ├── heatmap.ts      # Decision-boundary heatmap + color scale
│   │   ├── lossChart.ts    # Train/test loss line chart
│   │   └── networkGraph.ts # D3 network node/edge rendering
│   └── src/control/
│       ├── simulator.ts    # SMD physics + PID (numerical integration)
│       ├── costFunction.ts # intent → cost weights, and computeCost()
│       ├── metrics.ts      # overshoot, settling time, steady-state error
│       ├── controlNN.ts    # tfjs network + flat-weight get/set for ES
│       ├── trainer.ts      # evolution-strategy training loop
│       ├── controlNetGraph.ts # D3 network diagram
│       ├── controlChart.ts     # step-response plot
│       ├── lossChart.ts    # cost-vs-generation plot
│       └── controlApp.ts   # wires the UI together   
└── README.md
```


> **Want true backprop?** It's possible by rewriting `simulate()` and
> `computeCost()` entirely in differentiable `tf` ops and replacing the
> non-differentiable metrics with smooth approximations. That's a heavier,
> more fragile implementation; the ES approach was chosen for stability and
> clarity.

---

## Running Locally

```
bash
git clone https://github.com/ktanay05/neural-playground.git
cd neural-playground
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

Build and preview a production bundle:

```
npm run build
npm run preview
```

### Deploying
---------

The project deploys to **GitHub Pages** via the gh-pages package:

```
npm run deploy
```

Make sure vite.config.ts sets the correct base path:

```export default define Config({ base: '/neural-playground/',});
```

### Tech Stack
----------

*   **TypeScript** + **Vite** (build tooling)
*   **TensorFlow.js** (neural networks — backprop for the NN tab, forward passes for the Control tab)
*   **D3.js** (network graphs, custom canvas/SVG visualizations)
*   Plain DOM (no UI framework) with a lightweight tab switcher
