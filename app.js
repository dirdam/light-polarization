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
        layerCountDecrease: 'Decrease layer count',
        layerCountIncrease: 'Increase layer count',
        layerLabel: 'Layer',
        layerAbbrev: 'L',
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
        layerCountDecrease: 'Reducir el número de capas',
        layerCountIncrease: 'Aumentar el número de capas',
        layerLabel: 'Capa',
        layerAbbrev: 'C',
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
        layerCountDecrease: '層の数を減らす',
        layerCountIncrease: '層の数を増やす',
        layerLabel: '層',
        layerAbbrev: '層',
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
    const stages = [{ value: 1, delta: null, local: null }];
    let I = 1;
    activeAngles.forEach((theta, idx) => {
        let delta = null;
        let local;
        if (idx === 0) {
            local = 0.5;
        } else {
            delta = theta - activeAngles[idx - 1];
            const rad = (delta * Math.PI) / 180;
            const c = Math.cos(rad);
            local = c * c;
        }
        I = I * local;
        stages.push({ value: I, delta, local });
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

// A hidden layer is skipped entirely — not just visually, but from the
// Malus's-law chain too: the next visible layer measures its angle
// against the nearest other *visible* layer, exactly as if the hidden
// one had been physically lifted out of the stack.
let layerVisible = Array.from({ length: MAX_LAYERS }, () => true);

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
    if (!layerVisible.slice(0, p.count).every(Boolean)) return false;
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
    p.angles.forEach((a, i) => { angles[i] = a; colorIdx[i] = i; layerVisible[i] = true; });
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
    const visActive = layerVisible.slice(0, layerCount);
    const [aVal] = anglesActive.splice(from, 1);
    const [cVal] = colorsActive.splice(from, 1);
    const [vVal] = visActive.splice(from, 1);
    anglesActive.splice(to, 0, aVal);
    colorsActive.splice(to, 0, cVal);
    visActive.splice(to, 0, vVal);
    for (let i = 0; i < layerCount; i++) {
        angles[i] = anglesActive[i];
        colorIdx[i] = colorsActive[i];
        layerVisible[i] = visActive[i];
    }
    renderLayerControls();
    syncPresetHighlight();
    recomputeAndRender();
}

// One drag session at a time: which layer started it, and (as the
// pointer moves) which card it's currently hovering over. The actual
// reorder only happens once, on release.
let layerDrag = null;

function startLayerDrag(fromIdx, sourceCard) {
    layerDrag = { fromIdx, overCard: null };
    sourceCard.classList.add('dragging');
    document.addEventListener('pointermove', onLayerDragMove);
    document.addEventListener('pointerup', endLayerDrag);
    document.addEventListener('pointercancel', endLayerDrag);
}

function onLayerDragMove(e) {
    if (!layerDrag) return;
    const el = document.elementFromPoint(e.clientX, e.clientY);
    const overCard = el ? el.closest('.layer-card') : null;
    const validTarget = overCard && overCard.parentElement === layerControlsContainer ? overCard : null;
    if (layerDrag.overCard && layerDrag.overCard !== validTarget) {
        layerDrag.overCard.classList.remove('drag-over');
    }
    if (validTarget) validTarget.classList.add('drag-over');
    layerDrag.overCard = validTarget;
}

function endLayerDrag() {
    if (!layerDrag) return;
    document.removeEventListener('pointermove', onLayerDragMove);
    document.removeEventListener('pointerup', endLayerDrag);
    document.removeEventListener('pointercancel', endLayerDrag);
    const { fromIdx, overCard } = layerDrag;
    layerDrag = null;
    layerControlsContainer.querySelectorAll('.layer-card').forEach((c) => {
        c.classList.remove('dragging', 'drag-over');
    });
    if (overCard) {
        const toIdx = parseInt(overCard.dataset.index, 10);
        if (!Number.isNaN(toIdx)) moveLayer(fromIdx, toIdx);
    }
}

// --- Layer-count field: slider + synced number input --------------------
const layerCountMinusBtn = document.getElementById('layerCountMinus');
const layerCountPlusBtn = document.getElementById('layerCountPlus');
const layerCountDisplayEl = document.getElementById('layerCountDisplay');

function syncLayerCountUI() {
    layerCountDisplayEl.textContent = String(layerCount);
    layerCountMinusBtn.disabled = layerCount <= 1;
    layerCountPlusBtn.disabled = layerCount >= MAX_LAYERS;
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

layerCountMinusBtn.addEventListener('click', () => setLayerCount(layerCount - 1));
layerCountPlusBtn.addEventListener('click', () => setLayerCount(layerCount + 1));

// --- Per-layer angle cards ------------------------------------------------
const layerControlsContainer = document.getElementById('layerControls');
let layerEls = []; // { slider, number, dial, deltaEl }

function layerLabelText(idx) {
    return `${t('layerLabel')} ${idx + 1}`;
}

// Wraps an existing <input type="range"> with a custom tick-mark
// overlay and returns the wrapper — reused for both the per-layer
// angle sliders and the layer-count slider. The native <datalist>
// ticks (via the slider's own `list` attribute, set separately) aren't
// drawn by every browser (Safari accepts the attribute for snapping
// but never renders the ticks), hence this custom version. Each tick's
// position accounts for the thumb's own width (16px): the thumb's
// center can only travel from half its own width in from one edge to
// half its width in from the other, never reaching the track's true
// 0%/100% ends, so a plain percentage would misplace the end ticks.
function buildTickedSlider(sliderEl, min, max, step, majorStep) {
    const wrap = document.createElement('div');
    wrap.className = 'ticked-slider-wrap';
    const ticksEl = document.createElement('div');
    ticksEl.className = 'slider-ticks';
    ticksEl.setAttribute('aria-hidden', 'true');
    for (let v = min; v <= max; v += step) {
        const tick = document.createElement('span');
        const isMajor = (v - min) % majorStep === 0;
        tick.className = 'slider-tick' + (isMajor ? ' slider-tick-major' : '');
        tick.style.setProperty('--tick-fraction', String((v - min) / (max - min)));
        ticksEl.appendChild(tick);
    }
    // appendChild moves sliderEl here regardless of whether it already
    // had a parent (freshly-created, not-yet-attached elements included)
    // or none at all — the caller places the returned wrap wherever
    // sliderEl itself used to belong, if it needs to preserve a spot.
    wrap.appendChild(ticksEl);
    wrap.appendChild(sliderEl);
    return wrap;
}

function buildLayerCard(idx) {
    const color = layerColorFor(idx);

    const card = document.createElement('div');
    card.className = 'layer-card';
    card.dataset.index = String(idx);

    const header = document.createElement('div');
    header.className = 'layer-card-header';

    const handle = document.createElement('span');
    handle.className = 'drag-handle';
    handle.setAttribute('aria-hidden', 'true');
    handle.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true"><circle cx="9" cy="5" r="1.5"/><circle cx="9" cy="12" r="1.5"/><circle cx="9" cy="19" r="1.5"/><circle cx="15" cy="5" r="1.5"/><circle cx="15" cy="12" r="1.5"/><circle cx="15" cy="19" r="1.5"/></svg>';

    const badge = document.createElement('div');
    badge.className = 'layer-badge';
    badge.style.color = color;

    const visToggle = document.createElement('button');
    visToggle.type = 'button';
    visToggle.className = 'visibility-toggle';
    visToggle.style.color = color;
    visToggle.addEventListener('click', () => {
        layerVisible[idx] = !layerVisible[idx];
        updateVisibilityUI(idx);
        recomputeAndRender();
    });

    const dot = document.createElement('span');
    dot.className = 'dot';
    dot.style.background = color;

    const label = document.createElement('span');
    label.style.color = 'var(--text-main)';
    label.textContent = layerLabelText(idx);

    badge.appendChild(visToggle);
    badge.appendChild(dot);
    badge.appendChild(label);

    const number = document.createElement('input');
    number.type = 'number';
    number.className = 'field-number';
    number.min = '0';
    number.max = '180';
    number.step = '1';
    number.value = String(angles[idx]);

    header.appendChild(handle);
    header.appendChild(badge);
    header.appendChild(number);

    // Pointer-based reordering, not the native HTML5 drag-and-drop API —
    // that API's support for reordering plain elements (as opposed to
    // dragging text/links/images) is inconsistent across browsers,
    // Safari in particular. Pointer events work the same way everywhere
    // and on touch, so the grip handle drags reliably.
    handle.addEventListener('pointerdown', (e) => {
        if (e.button !== undefined && e.button !== 0) return;
        e.preventDefault();
        startLayerDrag(idx, card);
    });

    const slider = document.createElement('input');
    slider.type = 'range';
    slider.min = '0';
    slider.max = '180';
    slider.step = '5';
    slider.value = String(angles[idx]);
    slider.setAttribute('list', ANGLE_TICKS_ID);
    slider.setAttribute('aria-label', layerLabelText(idx));

    const deltaEl = document.createElement('div');
    deltaEl.className = 'layer-delta';

    const sliderWrap = buildTickedSlider(slider, 0, 180, 5, 15);

    card.appendChild(header);
    card.appendChild(sliderWrap);
    card.appendChild(deltaEl);

    function apply(value) {
        angles[idx] = value;
        slider.value = String(value);
        if (document.activeElement !== number) number.value = String(value);
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

    return { card, slider, number, visToggle, deltaEl };
}

function eyeIconMarkup(visible) {
    return visible
        ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>'
        : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.492"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/></svg>';
}

function updateVisibilityUI(idx) {
    const els = layerEls[idx];
    if (!els) return;
    const visible = layerVisible[idx];
    els.visToggle.innerHTML = eyeIconMarkup(visible);
    els.visToggle.setAttribute('aria-pressed', String(!visible));
    els.visToggle.setAttribute('aria-label', visible ? 'Hide this layer' : 'Show this layer');
    els.card.classList.toggle('hidden-layer', !visible);
}

function updateDeltaText(idx) {
    const el = layerEls[idx]?.deltaEl;
    if (!el) return;
    if (idx === 0) {
        el.textContent = '';
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
    for (let i = 0; i < layerCount; i++) {
        updateDeltaText(i);
        updateVisibilityUI(i);
    }
}
onLangChange(renderLayerControls);
// The transmission ladder's "L1"/"C1"/"層1" labels are language-
// dependent too, so it needs a refresh on switch, same as the layer
// cards above.
onLangChange(recomputeAndRender);

// --- Photo effect + transmission ladder ---------------------------------
const photoStackEl = document.getElementById('photoStack');
const photoBadgesEl = document.getElementById('photoBadges');
const stageLadderEl = document.getElementById('stageLadder');
const transmissionReadoutEl = document.getElementById('transmissionReadout');

function fmtPct(v) {
    const pct = v * 100;
    return (pct < 10 ? pct.toFixed(1) : Math.round(pct)) + '%';
}

// Every pane is a square sized at 1/sqrt(2) of the stage, so its half-
// diagonal — the distance from its own center to each of its corners —
// is exactly 50% of the stage, regardless of rotation. Stacking offsets
// are expressed in that same stage-relative percentage, one step per
// layer index.
const PANE_HALF_DIAGONAL_PCT = 50;
const FAN_STEP_PCT = 1.2;

// The 4 corners of a pane, in stage-relative percentages, given its own
// rotation and its (stage-relative) center offset. Angles are measured
// clockwise from the positive x-axis with no extra sign flip, matching
// how CSS's own rotate(deg) already turns things on screen (y grows
// downward), so a corner computed here lines up exactly with where the
// visually-rotated decorative pane really is.
function paneCorners(angleDeg, dxPct, dyPct) {
    const cx = 50 + dxPct;
    const cy = 50 + dyPct;
    const corners = [];
    for (let k = 0; k < 4; k++) {
        const phi = ((-45 + 90 * k + angleDeg) * Math.PI) / 180;
        corners.push({
            x: cx + PANE_HALF_DIAGONAL_PCT * Math.cos(phi),
            y: cy + PANE_HALF_DIAGONAL_PCT * Math.sin(phi),
        });
    }
    return corners;
}

function polygonClipPath(corners) {
    return `polygon(${corners.map((c) => `${c.x}% ${c.y}%`).join(', ')})`;
}

// The actual darkening: one nested div per visible layer, each clipped
// to that layer's own rotated-square footprint (see paneCorners). A
// parent's clip-path constrains its whole subtree the way overflow:
// hidden does, so nesting them makes the browser compute the
// progressive intersection — a point only ever receives level k's
// (semi-transparent black) background if it fell inside every clip from
// level 1 through k, which is exactly "reached filters 1..k in order".
//
// That assumption breaks down once panes are rotated to different
// angles: a point can be inside pane 1's square and pane 3's square
// without being inside pane 2's square at all (pane 2 simply doesn't
// reach that spot), and light there really did skip straight from
// filter 1 to filter 3 — using filter 1's angle as the reference, not
// filter 2's. Nesting wrongly gates filter 3's contribution behind
// filter 2's shape even where filter 2 isn't present.
//
// The fix: instead of nesting, decompose the stage into the actual
// disjoint regions of the arrangement of every visible pane's square,
// each tagged with exactly *which* panes cover it (in stack order),
// then render each region once with the correct Malus's-law product
// for that specific subset — no compositing/nesting tricks needed,
// each region already carries its own final, correct value.
function isLeft(a, b, p) {
    return (b.x - a.x) * (p.y - a.y) - (b.y - a.y) * (p.x - a.x) >= 0;
}

function intersectLine(p1, p2, a, b) {
    const A1 = p2.y - p1.y, B1 = p1.x - p2.x, C1 = A1 * p1.x + B1 * p1.y;
    const A2 = b.y - a.y, B2 = a.x - b.x, C2 = A2 * a.x + B2 * a.y;
    const det = A1 * B2 - A2 * B1;
    if (Math.abs(det) < 1e-9) return p2;
    return { x: (B2 * C1 - B1 * C2) / det, y: (A1 * C2 - A2 * C1) / det };
}

// Repeated clipping tends to place a new intersection point almost
// exactly on top of an existing vertex; that near-zero-length edge then
// makes the *next* clip's isLeft test ambiguous under floating point,
// which was corrupting the arrangement at higher layer counts (verified:
// regions started overlapping each other, and the number of regions
// blew up combinatorially, exactly where these near-duplicate vertices
// first appeared). Merging consecutive vertices closer than a small
// epsilon after every clip stops this from ever compounding.
const VERTEX_MERGE_EPS = 1e-4;

function simplifyPolygon(poly) {
    if (poly.length < 3) return poly;
    const out = [];
    for (let i = 0; i < poly.length; i++) {
        const p = poly[i];
        const prev = out[out.length - 1];
        if (!prev || Math.hypot(p.x - prev.x, p.y - prev.y) > VERTEX_MERGE_EPS) out.push(p);
    }
    if (out.length > 1) {
        const first = out[0], last = out[out.length - 1];
        if (Math.hypot(first.x - last.x, first.y - last.y) <= VERTEX_MERGE_EPS) out.pop();
    }
    return out.length >= 3 ? out : [];
}

// Keeps the part of a convex polygon on the "inside" (left) of the
// directed edge a->b — the core Sutherland-Hodgman clip step.
function clipConvexByHalfPlane(poly, a, b) {
    const out = [];
    const n = poly.length;
    for (let i = 0; i < n; i++) {
        const cur = poly[i], prev = poly[(i - 1 + n) % n];
        const curIn = isLeft(a, b, cur);
        const prevIn = isLeft(a, b, prev);
        if (curIn) {
            if (!prevIn) out.push(intersectLine(prev, cur, a, b));
            out.push(cur);
        } else if (prevIn) {
            out.push(intersectLine(prev, cur, a, b));
        }
    }
    return simplifyPolygon(out);
}

// Intersection of two convex polygons: clip A against every edge of B.
function convexIntersect(polyA, polyB) {
    let result = polyA;
    for (let i = 0; i < polyB.length && result.length > 0; i++) {
        result = clipConvexByHalfPlane(result, polyB[i], polyB[(i + 1) % polyB.length]);
    }
    return result;
}

function polygonArea(poly) {
    let area = 0;
    const n = poly.length;
    for (let i = 0; i < n; i++) {
        const p1 = poly[i], p2 = poly[(i + 1) % n];
        area += p1.x * p2.y - p2.x * p1.y;
    }
    return Math.abs(area) / 2;
}

// A \ B for two convex polygons, as up to one convex piece per edge of
// B: piece i is A clipped to "inside every earlier edge of B, outside
// edge i" — their union is exactly the part of A that B doesn't cover.
function convexDifference(polyA, polyB) {
    const pieces = [];
    let remaining = polyA;
    for (let i = 0; i < polyB.length; i++) {
        if (remaining.length === 0) break;
        const a = polyB[i], b = polyB[(i + 1) % polyB.length];
        const outside = clipConvexByHalfPlane(remaining, b, a);
        if (polygonArea(outside) > 1e-6) pieces.push(outside);
        remaining = clipConvexByHalfPlane(remaining, a, b);
    }
    return pieces;
}

// Builds the arrangement of every visible pane's square, incrementally:
// each new pane either extends an existing cell's subset (where they
// overlap), leaves the rest of that cell untouched (where they don't),
// or starts a brand-new cell of its own (wherever it lands on ground no
// earlier pane reached at all).
//
// Returns, per layer, only the pieces that are NEW or EXTENDED at that
// step — not the full cumulative region list. This matters: painting
// each layer's darkening as its own sequential overlay means the
// browser's own alpha compositing multiplies each region's overlays
// together, exactly reconstructing that region's cumulative Malus's-
// law product — but only if each region gets painted with its own
// INCREMENTAL factor exactly once, at the depth where it was created
// or last extended. Re-painting an unchanged (carried-over) region's
// full cumulative alpha again at a later depth would multiply that
// same cumulative value into itself, compounding into something far
// darker than correct (verified: this is exactly what made the whole
// stage go nearly solid black instead of showing the true 12.5%).
function buildRegionSnapshots(activeIdx) {
    let cells = [];
    const newPiecesPerDepth = [];
    activeIdx.forEach((originalIdx) => {
        const angle = angles[originalIdx];
        const paneQuad = paneCorners(angle, originalIdx * FAN_STEP_PCT, -originalIdx * FAN_STEP_PCT);
        const nextCells = [];
        const newPieces = [];
        let remaining = [paneQuad];
        cells.forEach((cell) => {
            const overlap = convexIntersect(cell.polygon, paneQuad);
            if (polygonArea(overlap) > 1e-6) {
                const prevIdx = cell.subset[cell.subset.length - 1];
                const delta = angle - angles[prevIdx];
                const c = Math.cos((delta * Math.PI) / 180);
                const extended = { polygon: overlap, subset: [...cell.subset, originalIdx], local: c * c };
                nextCells.push(extended);
                newPieces.push(extended);
                remaining = remaining.flatMap((r) => convexDifference(r, cell.polygon));
            }
            // Unchanged part of this existing cell — not touched by this
            // layer at all, so it keeps whatever was already painted for
            // it and must NOT be added to newPieces (else it would be
            // re-darkened all over again with no new information).
            convexDifference(cell.polygon, paneQuad).forEach((p) => nextCells.push({ polygon: p, subset: cell.subset, local: cell.local }));
        });
        remaining.forEach((p) => {
            if (polygonArea(p) > 1e-6) {
                const fresh = { polygon: p, subset: [originalIdx], local: 0.5 };
                nextCells.push(fresh);
                newPieces.push(fresh);
            }
        });
        cells = nextCells;
        newPiecesPerDepth.push(newPieces);
    });
    return newPiecesPerDepth;
}

// Skip slivers too small to matter (fan-offset rounding, near-tangent
// edges) rather than filling the DOM with imperceptible clipped divs.
const MIN_RENDERED_REGION_AREA = 1;

// `activeIdx` holds the *original* card index of each visible layer, in
// stack order — a hidden layer contributes no entry at all, so it's
// skipped both visually and in the Malus's-law chain (computeStages
// only ever sees the angles that are actually still in the stack).
//
// Interleaves each layer's darkening group with its own pane, in stack
// order: background, filter 1's darkening, pane 1 (border+axis),
// filter 2's darkening, pane 2, ... — so a layer's border/axis is
// dimmed by itself and everything before it, but nothing after it.
// The topmost (last) layer ends up fully bright, since nothing paints
// over it afterward.
function renderPhotoStack(activeIdx) {
    photoStackEl.innerHTML = '';
    photoBadgesEl.innerHTML = '';
    const newPiecesPerDepth = buildRegionSnapshots(activeIdx);
    activeIdx.forEach((originalIdx, i) => {
        // Each piece's OWN incremental local factor, not its cumulative
        // transmission — the sequential overlays across all depths are
        // what reconstructs the correct cumulative darkening (see
        // buildRegionSnapshots).
        newPiecesPerDepth[i].forEach((cell) => {
            if (polygonArea(cell.polygon) < MIN_RENDERED_REGION_AREA) return;
            const level = document.createElement('div');
            level.className = 'darkening-level';
            level.style.clipPath = polygonClipPath(cell.polygon);
            level.style.background = `rgba(0, 0, 0, ${1 - cell.local})`;
            photoStackEl.appendChild(level);
        });

        const angle = angles[originalIdx];
        const color = layerColorFor(originalIdx);
        const pane = document.createElement('div');
        pane.className = 'polarizer-pane';
        pane.style.setProperty('--pane-angle', `${angle}deg`);
        pane.style.setProperty('--pane-color', color);
        // Offset by the layer's own slot (originalIdx), not its position
        // among only the visible ones (i) — so hiding layer 2 doesn't
        // shift layer 3 into layer 2's spot in the fan; layer 3 keeps its
        // own height and stays put when layer 2 is re-enabled.
        // --pane-dx/dy are consumed inside a `translate()` on the pane's
        // OWN transform, where percentages resolve against the pane's
        // own box (1/sqrt(2) of the stage) rather than the stage itself —
        // multiplying by sqrt(2) here converts the stage-relative
        // FAN_STEP_PCT into that frame, so it lines up with the same
        // offset used for the darkening clip-path above.
        pane.style.setProperty('--pane-dx', `${originalIdx * FAN_STEP_PCT * Math.SQRT2}%`);
        pane.style.setProperty('--pane-dy', `${-originalIdx * FAN_STEP_PCT * Math.SQRT2}%`);

        const axisLine = document.createElement('div');
        axisLine.className = 'axis-line';
        pane.appendChild(axisLine);
        photoStackEl.appendChild(pane);

        // The badge lives in a separate ghost holder above everything
        // (same box/transform as the pane, just no border/fill), so its
        // label stays legible even in a fully-blocked region (e.g. the
        // Crossed preset is ~0% transmission across its whole shared
        // area, which would otherwise paint solid black over it).
        const badgeHolder = document.createElement('div');
        badgeHolder.className = 'badge-holder';
        badgeHolder.style.setProperty('--pane-angle', `${angle}deg`);
        badgeHolder.style.setProperty('--pane-dx', `${originalIdx * FAN_STEP_PCT * Math.SQRT2}%`);
        badgeHolder.style.setProperty('--pane-dy', `${-originalIdx * FAN_STEP_PCT * Math.SQRT2}%`);

        const badge = document.createElement('div');
        badge.className = 'axis-badge';
        badge.style.setProperty('--pane-color', color);
        badge.textContent = `${originalIdx + 1} · ${Math.round(angle)}°`;

        badgeHolder.appendChild(badge);
        photoBadgesEl.appendChild(badgeHolder);
    });
}

function renderLadder(activeIdx, stages) {
    stageLadderEl.innerHTML = '';
    stages.forEach((stage, i) => {
        if (i > 0) {
            const arrow = document.createElement('span');
            arrow.className = 'stage-arrow';
            arrow.textContent = '→';
            stageLadderEl.appendChild(arrow);
        }
        const chip = document.createElement('span');
        chip.className = 'stage-chip';
        const value = document.createElement('span');
        value.className = 'stage-chip-value';
        if (i === 0) {
            value.textContent = fmtPct(stage.value);
        } else {
            const originalIdx = activeIdx[i - 1];
            const label = document.createElement('span');
            label.className = 'stage-chip-label';
            label.style.color = layerColorFor(originalIdx);
            label.textContent = `${t('layerAbbrev')}${originalIdx + 1}`;
            value.appendChild(label);
            value.appendChild(document.createTextNode(` ${fmtPct(stage.value)}`));
        }
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
    const activeIdx = [];
    for (let i = 0; i < layerCount; i++) {
        if (layerVisible[i]) activeIdx.push(i);
    }
    const visibleAngles = activeIdx.map((i) => angles[i]);
    const stages = computeStages(visibleAngles);
    const total = stages[stages.length - 1].value;
    renderPhotoStack(activeIdx);
    renderLadder(activeIdx, stages);
    transmissionReadoutEl.textContent = fmtPct(total);
}

// --- Boot ------------------------------------------------------------
// A shared <datalist> of every 5-degree mark, referenced by every angle
// slider's `list` attribute — the browser renders it as tick marks
// along the track (Chrome/Firefox/Edge; Safari doesn't draw them, but
// the snapping below still works there regardless).
const ANGLE_TICKS_ID = 'angleTicks';
function initAngleTicks() {
    const datalist = document.createElement('datalist');
    datalist.id = ANGLE_TICKS_ID;
    for (let deg = 0; deg <= 180; deg += 5) {
        const option = document.createElement('option');
        option.value = String(deg);
        datalist.appendChild(option);
    }
    document.body.appendChild(datalist);
}
initAngleTicks();

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
