(function() {
    "use strict";

    // comments scroll
    var blogDetailsComments = document.getElementById("blog-details-comment-list");
    new SimpleBar(blogDetailsComments, { autoHide: true });
    // comments scroll
    
    // gallery
    var lightboxVideo = GLightbox({
        selector: '.glightbox'
    });
    lightboxVideo.on('slide_changed', ({ prev, current }) => {
        console.log('Prev slide', prev);
        console.log('Current slide', current);

        const { slideIndex, slideNode, slideConfig, player } = current;
    });
    // gallery

})()