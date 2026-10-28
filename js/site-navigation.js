/* One shared navigation owner. Legacy page controls are retired after initialization. */
(() => {
'use strict';
const siteRoot = new URL("../", document.currentScript.src);
const siteURL = path => new URL(path, siteRoot).href;
const pages = [
 ['index.html','Home','🏠'],['movies.html','Movies','🎬'],['episodes.html','Episodes','📺'],
 ['characters.html','Characters','👥'],['wallpapers.html','Wallpapers','🖼️'],['music.html','Music','🎵'],
 ['gallery.html','Gallery','📸'],['gadgets.html','Gadgets','🪄'],['test.html','Test','📝'],
 ['motivation.html','Motivation','💙'],['secret-login.html','Secret Message','💌']
];
function init() {
 if (document.getElementById('dw-site-header')) return;
 document.querySelectorAll('header.topbar, header.mobile-header, header.gallery-header, .mobile-menu-panel, .mobile-bottom-nav, #dw-search').forEach(el => el.remove());
 const current = location.pathname.split('/').pop() || 'index.html';
 const active = /^episode-\d+\.html$/.test(current) ? 'episodes.html' : current;
 const link = ([url,title,icon], bottom=false) => `<a href="${siteURL(url)}"${url === active ? ' aria-current="page"' : ''}>${bottom ? `<span>${icon}</span><small>${title}</small>` : `${icon} ${title}`}</a>`;
 const header = document.createElement('header');
 header.id='dw-site-header'; header.className='dw-ui';
 header.innerHTML=`<button type="button" id="dw-menu-button" aria-label="Open menu" aria-controls="dw-site-menu" aria-expanded="false">☰</button><a class="dw-brand" href="${siteURL('index.html')}">DORAEMON <span>🌐</span></a><nav class="dw-desktop-links" aria-label="Main navigation">${pages.slice(0,9).map(p=>link(p)).join('')}</nav><button type="button" id="dw-search-button" aria-label="Search Doraemon World" aria-controls="dw-site-search" aria-expanded="false">🔍</button>`;
 document.body.prepend(header);
 const menu=document.createElement('nav'); menu.id='dw-site-menu';menu.className='dw-ui';menu.hidden=true;menu.setAttribute('aria-label','All sections'); menu.innerHTML=pages.map(p=>link(p)).join('');
 const bottom=document.createElement('nav');bottom.id='dw-site-bottom';bottom.className='dw-ui';bottom.setAttribute('aria-label','Mobile navigation');bottom.innerHTML=pages.filter(p=>['index.html','movies.html','episodes.html','characters.html','music.html'].includes(p[0])).map(p=>link(p,true)).join('');
 const search=document.createElement('section');search.id='dw-site-search';search.className='dw-ui';search.hidden=true;search.setAttribute('aria-label','Site search');
 search.innerHTML='<form><input type="search" aria-label="Search Doraemon World" placeholder="Search Doraemon World..." autocomplete="off"><button type="button" aria-label="Close search">✕</button></form><div class="dw-results"></div><p role="status"></p>';
 document.body.append(menu,bottom,search);document.body.classList.add('dw-navigation-ready');
 const menuButton=header.querySelector('#dw-menu-button'),searchButton=header.querySelector('#dw-search-button'),input=search.querySelector('input'),results=search.querySelector('.dw-results'),status=search.querySelector('p');
 const closeMenu=()=>{menu.hidden=true;menuButton.setAttribute('aria-expanded','false');};
 const closeSearch=()=>{search.hidden=true;searchButton.setAttribute('aria-expanded','false');};
 menuButton.addEventListener('click',()=>{const open=menu.hidden;closeSearch();menu.hidden=!open;menuButton.setAttribute('aria-expanded',String(open));});
 let items=pages.map(([url,title,icon])=>({url,title,icon}));
 let indexed=false;
 const normalize=s=>s.toLowerCase().trim();
 function render(){const words=normalize(input.value).split(/\s+/).filter(Boolean);const matches=items.filter(p=>words.every(w=>normalize(p.title).includes(w))).slice(0,15);results.replaceChildren();for(const item of matches){const a=document.createElement('a');a.href = siteURL(item.url);a.textContent=`${item.icon} ${item.title}`;results.append(a);}status.textContent=matches.length?`${matches.length} results`:'No result found.';}
 async function index(){if(indexed)return;indexed=true;try{const response=await fetch(siteURL('js/site-search-index.json'));if(!response.ok)return;const extra=await response.json();const seen=new Set(items.map(p=>p.url+'|'+normalize(p.title)));for(const p of extra){const key=p.url+'|'+normalize(p.title);if(!seen.has(key)){seen.add(key);items.push(p);}}render();}catch{/* Section search remains available offline. */}}
 searchButton.addEventListener('click',()=>{const open=search.hidden;closeMenu();search.hidden=!open;searchButton.setAttribute('aria-expanded',String(open));if(open){render();input.focus();index();}});
 search.querySelector('button').addEventListener('click',()=>{closeSearch();searchButton.focus();});input.addEventListener('input',render);
 search.querySelector('form').addEventListener('submit',e=>{e.preventDefault();const first=results.querySelector('a');if(first)location.href=first.href;});
 menu.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
 document.addEventListener('click',e=>{if(!menu.contains(e.target)&&!menuButton.contains(e.target))closeMenu();if(!search.contains(e.target)&&!searchButton.contains(e.target))closeSearch();});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(!menu.hidden){closeMenu();menuButton.focus();}if(!search.hidden){closeSearch();searchButton.focus();}}});
 window.addEventListener('resize',()=>{closeMenu();closeSearch();});
}
if(document.readyState!=='complete')document.addEventListener('DOMContentLoaded',init);else init();
})();
