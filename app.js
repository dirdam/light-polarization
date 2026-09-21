document.getElementById('footerYear').textContent = new Date().getFullYear();

const I18N_STORAGE_KEY = 'dirdam-lang';
const SUPPORTED_LANGS = ['en', 'es', 'ja'];
const LANG_LABELS = { en: 'EN', es: 'ES', ja: '日本語' };

const STRINGS = {
    en: {
        browserTabTitle: 'Light Polarization',
        pageTitle: 'Light Polarization',
        subtitle: 'How stacking angled filters can block light &mdash; or bring it back',
        introHtml: 'A polarizing filter only lets through light oscillating along its own <strong>transmission axis</strong>. Stack several filters at different angles and something surprising happens: two filters crossed at 90&deg; block almost all the light, yet inserting a third filter in between &mdash; at just the right angle &mdash; lets a good chunk of the light back through. Set the number of layers and the angle of each one below and watch the effect play out on the image, following <strong>Malus\'s law</strong> exactly.',
        transmissionLabel: 'Transmitted light',
        layersGroupLabel: 'Layers',
        layersHint: 'How many polarizing filters are stacked, in order',
        layerLabel: 'Layer',
        layerFirstHint: "First filter — its angle alone doesn't change how much light gets through",
        layerDeltaLabel: 'vs previous',
        presetsLabel: 'Presets',
        presetAligned: 'Aligned',
        presetCrossed: 'Crossed (blocked)',
        presetReveal: 'Three-filter reveal',
        presetGentle: 'Gentle rotation',
        howToInterpretTitle: 'How to interpret',
        howToInterpretHtml1: "Unpolarized light loses exactly half its intensity through the very first filter, whatever angle you set it to &mdash; that angle doesn't matter yet, since there's no reference direction to measure it against. From the second filter onward, each additional filter transmits a fraction <strong>cos&sup2;(&Delta;&theta;)</strong> of the light that reached it, where &Delta;&theta; is the angle between that filter and the one right before it (Malus's law). Rotate the individual layers and watch that transmission ladder change stage by stage.",
        howToInterpretHtml2: "This is why two crossed filters (&Delta;&theta;=90&deg;) block essentially everything, but slipping a third filter at 45&deg; between them restores about 12.5% of the light &mdash; each of the two 45&deg; steps only costs a <strong>cos&sup2;(45&deg;)=50%</strong> loss, instead of one brutal cos&sup2;(90&deg;)=0% jump. Try the <strong>Three-filter reveal</strong> preset, then compare it with <strong>Gentle rotation</strong>, which spreads the same 0&deg;&rarr;90&deg; turn over five small steps and lets even more light through.",
        seeMoreTools: 'See more tools',
        viewSource: 'View source',
    },
    es: {
        browserTabTitle: 'Polarización de la luz',
        pageTitle: 'Polarización de la luz',
        subtitle: 'Cómo apilar filtros en ángulo puede bloquear la luz &mdash; o devolverla',
        introHtml: 'Un filtro polarizador solo deja pasar la luz que oscila a lo largo de su propio <strong>eje de transmisión</strong>. Apila varios filtros en ángulos distintos y ocurre algo sorprendente: dos filtros cruzados a 90&deg; bloquean casi toda la luz, pero al insertar un tercer filtro entre medias &mdash; en el ángulo justo &mdash; una buena parte de la luz vuelve a pasar. Ajusta abajo el número de capas y el ángulo de cada una y observa el efecto sobre la imagen, siguiendo exactamente la <strong>ley de Malus</strong>.',
        transmissionLabel: 'Luz transmitida',
        layersGroupLabel: 'Capas',
        layersHint: 'Cuántos filtros polarizadores hay apilados, en orden',
        layerLabel: 'Capa',
        layerFirstHint: 'Primer filtro — su ángulo por sí solo no cambia cuánta luz pasa',
        layerDeltaLabel: 'vs. anterior',
        presetsLabel: 'Preajustes',
        presetAligned: 'Alineados',
        presetCrossed: 'Cruzados (bloqueado)',
        presetReveal: 'Revelación de tres filtros',
        presetGentle: 'Giro suave',
        howToInterpretTitle: 'Cómo interpretarlo',
        howToInterpretHtml1: 'La luz no polarizada pierde exactamente la mitad de su intensidad al atravesar el primer filtro, sea cual sea el ángulo que le pongas &mdash; ese ángulo todavía no importa, porque no hay ninguna dirección de referencia con la que compararlo. A partir del segundo filtro, cada filtro adicional transmite una fracción <strong>cos&sup2;(&Delta;&theta;)</strong> de la luz que le llega, donde &Delta;&theta; es el ángulo respecto al filtro inmediatamente anterior (ley de Malus). Gira las capas una a una y observa cómo cambia esa escalera de transmisión etapa por etapa.',
        howToInterpretHtml2: 'Por eso dos filtros cruzados (&Delta;&theta;=90&deg;) bloquean prácticamente todo, pero colar un tercer filtro a 45&deg; entre medias devuelve cerca del 12,5% de la luz &mdash; cada uno de esos dos pasos de 45&deg; solo cuesta una pérdida de <strong>cos&sup2;(45&deg;)=50%</strong>, en lugar de un salto brutal de cos&sup2;(90&deg;)=0%. Prueba el preajuste <strong>Revelación de tres filtros</strong> y compáralo con <strong>Giro suave</strong>, que reparte ese mismo giro de 0&deg; a 90&deg; en cinco pasos pequeños y deja pasar todavía más luz.',
        seeMoreTools: 'Ver más herramientas',
        viewSource: 'Ver código fuente',
    },
    ja: {
        browserTabTitle: '光の偏光',
        pageTitle: '光の偏光',
        subtitle: '角度をずらした偏光フィルターを重ねると、光が遮られたり戻ってきたりする仕組み',
        introHtml: '偏光フィルターは、自身の<strong>透過軸</strong>に沿って振動する光だけを通します。異なる角度のフィルターを何枚も重ねると、不思議なことが起こります。90&deg;で交差させた2枚のフィルターはほぼすべての光を遮断しますが、その間にもう1枚 &mdash; ちょうどよい角度で &mdash; フィルターを挟むと、光の一部がまた通り抜けます。下で層の数と各層の角度を設定し、<strong>マリュスの法則</strong>にそのまま従う効果を画像上で確認してください。',
        transmissionLabel: '透過する光',
        layersGroupLabel: '層の数',
        layersHint: '何枚の偏光フィルターを、どの順番で重ねるか',
        layerLabel: '層',
        layerFirstHint: '最初のフィルター — その角度自体は透過する光の量を変えません',
        layerDeltaLabel: '直前との差',
        presetsLabel: 'プリセット',
        presetAligned: '揃える',
        presetCrossed: '直交(遮断)',
        presetReveal: '3枚フィルターの復活',
        presetGentle: '緩やかな回転',
        howToInterpretTitle: '読み解き方',
        howToInterpretHtml1: '無偏光の光は、最初のフィルターを通過する際に角度に関わらずちょうど半分の強度を失います &mdash; 比較する基準となる方向がまだ存在しないため、この時点では角度は無関係です。2枚目以降は、直前のフィルターとの角度差&Delta;&theta;に対して<strong>cos&sup2;(&Delta;&theta;)</strong>の割合だけ光が透過します(マリュスの法則)。各層を回転させて、この透過率が段階ごとに変化する様子を観察してみてください。',
        howToInterpretHtml2: 'そのため、90&deg;で交差した2枚のフィルターはほぼすべての光を遮断しますが、その間に45&deg;のフィルターを1枚挟むと光の約12.5%が戻ってきます &mdash; 45&deg;の2段階はそれぞれ<strong>cos&sup2;(45&deg;)=50%</strong>の損失で済み、cos&sup2;(90&deg;)=0%という一気の急落を避けられるからです。<strong>3枚フィルターの復活</strong>を試したあと、同じ0&deg;から90&deg;への回転を5つの小さな段階に分ける<strong>緩やかな回転</strong>と比べてみてください。さらに多くの光が透過します。',
        seeMoreTools: '他のツールを見る',
        viewSource: 'ソースを見る',
    },
};

