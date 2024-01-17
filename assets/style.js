// Initialize font properties
const fontname = "Barlow";
const fontweights = [300, 400, 500]


// Color properties
const basecolor = "#444444";
const accentcolor = "#000000";
const highlightcolor = "#45818e";

// const basecolor = "#888";
// const accentcolor = "#222";
// const highlight = "#111";

// Body properties
const bodyfontweight = 300;
const headingfontweight = 500;
const titlefontweight = 450;
const bodyfontsize = "12pt";
const smalltextfontsize = "10pt";
const backgroundcolor = "#fff";

// Link properties
const acolor = highlightcolor;
const afontweight = 400;
const adecoration = "none";
// const ahovercolor = accentcolor;
// const ahoverduration = "0.3s";
// const ahoverdecoration = "none"; //none, underline, overline, dotted, color (https://www.w3schools.com/cssref/pr_text_text-decoration.asp)

// Menu properties
const menucolor = basecolor;
const menufontsize = "14pt";
const menudecoration = "none";
// const menuhover = accentcolor;
// const menuhoverduration = "0.3s";
// const menuhoverdecoration = "none"; //none, underline, overline, dotted, color (https://www.w3schools.com/cssref/pr_text_text-decoration.asp)

// Header properties
const namecolor = accentcolor;
const namefontsize = "23pt";
const namefontname = "Oswald";
const nametext = "uppercase";
const nameweight = headerfontweight;
const headercolor = accentcolor;
const headerfontsize = "18pt";
const headerdecoration = "none";
const headertext = "uppercase";
const headerweight = headerfontweight;
const subheadercolor = accentcolor;
const subheaderfontsize = "14pt";
const subheadertext = "uppercase";
const subheaderweight = headerfontweight;



// Publication properties
const ptitlecolor = accentcolor;
const ptitlefontsize = bodyfontsize;
const ptitleweight = titlefontweight;
const ptitledecoration = "none";
const ptitlestyle = "normal";

const authorcolor = accentcolor;
const authorweight = bodyfontweight;
const authordecoration = "none";
const authorstyle = "normal";

const selfcolor = highlightcolor;
const selfweight = bodyfontweight;
const selfdecoration = "none";
const selfstyle = "normal";

const tagcolor = accentcolor;
const tagweight = bodyfontweight;
const tagdecoration = "none";
const tagstyle = "normal";

const insttitlecolor = highlightcolor;
const insttitlesize = "12px";
const instyearcolor = accentcolor;
const instyearsize = "11px";

//     .institution {
//             font - size: 12px;
//             color: #222;
//         }
//   .years {
//             font - size: 11px;
//             color: #888;
//         }

// Works for sans serif, change otherwise
$("head").append("<link href='https://fonts.googleapis.com/css2?family=" + fontname + ":wght@" + fontweights.join(';') + "&display=swap' rel='stylesheet' type='text/css'>");
$("body").css("font-family", fontname);
$("body").css("font-weight", bodyfontweight);

$("body").css("color", basecolor);
$("body").css("font-size", bodyfontsize);
$("body").css("background-color", backgroundcolor);

$("a").css("color", acolor);
$("a").css("font-weight", afontweight);
$("a").css("text-decoration", adecoration);

$(".menulink").css("color", menucolor);
$(".menulink").css("font-size", menufontsize);
$(".menulink").css("text-decoration", menudecoration);

$(".header").css("color", headercolor);
$(".header").css("font-size", headerfontsize);
$(".header").css("text-decoration", headerdecoration);
$(".header").css("text-transform", headertext);
$(".header").css("font-weight", headerweight);
$(".subheader").css("color", subheadercolor);
$(".subheader").css("font-size", subheaderfontsize);
$(".subheader").css("text-transform", subheadertext);
$(".subheader").css("font-weight", subheaderweight);
$(".name").css("color", namecolor);
$(".name").css("font-size", namefontsize);
$(".name").css("font-family", namefontname);
$(".name").css("text-transform", nametext);
$(".name").css("font-weight", nameweight);

$(".smalltext").css("font-size", smalltextfontsize);

$(".papertitle").css("color", ptitlecolor);
$(".papertitle").css("font-size", ptitlefontsize);
$(".papertitle").css("font-weight", ptitleweight);
$(".papertitle").css("text-decoration", ptitledecoration);
$(".papertitle").css("font-style", ptitlestyle);

$(".thisauthor").css("color", selfcolor);
$(".thisauthor").css("font-weight", selfweight);
$(".thisauthor").css("text-decoration", selfdecoration);
$(".thisauthor").css("font-style", selfstyle);

$(".institution").css("color", insttitlecolor);
$(".institution").css("font-size", insttitlesize);
$(".years").css("color", instyearcolor);
$(".years").css("font-size", instyearsize);
