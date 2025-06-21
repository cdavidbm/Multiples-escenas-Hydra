function iniciarHydraEscena(canvasId, width, height, escenaFn) {
    const canvas = document.getElementById(canvasId);
    if (canvas) {
        const hydra = new Hydra({
            canvas: canvas,
            detectAudio: false
        });
        hydra.setResolution(width, height);
        if (typeof escenaFn === 'function') {
            escenaFn();
        }
    }
}

// Escena de fondo Hydra
iniciarHydraEscena("hydra-fondo", window.innerWidth, window.innerHeight, () => {
    osc(15, 0.5, 1.1)
        .kaleid(9)
        .color(2.83, 0.5, 0.39)
        .rotate(0, 0.1)
        .scale(1.01)
        .out(o0);
});

// Escena izquierda
iniciarHydraEscena("hydra-canvas-izquierda", 400, 400, () => {
    osc(20, 0.05, 1.1)
        .kaleid(3)
        .color(2.83, 0, 0.4)
        .rotate(0, -0.1)
        .modulate(o0, () => mouse.x * 0.0003)
        .scale(1.01)
        .out(o0);
});

// Escena derecha
iniciarHydraEscena("hydra-canvas-derecha", 400, 400, () => {
    osc(20, 0.5, 0.1)
        .kaleid(6)
        .color(2, 0, 1)
        .rotate(0, -5)
        .modulate(o0, () => mouse.x * 0.003)
        .scale(1.01)
        .out(o0);
});
