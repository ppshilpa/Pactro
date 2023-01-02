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
    navText: ['<i class="fas fa-chevron-left">', '<i class="fas fa-chevron-right">']
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
    nav: true,
    dots: false,
    autoplayTimeout: 12000,
    animateOut: 'fadeOut',
    navText: ['<i class="icon-left-open-big">', '<i class="icon-right-open-big">'],
    loop: false
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
    margin: 20,
    dots: false,
    responsive: {
        0: {
            items: 2
        },
        576: {
            items: 4
        },
        768: {
            items: 4
        },
        991: {
            items: 4
        },
        1200: {
            items: 5
        },
        1500: {
            items: 6
        }
    }
}

export const categorySlider = {
    loop: false,
    margin: 20,
    autoplay: false,
    nav: true,
    dots: false,
    items: 2,
    responsive: {
        576: {
            items: 3
        },
        992: {
            items: 5,
        }
    }
}

export const widgetFeaturedProductSlider = {
    margin: 20,
    loop: false,
    nav: true,
    navText: ['<i class="icon-angle-left">', '<i class="icon-angle-right">'],
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
    margin: 50,
    nav: false,
    navText: ['<i class="icon-left-open-big">', '<i class="icon-right-open-big">'],
    responsive: {
        480: {
            items: 2
        },
        768: {
            items: 3
        },
        991: {
            items: 3
        },
        1200: {
            items: 3
        },
        1400: {
            items: 4,
            nav: true
        },
        1600: {
            items: 5,
            nav: true
        }
    }
}