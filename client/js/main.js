function sliders () {
    const swiper_location = new Swiper('.services__localization-slider', {
        direction: "horizontal",
        slidesPerView: 'auto',
        spaceBetween: 20,
        loop: true,
        slidesOffsetBefore: 20,
        slidesOffsetAfter: 20,
        breakpoints: {
            0: {
                centeredSlides: false,
            },
            580: {
                centeredSlides: true,
                // slidesPerView: 2,
                spaceBetween: 20,
            },
            650: {
                // slidesPerView: 3,
                spaceBetween: 25
            },
            820: {
                // slidesPerView: 4,
                spaceBetween: 25
            },
            962: {
                // slidesPerView: 3,
                spaceBetween: 30
            },
            1280: {
                // slidesPerView: 4,
                spaceBetween: 40
            }
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    const swiper_development = new Swiper('.services__development-slider', {
        direction: "horizontal",
        slidesPerView: 'auto',
        spaceBetween: 20,
        breakpoints: {
            0: {
                slidesOffsetAfter: 20,
                slidesOffsetBefore: 20,
            },
            580: {
                // centeredSlides: true,
                // slidesPerView: 2,
                spaceBetween: 20,
            },
            650: {
                // slidesPerView: 3,
                spaceBetween: 25
            },
            768: {
                slidesOffsetAfter: 40,
                slidesOffsetBefore: 40,
                // slidesPerView: 4,
                spaceBetween: 25,
            },
            962: {
                // slidesPerView: 3,
                spaceBetween: 30
            },
            1280: {
                // slidesPerView: 4,
                slidesOffsetAfter: 40,
                slidesOffsetBefore: 68,
                spaceBetween: 40
            }
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    const swiper_registration = new Swiper('.services__registration-slider', {
        direction: "horizontal",
        slidesPerView: 'auto',
        spaceBetween: 20,
        breakpoints: {
            0: {
                slidesOffsetAfter: 20,
                slidesOffsetBefore: 20,
            },
            580: {
                slidesOffsetAfter: 20,
                slidesOffsetBefore: 20,
                // centeredSlides: true,
                // slidesPerView: 2,
                spaceBetween: 20,
            },
            650: {
                slidesOffsetAfter: 20,
                slidesOffsetBefore: 20,
                // slidesPerView: 3,
                spaceBetween: 25
            },
            768: {
                slidesOffsetAfter: 40,
                slidesOffsetBefore: 40,
                // slidesPerView: 4,
                spaceBetween: 25,
            },
            962: {
                slidesOffsetAfter: 40,
                slidesOffsetBefore: 40,
                // slidesPerView: 3,
                spaceBetween: 30
            },
            1200: {
                // slidesPerView: 4,
                slidesOffsetAfter: 40,
                slidesOffsetBefore: 0,
                spaceBetween: 40
            }
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    const swiper_in_motion = new Swiper(".inMotion__slider", {
        direction: "horizontal",
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
            480: {
                slidesPerView: 2
            },
            1280: {
                slidesPerView: 3
            }
        }
    });

    const swiper_in_motion_portfolio = new Swiper(".inMotion__portfolio-slider", {
        direction: "horizontal",
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
            480: {
                slidesPerView: 2
            },
            1280: {
                slidesPerView: 3
            }
        }
    });

    // exhibitions
    const swiper_stambul = new Swiper('.exhibitions-swiper--stambul', {
        direction: "horizontal",
        slidesPerView: 'auto',
        spaceBetween: 20,
        slidesOffsetAfter: 0,
        slidesOffsetBefore: 0,
        breakpoints: {
            0: {
                spaceBetween: 20,
            },
            650: {
                spaceBetween: 25
            },
            768: {
                spaceBetween: 30,
            },
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    const swiper_kair = new Swiper('.exhibitions-swiper--kair', {
        direction: "horizontal",
        slidesPerView: 'auto',
        spaceBetween: 20,
        slidesOffsetAfter: 0,
        slidesOffsetBefore: 0,
        breakpoints: {
            0: {
                spaceBetween: 20,
            },
            650: {
                spaceBetween: 25
            },
            768: {
                spaceBetween: 30,
            },
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    const swiper_kazahstan = new Swiper('.exhibitions-swiper--kazahstan', {
        direction: "horizontal",
        slidesPerView: 'auto',
        spaceBetween: 20,
        slidesOffsetAfter: 0,
        slidesOffsetBefore: 0,
        breakpoints: {
            0: {
                spaceBetween: 20,
            },
            650: {
                spaceBetween: 25
            },
            768: {
                spaceBetween: 30,
            },
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    const swiper_dusseldorf = new Swiper('.exhibitions-swiper--dusseldorf', {
        direction: "horizontal",
        slidesPerView: 'auto',
        spaceBetween: 20,
        slidesOffsetAfter: 0,
        slidesOffsetBefore: 0,
        breakpoints: {
            0: {
                spaceBetween: 20,
            },
            650: {
                spaceBetween: 25
            },
            768: {
                spaceBetween: 30,
            },
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}
function services () {
    var modal_select_t = document.querySelector(".modal__select"),
        modal_select_e = modal_select_t?.querySelector(".modal__select-value"),
        modal_select_r = modal_select_t?.querySelectorAll(".modal__select-options li"),
        modal_select_input = document.getElementById("sc");

    function modal_select_n(t) {
        t.stopPropagation();
        modal_select_e.innerHTML = this.innerHTML;
        modal_select_input.value = this.innerText;
        modal_select_o(t);
    };

    function modal_select_o(e) {
        e.stopPropagation();
        modal_select_t.classList.toggle("modal__select--open")
    };

    modal_select_t.addEventListener("click", modal_select_o);
    modal_select_r.forEach((function(t) {
        t.addEventListener("click", modal_select_n)
    }));

    var modal_t = document.querySelector(".modal__header--error");
    var modal_e = document.querySelector(".modal__header");
    var modal_r = document.querySelector(".modal__input-name");
    var modal_n = document.querySelector(".modal__input-company");
    var modal_o = document.querySelector(".modal__input-phone");
    var modal_i = document.querySelector(".modal__input-email");
    var modal_a = document.querySelector(".modal__input-file");
    var modal_u = document.querySelector(".modal__textarea-input");
    var modal_s = document.querySelector(".modal__done-btn");
    var modal_l = document.querySelector(".contacts-modal");
    var modal_f = document.querySelectorAll(".show-modal-button");
    var modal_p = document.querySelectorAll(".contact-modal-closer");
    var modal_d = [modal_r, modal_n, modal_o, modal_i, modal_a, modal_u];
    modal_f.forEach((function(t) {
        t.addEventListener("click", (function() {
            modal_l.classList.add("contacts-modal--open")
        }))
    }));
    modal_p.forEach((function(t) {
        t.addEventListener("click", (function() {
            modal_l.classList.remove("contacts-modal--open")
        }))
    }));
    modal_s.addEventListener("click", (function() {
        let r = !1;
        modal_d.forEach((function(t) {
            modal_t.value || (r = !0)
        }));
        r ? (e.style.display = "none", modal_t.style.display = "block") : (modal_e.style.display = "block", t.style.display = "none")
    }));

    // form
    const formFile = document.getElementById('uploadInput')
    const formFileLabel = document.getElementById('uploadLabel')
    const formFilename = document.getElementById('uploadFilename')

    formFile.addEventListener('change', (e) => {
        const files = formFile.files
        if (files.length > 0) {
            if (files[0].size > 31457280) {
                alert(window.location.href.includes('/en/') ? 'File size exceeds 30MB' : 'Файл превышает 30Мб')
                formFile.value = null
                formFilename.innerText = ''
                formFileLabel.innerText = window.location.href.includes('/en/') ? 'Attach technical specifications or files (max 30MB)' : 'Прикрепить ТЗ или файлы'
            }
            else {
                formFilename.innerText = files[0].name.length > 40 ? files[0].name.slice(1, 40) + '...' : files[0].name
                formFileLabel.innerText = window.location.href.includes('/en/') ? 'Change' : 'Изменить'
            }
        }
    })

    const form_attach = document.getElementById('action_attach');
    form_attach.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const form = document.querySelector('#action_attach .modal__form-hide');
        const loading = document.querySelector('#action_attach .modal__header--load');
        const error = document.querySelector('#action_attach .modal__header--error');
        const success = document.querySelector('#action_attach .modal__header--success')

        if (data.get('service') === '') {
            alert('Выберите услугу')
        }
        else {
            grecaptcha.ready(async () => {
                await grecaptcha.execute('6LdyVl0pAAAAAEO9DxFe3YIYiGrR3QAWo2c-T5KD', {action: 'submit'}).then((token) => {
                    data.append('token', token)
                })
                form.classList.add('hidden');
                loading.classList.remove('hidden');
                let response = await fetch('/api/send_message/', {
                    method: 'POST',
                    body: data
                });

                let result = await response.json();

                if (result === 1) {
                    loading.classList.add('hidden');
                    success.classList.remove('hidden');
                }
                else {
                    loading.classList.add('hidden');
                    error.classList.remove('hidden');
                }
            })
        }
    })

    // check
    const radios = document.querySelectorAll('[name="callback"]');
    const input = document.querySelector('#callback_input');
    const placeholder = input?.placeholder;

    radios.forEach(el => {
        el.closest('label').addEventListener('change', (e) => {
            if (el.value === 'E-mail' && el.checked) {
                input.value = null;
                input.type = input.name = 'email';
                input.removeAttribute('pattern');
                input.placeholder = 'E-mail';
            }
            else {
                if (input.type === 'email' && el.value !== 'E-mail')
                    input.value = null;

                input.type = 'text';
                input.name = 'phone';
                input.pattern = '\\d+';
                input.placeholder = placeholder;
            }
        })
    })
}
function form() {
    const feedback_forms = document.querySelectorAll('.feedback_form');
    feedback_forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const data = new FormData(e.target);
            grecaptcha.ready(async () => {
                await grecaptcha.execute('6LdyVl0pAAAAAEO9DxFe3YIYiGrR3QAWo2c-T5KD', {action: 'submit'}).then((token) => {
                    data.append('token', token)
                })

                const button = e.target.querySelector('button[type="submit"]');

                button.disabled = true;
                button.innerHTML = 'Загрузка...';

                let response = await fetch('/api/send_message/', {
                    method: 'POST',
                    body: data
                });

                let result = await response.json();

                button.disabled = false;
                button.innerHTML = 'Свяжитесь со мной';

                if (result === 1) {
                    alert('Форма успешно отправлена');
                }
                else {
                    alert('Произошла ошибка')
                }
            })
        })
    })
}
function play_video() {
    var t = document.createElement("script");
    t.src = "https://www.youtube.com/iframe_api";
    var e, r = document.getElementsByTagName("script")[0];

    function n(t) {
        document.querySelectorAll("#play-button").forEach((function(e) {
            e.classList.contains("project__content-video-control--active") && 2 === t.data && (e.classList.remove("project__content-video-control--play"), e.classList.add("project__content-video-control--paused")), e.classList.contains("project__content-video-control--active") && 1 === t.data && (e.classList.add("project__content-video-control--play"), e.classList.remove("project__content-video-control--paused"))
        }))
    }

    function o() {
        var t = document.querySelectorAll("#play-button");
        t.forEach((function(r) {
            r.addEventListener("click", (function() {
                var n = r.classList.contains("project__content-video-control--active"),
                    o = r.classList.contains("project__content-video-control--paused"),
                    i = r.classList.contains("project__content-video-control--play");
                return !n || i || o ? o ? (r.classList.remove("project__content-video-control--paused"), r.classList.add("project__content-video-control--play"), e.playVideo()) : n ? (r.classList.remove("project__content-video-control--play"), r.classList.add("project__content-video-control--paused"), e.pauseVideo()) : (t.forEach((function(t) {
                    t.classList.remove("project__content-video-control--active"), t.classList.remove("project__content-video-control--paused"), t.classList.remove("project__content-video-control--play")
                })), r.classList.add("project__content-video-control--active"), r.classList.add("project__content-video-control--play"), void e.loadVideoById(r.value)) : (r.classList.add("project__content-video-control--play"), e.playVideo())
            }))
        }))
    }
    r.parentNode.insertBefore(t, r), window.onYouTubePlayerAPIReady = function() {
        e = new YT.Player("video", {
            events: {
                onReady: o,
                onStateChange: n
            }
        })
    }
}
function project_content() {
    document.querySelectorAll(".inMotion__portfolio-container").forEach((function(t) {
        t.addEventListener("click", (function() {
            this.classList.toggle("inMotion__portfolio-container--active")
        }))
    }));

    document.querySelectorAll(".project__content-list").forEach((function(t) {
        for (var e = 0; e < t.children.length; e++) t.children[e].style.paddingLeft = 20 * (e + 1) + "px"
    }));
}
function toggle_sidebar() {
    document.querySelector(".sidebar-toggler").classList.toggle("toggled");

    var main = document.querySelector(".main");

    if (!main.classList.contains('menu-close') || window.outerWidth <= 1024) {
        var sidebar = document.querySelector(".sidebar");
        var project = document.querySelector(".project");
        var header = document.querySelector(".main__header");
        var content_sidebar = document.querySelector(".content__sidebar");
        var secondary_sidebar = document.querySelector(".sidebar--secondary");
        if (sidebar) sidebar.classList.toggle("sidebar--visible");
        if (project) project.classList.toggle("project-sidebar--visible");
        if (header) header.classList.toggle("header-sidebar--visible");
        if (content_sidebar) content_sidebar.classList.toggle("visible");
        if (secondary_sidebar) secondary_sidebar.classList.toggle("hidden");
        return;
    }

    const tl = gsap.timeline();

    if (document.querySelector(".sidebar-toggler").classList.contains('toggled')) {
        var project__content = document.querySelector(".project__content");
        var project__sidebar = document.querySelector(".project__sidebar");
        var sidebar = document.querySelector(".sidebar");
        var sidebar_inner = document.querySelector(".sidebar-inner");
        var header__sidebar = document.querySelector(".header__sidebar-background");

        if (project__content) {
            tl.to(
                project__content,
                {
                    left: 0,
                    duration: 0.3,
                }
            )
                .add('project');
        }

        if (project__sidebar) {
            tl.to(
                document.querySelector(".project__sidebar"),
                {
                    left: "-100%",
                    duration: 0.3,
                },
                'project'
            );
        }

        if (sidebar) {
            tl.to(
                document.querySelector(".sidebar"),
                {
                    width: 400,
                    padding: "30px 70px 30px 30px",
                    duration: 0.3,
                }
            )
                .add('sidebar');
        }

        if (sidebar_inner) {
            tl.to(
                document.querySelector(".sidebar-inner"),
                {
                    opacity: 1,
                    duration: 0.3,
                },
                'sidebar'
            );
        }

        if (header__sidebar) {
            tl.to(
                document.querySelector(".header__sidebar-background"),
                {
                    height: "100%",
                    duration: 0.3,
                }
            );
        }
    } else {
        var project__content = document.querySelector(".project__content");
        var project__sidebar = document.querySelector(".project__sidebar");
        var sidebar = document.querySelector(".sidebar");
        var sidebar_inner = document.querySelector(".sidebar-inner");
        var header__sidebar = document.querySelector(".header__sidebar-background");

        if (header__sidebar) {
            tl.to(
                header__sidebar,
                {
                    height: "0%",
                    duration: 0.3,
                }
            );
        }

        if (sidebar_inner) {
            tl.to(
                sidebar_inner,
                {
                    opacity: 0,
                    duration: 0.3,
                }
            )
                .add('sidebar');
        }

        if (sidebar) {
            tl.to(
                sidebar,
                {
                    width: 0,
                    padding: 0,
                    duration: 0.3,
                },
                'sidebar'
            );
        }

        if (project__sidebar) {
            tl.to(
                project__sidebar,
                {
                    left: 0,
                    duration: 0.3,
                }
            )
                .add('project');
        }

        if (project__content) {
            tl.to(
                project__content,
                {
                    left: 512,
                    duration: 0.3,
                },
                'project'
            );
        }
    }
}
function anchors() {
    const anchors = document.querySelectorAll('a[href*="#"]')
    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const blockID = anchor.getAttribute('href').substr(1).split('#')[1];

            if (window.innerWidth < 768 && document.querySelector('header').classList.contains('header-sidebar--visible'))
                toggle_sidebar();

            if (document.getElementById(blockID)) {
                window.scrollTo({
                    top: document.getElementById(blockID).offsetTop,
                    left: 0,
                    behavior: 'smooth',
                });
            }

        })
    };
}
function common () {
    //lang
    document.querySelectorAll(".lang-switcher").forEach((function(t) {
        var e = t.querySelector(".lang-switcher-options"),
            r = t.querySelector(".lang-switcher-value"),
            n = t.querySelectorAll(".lang-switcher-options li");

        function o(t) {
            t.stopPropagation(), r.innerHTML = this.innerHTML, i(t)
        }

        function i(t) {
            t.stopPropagation(), e.classList.toggle("language__select-options--open")
        }
        t.addEventListener("click", i), n.forEach((function(t) {
            t.addEventListener("click", o)
        }))
    }));

    //sidebar
    document.querySelector(".sidebar-toggler.cross").addEventListener("click", toggle_sidebar);
    document.querySelector(".sidebar-toggler").addEventListener("click", toggle_sidebar);

    //search
    document.querySelector(".header__sidebar-search").addEventListener("click", (function() {
        document.querySelector("#header__search").classList.toggle("header__search--visible")
    }))

    document.querySelector(".header__search-background").addEventListener("click", (function(t) {
        t.stopPropagation();
        document.querySelector("#header__search").classList.toggle("header__search--visible")
    }))
}

function scrollToAnchor() {
    if (location.hash !== '') {
        window.scrollTo({
            top: document.querySelector(location.hash).offsetTop,
            left: 0,
            behavior: 'smooth',
        });
    }
}

barba.init({
    transitions: [{
        name: 'opacity-transition',
        leave(data) {
            return gsap.to(data.current.container, {
                opacity: 0,
                duration: .8
            })

        },
        enter(data) {
            gsap.from(data.next.container, {
                opacity: 0,
                duration: .8
            });
            return
        }
    }],
    views: [
        {
            namespace: "home",
            beforeEnter(data) {
                new Swiper(".content__slider", {
                    direction: "horizontal",
                    slidesPerView: 1,
                    mousewheel: Boolean(window.innerWidth > 1024),
                    forceToAxis: !0,
                    pagination: {
                        el: ".content__slider-pagination",
                        clickable: !0
                    }
                })
            }
        },
        {
            namespace: "in-motion",
            beforeEnter: function(data) {
                sliders();
                play_video();
                project_content();
                // toggle_sidebar();
            }
        },
        {
            namespace: "monster",
            beforeEnter: function(data) {
                sliders();
                play_video();
                project_content();
                // toggle_sidebar();
            }
        },
        {
            namespace: "allure",
            beforeEnter: function(data) {
                sliders();
                project_content();
                // toggle_sidebar();
            }
        },
        {
            namespace: "miracle",
            beforeEnter: function(data) {
                play_video();
                project_content();
                // toggle_sidebar();
            }
        },
        {
            namespace: "monster",
            beforeEnter: function(data) {
                play_video();
                project_content();
                // toggle_sidebar();
            }
        },
        {
            namespace: "services",
            beforeEnter: function() {
                sliders();
                services();
                scrollToAnchor();
            }
        },
        {
            namespace: "exhibitions",
            beforeEnter: function() {
                sliders();
                scrollToAnchor();
            }
        }]
});

barba.hooks.after((data) => {
    common();
    form();
    anchors();
})

common();
form();