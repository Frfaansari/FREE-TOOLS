// Image to PNG Converter Tool

class ImageToPNGConverter {
    constructor() {
        this.uploadBox = document.getElementById('uploadBox');
        this.fileInput = document.getElementById('fileInput');
        this.originalPreview = document.getElementById('originalPreview');
        this.convertedPreview = document.getElementById('convertedPreview');
        this.convertBtn = document.getElementById('convertBtn');
        this.downloadBtn = document.getElementById('downloadBtn');
        this.qualitySlider = document.getElementById('quality');
        this.transparencyCheckbox = document.getElementById('transparency');
        
        this.originalImage = null;
        this.convertedImage = null;
        this.maxFileSize = 10 * 1024 * 1024; // 10MB
        this.supportedFormats = ['image/jpeg', 'image/png', 'image/gif', 'image/bmp', 'image/webp'];
        
        this.initializeEventListeners();
        this.showToast = window.toastManager?.show || console.log;
    }

    initializeEventListeners() {
        // Handle drag and drop
        this.uploadBox.addEventListener('dragover', (e) => {
            e.preventDefault();
            this.uploadBox.classList.add('dragover');
        });

        this.uploadBox.addEventListener('dragleave', () => {
            this.uploadBox.classList.remove('dragover');
        });

        this.uploadBox.addEventListener('drop', (e) => {
            e.preventDefault();
            this.uploadBox.classList.remove('dragover');
            const file = e.dataTransfer.files[0];
            if (file) {
                this.validateAndHandleFile(file);
            }
        });

        // Handle click to upload
        this.uploadBox.addEventListener('click', () => {
            this.fileInput.click();
        });

        this.fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                this.validateAndHandleFile(file);
            }
        });

        // Handle conversion
        this.convertBtn.addEventListener('click', () => {
            this.convertToPNG();
        });

        // Handle download
        this.downloadBtn.addEventListener('click', () => {
            this.downloadPNG();
        });

        // Handle quality change
        this.qualitySlider.addEventListener('input', () => {
            if (this.originalImage) {
                this.convertToPNG();
            }
        });

        // Handle transparency toggle
        this.transparencyCheckbox.addEventListener('change', () => {
            if (this.originalImage) {
                this.convertToPNG();
            }
        });
    }

    validateAndHandleFile(file) {
        // Check file size
        if (file.size > this.maxFileSize) {
            this.showToast('File size exceeds 10MB limit', 'error');
            return;
        }

        // Check file type
        if (!this.supportedFormats.includes(file.type)) {
            this.showToast('Unsupported file format. Please upload an image file.', 'error');
            return;
        }

        this.handleFile(file);
    }

    handleFile(file) {
        this.showToast('Processing image...', 'info');
        this.convertBtn.disabled = true;
        this.downloadBtn.disabled = true;

        const reader = new FileReader();
        reader.onload = (e) => {
            this.originalImage = new Image();
            this.originalImage.onload = () => {
                this.displayOriginalImage();
                this.convertToPNG();
                this.convertBtn.disabled = false;
                this.showToast('Image loaded successfully', 'success');
            };
            this.originalImage.onerror = () => {
                this.showToast('Error loading image', 'error');
                this.resetTool();
            };
            this.originalImage.src = e.target.result;
        };

        reader.onerror = () => {
            this.showToast('Error reading file', 'error');
            this.resetTool();
        };

        reader.readAsDataURL(file);
    }

    displayOriginalImage() {
        this.originalPreview.innerHTML = '';
        const img = document.createElement('img');
        img.src = this.originalImage.src;
        img.className = 'img-fluid';
        this.originalPreview.appendChild(img);

        // Display image information
        const info = document.createElement('div');
        info.className = 'image-info mt-2';
        info.innerHTML = `
            <small class="text-muted">
                Size: ${this.formatFileSize(this.originalImage.src.length * 0.75)} | 
                Dimensions: ${this.originalImage.width}x${this.originalImage.height}
            </small>
        `;
        this.originalPreview.appendChild(info);
    }

    convertToPNG() {
        try {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            
            // Set canvas dimensions
            canvas.width = this.originalImage.width;
            canvas.height = this.originalImage.height;

            // Create a white background if transparency is disabled
            if (!this.transparencyCheckbox.checked) {
                ctx.fillStyle = '#FFFFFF';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }

            // Draw image
            ctx.drawImage(this.originalImage, 0, 0);

            // Convert to PNG with quality settings
            const quality = this.qualitySlider.value / 100;
            this.convertedImage = canvas.toDataURL('image/png', quality);
            
            // Display converted image
            this.convertedPreview.innerHTML = '';
            const img = document.createElement('img');
            img.src = this.convertedImage;
            img.className = 'img-fluid';
            this.convertedPreview.appendChild(img);

            // Display converted image information
            const info = document.createElement('div');
            info.className = 'image-info mt-2';
            info.innerHTML = `
                <small class="text-muted">
                    Size: ${this.formatFileSize(this.convertedImage.length * 0.75)} | 
                    Quality: ${this.qualitySlider.value}%
                </small>
            `;
            this.convertedPreview.appendChild(info);

            // Enable download button
            this.downloadBtn.disabled = false;
            this.showToast('Conversion completed', 'success');
        } catch (error) {
            this.showToast('Error during conversion', 'error');
            console.error('Conversion error:', error);
        }
    }

    downloadPNG() {
        if (!this.convertedImage) return;

        try {
            const link = document.createElement('a');
            const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
            link.download = `converted-image-${timestamp}.png`;
            link.href = this.convertedImage;
            link.click();
            this.showToast('Image downloaded successfully', 'success');
        } catch (error) {
            this.showToast('Error downloading image', 'error');
            console.error('Download error:', error);
        }
    }

    resetTool() {
        this.originalImage = null;
        this.convertedImage = null;
        this.originalPreview.innerHTML = '';
        this.convertedPreview.innerHTML = '';
        this.convertBtn.disabled = true;
        this.downloadBtn.disabled = true;
        this.fileInput.value = '';
    }

    formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
}

// Initialize the converter when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new ImageToPNGConverter();
}); 