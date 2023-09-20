// Note to self:
// I was stumped as to how you could remove the articles, but maintain them for the visual display
// But you don't need to remove the articles completely
// What you can do is "modify" data only in the comparison step
// and keep the original data as-is

const bandsList = document.getElementById('bands');
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const sortedBands = bands.sort((a, b) => stripArticles(a) > stripArticles(b) ? 1 : -1);

function stripArticles(bandName) {
    return bandName.replace(/^(a |an |the )/i, '').trim();
}

bandsList.innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');
