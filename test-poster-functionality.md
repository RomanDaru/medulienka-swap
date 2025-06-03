# Poster Collection Functionality Test

## Test Checklist

### ✅ Components Created
- [x] PosterItem.tsx - Individual poster component with hover effects
- [x] PosterModal.tsx - Modal for full-size poster display
- [x] PosterCollectionSection.tsx - Main section component

### ✅ Data Structure
- [x] Added Poster interface to types.ts
- [x] Updated content/config.json with poster collection data
- [x] Updated public/content/config.json with poster collection data

### ✅ Hooks Updated
- [x] Updated useContent.ts to handle poster collection
- [x] Updated useContentful.ts to handle poster collection with fallback

### ✅ App Integration
- [x] Added PosterCollectionSection to App.tsx between FAQ and Gallery
- [x] Added proper wave transitions
- [x] Updated navigation to include "Plagáty" link
- [x] Added FAQ section to navigation
- [x] Updated sitemap.xml

### ✅ Features Implemented
- [x] Small poster thumbnails in responsive grid (2-5 columns based on screen size)
- [x] Hover effects with scale and overlay
- [x] Click to expand functionality
- [x] Modal with full-size poster display
- [x] Keyboard navigation (ESC to close)
- [x] Proper accessibility attributes
- [x] Smooth transitions and animations

### 🧪 Manual Testing Required
1. Navigate to http://localhost:5173/
2. Scroll to "Naše plagáty" section
3. Verify poster grid displays correctly
4. Test hover effects on poster items
5. Click on a poster to open modal
6. Verify modal displays full-size poster
7. Test closing modal with X button
8. Test closing modal with ESC key
9. Test closing modal by clicking outside
10. Verify navigation link works
11. Test responsive behavior on different screen sizes

### 📱 Responsive Design
- Mobile: 2 columns
- Tablet: 3 columns  
- Desktop: 4 columns
- Large Desktop: 5 columns

### 🎨 Visual Design
- Consistent with existing honey/amber color scheme
- Rounded corners and shadows
- Smooth hover animations
- Professional modal design
- Proper spacing and typography
