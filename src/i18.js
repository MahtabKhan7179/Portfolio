import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        lng: "en",
        fallbackLng: "en",
        returnObjects: true,

        resources: {
            en: {
                translation: {
                    "mah": "Mah",
                    "tab": "Tab",
                    "home": "home",
                    "about": "about",
                    "skills": "skills",
                    "project": "projects",
                    "selectLanguage": "Select Language",
                    "developerIntro": "I'm Mahtab",
                    "developerRole": "Front-end developer",
                    "developerWork": "turning ideas into interactive reality",
                    "techStack": "Tech Stack",
                    "codeAndCoffee": "Code And Coffee",
                    "webCreations": "Web Creations",
                    "htmlAbout": "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
                    "javascriptAbout": "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
                    "tailwindCSSAbout": "Highly skilled in TailwindCSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
                    "nodeJsAbout": "Advanced proficiency in NodeJs, developing efficient and interactive front-end applications with various NodeJs packages.",
                    "mongoDbAbout": "Proficiency in MongoDb, developing efficient and interactive web applications with using MongoDb for storing data ",
                    "reactJsAbout": "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
                    "expressJsAbout": "Advanced proficiency in ExpressJs, developing efficient and interactive back-end applications with a strong emphasis on component-based architecture.",
                    "nextJsAbout": "Advanced proficiency in NextJs, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
                    "firstProjectTitle": "Student Enrollment Form",
                    "firstProjectDetail": "The enrollment page is created using  HTML5, CSS3 and Javascript. All fields of the form have necessary validations and error messages on validation failure. On form submission the enrolled student will be added dynamically to the table using javascript. The image will be loaded from the URL submitted in the form and website link will open in a new tab on clicking. The new enrollment will be added with a fade-in effect achieved using CSS animations. The webpage is responsive for all resolutions and screen-sizes. Bootstrap framework is used for layout and forms.",
                    "secondProjectTitle": "Student Enrollment Form",
                    "secondProjectDetail": "The enrollment page is created using  HTML5, CSS3 and Javascript. All fields of the form have necessary validations and error messages on validation failure. On form submission the enrolled student will be added dynamically to the table using javascript. The image will be loaded from the URL submitted in the form and website link will open in a new tab on clicking. The new enrollment will be added with a fade-in effect achieved using CSS animations. The webpage is responsive for all resolutions and screen-sizes. Bootstrap framework is used for layout and forms.",
                    "thirdProjectTitle": "Student Enrollment Form",
                    "thirdProjectDetail": "The enrollment page is created using  HTML5, CSS3 and Javascript. All fields of the form have necessary validations and error messages on validation failure. On form submission the enrolled student will be added dynamically to the table using javascript. The image will be loaded from the URL submitted in the form and website link will open in a new tab on clicking. The new enrollment will be added with a fade-in effect achieved using CSS animations. The webpage is responsive for all resolutions and screen-sizes. Bootstrap framework is used for layout and forms.",
                    "footerCraftedBy": "Crafted with love",
                    "footerCopyright": "© Mahtab Khan. All rights reserved.",
                },
            },
            ur: {
                translation: {
                    "mah": "مہ",
                    "tab": "تاب",
                    "home": "ہوم",
                    "about": "ابوت",
                    "skills": "سکلز",
                    "projects": "پروجیکٹس",
                    "selectLanguage": "زبان منتخب کریںSelect Language",
                    "developerIntro": "میں مہتاب",
                    "developerRole": "فرنٹ اینڈ ڈویلپر",
                    "developerWork": "خیالات کو انٹرایکٹو حقیقت میں تبدیل کرنا",
                    "techStack": "ٹیک اسٹیک",
                    "codeAndCoffee": "کوڈ اور کافی",
                    "webCreations": "ویب تخلیقات",
                    "htmlAbout": "HTML & CSS, میں انتہائی ہنر مند، صارف کے بہترین تجربات کے لیے بصری طور پر دلکش اور جوابدہ ویب سائٹس کو مہارت سے تیار کرنا۔",
                    "javascriptAbout": "JavaScript میں مہارت، ہموار صارف کے تعاملات اور فعالیت پر توجہ کے ساتھ انٹرایکٹو اور متحرک ویب ایپلیکیشنز کی تعمیر",
                    "tailwindCSSAbout": "TailwindCSS میں انتہائی ہنر مند، صارف کے بہترین تجربات کے لیے بصری طور پر دلکش اور جوابدہ ویب سائٹس کو مہارت سے تیار کرتا ہے۔",
                    "nodeJsAbout": "NodeJs میں اعلیٰ مہارت، مختلف NodeJs پیکجوں کے ساتھ موثر اور انٹرایکٹو فرنٹ اینڈ ایپلی کیشنز تیار کرنا۔",
                    "mongoDbAbout": "MongoDb میں مہارت، ڈیٹا کو ذخیرہ کرنے کے لیے MongoDb کے استعمال کے ساتھ موثر اور انٹرایکٹو ویب ایپلیکیشنز تیار کرنا",
                    "reactJsAbout": "ReactJs میں اعلیٰ مہارت، جزو پر مبنی فن تعمیر پر مضبوط زور کے ساتھ موثر اور انٹرایکٹو فرنٹ اینڈ ایپلی کیشنز تیار کرنا۔",
                    "expressJsAbout": "ExpreesJsمیں اعلی درجے کی مہارت، اجزاء پر مبنی فن تعمیر پر مضبوط زور کے ساتھ موثر اور انٹرایکٹو بیک اینڈ ایپلی کیشنز تیار کرنا۔",
                    "nextJsAbout": "NextJs میں اعلیٰ مہارت، جزو پر مبنی فن تعمیر پر مضبوط زور کے ساتھ موثر اور انٹرایکٹو فرنٹ اینڈ ایپلی کیشنز تیار کرنا۔",
                    "firstProjectTitle": "Student Enrollment Form",
                    "firstProjectDetail": "اندراج کا صفحہ HTML5، CSS3 اور Javascript کا استعمال کرتے ہوئے بنایا گیا ہے۔ فارم کے تمام شعبوں میں توثیق کی ناکامی پر ضروری توثیق اور غلطی کے پیغامات ہیں۔ فارم جمع کرانے پر اندراج شدہ طالب علم کو جاوا اسکرپٹ کا استعمال کرتے ہوئے ٹیبل میں متحرک طور پر شامل کیا جائے گا۔ تصویر کو فارم میں جمع کرائے گئے یو آر ایل سے لوڈ کیا جائے گا اور کلک کرنے پر ویب سائٹ کا لنک ایک نئے ٹیب میں کھل جائے گا۔ نیا اندراج CSS اینیمیشنز کا استعمال کرتے ہوئے حاصل کردہ فیڈ ان اثر کے ساتھ شامل کیا جائے گا۔ ویب صفحہ تمام ریزولوشنز اور اسکرین کے سائز کے لیے ذمہ دار ہے۔ بوٹسٹریپ فریم ورک ترتیب اور فارم کے لیے استعمال ہوتا ہے۔",
                    "secondProjectTitle": "Student Enrollment Form",
                    "secondProjectDetail": "اندراج کا صفحہ HTML5، CSS3 اور Javascript کا استعمال کرتے ہوئے بنایا گیا ہے۔ فارم کے تمام شعبوں میں توثیق کی ناکامی پر ضروری توثیق اور غلطی کے پیغامات ہیں۔ فارم جمع کرانے پر اندراج شدہ طالب علم کو جاوا اسکرپٹ کا استعمال کرتے ہوئے ٹیبل میں متحرک طور پر شامل کیا جائے گا۔ تصویر کو فارم میں جمع کرائے گئے یو آر ایل سے لوڈ کیا جائے گا اور کلک کرنے پر ویب سائٹ کا لنک ایک نئے ٹیب میں کھل جائے گا۔ نیا اندراج CSS اینیمیشنز کا استعمال کرتے ہوئے حاصل کردہ فیڈ ان اثر کے ساتھ شامل کیا جائے گا۔ ویب صفحہ تمام ریزولوشنز اور اسکرین کے سائز کے لیے ذمہ دار ہے۔ بوٹسٹریپ فریم ورک ترتیب اور فارم کے لیے استعمال ہوتا ہے۔",
                    "thirdProjectTitle": "Student Enrollment Form",
                    "thirdProjectDetail": "اندراج کا صفحہ HTML5، CSS3 اور Javascript کا استعمال کرتے ہوئے بنایا گیا ہے۔ فارم کے تمام شعبوں میں توثیق کی ناکامی پر ضروری توثیق اور غلطی کے پیغامات ہیں۔ فارم جمع کرانے پر اندراج شدہ طالب علم کو جاوا اسکرپٹ کا استعمال کرتے ہوئے ٹیبل میں متحرک طور پر شامل کیا جائے گا۔ تصویر کو فارم میں جمع کرائے گئے یو آر ایل سے لوڈ کیا جائے گا اور کلک کرنے پر ویب سائٹ کا لنک ایک نئے ٹیب میں کھل جائے گا۔ نیا اندراج CSS اینیمیشنز کا استعمال کرتے ہوئے حاصل کردہ فیڈ ان اثر کے ساتھ شامل کیا جائے گا۔ ویب صفحہ تمام ریزولوشنز اور اسکرین کے سائز کے لیے ذمہ دار ہے۔ بوٹسٹریپ فریم ورک ترتیب اور فارم کے لیے استعمال ہوتا ہے۔",
                    "footerCraftedBy": "پیار سے تیار کیا گیا",
                    "footerCopyright": "© مہتاب خان۔ جملہ حقوق محفوظ ہیں۔",
                },
            },
            fr: {
                translation: {

                },
            },

            hi: {
                translation: {

                },
            },
            de: {
                translation: {

                },
            },

        }
    })
