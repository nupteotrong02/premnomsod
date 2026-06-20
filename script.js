// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Header scroll effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = header.offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active link highlighting on scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    const headerHeight = header.offsetHeight;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 100;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    // Special case for footer/location
    const footer = document.querySelector('#location');
    if (footer && (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 200) {
        current = 'location';
    }

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

// Internationalization (i18n)
const translations = {
    en: {
        nav_home: "Home",
        nav_menu: "Menu",
        nav_vibe: "Vibe",
        nav_location: "Contact",
        hero_title: "Refresh your day with 100% fresh milk",
        hero_subtitle: "Sweet, creamy, and perfectly delicious in Prem Nom Sod style",
        hero_btn_order: "Order Delivery",
        hero_btn_dir: "Get Directions",
        menu_title: "Must-Try Signature Menu",
        menu_desc: "Our best-selling items that everyone loves",
        m1_name: "Caramel Fresh Milk",
        m1_desc: "Fragrant milk topped with homemade caramel sauce",
        m2_name: "Strawberry Fresh Milk",
        m2_desc: "Smooth blended milk topped with juicy strawberry jam",
        m3_name: "Butter & Condensed Milk Toast",
        m3_desc: "Crispy on the outside, soft on the inside, with real butter aroma",
        m4_name: "Iced Chocolate",
        m4_desc: "Rich chocolate blended with authentic fresh milk",
        menu_all: "View All Menu",
        vibe_title: "Our Shop Vibe",
        vibe_desc: "Chill and take beautiful photos in a relaxing atmosphere",
        footer_desc: "A fresh milk cafe selecting quality ingredients to deliver deliciousness and happiness in every glass for you.",
        contact_time: "Opening Hours:",
        contact_time_val: "Open daily 16:00 - 23:00",
        contact_addr: "Address:",
        contact_addr_val: "Main Road (Opposite Market), Mueang District",
        contact_phone: "Phone:"
    },
    th: {
        nav_home: "หน้าแรก",
        nav_menu: "เมนู",
        nav_vibe: "บรรยากาศ",
        nav_location: "ติดต่อเรา",
        hero_title: "เติมความสดชื่นทุกวัน กับนมสดแท้ 100%",
        hero_subtitle: "หอม หวาน มัน อร่อยลงตัว สไตล์เปรมนมสด",
        hero_btn_order: "สั่ง Delivery",
        hero_btn_dir: "ดูเส้นทางมาร้าน",
        menu_title: "เมนู Signature ที่ต้องลอง",
        menu_desc: "เมนูขายดีประจำร้าน ที่ใครมาก็ต้องสั่ง",
        m1_name: "นมสดคาราเมล",
        m1_desc: "นมหอมๆ ราดด้วยซอสคาราเมลโฮมเมด",
        m2_name: "นมสดสตรอว์เบอร์รี",
        m2_desc: "นมสดปั่นเนื้อเนียน ท็อปด้วยแยมสตรอว์เบอร์รีฉ่ำๆ",
        m3_name: "ปังปิ้งเนยนม",
        m3_desc: "ขนมปังปิ้งกรอบนอกนุ่มใน หอมกลิ่นเนยแท้",
        m4_name: "ช็อกโกแลตเย็น",
        m4_desc: "ช็อกโกแลตเข้มข้น ผสมผสานนมสดแท้",
        menu_all: "ดูเมนูทั้งหมด",
        vibe_title: "บรรยากาศร้านของเรา",
        vibe_desc: "นั่งชิล ถ่ายรูปสวย ในบรรยากาศสบายๆ",
        footer_desc: "ร้านนมสดที่คัดสรรวัตถุดิบคุณภาพ เพื่อส่งมอบความอร่อยและความสุขในทุกๆ แก้วให้กับคุณ",
        contact_time: "เวลาเปิด-ปิด:",
        contact_time_val: "เปิดทุกวัน 16:00 - 23:00 น.",
        contact_addr: "ที่อยู่:",
        contact_addr_val: "ถ.สายหลัก (ตรงข้ามตลาด), อำเภอเมือง",
        contact_phone: "โทรศัพท์:"
    }
};

let currentLang = localStorage.getItem('lang') || 'th';
const langToggleBtn = document.getElementById('langToggle');

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    
    // Update toggle button text
    if (langToggleBtn) {
        langToggleBtn.textContent = lang === 'th' ? 'EN' : 'TH';
    }
    
    // Update text content for all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

// Initial setup
setLanguage(currentLang);

// Toggle event listener
if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
        setLanguage(currentLang === 'th' ? 'en' : 'th');
    });
}