function detectInitialLang() {
    const urlLang = new URLSearchParams(location.search).get('lang');
    if (SUPPORTED_LANGS.includes(urlLang)) return urlLang;
    const stored = localStorage.getItem(I18N_STORAGE_KEY);
    if (SUPPORTED_LANGS.includes(stored)) return stored;
    const browserLang = (navigator.language || 'en').slice(0, 2);
    return SUPPORTED_LANGS.includes(browserLang) ? browserLang : 'en';
}

let currentLang = detectInitialLang();
const langChangeListeners = [];

function getLang() { return currentLang; }

function setLang(lang) {
    if (!SUPPORTED_LANGS.includes(lang) || lang === currentLang) return;
    currentLang = lang;
    localStorage.setItem(I18N_STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    applyStaticDict();
    langChangeListeners.forEach((fn) => fn(lang));
}

function onLangChange(fn) { langChangeListeners.push(fn); }

function t(key) {
    return STRINGS[currentLang]?.[key] ?? STRINGS.en?.[key] ?? key;
}

function applyStaticDict() {
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
        el.innerHTML = t(el.getAttribute('data-i18n-html'));
    });
    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const val = t(el.getAttribute('data-i18n'));
        const attr = el.getAttribute('data-i18n-attr');
        attr ? el.setAttribute(attr, val) : (el.textContent = val);
    });
}

