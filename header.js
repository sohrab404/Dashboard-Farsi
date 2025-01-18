
class HeaderComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <link rel="stylesheet" href="../header.css">
            <link rel="stylesheet" href="./font.css">
                <header>
                <div class="header-left">
                <div class="header-search-box">
                    <input type="text" class="input frame-input" id="searchInput" placeholder="جستجو..." dir="rtl" style="padding-right: 5rem;" />

                    <div class="icon-search"></div>
                </div>
                <a href="#"><img src="./assets/images/header/qu-icon.png" alt="" class="qu-icon"></a>
                </div>
                <div class="header-profile-box">

                <a href="#"><img src="./assets/images/header/user-prof.png" alt="" class="profile-img"></a>
                <div class="header-profile_text">
                    <span class="userName">هومن حسنی</span>
                    <span class="userAccess">مدیر سیستم</span>
                </div>
                <div class="icon-down" onclick="toggleDropdown()"></div>
                
                <div id="dropdownMenu" class="dropdown-content" style="z-index:999">
                    <a href="#">پروفایل</a>
                    <a href="#">تنظیمات</a>
                    <a href="#">خروج</a>
                </div>
                </div>
                </header>

        `;
    }
}


// تعریف تگ سفارشی
customElements.define('header-component', HeaderComponent);























