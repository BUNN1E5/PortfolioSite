class LiveCode extends HTMLElement {
  async connectedCallback() {
    if (this._mounted) return;
    this._mounted = true;

    const path = this.getAttribute('path');
    const config = `${path}/livecodes.json`;

    // Import the SDK lazily so it never loads on the server
    const { createPlayground } = await import('livecodes');
    createPlayground(this, { config, loading: 'lazy' });
  }
}

if (!customElements.get('live-code')) {
  customElements.define('live-code', LiveCode);
}

export {}