const langToggleContainer = document.getElementById('langToggle');
function renderLangToggle() {
    langToggleContainer.innerHTML = '';
    SUPPORTED_LANGS.forEach((lang) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.textContent = LANG_LABELS[lang] || lang.toUpperCase();
        btn.setAttribute('aria-label', `Switch language to ${lang}`);
        btn.setAttribute('aria-pressed', String(lang === getLang()));
        btn.addEventListener('click', () => setLang(lang));
        langToggleContainer.appendChild(btn);
    });
}
onLangChange(renderLangToggle);

document.documentElement.lang = currentLang;
renderLangToggle();

// --- Polarization physics ----------------------------------------------
// Ideal linear polarizers, Malus's law. Unpolarized incident light loses
// exactly half its intensity through the first filter (no reference axis
// exists yet to measure its angle against); every filter after that
// transmits cos^2(delta) of the intensity that reached it, where delta is
// the angle to the immediately preceding filter's transmission axis —
// *not* to any absolute reference. This is why the classic "three
// polarizers" demo works: two filters crossed at 90 degrees block
// everything (cos^2(90)=0), but splitting that single 90-degree jump into
// two 45-degree steps only costs cos^2(45)=50% each time, so light
// reappears. Verified against the standard closed-form result for N
// evenly-spaced filters, T = (cos(90/N))^(2N), which -> 1 as N -> infinity.
const MAX_LAYERS = 8;
const LAYER_COLORS = ['#3d2a5c', '#2ba7a3', '#c9820a', '#b23a48', '#4a7c3a', '#3a6fb0', '#8a4fae', '#5c5c5c'];

function evenSpreadAngles(n) {
    if (n <= 1) return new Array(Math.max(n, 0)).fill(0);
    return Array.from({ length: n }, (_, i) => Math.round((90 * i) / (n - 1)));
}

function computeStages(activeAngles) {
    const stages = [{ value: 1, delta: null }];
    let I = 1;
    activeAngles.forEach((theta, idx) => {
        let delta = null;
        if (idx === 0) {
            I = I / 2;
        } else {
            delta = theta - activeAngles[idx - 1];
            const rad = (delta * Math.PI) / 180;
            const c = Math.cos(rad);
            I = I * c * c;
        }
        stages.push({ value: I, delta });
    });
    return stages;
}

// Full-length backing array so raising the layer count later restores
// whatever was there before (custom edits included) instead of resetting.
let angles = evenSpreadAngles(MAX_LAYERS);
let layerCount = 3;

