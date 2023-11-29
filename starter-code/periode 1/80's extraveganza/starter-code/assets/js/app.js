/**
 * This is the dataset of quirky music videos that you are required to use in this 
 * exam. 
 * 
 * For more details, see the `dataset.js` file
 */
const database = quirkyVideoDatabaseObject;

/**
 * Initializes the app when the page is fully loaded.
 * 
 * Instead placing the code outside of a function, this ensures that all expected
 * DOM elements are loaded and available. It is a good practice in Javascript, 
 * and might prevent some funky errors.
 */
window.addEventListener('load', function() {
  const addButton = document.getElementById('add-button');
  addButton.addEventListener('click', addVideo);
  renderVideoList();
});

/**
 * Add a new video to the playlist based on the users input
 */
function addVideo() {
  const videoIdInput = document.getElementById('video-id');
  const artistInput = document.getElementById('artist');
  const titleInput = document.getElementById('title');
  const durationInput = document.getElementById('duration');

  let validated = true;

  validated = validated && videoIdInput.value != '' && videoIdInput.value.length == 11;
  validated = validated && artistInput.value != '' && artistInput.value.length > 3;
  validated = validated && titleInput.value != '' && titleInput.value.length > 3;
  validated = validated && durationInput.value != '' && !isNaN(durationInput.value);

  if (validated) {
    database.videos.push({
      videoId: videoIdInput.value,
      artist: artistInput.value,
      title: titleInput.value,
      duration: durationInput.value
    });
    renderVideoList();

    videoIdInput.value = '';
    artistInput.value = '';
    titleInput.value = '';
    durationInput.value = '';
  }
}

/**
 * Renders the entire list of videos to the playlist DOM element. It clears the 
 * current content 
 */
function renderVideoList() {
  const playlistElement = document.getElementById('playlist');
  playlistElement.innerHTML = '';
  database.videos.sort((first, second) => {
    if (first.title > second.title) {
      return 1;
    }
    if (second.title > first.title) {
      return -1;
    }
    return 0;
  });
  database.videos.forEach((video) =>
    playlistElement.appendChild(createVideoElement(video))
  );
  renderAirtime();
}

/**
 * Computes and renders the total airtime
 */
function renderAirtime() {
  const airTimeElement = document.getElementById('airtime');
  airTimeElement.innerHTML = formatDuration(
    database.videos.reduce((prev, video) => prev + video.duration, 0)
  );
}

/**
 * Creates the DOM that renders the specified video
 * 
 * @param {*} video the video to render
 * @returns the created parent DOM element
 */
function createVideoElement(video) {
  const articleElement = document.createElement('article');
  articleElement.className = 'card m-2 p-2';

  const mediaDiv = document.createElement('div');
  mediaDiv.className = 'media';
  articleElement.appendChild(mediaDiv);

  // Left part
  const mediaLeftDiv = document.createElement('div');
  mediaLeftDiv.className = 'media-left';
  mediaDiv.appendChild(mediaLeftDiv);

  const paragraphElement = document.createElement('p');
  paragraphElement.className = 'image is-64x64';
  mediaLeftDiv.appendChild(paragraphElement);

  const imageElement = document.createElement('img');
  imageElement.src = `https://img.youtube.com/vi/${video.videoId}/0.jpg`;
  paragraphElement.appendChild(imageElement);

  // Content part
  const mediaContentDiv = document.createElement('div');
  mediaContentDiv.className = 'media-content';
  mediaDiv.appendChild(mediaContentDiv);

  const contentDiv = document.createElement('div');
  contentDiv.className = 'content';
  mediaContentDiv.appendChild(contentDiv);

  const linkElement = document.createElement('a');
  linkElement.href = `https://youtu.be/${video.videoId}`;
  linkElement.innerHTML = `<strong>${video.artist}</strong> - ${video.title}`;
  contentDiv.appendChild(linkElement);

  // Right part
  const mediaRightDiv = document.createElement('div');
  mediaRightDiv.className = 'media-right';
  mediaDiv.appendChild(mediaRightDiv);

  const durationSpan = document.createElement('span');
  durationSpan.className = 'has-text-grey-light';
  durationSpan.innerHTML = formatDuration(video.duration);
  mediaRightDiv.appendChild(durationSpan);

  return articleElement;
}

/**
 * Helper function that turns a duration in seconds into a human readbable string 
 * formatted as hours:minutes:seconds where hours is only visible when needed.
 * 
 * @param {*} duration the duration in seconds
 * @returns a String representing the duration in a human readable format
 */
function formatDuration(duration) {
  let remainder = duration;
  const seconds = remainder % 60;
  remainder = (remainder - seconds) / 60;
  const minutes = remainder % 60;
  remainder = (remainder - minutes) / 60;
  const hours = remainder;
  result = '';
  if (hours > 0) {
    result += `${hours}:${pad(minutes, 2)}`;
  } else {
    result += minutes;
  }
  result += `:${pad(seconds, 2)}`;
  return result;
}

/**
 * Helper function that creates a string from the specified number with leading 
 * zeros up to the specified size.
 * 
 * @param {*} number The number to create the string from 
 * @param {*} size The maximum length of the result string 
 * @returns a string representing the number with leading zeros up to the size
 */
function pad(number, size) {
  const zero = size - number.toString().length + 1;
  return Array(+(zero > 0 && zero)).join('0') + number;
}