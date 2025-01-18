
class MenuComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <link rel="stylesheet" href="../menu.css">



            <aside class="sidebar">
            <div class="menu-toggle">
              <img src="../assets/images/close-circle-svgrepo-com.svg" class="icon-tog" alt="">
            </div>
                    <div class="image-menu">
                    <div style="display: flex;flex-direction: row;">
               <a href="#"><img src="../assets/images/865542da-b1a0-4b37-b0fd-11e5b18a861d.png" class="logo-site"></div></a>
               <a href="#"><img src="../assets/images/27bb5af8-6c2e-4f7e-91c9-7d88735a56cf.png" class="icon-site"></div></a>
                    </div>

                  </div>
                  <div class="menu-cont">
                  <span class="menu-text">منو</span>
                  </div>
          <div class="menu-ul">
          
          
                <button class="dashboard-button" type="button" onclick="location.href='dev404.ir';">
                  <div class="dashboard-button_span"><span class="twelve">۱۲</span></div>
                  <span class="dashboard-button_text">داشبورد</span>
                  <!--ایکون دکمه داشبورد-->
                  <div class="grid">
                  <img src="./assets/images/dashboard/grid.svg" alt="">
                  </div>
                  <!--ایکون دکمه داشبورد-->
          
                </button>

              <button class="dashboard-button2" onclick="location.href="../2-Campain-Det/index.html";">
                <span class="dashboard-button_text2">لیست تبلیغات من</span>
                <div class="icon-box"><img src="./assets/images/dashboard/file.png" class="icon" alt=""></div>
              </button>
              <button class="dashboard-button2" onclick="location.href='dev404.ir';">
                <span class="dashboard-button_text2">لیست بلاک من</span>
                <div class="icon-box"><img src="./assets/images/dashboard/block-list.png" class="icon" alt=""></div>
              </button>
              <button class="dashboard-button2" onclick="location.href='dev404.ir';">
                <span class="dashboard-button_text2">ارسال تیکت</span>
                <div class="icon-box"><img src="./assets/images/dashboard/send-ticket.png" class="icon" alt=""></div>
              </button>
              <div class="dashboard-button3">
                <button class="span-button" ><span class="two">۲</span></button
                ><span class="dashboard-button_text2">تیکت های من</span>
                <div class="icon-box"><img src="./assets/images/dashboard/i-tecket.png" class="icon" alt=""></div>
              </div>

               <div class="line"></div>
          <div class="frame-12">
            <span class="dashboard-button_text2" >تنظیمات</span>
            <div class="frame-13">
              <button  class="dashboard-button2" onclick="location.href='dev404.ir';">
                <span class="dashboard-button_text2">تغییر رمز عبور</span>
                <div class="icon-box"><img src="./assets/images/dashboard/finger.png" class="icon" alt=""></div>
              </button> 
              <button  class="dashboard-button2" onclick="location.href='dev404.ir';">
                <span class="dashboard-button_text2">درباره ما</span>
                <div class="icon-box"><img src="./assets/images/dashboard/about.png" class="icon" alt=""></div>
              </button> 
            </div>
          </div>
        </div>
        <div class="space-zone"></div>
        <div class="profile-dashboard">
          <button class="profile-logout" type="button" onclick="location.href='#';"></button>
          <div class="profile-box">
            <div class="profile-box_text">
              <span class="human-hosseini">هومن حسنی</span
              ><span class="logout-text">خروج از حساب</span>
            </div>
            <a href="#"><img src="./assets/images/dashboard/prfile-img.png" class="profile-img" ></a>
          </div>
        </div>
          </div>
          </aside>
        `;
    }
}


// تعریف تگ سفارشی
customElements.define('menu-component', MenuComponent);
