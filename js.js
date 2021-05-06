var behance = document.getElementById('behance');
var linkedin = document.getElementById('linkedin');
var instagram = document.getElementById('instagram');
var medium = document.getElementById('medium');

behance.onmouseenter = function (e) {
    e.preventDefault();
    document.getElementById('img-behance').style.opacity = 1;
    document.getElementById('img-behance').style.transform = 'translateX(300px) translateY(-50px)'
};
behance.onmouseout = function (e) {
    e.preventDefault();
    document.getElementById('img-behance').style.transform = 'translateX(450px) translateY(-45px)'
    document.getElementById('img-behance').style.opacity = 0;
};

linkedin.onmouseenter = function (e) {
    e.preventDefault();
    document.getElementById('img-linkedin').style.opacity = 1;
    document.getElementById('img-linkedin').style.transform = 'translateX(300px) translateY(-50px)'
};
linkedin.onmouseout = function (e) {
    e.preventDefault();
    document.getElementById('img-linkedin').style.transform = 'translateX(450px) translateY(-45px)'
    document.getElementById('img-linkedin').style.opacity = 0;
};

instagram.onmouseenter = function (e) {
    e.preventDefault();
    document.getElementById('img-instagram').style.opacity = 1;
    document.getElementById('img-instagram').style.transform = 'translateX(300px) translateY(-50px)'
};
instagram.onmouseout = function (e) {
    e.preventDefault();
    document.getElementById('img-instagram').style.transform = 'translateX(450px) translateY(-45px)'
    document.getElementById('img-instagram').style.opacity = 0;
};

medium.onmouseenter = function (e) {
    e.preventDefault();
    document.getElementById('img-medium').style.opacity = 1;
    document.getElementById('img-medium').style.transform = 'translateX(300px) translateY(-50px)'
};
medium.onmouseout = function (e) {
    e.preventDefault();
    document.getElementById('img-medium').style.transform = 'translateX(450px) translateY(-45px)'
    document.getElementById('img-medium').style.opacity = 0;
};


