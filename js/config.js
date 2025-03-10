const CONFIG = {
    categories: [
        {
            id: 'image-tools',
            name: 'Image Tools',
            icon: 'fas fa-image',
            description: 'Tools for image processing, conversion, and manipulation'
        },
        {
            id: 'seo-tools',
            name: 'SEO Tools',
            icon: 'fas fa-search',
            description: 'Tools for search engine optimization and website analysis'
        },
        {
            id: 'text-tools',
            name: 'Text Tools',
            icon: 'fas fa-font',
            description: 'Tools for text processing, formatting, and analysis'
        },
        {
            id: 'developer-tools',
            name: 'Developer Tools',
            icon: 'fas fa-code',
            description: 'Tools for developers and programmers'
        },
        {
            id: 'calculators',
            name: 'Calculators',
            icon: 'fas fa-calculator',
            description: 'Various calculators for different purposes'
        },
        {
            id: 'converters',
            name: 'Converters',
            icon: 'fas fa-exchange-alt',
            description: 'Tools for converting between different formats and units'
        }
    ],
    tools: [
        // Image Tools
        {
            id: 'image-to-png',
            name: 'Image to PNG Converter',
            category: 'image-tools',
            icon: 'fas fa-file-image',
            description: 'Convert images to PNG format with customizable settings',
            url: 'tools/image-to-png.html',
            featured: true
        },
        {
            id: 'image-to-jpg',
            name: 'Image to JPG Converter',
            category: 'image-tools',
            icon: 'fas fa-file-image',
            description: 'Convert images to JPG format with quality control',
            url: 'tools/image-to-jpg.html',
            featured: true
        },
        {
            id: 'image-resizer',
            name: 'Image Resizer',
            category: 'image-tools',
            icon: 'fas fa-expand-arrows-alt',
            description: 'Resize images while maintaining aspect ratio',
            url: 'tools/image-resizer.html',
            featured: true
        },
        {
            id: 'image-compressor',
            name: 'Image Compressor',
            category: 'image-tools',
            icon: 'fas fa-compress-arrows-alt',
            description: 'Compress images to reduce file size',
            url: 'tools/image-compressor.html',
            featured: true
        },
        {
            id: 'image-cropper',
            name: 'Image Cropper',
            category: 'image-tools',
            icon: 'fas fa-crop',
            description: 'Crop images to desired dimensions',
            url: 'tools/image-cropper.html'
        },
        {
            id: 'base64-image',
            name: 'Base64 Image Converter',
            category: 'image-tools',
            icon: 'fas fa-code',
            description: 'Convert images to Base64 and vice versa',
            url: 'tools/base64-image.html'
        },
        {
            id: 'webp-converter',
            name: 'WebP Converter',
            category: 'image-tools',
            icon: 'fas fa-file-image',
            description: 'Convert images to WebP format',
            url: 'tools/webp-converter.html'
        },
        {
            id: 'gif-maker',
            name: 'GIF Maker',
            category: 'image-tools',
            icon: 'fas fa-film',
            description: 'Create animated GIFs from images',
            url: 'tools/gif-maker.html'
        },
        {
            id: 'qr-generator',
            name: 'QR Code Generator',
            category: 'image-tools',
            icon: 'fas fa-qrcode',
            description: 'Generate QR codes from text or URLs',
            url: 'tools/qr-generator.html'
        },
        {
            id: 'screenshot-pdf',
            name: 'Screenshot to PDF',
            category: 'image-tools',
            icon: 'fas fa-file-pdf',
            description: 'Convert screenshots to PDF format',
            url: 'tools/screenshot-pdf.html'
        },

        // SEO Tools
        {
            id: 'meta-generator',
            name: 'Meta Tag Generator',
            category: 'seo-tools',
            icon: 'fas fa-tags',
            description: 'Generate SEO-friendly meta tags',
            url: 'tools/meta-generator.html',
            featured: true
        },
        {
            id: 'keyword-density',
            name: 'Keyword Density Checker',
            category: 'seo-tools',
            icon: 'fas fa-chart-bar',
            description: 'Analyze keyword density in your content',
            url: 'tools/keyword-density.html',
            featured: true
        },
        {
            id: 'sitemap-generator',
            name: 'Sitemap Generator',
            category: 'seo-tools',
            icon: 'fas fa-sitemap',
            description: 'Generate XML sitemaps for your website',
            url: 'tools/sitemap-generator.html'
        },
        {
            id: 'robots-txt',
            name: 'Robots.txt Generator',
            category: 'seo-tools',
            icon: 'fas fa-robot',
            description: 'Create robots.txt files for search engines',
            url: 'tools/robots-txt.html'
        },
        {
            id: 'google-index',
            name: 'Google Index Checker',
            category: 'seo-tools',
            icon: 'fab fa-google',
            description: 'Check if your pages are indexed by Google',
            url: 'tools/google-index.html'
        },
        {
            id: 'domain-authority',
            name: 'Domain Authority Checker',
            category: 'seo-tools',
            icon: 'fas fa-globe',
            description: 'Check domain authority and metrics',
            url: 'tools/domain-authority.html'
        },
        {
            id: 'backlink-checker',
            name: 'Backlink Checker',
            category: 'seo-tools',
            icon: 'fas fa-link',
            description: 'Analyze backlinks to your website',
            url: 'tools/backlink-checker.html'
        },
        {
            id: 'page-speed',
            name: 'Page Speed Checker',
            category: 'seo-tools',
            icon: 'fas fa-tachometer-alt',
            description: 'Check website loading speed',
            url: 'tools/page-speed.html'
        },
        {
            id: 'xml-validator',
            name: 'XML Sitemap Validator',
            category: 'seo-tools',
            icon: 'fas fa-check-circle',
            description: 'Validate your XML sitemap',
            url: 'tools/xml-validator.html'
        },
        {
            id: 'mobile-friendly',
            name: 'Mobile-Friendly Test',
            category: 'seo-tools',
            icon: 'fas fa-mobile-alt',
            description: 'Test website mobile responsiveness',
            url: 'tools/mobile-friendly.html'
        },

        // Text Tools
        {
            id: 'word-counter',
            name: 'Word Counter',
            category: 'text-tools',
            icon: 'fas fa-calculator',
            description: 'Count words, characters, and paragraphs',
            url: 'tools/word-counter.html',
            featured: true
        },
        {
            id: 'case-converter',
            name: 'Case Converter',
            category: 'text-tools',
            icon: 'fas fa-font',
            description: 'Convert text between different cases',
            url: 'tools/case-converter.html',
            featured: true
        },
        {
            id: 'plagiarism-checker',
            name: 'Plagiarism Checker',
            category: 'text-tools',
            icon: 'fas fa-search',
            description: 'Check text for plagiarism',
            url: 'tools/plagiarism-checker.html'
        },
        {
            id: 'grammar-checker',
            name: 'Grammar Checker',
            category: 'text-tools',
            icon: 'fas fa-check-double',
            description: 'Check text for grammar errors',
            url: 'tools/grammar-checker.html'
        },
        {
            id: 'text-to-speech',
            name: 'Text to Speech',
            category: 'text-tools',
            icon: 'fas fa-volume-up',
            description: 'Convert text to speech',
            url: 'tools/text-to-speech.html'
        },
        {
            id: 'speech-to-text',
            name: 'Speech to Text',
            category: 'text-tools',
            icon: 'fas fa-microphone',
            description: 'Convert speech to text',
            url: 'tools/speech-to-text.html'
        },
        {
            id: 'url-encoder',
            name: 'URL Encoder/Decoder',
            category: 'text-tools',
            icon: 'fas fa-link',
            description: 'Encode and decode URLs',
            url: 'tools/url-encoder.html'
        },
        {
            id: 'fancy-text',
            name: 'Fancy Text Generator',
            category: 'text-tools',
            icon: 'fas fa-magic',
            description: 'Generate fancy text styles',
            url: 'tools/fancy-text.html'
        },
        {
            id: 'random-text',
            name: 'Random Text Generator',
            category: 'text-tools',
            icon: 'fas fa-random',
            description: 'Generate random text content',
            url: 'tools/random-text.html'
        },
        {
            id: 'markdown-editor',
            name: 'Markdown Editor',
            category: 'text-tools',
            icon: 'fas fa-edit',
            description: 'Edit and preview markdown content',
            url: 'tools/markdown-editor.html'
        }
    ],
    featuredTools: [
        'image-to-png',
        'image-to-jpg',
        'image-resizer',
        'image-compressor',
        'meta-generator',
        'keyword-density',
        'word-counter',
        'case-converter'
    ],
    adSpaces: {
        header: {
            enabled: true,
            position: 'top'
        },
        sidebar: {
            enabled: true,
            position: 'right'
        },
        footer: {
            enabled: true,
            position: 'bottom'
        }
    }
}; 