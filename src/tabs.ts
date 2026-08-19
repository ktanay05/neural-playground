// Handles switching between the top-level tabs (NN vs Control).
// Fires an optional callback the first time a tab is activated,
// so heavy init (like building the control app) only runs on demand.

type TabId = 'nn' | 'control';

const initialized: Record<string, boolean> = {};

export function setupTabs(onFirstActivate: Partial<Record<TabId, () => void>> = {}) {
  const buttons = document.querySelectorAll<HTMLButtonElement>('.tab-btn');
  const panels = document.querySelectorAll<HTMLElement>('.tab-panel');

  function activate(tab: TabId) {
    buttons.forEach(b =>
      b.classList.toggle('active', b.dataset.tab === tab)
    );
    panels.forEach(p =>
      p.classList.toggle('active', p.id === `tab-${tab}`)
    );

    // Run one-time init for this tab if provided
    if (!initialized[tab] && onFirstActivate[tab]) {
      initialized[tab] = true;
      onFirstActivate[tab]!();
    }
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => activate(btn.dataset.tab as TabId));
  });

  // NN tab is active by default in the HTML; mark it initialized
  initialized['nn'] = true;
}
