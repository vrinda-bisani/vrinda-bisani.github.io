[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-7f7980b617ed060a017424585567c406b6ee15c891e84e1186181d67ecf80aa0.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=12872973)
# Resume 💼🏢💻📄🗂📎🗄️🏦📠🖇🖨📱📧

You will utilize GitHub Pages to create a host your resume

## Part 1 - Instructions

You will have to create this project from scratch using plain HTML, JavaScript, and CSS.

This website will include:

* At least four pages that you can navigate to, consider index, about me, projects, socials, bio, demo real, portfolio, etc.
* Have at least two interactive JavaScript components that alter the view but are also accessible with a keyboard. Consider a button to switch between light and dark mode themes, a switch to change languages from English to Spanish, something to change the font sizes, go to high contrast mode, etc.
* Include a professionally written, styled, and presented resume. Visit with the career services people to have them look it over.
* Create your own favicon.
* Publish your website onto GitHub Pages.

You can utilize open-source CSS, but it must be cited and adapted to your needs.

Be sure that you have:

* Validated your HTML using [validator.w3.org](https://validator.w3.org/) to ensure no errors nor warnings.
* Verify that you are well documenting your code using [JSDoc](https://www.npmjs.com/package/jsdoc) standards. You do not need to generate an API.
* Ensured that you write satisfactory unit tests and that your code passes them, with **75%** coverage for non-view related tests.
* Include View Testing with puppeteer to ensure your website is updating as expected.
* Test your color contrast by visiting [a11y.com](https://color.a11y.com/).

**Optional**:

Purchase a domain name for your site and link it to your GitHub pages. I've used Google Domains, recently purchased by SquareSpace, with usually costs $1 for a domain name such as [www.oscarveliz.com](www.oscarveliz.com) and it is always a good idea to at least grab your name before someone else does. See [https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) for more information on how to do this.

## Part 2 - Reflection

Add screenshots below showing,

* Your app running on GitHub Pages
* Your html validation
* Your code coverage
* Your view testing

Update the README to answer the following questions:

 1. Identify the interactive JavaScript elements of your website and explain how you implemented them.
    - Button to switch between light and dark mode. I created 2 css file one for light mode and other for dark. I gave a button which on clicking will change the mode. The backed was written in javascript which changes the css page link on click of that button. This is implemented for all the pages.
    -  In project section each project is represented as a card. On hover the card flips and project details are displayed in detail. This was impleted using css and javascript function.
 2. What specific feedback did the career services people give you about your resume?
    - They suggested to change the order of sections.
 3. What aspects of this project did you find particularly challenging and why? Explain how you overcame them.
    - Switching the mode of the website was a little changing. I was able to change for one page but not for the whole website. Initially i was trying to do it at server side and realized that that is not an efficient solution. Using localStorage I was abale to achieve this. 
 4. Explain how you created a custom favicon for your page.
    - I used a fevicon generator website to generate favicon for my page. [Link](https://favicon.io/favicon-generator/)
 5. Write a short essay about what you've learned in this class so far. Think about all the technologies we've used, the activities you've done, the programs you've made, and how far you've come. Describe your experiences in at least 20 sentences with specific examples from this course.
    - The course proved to be highly engaging, providing me with extensive insights into various web development technologies. 
    - The instructor delved into topics not only realted to web development but also covered mongoDB and cloud deployment, both of which I believe will be valuable in my career. 
    - The curriculum encompassed a comprehensive range of web development tools, including HTML, CSS, Node.js, Express.js, Pug, and React.js. 
    - The class incorporated instruction on testing methodologies, offering a well-rounded understanding of full stack development. 
    - The content remained current, reflecting the latest industry technologies.
    - Collaborative skills were honed through team assignments, fostering an environment that emphasized parallel coding and other collaborative practices. 
    - Designing the resume site proved to be an enjoyable and practical application of the concepts learned. 
    - Both the TA and the professor were consistently prompt and helpful in addressing any queries or concerns, contributing to a positive learning experience.