import { static_list, vanilla_list, react_list, nodejs_full_stack, nestjs_api_list, express_api_list, spring_api_list } from "./data.js";

// Components

const anchorTag = (url, txt, parent) => {
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.textContent = txt;
    parent.appendChild(a);
};

const headline = (e, txt, url) => {
    const parent = document.createElement(e);
    parent.append(txt);
    const a = document.createElement('a');
    anchorTag(url, 'here', parent);
    parent.append('...');
    container.appendChild(parent);
};

const addPara = (txt, parent) => {
    const p = document.createElement('p');
    p.textContent = txt;
    parent.appendChild(p);
};

// Rendered

const container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);

const header = document.createElement('header');
const img = document.createElement('img');
img.src = './favicon-32x32.png';
img.alt = 'img';
header.appendChild(img);
container.appendChild(header);

const aboutMe = document.createElement('h1');
aboutMe.textContent = 'About Me';
container.appendChild(aboutMe);

addPara('Back End Software Engineer with practical skills in building web applications and a keen interest in learning new technologies, also open to Front End roles.', container);
addPara('Programming Languages: TypeScript, JavaScript, Kotlin', container);

headline('p', 'View my Hackerrank profile ', 'https://www.hackerrank.com/greazleay');
headline('p', 'View my LeetCode profile ', 'https://www.leetcode.com/greazleay');
headline('p', 'My Resume is available ', 'https://drive.google.com/file/d/1AAf35x79zF83QMD3xlKDajH-FI5EnGEV/view?usp=sharing');

addPara('The underlisted are personal projects and meant for demonstration purposes only:', container);

const projects = document.createElement('div');
projects.className = 'projects';
container.appendChild(projects);

const project = (pname, links) => {
    const div = document.createElement('div');
    div.className = 'project';
    const span = document.createElement('span');
    span.textContent = pname;
    div.appendChild(span);
    links.forEach(link => anchorTag(link.url, link.text, div));
    projects.appendChild(div);
};

addPara('NestJS REST APIs', projects);
nestjs_api_list.forEach(entry => project(entry.projectName, entry.links));

addPara('Express REST APIs', projects);
express_api_list.forEach(entry => project(entry.projectName, entry.links));

addPara('Spring Boot + Kotlin REST APIs', projects);
spring_api_list.forEach(entry => project(entry.projectName, entry.links));

addPara('Full Stack Node JS', projects);
nodejs_full_stack.forEach(entry => project(entry.projectName, entry.links));

addPara('FRONT END:', projects);

addPara('React JS/TS Projects', projects);
react_list.forEach(entry => project(entry.projectName, entry.links));

addPara('Vanilla JS Projects', projects);
vanilla_list.forEach(entry => project(entry.projectName, entry.links));

addPara('Static Websites', projects);
static_list.forEach(entry => project(entry.projectName, entry.links));