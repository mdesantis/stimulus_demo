//= require webfontloader/webfontloader

(function loadWebFonts() {
  window.WebFont.load({
    google: {
      families: ['Lato:400,400i,700,700i'],
    },
    // typekit: {
    //   id: 'lato:n4,i4,n7,i7',
    //   api: '//use.edgefonts.net',
    // },
    timeout: 200,
  })
}).call(this)
