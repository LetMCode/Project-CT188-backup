var body = document.querySelector('body')
const header = document.createElement('header')
var footer = document.createElement('footer')
var slides = document.querySelector(".slides");
var slideImages = document.querySelectorAll(".slide");
var prevBtn = document.getElementById("prevBtn");
var nextBtn = document.getElementById("nextBtn");
var totalSlides = slideImages.length;
let currentIndex = 0;
function Header (){
    const html = `
    <div class="container">
            <div class="header">
                <a href="../../../index.html" class="logo-link">
                    <img src="../../assets/images/HomeIMG/logo1.png"/ alt="" class="logo-pages">
                </a>
                <ul class="list-pages">
                    <li class="item-page">
                        <a href="../Intro/index.html" class="item-label">About Us</a>
                    </li>
                    <li class="item-page">
                        <a href="../Product/index.html" class="item-label">Product</a>
                    </li>
                    <li class="item-page">
                        <a href="../Blogs/index.html" class="item-label">Blogs</a>
                    </li>
                    <li class="item-page">
                        <a href="../Contact/index.html" class="item-label">Contact</a>
                    </li>
                </ul>
                <ul class="list-actions">
                    <li class="item-page__action item-page__action-icon">
                    <a href="../Cart/index.html" class="item-label icon-cart">
                        <i class="fa-solid fa-cart-shopping"></i>
                    </a>
                    </li>
                    <li class="item-page__action">
                        <a href="../SignUp/index.html" class="item-label">Sign Up</a>
                    </li>
                    <li class="item-page__action btn__signUp">
                        <a href="../SignIn/index.html" class="item-label">Sign In</a>
                    </li>
                </ul>
            </div>
        </div>
    `
    header.innerHTML = html
    return body.appendChild(header) 
}  
function Footer (){
    const html = `
       <div class="container">
            <div class="footer">
                <ul class="list-footer">
                    <li class="item-footer item-footer__left">
                        <span>
                            Hotline:<br/>
                            9:00-18:00, Thứ Hai đến Thứ Sáu<br/>
                            Email@
                        </span>
                        <span>
                            <a href="#!">
                                <i class="icon-footer fa-brands fa-instagram"></i>
                            </a>
                            <a href="#!">
                                <i class="icon-footer fa-brands fa-square-facebook"></i>
                            </a>
                        </span>
                    </li>
                    <li class="item-footer item-footer__center">
                        <div class="item-footer__center-content">
                            <label class="item-footer__center-label">Sản phẩm</label>
                            <ul>
                                <a href="#!" class="">Bộ sưu tập 2024</a>
                                <a href="#!" class="">Bộ sưu tập Signature</a>
                                <a href="#!" class="">Sản phẩm nổi bật</a>
                                <a href="#!" class="">Sản phẩm bán chạy</a>
                                <a href="#!" class="">Sản phẩm khuyến mãi</a>
                            </ul>
                        </div>
                        <div class="item-footer__center-content">
                            <label class="item-footer__center-label">Contract With Us</label>
                            <ul>
                                <li><a href="#!" class="">Đặt hàng số lượng lớn</a></li>
                                <li><a href="#!" class="">Khách hàng doanh nghiệp</a></li>
                                <li><a href="#!" class="">Hợp tác phối hợp</a></li>
                                <li><a href="#!" class="">Hợp tác doanh nghiệp</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="item-footer">
                        <p class="item-footer__desc">
                            Hợp tác doanh nghiệp<br/>
                            CÔNG TY TNHH Tarmor<br/>
                            Khu II, Đ. 3 Tháng 2, Xuân Khánh, Ninh Kiều,<br/>
                            Thành phố  Cần Thơ, Việt Nam<br/>
                            MST: 0317645769<br/>
                            Giấy phép ĐKKD số 0317645769<br/>
                            cấp ngày 12 tháng 01 năm 2023<br/>
                        </p>
                        <img src="../../assets/images/HomeIMG/logo_bct_hihi.webp" alt="" class="logo-footer">
                    </li>
                </ul>
                <div class="list-footer__bottom">
                    <div class="item-footer__bottom">
                        <p class="item-footer__bottom-desc">
                            copyright © 2024 • All Rights Reserved
                        </p>
                    </div>
                    <div class="item-footer__bottom-center">
                        <ul class="item-footer__bottom-list">
                            <li>
                                <a href="#!" class="item-footer__bottom-desc">
                                    Đổi trả
                                </a>
                            </li>
                            <li>
                                <a href="#!" class="item-footer__bottom-desc">
                                    chính sách thanh toán
                                </a>
                            </li>
                            <li>
                                <a href="#!" class="item-footer__bottom-desc">
                                    chính sách giao hàng
                                </a>
                            </li>
                            <li>
                                <a href="#!" class="item-footer__bottom-desc">
                                    hướng dẫn mua hàng
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="item-footer__bottom-right">
                        <ul class="item-footer__bottom-list">
                            <li>
                                <a href="#!" class="item-footer__bottom-desc">
                                    Điều Khoản Sử Dụng
                                </a>
                            </li>
                            <li>
                                <a href="#!" class="item-footer__bottom-desc">
                                    Chính Sách Bảo Mật
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `
    footer.innerHTML = html
    return body.appendChild(footer) 
}  


