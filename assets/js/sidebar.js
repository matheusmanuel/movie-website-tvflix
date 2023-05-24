'use strict'
import { api_key,fetchDataFromServer } from "./api.js"
export function sidebar(){
    const genreList = {};
    fetchDataFromServer(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`, function({genres}){
        for(const {id, name} of genres){
            genreList[id] = name;
        }
        genreLink();
    });
    const sidebarInner = document.createElement('div');
    sidebarInner.classList.add("sidebar-inner")
    sidebarInner.innerHTML = `
    <div class="sidebar-list">
    <p class="title">Genre</p>
    </div>

  <div class="sidebar-list">
    <p class="title">Language</p>

    <a href="./movie-list.html" menu-close class="sidebar-link" onclick='getMovieList("with_original_language=en","English")'>English</a>

    <a href="./movie-list.html" menu-close class="sidebar-link" onclick='getMovieList("with_original_language=hi","Hindi")'>Hindi</a>

    <a href="./movie-list.html" menu-close class="sidebar-link"
    onclick='getMovieList("with_original_language=ur","Urdu")'>Urdu</a>

  </div>

  <div class="sidebar-footer">
    <p class="copyright"><a href="https://twitter.com/danish__an">Made with 🎈 by Matheus manuel</a>
    </p>
    <div class="social-link">
    <a href="https://www.youtube.com/matheusmanuel" alt="Social handles" target="_blank">youtube</a>
    <a href="https://github.com/matheusmanuel" alt="Social handles" target="_blank">Github</a>
    <a href="https://www.instagram.com/matheusmanuel.dev" alt="Social handles" target="_blank">Instagram</a>
    </div>
  </div>
`;

    const genreLink = function(){

        for(const [genreId, genreName] of Object.entries(genreList)){
            const link = document.createElement("a");
            link.classList.add("sidebar-link");
            link.setAttribute("href","./movie-list.html");
            link.setAttribute("menu-close","");
            link.setAttribute('onclick',`getMovieList("with_genres=${genreId}","${genreName}")`);
            link.textContent= genreName;
            sidebarInner.querySelectorAll(".sidebar-list")[0].appendChild(link);
        }
        const sidebar= document.querySelector("[sidebar]")
        sidebar.appendChild(sidebarInner);
        toggleSidebar(sidebar);
    }
    const toggleSidebar = function(sidebar){
        // Toggle sidebar in only mobile screen
        const sidebarBtn = document.querySelector("[menu-btn]")
        const sidebarTogglers = document.querySelectorAll("[menu-toggler]");
        const overlay = document.querySelector("[overlay]")
        addEventOnElements(sidebarTogglers, "click", function(){
            sidebar.classList.toggle("active");
            sidebarBtn.classList.toggle("active");
            overlay.classList.toggle("active");
        });
    }
}