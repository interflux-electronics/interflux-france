// src/lib/actions/intersect.js
/** @type {import('svelte/action').Action} */
export function intersect(node, params = {}) {
    const {
        root = null,
        rootMargin = '0px',
        threshold = 0.1,          // 10% visible = intersecting
        once = false
    } = params;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const intersectionArea = entry.intersectionRect.width * entry.intersectionRect.height;
                const viewportCoverageRatio =
                    intersectionArea /
                    (window.innerWidth * window.innerHeight);

                // Dispatch custom event that component can listen to
                node.dispatchEvent(
                    new CustomEvent('intersect', {
                        detail: {
                            entry,
                            intersecting: entry.isIntersecting,
                            ratio: entry.intersectionRatio,
                            viewportCoverageRatio: viewportCoverageRatio
                        },
                        bubbles: true
                    })
                );

                if (once && entry.isIntersecting) {
                    observer.unobserve(node);
                }
            });
        },
        { root, rootMargin, threshold }
    );

    observer.observe(node);

    return {
        destroy() {
            observer.disconnect();
        }
    };
}