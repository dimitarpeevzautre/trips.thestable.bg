# Hero Section Usage

The hero section component supports both images and videos for maximum flexibility.

## Image Hero (Current Implementation)
```liquid
{% include hero.html 
   image="/assets/images/hero-camper.jpg"
   alt="Bulgarian camper adventure landscape"
   title="Guided Camper Adventures Through Bulgaria"
   subtitle="Expert-led journeys for groups of up to 10"
   description="Discover Bulgaria's hidden gems through carefully curated adventures that blend culture, nature, and authentic experiences"
   cta_buttons='<a href="#journeys" class="btn btn-primary btn-lg">🚐 Explore Journeys</a><a href="#pricing" class="btn btn-outline btn-lg border-white text-white hover:bg-white hover:text-primary-600">💰 View Pricing</a>'
%}
```

## Video Hero Example
```liquid
{% include hero.html 
   video="/assets/videos/bulgaria-adventure.mp4"
   fallback_image="/assets/images/hero-camper.jpg"
   alt="Bulgarian adventure video"
   title="Experience Bulgaria Like Never Before"
   subtitle="Immersive camper journeys"
   description="Watch our adventures come to life"
   cta_buttons='<a href="#journeys" class="btn btn-primary btn-lg">🎥 Watch More</a>'
%}
```

## Parameters

- `image`: Path to hero image
- `video`: Path to hero video (MP4 format recommended)
- `fallback_image`: Fallback image for video hero (required when using video)
- `alt`: Alt text for accessibility
- `title`: Main hero title
- `subtitle`: Hero subtitle
- `description`: Hero description text
- `cta_buttons`: HTML for call-to-action buttons

## Features

✅ **Full-screen height** on mobile and desktop
✅ **Parallax scrolling** effect
✅ **Transparent navigation** over hero
✅ **Image zoom animation** on load
✅ **Responsive design**
✅ **Video support** with fallback
✅ **Scroll indicator** with smooth scrolling