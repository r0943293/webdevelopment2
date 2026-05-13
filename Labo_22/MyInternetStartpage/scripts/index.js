const colors = {
    'Google':    '#4285F4',
    'Youtube':   '#FF0000',
    'X':         '#1DA1F2',
    'Instagram': '#C13584'
};

let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

const setup = () => {
    const goBtn = document.getElementById('goBtn');
    goBtn.addEventListener('click', go);

    // Rebuild history cards from localStorage on page load
    searchHistory.forEach(item => addCard(item));
};

const go = () => {
    const inputEl = document.getElementById('commandInput');
    const input = inputEl.value.trim();

    // Validate: must contain a space (prefix + query)
    const spaceIndex = input.indexOf(' ');
    if (spaceIndex === -1) {
        alert('Invalid command');
        return;
    }

    const prefix = input.substring(0, spaceIndex);   // e.g. "/g"
    const query  = input.substring(spaceIndex + 1);  // everything after the space

    let url   = '';
    let title = '';

    // Build the URL and title based on the prefix
    switch (prefix) {
        case '/g':
            title = 'Google';
            url   = `https://www.google.com/search?q=${query.replaceAll(' ', '+')}`;
            break;
        case '/y':
            title = 'Youtube';
            url   = `https://www.youtube.com/results?search_query=${query.replaceAll(' ', '+')}`;
            break;
        case '/x':
            title = 'X';
            url   = `https://x.com/hashtag/${query.replaceAll(' ', '')}`;
            break;
        case '/i':
            title = 'Instagram';
            url   = `https://www.instagram.com/explore/tags/${query.replaceAll(' ', '')}`;
            break;
        default:
            alert('Unknown command prefix');
            return;
    }

    // Open the URL in a new tab
    window.open(url, '_blank');

    // Build history object
    const h = {
        title: title,
        text:  query,
        url:   url
    };

    // Add to array and save to localStorage
    searchHistory.push(h);
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));

    // Add card to the page
    addCard(h);

    // Clear the input field
    inputEl.value = '';
};

const addCard = (item) => {
    const color = colors[item.title] || '#6c757d';

    const col = document.createElement('div');
    col.className = 'col-md-4 mb-3';

    col.innerHTML = `
        <div class="card text-white" style="background-color: ${color};">
            <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item.text}</p>
                <a href="${item.url}" target="_blank" class="btn btn-light btn-sm">Go!</a>
            </div>
        </div>
    `;

    document.getElementById('historyContainer').appendChild(col);
};

window.addEventListener('load', setup);