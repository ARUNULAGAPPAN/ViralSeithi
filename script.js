document.addEventListener('DOMContentLoaded', () => {
    // --- DOM ELEMENT SELECTION ---
    const newsGrid = document.getElementById('news-grid');
    const topicItems = document.querySelectorAll('.topic-item');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    // --- API CONFIGURATION ---
    const apiKey = 'afa8bf24d2124e3093ad1a1d0c0c747a';
    const topHeadlinesUrl = 'https://newsapi.org/v2/top-headlines?country=us';
    const everythingUrl = 'https://newsapi.org/v2/everything';

    // --- FUNCTIONS ---
    async function fetchNews(category = 'general') {
        newsGrid.innerHTML = '<div class="loading-spinner"></div>';
        const apiUrl = `${topHeadlinesUrl}&category=${category}&apiKey=${apiKey}`;
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json();
            displayNews(data.articles);
        } catch (error) {
            handleFetchError(error);
        }
    }

    async function searchNews(query) {
        newsGrid.innerHTML = '<div class="loading-spinner"></div>';
        const apiUrl = `${everythingUrl}?q=${encodeURIComponent(query)}&sortBy=relevancy&apiKey=${apiKey}`;
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json();
            displayNews(data.articles);
        } catch (error) {
            handleFetchError(error);
        }
    }

    function displayNews(articles) {
        newsGrid.innerHTML = '';
        if (!articles || articles.length === 0) {
            newsGrid.innerHTML = `<p style="text-align: center; grid-column: 1 / -1;">No articles found.</p>`;
            return;
        }
        articles.forEach(article => {
            if (!article.title || !article.description) return;
            const card = document.createElement('div');
            card.className = 'news-card';
            card.dataset.url = article.url;
            card.dataset.title = article.title;
            const authorAvatar = `https://i.pravatar.cc/35?u=${article.source.id || article.source.name}`;
            const authorName = article.author ? article.author.split(',')[0] : article.source.name;
            const formattedDate = new Date(article.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
            card.innerHTML = `
                <div class="card-header"><div class="author-info"><img src="${authorAvatar}" alt="Author"><span>${authorName || 'Unknown Author'}</span></div><div class="card-actions"><button class="share">Share</button><button class="collect">Collect</button></div></div>
                <h2 class="card-title">${article.title}</h2>
                ${article.urlToImage ? `<img src="${article.urlToImage}" alt="${article.title}" class="card-image" onerror="this.style.display='none'">` : ''}
                <p class="card-excerpt">${article.description}</p>
                <div class="card-footer"><div class="card-stats"><div class="stat-item"><i class="fa-regular fa-face-smile"></i><span>${(Math.random() * 5 + 4).toFixed(1)}</span></div><div class="stat-item"><span>${Math.floor(Math.random() * 200)}k views</span></div></div><span>${formattedDate}</span></div>`;
            newsGrid.appendChild(card);
        });
    }
    
    function handleFetchError(error) {
        console.error("Error fetching news:", error);
        newsGrid.innerHTML = `<p style="text-align: center; color: red; grid-column: 1 / -1;">Failed to load news. Please check your API key or network connection.</p>`;
    }
    
    // --- EVENT LISTENERS ---
    topicItems.forEach(topic => {
        topic.addEventListener('click', (e) => {
            e.preventDefault();
            topicItems.forEach(item => item.classList.remove('active'));
            topic.classList.add('active');
            const category = topic.dataset.category;
            if (category) fetchNews(category);
        });
    });

    function performSearch() {
        const query = searchInput.value.trim();
        if (query) {
            topicItems.forEach(item => item.classList.remove('active'));
            searchNews(query);
        }
    }
    
    searchButton.addEventListener('click', performSearch);
    
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') performSearch();
    });

    newsGrid.addEventListener('click', async (e) => {
        const target = e.target;
        if (target.classList.contains('share')) {
            const card = target.closest('.news-card');
            if (navigator.share) {
                try { await navigator.share({ title: card.dataset.title, url: card.dataset.url }); } catch (err) { console.error('Share failed:', err.message); }
            } else { alert(`Share this link:\n${card.dataset.url}`); }
        }
        if (target.classList.contains('collect')) {
            target.classList.toggle('collected');
            target.textContent = target.classList.contains('collected') ? 'Collected' : 'Collect';
        }
    });

    // --- INITIALIZATION ---
    fetchNews('general');
});

// ===== NEW: CURSOR TRAIL EFFECT =====
function throttle(func, delay) {
    let lastCall = 0;
    return function(...args) {
        const now = new Date().getTime();
        if (now - lastCall < delay) return;
        lastCall = now;
        return func(...args);
    };
}
const createStar = (x, y) => {
    const star = document.createElement('div');
    star.className = 'star-trail';
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    document.body.appendChild(star);
    setTimeout(() => { star.remove(); }, 1000);
};
window.addEventListener('mousemove', throttle((e) => createStar(e.clientX, e.clientY), 30));