// Which palette color belongs to each position. Kept separate from
// `angles` so that dragging a card to reorder it carries its color (its
// visual identity) along with its angle, instead of the color staying
// pinned to the slot the card lands in.
let colorIdx = Array.from({ length: MAX_LAYERS }, (_, i) => i);
function layerColorFor(idx) {
    return LAYER_COLORS[colorIdx[idx] % LAYER_COLORS.length];
}

const PRESETS = {
    aligned: { count: 2, angles: [0, 0] },
    crossed: { count: 2, angles: [0, 90] },
    reveal: { count: 3, angles: [0, 45, 90] },
    gentle: { count: 5, angles: [0, 23, 45, 68, 90] },
};
const PRESET_KEYS = {
    aligned: 'presetAligned',
    crossed: 'presetCrossed',
    reveal: 'presetReveal',
    gentle: 'presetGentle',
};

function matchesPreset(p) {
    if (layerCount !== p.count) return false;
    return p.angles.every((a, i) => Math.abs(angles[i] - a) < 0.5);
}

let currentPresetKey = null;
function syncPresetHighlight() {
    currentPresetKey = Object.keys(PRESETS).find((k) => matchesPreset(PRESETS[k])) || null;
    renderPresetButtons();
}

const presetButtonsContainer = document.getElementById('presetButtons');
function renderPresetButtons() {
    presetButtonsContainer.innerHTML = '';
    Object.keys(PRESETS).forEach((key) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.textContent = t(PRESET_KEYS[key]);
        btn.className = key === currentPresetKey ? 'active' : '';
        btn.addEventListener('click', () => applyPreset(key));
        presetButtonsContainer.appendChild(btn);
    });
}
onLangChange(renderPresetButtons);

function applyPreset(key) {
    const p = PRESETS[key];
    layerCount = p.count;
    p.angles.forEach((a, i) => { angles[i] = a; colorIdx[i] = i; });
    syncLayerCountUI();
    renderLayerControls();
    syncPresetHighlight();
    recomputeAndRender();
}

// Reordering moves a card to sit exactly where it was dropped, shifting
// the layers in between — the same "insert" semantics as reordering any
// drag-and-drop list, not a plain two-item swap.
function moveLayer(from, to) {
    if (from === to || from < 0 || to < 0 || from >= layerCount || to >= layerCount) return;
    const anglesActive = angles.slice(0, layerCount);
    const colorsActive = colorIdx.slice(0, layerCount);
    const [aVal] = anglesActive.splice(from, 1);
    const [cVal] = colorsActive.splice(from, 1);
    anglesActive.splice(to, 0, aVal);
    colorsActive.splice(to, 0, cVal);
    for (let i = 0; i < layerCount; i++) {
        angles[i] = anglesActive[i];
        colorIdx[i] = colorsActive[i];
    }
    renderLayerControls();
    syncPresetHighlight();
    recomputeAndRender();
}

// --- Layer-count field: slider + synced number input --------------------
const layerCountSlider = document.getElementById('layerCountSlider');
const layerCountNumber = document.getElementById('layerCountNumber');

function syncLayerCountUI() {
    layerCountSlider.value = String(layerCount);
    if (document.activeElement !== layerCountNumber) layerCountNumber.value = String(layerCount);
}

function setLayerCount(v) {
    const n = Math.min(MAX_LAYERS, Math.max(1, Math.round(v)));
    if (n === layerCount) { syncLayerCountUI(); return; }
    layerCount = n;
    syncLayerCountUI();
    renderLayerControls();
    syncPresetHighlight();
    recomputeAndRender();
}

layerCountSlider.addEventListener('input', () => setLayerCount(layerCountSlider.value));
layerCountNumber.addEventListener('input', () => {
    const v = parseInt(layerCountNumber.value, 10);
    if (!Number.isNaN(v)) setLayerCount(v);
});

// --- Per-layer angle cards ------------------------------------------------
const layerControlsContainer = document.getElementById('layerControls');
let layerEls = []; // { slider, number, dial, deltaEl }

function layerLabelText(idx) {
    return `${t('layerLabel')} ${idx + 1}`;
}

