// Utility Functions

// Load HTML content dynamically
async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    } catch (error) {
        console.error('Error loading component:', error);
    }
}

// Search tools
function searchTools(query) {
    query = query.toLowerCase();
    return CONFIG.tools.filter(tool => 
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query)
    );
}

// Filter tools by category
function filterToolsByCategory(categoryId) {
    return CONFIG.tools.filter(tool => tool.category === categoryId);
}

// Get featured tools
function getFeaturedTools() {
    return CONFIG.tools.filter(tool => tool.featured);
}

// Create tool card HTML
function createToolCard(tool) {
    return `
        <div class="col-md-4 col-lg-3 mb-4">
            <div class="tool-card">
                <div class="card-body">
                    <div class="icon">
                        <i class="${tool.icon}"></i>
                    </div>
                    <h5 class="card-title">${tool.name}</h5>
                    <p class="card-text">${tool.description}</p>
                    <a href="${tool.url}" class="btn btn-primary">Use Tool</a>
                </div>
            </div>
        </div>
    `;
}

// Create category card HTML
function createCategoryCard(category) {
    return `
        <div class="col-md-4 col-lg-2 mb-4">
            <div class="category-card" data-category="${category.id}">
                <div class="icon">
                    <i class="${category.icon}"></i>
                </div>
                <h5>${category.name}</h5>
                <p class="small">${category.description}</p>
            </div>
        </div>
    `;
}

// Initialize tool search
function initToolSearch() {
    const searchInput = document.getElementById('toolSearch');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value;
            const results = searchTools(query);
            const toolsGrid = document.getElementById('tools-grid');
            if (toolsGrid) {
                toolsGrid.innerHTML = results.map(createToolCard).join('');
            }
        });
    }
}

// Initialize category filtering
function initCategoryFilter() {
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const categoryId = card.dataset.category;
            const tools = filterToolsByCategory(categoryId);
            const toolsGrid = document.getElementById('tools-grid');
            if (toolsGrid) {
                toolsGrid.innerHTML = tools.map(createToolCard).join('');
            }
        });
    });
}

// Load ads
function loadAds() {
    if (CONFIG.adSpaces.header.enabled) {
        // Load header ad
    }
    if (CONFIG.adSpaces.sidebar.enabled) {
        // Load sidebar ad
    }
    if (CONFIG.adSpaces.footer.enabled) {
        // Load footer ad
    }
}

// Initialize the page
function initPage() {
    // Load header and footer
    loadComponent('header-placeholder', 'components/header.html');
    loadComponent('footer-placeholder', 'components/footer.html');

    // Initialize search and filtering
    initToolSearch();
    initCategoryFilter();

    // Load ads
    loadAds();

    // Add fade-in animation to elements
    document.querySelectorAll('.tool-card, .category-card').forEach(el => {
        el.classList.add('fade-in');
    });
}

// Export functions
window.utils = {
    loadComponent,
    searchTools,
    filterToolsByCategory,
    getFeaturedTools,
    createToolCard,
    createCategoryCard,
    initToolSearch,
    initCategoryFilter,
    loadAds,
    initPage
}; 