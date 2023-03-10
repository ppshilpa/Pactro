export const productSingleSlider = {
    margin: 0,
    nav: true,
    loop: false,
    dots: false,
    autoplay: false
}

export const prodThumbSlider = {
    margin: 8,
    items: 4,
    dots: false,
    nav: true,
    navText: [ '<i class="fas fa-chevron-left">', '<i class="fas fa-chevron-right">' ]
}

export const productExtendSlider = {
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: false,
    center: true,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
}

export const HomeSlider = {
    autoplay: false,
    nav: false,
    dots: true,
    autoplayTimeout: 12000,
    navText: [ '<i class="icon-left-open-big">', '<i class="icon-right-open-big">' ],
    loop: false,
    responsive: {
        991: {
            nav: false,
            dots: false
        }
    }
}

export const blogSlider = {
    loop: false,
    margin: 20,
    autoplay: false,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2
        },
        768: {
            items: 3
        }
    }
}

export const postSlider = {
    margin: 0,
    dots: false,
    lazyLoad: true,
    nav: true,
    items: 1
}

export const productSlider = {
    loop: false,
    margin: 20,
    autoplay: false,
    dots: false,
    nav: true,
    items: 2,
    navText: [ '<i class="icon-arrow-forward-right">', '<i class="icon-arrow-forward-right">' ],
    responsive: {
        576: {
            items: 3
        },
        992: {
            items: 4,
        }
    }
}

export const instagramSlider = {
    margin: 20,
    dots: false,
    lazyLoad: true,
    nav: false,
    items: 2,
    responsive: {
        576: {
            items: 3
        },
        992: {
            items: 4
        }
    }
}

export const categorySlider = {
    loop: false,
    margin: 0,
    autoplay: false,
    nav: false,
    dots: false,
    responsive: {
        576: {
            items: 2
        },
        768: {
            items: 3
        },
        992: {
            items: 3,
        }
    }
}

export const widgetFeaturedProductSlider = {
    margin: 20,
    loop: false,
    nav: true,
    navText: [ '<i class="icon-angle-left">', '<i class="icon-angle-right">' ],
    dots: false
}

export const infoBoxSlider = {
    loop: false,
    dots: false,
    responsive: {
        576: {
            items: 2
        },
        992: {
            items: 3,
        }
    }
}

export const bannerSlider = {
    margin: 20,
    responsive: {
        576: {
            items: 2
        },
        992: {
            items: 3,
        }
    }
}

export const brandSlider = {
    loop: false,
    margin: 30,
    autoHeight: true,
    autoplay: false,
    dots: false,
    navText: [ '<i class="icon-left-open-big">', '<i class="icon-right-open-big">' ],
    items: 2,
    responsive: {
        0: {
            items: 2
        },
        480: {
            items: 3
        },
        768: {
            items: 4
        },
        991: {
            items: 4
        },
        1200: {
            items: 5
        }
    }
}