function buildLayerCard(idx) {
    const color = layerColorFor(idx);

    const card = document.createElement('div');
    card.className = 'layer-card';
    card.draggable = true;

    const header = document.createElement('div');
    header.className = 'layer-card-header';

    const handle = document.createElement('span');
    handle.className = 'drag-handle';
    handle.setAttribute('aria-hidden', 'true');
    handle.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true"><circle cx="9" cy="5" r="1.5"/><circle cx="9" cy="12" r="1.5"/><circle cx="9" cy="19" r="1.5"/><circle cx="15" cy="5" r="1.5"/><circle cx="15" cy="12" r="1.5"/><circle cx="15" cy="19" r="1.5"/></svg>';

    const badge = document.createElement('div');
    badge.className = 'layer-badge';
    badge.style.color = color;

    const dial = document.createElement('span');
    dial.className = 'layer-dial';

    const dot = document.createElement('span');
    dot.className = 'dot';
    dot.style.background = color;

    const label = document.createElement('span');
    label.style.color = 'var(--text-main)';
    label.textContent = layerLabelText(idx);

    badge.appendChild(dial);
    badge.appendChild(dot);
    badge.appendChild(label);

    const moveButtons = document.createElement('div');
    moveButtons.className = 'layer-move-buttons';
    const upBtn = document.createElement('button');
    upBtn.type = 'button';
    upBtn.textContent = '▲';
    upBtn.setAttribute('aria-label', 'Move layer up');
    upBtn.disabled = idx === 0;
    upBtn.addEventListener('click', () => moveLayer(idx, idx - 1));
    const downBtn = document.createElement('button');
    downBtn.type = 'button';
    downBtn.textContent = '▼';
    downBtn.setAttribute('aria-label', 'Move layer down');
    downBtn.disabled = idx === layerCount - 1;
    downBtn.addEventListener('click', () => moveLayer(idx, idx + 1));
    moveButtons.appendChild(upBtn);
    moveButtons.appendChild(downBtn);

    const number = document.createElement('input');
    number.type = 'number';
    number.className = 'field-number';
    number.min = '0';
    number.max = '180';
    number.step = '1';
    number.value = String(angles[idx]);

    header.appendChild(handle);
    header.appendChild(badge);
    header.appendChild(moveButtons);
    header.appendChild(number);

    // Native drag-and-drop reordering: only a press starting on the grip
    // handle actually begins a drag, so the slider and number input below
    // stay fully usable (their own mousedown/pointer handling is untouched
    // since dragstart is cancelled whenever it didn't originate on the handle).
    card.addEventListener('dragstart', (e) => {
        if (!e.target.closest('.drag-handle')) { e.preventDefault(); return; }
        card.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', String(idx));
    });
    card.addEventListener('dragend', () => card.classList.remove('dragging'));
    card.addEventListener('dragover', (e) => {
        e.preventDefault();
        card.classList.add('drag-over');
    });
    card.addEventListener('dragleave', () => card.classList.remove('drag-over'));
    card.addEventListener('drop', (e) => {
        e.preventDefault();
        card.classList.remove('drag-over');
        const from = parseInt(e.dataTransfer.getData('text/plain'), 10);
        if (!Number.isNaN(from)) moveLayer(from, idx);
    });

    const slider = document.createElement('input');
    slider.type = 'range';
    slider.min = '0';
    slider.max = '180';
    slider.step = '1';
    slider.value = String(angles[idx]);
    slider.setAttribute('aria-label', layerLabelText(idx));

    const deltaEl = document.createElement('div');
    deltaEl.className = 'layer-delta';

    card.appendChild(header);
    card.appendChild(slider);
    card.appendChild(deltaEl);

    function apply(value) {
        angles[idx] = value;
        slider.value = String(value);
        if (document.activeElement !== number) number.value = String(value);
        updateDial(dial, value);
        updateDeltaText(idx);
        if (idx + 1 < layerCount) updateDeltaText(idx + 1);
        syncPresetHighlight();
        recomputeAndRender();
    }

    slider.addEventListener('input', () => apply(parseFloat(slider.value)));
    number.addEventListener('input', () => {
        const v = parseFloat(number.value);
        if (!Number.isNaN(v)) apply(Math.min(180, Math.max(0, v)));
    });

    updateDial(dial, angles[idx]);

    return { card, slider, number, dial, deltaEl };
}

