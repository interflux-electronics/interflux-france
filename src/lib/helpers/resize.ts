export function resize(node: HTMLElement, callback: (entry: ResizeObserverEntry) => void) {
  const observer = new ResizeObserver((entries) => {
    if (entries.length > 0) {
      callback(entries[0]);
    }
  });

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}
