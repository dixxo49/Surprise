# Valentine's Day SPA - Vanilla JavaScript Version

A beautiful, interactive Valentine's Day Single Page Application built with **pure HTML, CSS, and JavaScript** (no frameworks).

## Features

- **No Build Tools Required**: Just open `index.html` in a browser
- **Lightweight & Fast**: Pure vanilla JavaScript with smooth CSS animations
- **Beautiful UI**: Custom CSS design with soft pink gradient and romantic styling
- **Interactive Elements**:
  - Landing Screen: Question with escaping "No" button
  - Success Screen: Celebration with gift selection
  - Gift 1: Rose Bouquet with floating love notes
  - Gift 2: Handwritten love letter on notepad
  - Gift 3: QR Code scanner with restart button

## Design System

### Color Palette
- **Base Background**: #0f0f11 (Dark)
- **App Container**: Linear gradient from #ffb6c1 to #ffc0cb (Pink)
- **Primary Red**: #d32f2f (Text & Borders)
- **Deep Pink**: #c2185b (Headings)
- **Card Backgrounds**: #ffe4e1 & #fffacd

### Typography
- **Pacifico**: Cursive font for special text
- **Fredoka/Nunito**: Sans-serif for standard text
- **Caveat**: Handwriting font for love letter

## How to Use

1. **Open in Browser**: Simply double-click `index.html` or open it in your browser
2. **No Server Required**: This is a standalone static site
3. **No Dependencies**: Everything is included in the three files

## File Structure

```
Valentine/
├── index.html      # HTML structure for all screens
├── styles.css      # All CSS styles and animations
└── script.js       # JavaScript for state management & interactivity
```

## How It Works

### State Management
The app uses a simple state variable `currentScreen` that tracks which screen is displayed:
- `'landing'` - Main question screen
- `'success'` - Success page with gifts
- `'gift1'` - Rose bouquet
- `'gift2'` - Love letter
- `'gift3'` - QR code

### Screen Transitions
- Click "YES!" to go to success screen
- Select a gift to view that gift screen
- Click "click me →" to return to success
- Click "click to restart!" to go back to landing

### Interactive Elements

**No Button Animation**: Moves to a random position when you hover over it using a spring-like easing function.

**Floating Decorations**: Hearts, sparkles, and emojis use CSS animations to float smoothly.

**Button Animations**: Buttons scale up on hover and down on click for tactile feedback.

**Notes & Cards**: Sticky notes appear with a scale animation to feel like they're appearing.

## Customization

### Change Image
Replace the image path in the `<img>` tag:
```html
<img src="path/to/your/image.jpg" alt="Bunny hugging">
```

### Change Text
Edit the text content in the HTML:
- Greeting text in landing screen
- Love letter text in gift2 screen
- Any other messages

### Change Colors
Modify the CSS color values:
```css
--primary-red: #d32f2f;
--deep-pink: #c2185b;
/* etc. */
```

### Add More Animations
Add CSS animations to `.css` file and apply them to elements.

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (v90+)
- Firefox (v88+)
- Safari (v14+)
- Opera (v76+)

## Performance

- **Page Load**: Instant (no build process)
- **File Size**: ~50KB total
- **Animations**: 60fps CSS animations
- **Memory**: Minimal (no framework overhead)

## Deployment

Simply upload the three files to any static hosting:
- GitHub Pages
- Netlify
- Vercel
- Any web server

Perfect for sharing with your Valentine!

---

**Made with 💕 using vanilla JavaScript**
