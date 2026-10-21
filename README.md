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
| React                             | 19.2.6    | For the frontend                    | [Link](https://react.dev/)    |
| TypeScript                        | 6.0.2     | Programming language                 | [Link](https://www.typescriptlang.org/)   |
| i18next                           | 26.2.0    | Language translation of the website  | [Link](https://www.npmjs.com/package/i18next?activeTab=readme)   |
| tailwindcss                      | 4.3.0     | For faster website design            |[Link](https://tailwindcss.com/)    |
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
├───public - static files (additional fonts)
└───src
    ├───assets
    │   ├───css - css files (page appearance and animations)
    ├───components - reusable elements
    ├───pages - web pages
    └───sections - sections available on web pages
```
## Assets

### Additionally uploaded fonts

The additionally uploaded font used is the same as it was immediately after download. Only its size and colors have been adjusted in the code.

| Font  name | Credits      | License  | Source |
|:-----:     |  :--------:  |:--------:|:------:|
| [Mrs Saint Delafield](/frontend/public/font_families/Mrs_Saint_Delafield/MrsSaintDelafield-Regular.ttf) | Copyright (c) 2011 Alejandro Paul (sudtipos@sudtipos.com)  | [SIL Open Font License, Version 1.1](/frontend/public/font_families/Mrs_Saint_Delafield/OFL.txt) | [Link](https://fonts.google.com/specimen/Mrs+Saint+Delafield?preview.script=Latn) |
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

| Video Name | License  | Source |
|:-----:     |  :--------:|:------:|
| [7794279-uhd_3840_2160_25fps.mp4](/frontend/public/videos/7794279-uhd_3840_2160_25fps.mp4) | [Free](https://www.pexels.com/pl-PL/license/) | [Link](https://www.pexels.com/pl-pl/video/abstrakcyjny-pomarancza-ruch-farba-7794279/) |


### Personal data

The application is the portfolio of the repository author, therefore personal data contained in the code belong to her and it is prohibited to use them.

## Code license

2026 &copy; Paulina Staszewska. All rights reserved.

