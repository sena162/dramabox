const CONFIG = {
  API_KEY: '43e3afb23b9fb61a6189d86a8e563c27',
  BASE_URL: 'https://api.themoviedb.org/3',
  IMAGE_BASE: 'https://image.tmdb.org/t/p/',
  POSTER_SIZE: 'w342',
  BACKDROP_SIZE: 'w1280',
  PROFILE_SIZE: 'w185',
};

async function apiFetch(endpoint, params = {}) {
  const url = new URL(CONFIG.BASE_URL + endpoint);
  url.searchParams.set('api_key', CONFIG.API_KEY);
  url.searchParams.set('language', 'tr-TR');
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  const res = await fetch(url);
  if (!res.ok) throw new Error('API hatası: ' + res.status);
  return res.json();
}

function posterUrl(path, size = CONFIG.POSTER_SIZE) {
  if (!path) return null;
  return CONFIG.IMAGE_BASE + size + path;
}
function backdropUrl(path) {
  if (!path) return null;
  return CONFIG.IMAGE_BASE + CONFIG.BACKDROP_SIZE + path;
}
function profileUrl(path) {
  if (!path) return null;
  return CONFIG.IMAGE_BASE + CONFIG.PROFILE_SIZE + path;
}
function formatDate(str) {
  if (!str) return '—';
  return new Date(str).toLocaleDateString('tr-TR', { year:'numeric', month:'long', day:'numeric' });
}
function formatRuntime(mins) {
  if (!mins) return '—';
  const h = Math.floor(mins/60), m = mins%60;
  return h > 0 ? `${h}s ${m}dk` : `${m}dk`;
}
