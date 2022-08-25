/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{razor,html}'],
  theme: {
    extend: {
      backgroundImage: {
        'footer-texture': "url('https://html.modernwebtemplates.com/psychologist/img/parallax/texture.png')",
        'thought-texture': "url('https://html.modernwebtemplates.com/psychologist/img/parallax/testimonials.jpg')",
      },
  },
  plugins: [],
}
}