function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}
function nextSlide() {
    showSlide(currentIndex + 1);
}
function prevSlide() {
    showSlide(currentIndex - 1);
}

// DANH
function Validator(options) {
    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }
    var selectorRules = {};
    // Hàm thực hiên validate
    function validate(inputElement, rule) {
        var errorElement = getParent(
            inputElement,
            options.formGroupSelector
        ).querySelector(options.errorSelector);
        var errorMessage;
        //test func: rule.test      // value : inputElement.value //input ng dùng nhập vào
        // Lấy ra các rules của selector
        var rules = selectorRules[rule.selector];

        // Lặp qua từng rule và kiểm tra
        // nếu có lỗi dừng kt
        for (var i = 0; i < rules.length; ++i) {
            switch (inputElement.type) {
                case "radio":
                case "checkbox":
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ":checked")
                    );
                    break;
                default:
                    errorMessage = rules[i](inputElement.value);
            }

            if (errorMessage) break;
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            getParent(inputElement, options.formGroupSelector).classList.add(
                "invalid"
            );
        } else {
            errorElement.innerText = "";
            getParent(inputElement, options.formGroupSelector).classList.remove(
                "invalid"
            );
        }
        return !errorMessage;
    }
    //----------------------------------

    // lấy element của form cần validte
    var formElement = document.querySelector(options.form);
    if (formElement) {
        //khi submit form
        formElement.onsubmit = function (e) {
            e.preventDefault();

            var isFormValid = true;

            // Lặp qua từng rule và validate
            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                if (!isValid) {
                    isFormValid = false;
                }
            });

            if (isFormValid) {
                //Trường hợp submit với js
                if (typeof options.onSubmit === "function") {
                    var enableInputs = formElement.querySelectorAll("[name]");
                    var formValues = Array.from(enableInputs).reduce(function (
                        values,
                        input
                    ) {
                        switch (input.type) {
                            case "radio":
                            case "checkbox":
                                values[input.name] = formElement.querySelector(
                                    'input[name="' + input.name + '"]:checked'
                                ).value;

                                break;
                            default:
                                values[input.name] = input.value;
                        }

                        return values;
                    },
                    {});
                    options.onSubmit(formValues);
                }
                // trường hợp submit với hành vi mặc định
                else {
                    formElement.submit();
                }
            }
        };

        // Lặp qua mỗi rule và xử lý (lắng nghe sự kiên blur, input,..)
        options.rules.forEach(function (rule) {
            //vòng lặp

            //Lưu lại các rules cho mỗi input

            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElements = formElement.querySelectorAll(rule.selector);

            Array.from(inputElements).forEach(function (inputElement) {
                // xử lý trường hợp blur khỏi input
                inputElement.onblur = function () {
                    validate(inputElement, rule); //---
                };

                // xử lý mỗi khi ng dùng nhập vào input
                inputElement.oninput = function () {
                    var errorElement = getParent(
                        inputElement,
                        options.formGroupSelector
                    ).querySelector(options.errorSelector); //span
                    errorElement.innerText = "";
                    getParent(
                        inputElement,
                        options.formGroupSelector
                    ).classList.remove("invalid");
                };
            });
        });
    }
    //----------------------------------
}

//---Định nghĩa các rules---
// nguyen tac của các rules:
// 1. khi lỗi => trả ra message lỗi
// 2. khi hợp lệ => ko trả ra j cả (undefined)
Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return value ? undefined : message || "Vui lòng nhập trường này";
        },
    };
};
Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            var phone = /0\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) || phone.test(value)
                ? undefined
                : message || "trường này phải là email or sdt";
        },
    };
};
Validator.isPhone = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            var phone = /0\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
            return phone.test(value)
                ? undefined
                : message || "trường này phải là email or sdt";
        },
    };
};
Validator.minLength = function (selector, min, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min
                ? undefined
                : message || `Vui lòng nhập tối thiểu ${min} kí tự`;
        },
    };
};
Validator.isConfirm = function (selector, getconfirm, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getconfirm()
                ? undefined
                : message || "Giá trị nhập vào không chính xác";
        },
    };
};
//----------------//