function updateDial(dialEl, angleDeg) {
    dialEl.style.setProperty('--dial-angle', `${angleDeg}deg`);
}

function updateDeltaText(idx) {
    const el = layerEls[idx]?.deltaEl;
    if (!el) return;
    if (idx === 0) {
        el.textContent = t('layerFirstHint');
    } else {
        const delta = angles[idx] - angles[idx - 1];
        el.textContent = `Δθ ${t('layerDeltaLabel')}: ${delta.toFixed(0)}°`;
    }
}

function renderLayerControls() {
    layerControlsContainer.innerHTML = '';
    layerEls = [];
    for (let i = 0; i < layerCount; i++) {
        const built = buildLayerCard(i);
        layerEls.push(built);
        layerControlsContainer.appendChild(built.card);
    }
    for (let i = 0; i < layerCount; i++) updateDeltaText(i);
}
onLangChange(renderLayerControls);

// --- Photo effect + transmission ladder ---------------------------------
const photoLayersEl = document.getElementById('photoLayers');
const photoScrimEl = document.getElementById('photoScrim');
const stageLadderEl = document.getElementById('stageLadder');
const transmissionReadoutEl = document.getElementById('transmissionReadout');

function fmtPct(v) {
    const pct = v * 100;
    return (pct < 10 ? pct.toFixed(1) : Math.round(pct)) + '%';
}

function renderPhoto(activeAngles) {
    photoLayersEl.innerHTML = '';
    activeAngles.forEach((angle, idx) => {
        const color = layerColorFor(idx);
        const pane = document.createElement('div');
        pane.className = 'polarizer-pane';
        pane.style.setProperty('--pane-angle', `${angle}deg`);
        pane.style.setProperty('--pane-color', color);
        pane.style.setProperty('--pane-dx', `${idx * 2}px`);
        pane.style.setProperty('--pane-dy', `${idx * -2}px`);

        const axisLine = document.createElement('div');
        axisLine.className = 'axis-line';

        const badge = document.createElement('div');
        badge.className = 'axis-badge';
        badge.textContent = `${idx + 1} · ${Math.round(angle)}°`;

        pane.appendChild(axisLine);
        pane.appendChild(badge);
        photoLayersEl.appendChild(pane);
    });
}

function renderLadder(stages) {
    stageLadderEl.innerHTML = '';
    stages.forEach((stage, i) => {
        if (i > 0) {
            const arrow = document.createElement('span');
            arrow.className = 'stage-arrow';
            arrow.textContent = '→';
            stageLadderEl.appendChild(arrow);
        }
        const chip = document.createElement('span');
        chip.className = 'stage-chip' + (i === stages.length - 1 ? ' final' : '');
        const value = document.createElement('span');
        value.className = 'stage-chip-value';
        value.textContent = i === 0 ? `I₀ ${fmtPct(stage.value)}` : `L${i} ${fmtPct(stage.value)}`;
        chip.appendChild(value);
        if (stage.delta !== null) {
            const delta = document.createElement('span');
            delta.className = 'stage-chip-delta';
            delta.textContent = `(Δ${stage.delta.toFixed(0)}°)`;
            chip.appendChild(delta);
        }
        stageLadderEl.appendChild(chip);
    });
}

function recomputeAndRender() {
    const activeAngles = angles.slice(0, layerCount);
    const stages = computeStages(activeAngles);
    const total = stages[stages.length - 1].value;
    renderPhoto(activeAngles);
    renderLadder(stages);
    photoScrimEl.style.setProperty('--scrim-opacity', String(1 - total));
    transmissionReadoutEl.textContent = fmtPct(total);
}

// --- Boot ------------------------------------------------------------
// Open on the classic "three-filter reveal" so the effect is visible
// immediately, without waiting for the user to find the preset button.
angles[0] = 0;
angles[1] = 45;
angles[2] = 90;
layerCount = 3;

applyStaticDict();
syncLayerCountUI();
renderLayerControls();
renderPresetButtons();
syncPresetHighlight();
recomputeAndRender();
