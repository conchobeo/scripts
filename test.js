particlesJS('iriscnc-particles-js', {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "star",
            "stroke": {
                "width": 0,
                "color": "#fff"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 200,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

// Giám sát các thay đổi đối với các thuộc tính và chuyển hướng nếu có thay đổi
function monitorIriscncChanges(obj, propertyName) {
    let value = obj[propertyName];
    Object.defineProperty(obj, propertyName, {
        get() {
            return value;
        },
        set(newValue) {
            if (typeof newValue === 'string' && !newValue.includes('iriscnc')) {
                window.location.href = 'https://t.me/Iris_CNC';
            } else {
                value = newValue;
            }
        },
        configurable: true
    });
}

// Giám sát các thay đổi trong document body
const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        if (mutation.type === 'childList' || mutation.type === 'attributes') {
            if (mutation.target.innerHTML && !mutation.target.innerHTML.includes('iriscnc')) {
                window.location.href = 'https://t.me/Iris_CNC';
            }
        }
    });
});

// Cấu hình và bắt đầu giám sát
observer.observe(document.body, {
    childList: true,
    attributes: true,
    subtree: true
});

// Giám sát các hàm có chứa 'iriscnc' trong tên
const originalSetTimeout = setTimeout;
window.setTimeout = function(callback, delay) {
    if (callback.name && !callback.name.includes('iriscnc')) {
        window.location.href = 'https://t.me/Iris_CNC';
    }
    return originalSetTimeout(callback, delay);
};

// Giám sát các hàm khác nếu cần thiết
monitorIriscncChanges(window, 'iriscncParticlesJS');
monitorIriscncChanges(window, 'checkIriscncIntegrity');

// Kiểm tra nội dung footer
document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('footer');
    if (!footer.innerHTML.includes('Iris CNC')) {
        window.location.href = 'https://t.me/Iris_CNC';
    }
});
