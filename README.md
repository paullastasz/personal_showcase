# App

The landing page app for portfolios, personal showcases or CVs. It includes Polish and English translations and redirects to platforms like GitHub and LinkedIn, where you can find the repository author's profile.

## Hosting

You can see the website online at this address *https://paulla-stasz.onrender.com*. 
Hosting is provided by the service on the website *render.com*.

## Launching the application

In the *frontend* folder run the following commands:

```
npm install

npm run dev
```

or on Windows, in the project folder, run the *setup.bat* file:

```
./setup.bat -[parametr]

Parametr:
-help       Display help
-install    Install dependencies
-run        Start the frontend server

```

## Technologies

The main technologies used are listed in the table, and the [package.json](/frontend/package.json) file contains all installed technologies.

| Technology                        | Version   |  Description                         | Source   |
| :---:                             | :---:     | :---:                                | :---:     |
| React                             | 19.2.6    | For frontend                    | [Link](https://react.dev/)    |
| Playwright                             | 1.65.0    | For tests                   | [Link](https://playwright.dev/)    |
| TypeScript                        | 6.0.2     | Programming language                 | [Link](https://www.typescriptlang.org/)   |
| i18next                           | 26.2.0    | Language translation of the website  | [Link](https://www.npmjs.com/package/i18next?activeTab=readme)   |
| tailwindcss                      | 4.3.5     | For faster website design            |[Link](https://tailwindcss.com/)    |
| react-router-hash-link            | 2.4.3     | For link creation using an id attribute          |[Link](https://www.npmjs.com/package/react-router-hash-link)     |
| react-router-dom                  | 7.15.1    | For routing                         |[Link](https://www.npmjs.com/package/react-router-dom)     |
| vite                              | 8.0.12    | Build tool                           |[Link](https://vite.dev/)                                                     |
| @types/react-router               | 5.1.20    | For the definition of types         |[Link](https://www.npmjs.com/package/@types/react-router?activeTab=readme)    |
| @fortawesome/react-fontawesome       | 3.3.1    | For icons                  |[Link](https://www.npmjs.com/package/@fortawesome/react-fontawesome)    |
| @fortawesome/free-solid-svg-icons    | 7.2.0    | For icons                  |[Link](https://www.npmjs.com/package/@fortawesome/free-solid-svg-icons)    |
| @fortawesome/free-regular-svg-icons  | 7.2.0    | For icons                  |[Link](https://www.npmjs.com/package/@fortawesome/free-regular-svg-icons)    |
| @fortawesome/free-brands-svg-icons   | 7.2.0    | For icons              |[Link](https://www.npmjs.com/package/@fortawesome/free-brands-svg-icons)    |
| @fortawesome/fontawesome-svg-core    | 7.2.0    | For icons               |[Link](https://www.npmjs.com/package/@fortawesome/fontawesome-svg-core)    |

## Structure

```
frontend
├───public - static files (additional fonts and etc.)
├───src
│   ├───assets
│   │   ├───css - css files (page appearance and animations)
│   ├───components - reusable elements
│   ├───data
│   ├───hooks
│   ├───locales
│   ├───pages - web pages
│   ├───types
│   └───sections - sections available on web pages
└───tests - tests using Playwright
```
## Assets

### Additionally uploaded fonts

The additionally uploaded font used is the same as it was immediately after download. Only its size and colors have been adjusted in the code.

| Font  name | Credits      | License  | Source |
|:-----:     |  :--------:  |:--------:|:------:|
| [Allura](/frontend/public/font_families/Allura/) |Copyright 2010 The Allura Project Authors (https://github.com/googlefonts/allura)  | [SIL Open Font License, Version 1.1](/frontend/public/font_families/Allura/OFL.txt) | [Link](https://fonts.google.com/specimen/Allura?preview.text=Paulina%20Staszewska&specimen.preview.text=Paulina+Staszewska&preview.script=Latn) |
| [Alumni Sans Pinstripe](/frontend/public/font_families/Alumni_Sans_Pinstripe/) | Copyright 2014 The Alumni Sans Pinstripe Project Authors (https://github.com/googlefonts/alumni-sans-pinstripe)  | [SIL Open Font License, Version 1.1](/frontend/public/font_families/Alumni_Sans_Pinstripe/OFL.txt) | [Link](https://fonts.google.com/specimen/Alumni+Sans+Pinstripe) |

###  Icons

Icons used unchanged (with the possible exception of color and size):

| Icon Name | Credits   | License  | Source |
|:-----:     |  :--------:  |:--------:|:------:|
| faGithub  | Font Awesome Free &copy; Fonticons, Inc. | [CC BY 4.0 License](https://fontawesome.com/license/free) | [Link](https://fontawesome.com/icons/brands/solid/github?pc=rgba%28255%2C%20255%2C%20255%2C%201.00%29&sc=rgba%28255%2C%20255%2C%20255%2C%200.4%29) |
| faEnvelope | Font Awesome Free &copy; Fonticons, Inc.  | [CC BY 4.0 License](https://fontawesome.com/license/free) | [Link](https://fontawesome.com/icons/classic/solid/envelope?sz=2xl&pc=rgba%28255%2C%20255%2C%20255%2C%201.00%29&sc=rgba%28255%2C%20255%2C%20255%2C%200.4%29) |
| faLinkedin | Font Awesome Free &copy; Fonticons, Inc.  | [CC BY 4.0 License](https://fontawesome.com/license/free) | [Link](https://fontawesome.com/icons/brands/solid/linkedin?sz=2xl&pc=rgba%28255%2C%20255%2C%20255%2C%201.00%29&sc=rgba%28255%2C%20255%2C%20255%2C%200.4%29) |
| aShare | Font Awesome Free &copy; Fonticons, Inc.  | [CC BY 4.0 License](https://fontawesome.com/license/free) | [Link](https://fontawesome.com/icons/classic/solid/share?pc=rgba%2824%2C%2019%2C%2026%2C%201.00%29&sc=rgba%2824%2C%2019%2C%2026%2C%200.4%29)|


###  Videos

| Video Name | Section |License  | Source |
|:-----:    |  :--------: |  :--------:|:------:|
| [20670675-uhd_3840_2160_30fps.mp4](/frontend/public/videos/20670675-uhd_3840_2160_30fps.mp4) | Home | [Free](https://www.pexels.com/pl-PL/license/) | [Link](https://www.pexels.com/pl-pl/video/nocny-bruksela-20670675/) |
| [15476205_1920_1080_25fps.mp4](/frontend/public/videos/15476205_1920_1080_25fps.mp4) | About |[Free](https://www.pexels.com/pl-PL/license/) | [Link](https://www.pexels.com/pl-pl/video/widok-z-lotu-ptaka-na-nowoczesne-wiezowce-miasta-36498297/) |
| [15370749_3840_2160_30fps.mp4](/frontend/public/videos/15370749_3840_2160_30fps.mp4) | Skills |[Free](https://www.pexels.com/pl-PL/license/) | [Link](https://www.pexels.com/pl-pl/video/nocny-widok-z-lotu-ptaka-na-panorame-chicago-36244311/) |
| [3048227-uhd_3840_2160_30fps.mp4](/frontend/public/videos/3048227-uhd_3840_2160_30fps.mp4) | Projects |[Free](https://www.pexels.com/pl-PL/license/) | [Link](https://www.pexels.com/pl-pl/video/wystawa-swiatel-po-bokach-budynku-dla-przyciagania-3048227/) |
| [1826896-hd_1920_1080_24fps.mp4](/frontend/public/videos/1826896-hd_1920_1080_24fps.mp4) | Contact |[Free](https://www.pexels.com/pl-PL/license/) | [Link](https://www.pexels.com/pl-pl/video/zdjecia-lotnicze-miasta-1826896/) |

On mobile devices, a still frame captured from the same video is displayed as its thumbnail instead of loading the video file. This improves page loading performance and reduces data usage on mobile devices.

### Personal data

The application is the portfolio of the repository author, therefore personal data contained in the code belong to her and it is prohibited to use them.

## Code license

2026 &copy; Paulina Staszewska. All rights reserved.

