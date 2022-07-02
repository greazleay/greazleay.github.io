'use strict';

import {
    express_api_list,
    fastify_api_list,
    nestjs_api_list,
    nodejs_full_stack,
    react_list,
    spring_api_list,
    static_list,
    vanilla_list,
} from './data.js';

// Components

const anchorTag = (url, txt, parent) => {
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.textContent = txt;
    parent.appendChild(a);
};

const headline = (elm, txt, url, parentTag) => {
    const parentElm = document.createElement(elm);
    // parentElm.append(txt);
    // anchorTag(url, 'here', parentElm);
    // parentElm.append('...');
    anchorTag(url, txt, parentElm);
    parentTag.appendChild(parentElm);
};

const addElm = (elm, txt, parent) => {
    const element = document.createElement(elm);
    element.textContent = txt;
    parent.appendChild(element);
};

// Rendered

const container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);

const navBar = document.createElement('nav');
navBar.className = 'nav-bar';
const img = document.createElement('img');
img.src = './favicon.png';
img.alt = 'img';
navBar.appendChild(img);
container.appendChild(navBar);

const main = document.createElement('main');
main.className = 'main';
container.appendChild(main)

const footer = document.createElement('footer');
footer.className = 'footer';
addElm('p', `© ${new Date().getFullYear()} Pollaroid All rights reserved`, footer);
container.appendChild(footer);

addElm('h1', 'About Me', main);

addElm('p', 'Back End Software Engineer with practical skills in building web applications and a keen interest in learning new technologies, also open to Front End roles.', main);
addElm('p', 'Programming Languages: TypeScript, JavaScript, Kotlin', main);

headline('p', 'View my Hackerrank Profile', 'https://www.hackerrank.com/greazleay', main);
headline('p', 'View my LeetCode Profile', 'https://www.leetcode.com/greazleay', main);
headline('p', 'View My Resume', 'https://drive.google.com/file/d/1AAf35x79zF83QMD3xlKDajH-FI5EnGEV/view?usp=sharing', main);
headline('p', 'Connect with me on LinkedIn', 'https://www.linkedin.com/in/siezes', main);

addElm('p', 'The underlisted are personal sandbox projects meant for demonstration purposes only:', main);

const projectCategory = (projectData) => {

    const { categoryName, projectList } = projectData;

    const category = document.createElement('div');
    category.className = 'category';

    const categoryTitle = document.createElement('div');
    addElm('p', categoryName, categoryTitle);
    category.appendChild(categoryTitle);

    const projects = document.createElement('div');
    projects.className = 'grid';
    category.appendChild(projects);

    const project = (projectName, links) => {
        const card = document.createElement('div');
        card.className = 'card';

        addElm('h3', projectName, card);

        const img = document.createElement('img');
        img.src = './web2.png'
        img.width = '128'
        img.height = '128'
        card.appendChild(img)

        links.forEach(link => anchorTag(link.url, link.text, card));
        projects.appendChild(card);
    }

    projectList.forEach(data => project(data.projectName, data.links));

    main.appendChild(category)
};

projectCategory(nestjs_api_list)
projectCategory(express_api_list)
projectCategory(fastify_api_list)
projectCategory(spring_api_list)
projectCategory(nodejs_full_stack)
projectCategory(react_list)
projectCategory(vanilla_list)
projectCategory(static_list)