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
    parentElm.append(txt);
    anchorTag(url, 'here', parentElm);
    parentElm.append('...');
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

headline('p', 'View my Hackerrank profile ', 'https://www.hackerrank.com/greazleay', main);
headline('p', 'View my LeetCode profile ', 'https://www.leetcode.com/greazleay', main);
headline('p', 'My Resume is available ', 'https://drive.google.com/file/d/1AAf35x79zF83QMD3xlKDajH-FI5EnGEV/view?usp=sharing', main);

addElm('p', 'The underlisted are personal projects and meant for demonstration purposes only:', main);

const projects = document.createElement('div');
projects.className = 'grid';
main.appendChild(projects);

const project = (projectName, links) => {
    const div = document.createElement('div');
    div.className = 'card';

    addElm('h3', projectName, div);

    const img = document.createElement('img');
    img.src = './web2.png'
    img.width = '128'
    img.height = '128'
    div.appendChild(img)
    
    links.forEach(link => anchorTag(link.url, link.text, div));

    projects.appendChild(div);
};

// addElm('p', 'NestJS REST APIs', projects);
nestjs_api_list.forEach(entry => project(entry.projectName, entry.links));

// addElm('p', 'Express REST APIs', projects);
express_api_list.forEach(entry => project(entry.projectName, entry.links));

// addElm('p', 'Fastify REST APIs', projects);
fastify_api_list.forEach(entry => project(entry.projectName, entry.links));

// addElm('p', 'Spring Boot + Kotlin REST APIs', projects);
spring_api_list.forEach(entry => project(entry.projectName, entry.links));

// addElm('p', 'Full Stack Node JS', projects);
nodejs_full_stack.forEach(entry => project(entry.projectName, entry.links));

// addElm('p', 'FRONT END:', projects);

// addElm('p', 'React JS/TS Projects', projects);
react_list.forEach(entry => project(entry.projectName, entry.links));

// addElm('p', 'Vanilla JS Projects', projects);
vanilla_list.forEach(entry => project(entry.projectName, entry.links));

// addElm('p', 'Static Websites', projects);
static_list.forEach(entry => project(entry.projectName, entry.links));