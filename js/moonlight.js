'use strict';
const root = document.documentElement;
const byId = (id) => document.getElementById(id);
const eraButtons = [...document.querySelectorAll('.era-button')];
let era = 'legion';
let prowling = false;
let pets = 0;
let sleeping = false;
let lastActivity = Date.now();
let speechTimer;
function updateSleep() {
  document.body.classList.toggle('sleeping', sleeping && !prowling);
}
function speak(text) {
  clearTimeout(speechTimer);
  byId('cat-speech').textContent = text;
  byId('cat-speech').classList.add('visible');
  speechTimer = setTimeout(() => byId('cat-speech').classList.remove('visible'), 4500);
}
function setProwl(next) {
  prowling = next;
  document.body.classList.toggle('prowling', next);
  byId('prowl').setAttribute('aria-pressed', String(next));
  byId('prowl').setAttribute('aria-label', next ? '取消潜行' : '潜行');
  byId('prowl-tooltip').textContent = next ? '取消潜行' : '潜行';
  byId('prowl-icon').src = next
    ? 'img/icons/spell_nature_invisibilty.jpg'
    : 'img/icons/ability_druid_prowl.jpg';
  lastActivity = Date.now();
  sleeping = false;
  updateSleep();
}
eraButtons.forEach((button) => button.addEventListener('click', () => {
  era = button.dataset.era;
  root.dataset.era = era;
  eraButtons.forEach((item) => {
    const active = item === button;
    item.setAttribute('aria-pressed', String(active));
  });
  byId('cat-speech').classList.remove('visible');
  lastActivity = Date.now();
  sleeping = false;
  updateSleep();
}));
byId('prowl').addEventListener('click', () => setProwl(!prowling));
byId('cat-touch').addEventListener('click', () => {
  const wasIdle = sleeping;
  if (prowling) {
    setProwl(false);
    speak('这都能找到？潜行白练了。');
  } else if (wasIdle) {
    speak('嗯？开怪了？……那我再睡五分钟。');
  } else {
    const lines = ['呼噜……今天不打木桩。', '别摸了，再摸要掉毛了。', '月亮还没下班，我先睡了。', '你已获得猫德的信任。并没有掉落坐骑。', era === 'classic' ? '还是泰达希尔的月亮，看着亲切。' : '发光归发光，我可不是夜灯。'];
    speak(lines[pets % lines.length]);
    pets += 1;
  }
  lastActivity = Date.now();
  sleeping = false;
  updateSleep();
});
// Mouse movement and keyboard navigation count as activity, but preserve the idle
// state until the cat's click handler has had a chance to respond to being woken.
for (const name of ['pointermove', 'keydown', 'scroll']) {
  window.addEventListener(name, () => { lastActivity = Date.now(); }, { passive: true });
}
setInterval(() => {
  if (Date.now() - lastActivity > 20000) sleeping = true;
  updateSleep();
}, 1000);
byId('year').textContent = new Date().getFullYear();
for (let i = 0; i < 18; i += 1) {
  const mote = document.createElement('span');
  mote.className = 'mote';
  mote.style.left = `${15 + ((i * 37) % 80)}%`;
  mote.style.top = `${20 + ((i * 19) % 65)}%`;
  mote.style.animationDelay = `${-i * 1.7}s`;
  mote.style.animationDuration = `${10 + (i % 7)}s`;
  byId('motes').append(mote);
}
