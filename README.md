# Snehil Pallav Sinha - Portfolio Website

A modern, interactive portfolio website built with HTML, CSS, JavaScript, and Bootstrap 5.2.3. Features smooth animations, responsive design, and professional presentation of skills and experience.

## Features

- **Responsive Design**: Works perfectly on all devices (desktop, tablet, mobile)
- **Interactive Animations**: Smooth keyframe animations and scroll-triggered effects
- **Modern UI**: Clean, professional design with gradient backgrounds and hover effects
- **Contact Form**: Functional contact form with validation
- **Smooth Scrolling**: Seamless navigation between sections
- **Skills Animation**: Animated progress bars for technical skills
- **Timeline**: Interactive work experience timeline

## Tech Stack

- **HTML5**: Semantic markup structure
- **CSS3**: Custom styling with CSS variables and keyframe animations
- **JavaScript**: Interactive functionality and form validation
- **Bootstrap 5.2.3**: Responsive grid system and components
- **Font Awesome**: Professional icons
- **Google Fonts**: Inter and Poppins font families

## Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Installation & Deployment

### Option 1: Simple Static Hosting

1. **Download the files**:
   - Download `index.html`, `styles.css`, and `script.js`
   - Keep all files in the same directory

2. **Deploy to any static hosting service**:
   - **Netlify**: Drag and drop the folder to netlify.com/drop
   - **Vercel**: Import the project from GitHub or upload files
   - **GitHub Pages**: Push to a GitHub repository and enable Pages
   - **Apache/Nginx**: Upload files to your web server's document root

### Option 2: Local Development

1. **Clone or download the files**
2. **Open in browser**: Simply double-click `index.html` or serve with a local server
3. **Local server (optional)**:
   ```bash
   # Using Python (if installed)
   python -m http.server 8000
   
   # Using Node.js (if installed)
   npx http-server
   
   # Using PHP (if installed)
   php -S localhost:8000
   ```

### Option 3: Your Own Server

1. **Requirements**:
   - Web server (Apache, Nginx, or any HTTP server)
   - No database required
   - No server-side processing needed

2. **Upload files**:
   - Copy `index.html`, `styles.css`, and `script.js` to your server
   - Ensure files are in the document root or subdirectory
   - Set proper file permissions (644 for files, 755 for directories)

3. **Domain setup**:
   - Point your domain to your server
   - Configure SSL certificate for HTTPS
   - Set up any redirects if needed

## Customization

### Personal Information
Edit `index.html` to update:
- Contact details (email, phone, location)
- Work experience and job descriptions
- Skills and proficiency levels
- LinkedIn and social media links

### Styling
Modify `styles.css`:
- Change color scheme by updating CSS variables in `:root`
- Adjust animations by modifying `@keyframes` rules
- Customize responsive breakpoints in media queries

### Functionality
Update `script.js`:
- Modify typing animation texts
- Adjust skill bar percentages
- Customize form validation rules
- Add new interactive features

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+ (limited support)

## Performance Features

- Optimized images and assets
- Efficient CSS animations
- Throttled scroll events
- Lazy loading for smooth performance
- Minimal external dependencies

## Contact Form

The contact form includes:
- Client-side validation
- Real-time feedback
- Success/error messages
- Required field validation
- Email format validation

**Note**: The form currently shows a success message for demonstration. To make it functional, integrate with:
- Email services (EmailJS, Formspree)
- Backend API
- Contact form processors

## SEO Optimized

- Semantic HTML structure
- Meta tags for social sharing
- Descriptive alt text
- Proper heading hierarchy
- Clean URL structure

## License

This project is open source and available under the MIT License.

## Support

For questions or customization requests, contact:
- Email: pallavsnehil@gmail.com
- LinkedIn: [linkedin.com/in/snehil-sinha-1a22777b](https://linkedin.com/in/snehil-sinha-1a22777b)