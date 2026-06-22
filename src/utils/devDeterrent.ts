export default function initDevDeterrent() {
  try {
    const block = (e: Event) => { e.preventDefault(); e.stopPropagation(); };
    document.addEventListener('contextmenu', block, { capture: true });
    document.addEventListener('keydown', function (e: KeyboardEvent) {
      const key = e.key || e.code;
      if (key === 'F12') { block(e); return; }
      const meta = (e.ctrlKey || (window as any).metaKey);
      if (meta && e.shiftKey && (key === 'I' || key === 'J' || key === 'C')) { block(e); return; }
      if (meta && (key === 'U' || key === 'u')) { block(e); return; }
    }, { capture: true });
  } catch (err) {
    // ignore in environments where document isn't available
  }
}
