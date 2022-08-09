
    

    document.write(`
    <header class="fs-6 nav-wrapper fixed-top navbar-expand-lg">
            <div class="container-fluid py-0 px-3 navbar border-bottom">
                <a class="navbar-brand py-2" href="#"><img src="img/logo.png" style="height: 2.3em;"></a>
                <button class="navbar-toggler px-0 nav-btn" type="button">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <nav class="lnb-desktop-menu border-bottom">
            <div>
                <ul class="navbar-nav flex-column ps-lg-4 pt-lg-4 pb-lg-5">
                    <li><a href="" class="nav-link fw-bold">물리교육 소개</a></li>
                    <li><a href="" class="nav-link">물리인증제</a></li>
                    <li><a href="" class="nav-link py-lg-0">한국중학생물리대회</a></li>
                </ul>
                <ul class="navbar-nav flex-column ps-lg-4 pt-lg-4 pb-lg-5">
                    <li><a href="" class="nav-link fw-bold">원서접수</a></li>
                    <li><a href="" class="nav-link">물리인증제 원서접수</a></li>
                    <li><a href="" class="nav-link py-lg-0">한국중학생물리대회 원서접수</a></li>
                </ul>
                <ul class="navbar-nav flex-column ps-lg-4 pt-lg-4 pb-lg-5">
                    <li><a href="" class="nav-link fw-bold">자료실</a></li>
                    <li><a href="" class="nav-link">물리인증제 자료실</a></li>
                    <li><a href="" class="nav-link py-lg-0">한국중학생물리대회 자료실</a></li>
                </ul>
                <ul class="navbar-nav flex-column ps-lg-4 pt-lg-4 pb-lg-5">
                    <li><a href="" class="nav-link fw-bold">알림사항</a></li>
                    <li><a href="" class="nav-link">공지사항</a></li>
                    <li><a href="" class="nav-link py-lg-0">교육/행사 일정</a></li>
                </ul>
            </div>
        </nav>
        <nav class="fs-6 lnb">
                <ul class="navbar-nav lnb-menu">
                    <li class="py-2 py-lg-0 ps-3 lnb-img"><a href="#"><img src="./img/logo.png"></a></li>
                    <li class="ps-lg-5 pe-lg-0 mt-3 mt-lg-0">
                        <a href="" class="nav-link ps-4 px-lg-4 py-lg-0 fw-bold">물리교육 소개</a>
                        <ul class="navbar-nav sub-menu">
                            <li><a href="" class="nav-link ps-4">물리인증제</a></li>
                            <li class="border-bottom pb-4"><a href="" class="nav-link ps-4 py-0">한국중학생물리대회</a></li>
                        </ul>
                    </li>
                    <li class="mt-3 mt-lg-0">
                        <a href="" class="nav-link ps-4 py-lg-0 px-lg-4 fw-bold">원서접수</a>
                        <ul class="navbar-nav sub-menu">
                            <li><a href="" class="nav-link ps-4">물리인증제 원서접수</a></li>
                            <li class="border-bottom pb-4"><a href="" class="nav-link ps-4 py-0">한국중학생물리대회 원서접수</a></li>
                        </ul>
                    </li>
                    <li class="mt-3 mt-lg-0">
                        <a href="" class="nav-link ps-4 py-lg-0 px-lg-4 fw-bold">자료실</a>
                        <ul class="navbar-nav sub-menu">
                            <li><a href="" class="nav-link ps-4">물리인증제 자료실</a></li>
                            <li class="border-bottom pb-4"><a href="" class="nav-link ps-4 py-0">한국중학생물리대회 자료실</a></li>
                        </ul>
                    </li>
                    <li class="mt-3 mb-1 my-lg-0">
                        <a href="" class="nav-link ps-4 py-lg-0 px-lg-4 fw-bold">알림사항</a>
                        <ul class="navbar-nav sub-menu">
                            <li><a href="" class="nav-link ps-4 ">공지사항</a></li>
                            <li class="border-bottom pb-4"><a href="" class="nav-link ps-4 py-0">교육/행사 일정</a></li>
                        </ul>
                    </li>
                </ul>
                <ul class="navbar-nav ms-lg-auto gnb mt-2 mt-lg-0">
                    <li class="mt-2 my-lg-0"><a href="" class="nav-link ps-4 pt-0 py-lg-0">로그인</a></li>
                    <li><a href="" class="nav-link ps-4 py-0 py-lg-0">회원가입</a></li>
                    <li><a href="" class="nav-link ps-4 py-lg-0">ContactUs</a></li>
                    <li class="mb-2 my-lg-0"><a href="" class="pt-0 nav-link ps-4 pe-lg-3 py-lg-0">사이트맵</a></li>
                </ul>
            </nav>
        </header>
    `)

        // 모바일,태블릿 해상도에서 Nav버튼 클릭 시 lnb 오픈
        $('.nav-wrapper button').click(function(){
            $('.nav-wrapper .lnb').addClass('nav-open');
        });

        // 모바일,태블릿 해상도에서 nav가 아닌 다른 곳 클릭 시 원상태
        $(document).mouseup(function (e){
            var navBar = $(".nav-wrapper .lnb");
            if(navBar.has(e.target).length === 0){
                navBar.removeClass("nav-open");
            }
        });


        // desktop용 sub-menu show/hide 조건문 
        $(window).resize(function(){ 
            if (window.innerWidth > 992) {  // 다바이스 크기가 992이상일때 
                $('.lnb ul:first-child a, .lnb-desktop-menu').hover(function(){
                    $('.lnb-desktop-menu').show();
                }, function(){
                    $('.lnb-desktop-menu').hide();
                })
            } else {
                $('.lnb ul:first-child a, .lnb-desktop-menu').hover(function(){
                    $('.lnb-desktop-menu').hide();
                });
            }
        }).resize();


                // 브라우저 크기가 변할 때마다 새로고침1
        // jQuery(function($) {
        //     window.onresize = function(){
        //         document.location.reload();
        //     };
        // });
        
        // 브라우저 크기가 변할 때마다 새로고침2
        // let bWidth = window.innerWidth;
        // window.addEventListener("resize", () => {
        // const nWidth = window.innerWidth;
        // if ((bWidth < 992 && nWidth >= 992) || (bWidth > 991 && nWidth <= 991)) {
        //     location.reload();
        // }
        // bWidth = nWidth;
        // });
