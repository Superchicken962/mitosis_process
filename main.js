// defining the paragraphs strings for easier use later
const metaphase_info = "In this stage, the chromosomes will line up on the equator of the cell and the center of the chromosomes (centermeres) will attach to the spindle fibres.";
const anaphase_goup = "The centermeres divide and each set of chromosomes move to opposite sides of the cell. \n\nDrag the circle up into the box to move the top chromosomes up";
const anaphase_godown = "now drag the circle from the top to the box in the bottom to make the other chromosomes move to the bottom.";
const anaphase_info = "The centermeres divide and each set of chromosomes move to opposite sides of the cell.";
const telephase_info = "The spindle fibres disappear and the nucleur membrane and nucleolus appear for each new cell. This stage is basically preparing for the cell to be seperated into two. \n\n(Click the cell until it splits!)"
// defining all the objects and stuff
var interphase = document.getElementById("interphase");
var infobox = document.getElementById("info-box");
var infobox2 = document.getElementById("info-box-2");
var interphaseball = document.getElementById("interphase-ball");
var prestartpage = document.getElementById("beforestart");
var prophasepage = document.getElementById("prophase");
var intprobutton = document.getElementById("int-pro-button");
var startbutton = document.getElementById("startbutton");
var prophaseball = document.getElementById("prophase-ball");
var prophaseinfo = document.getElementById("prophase-info-box");
var intballclick = document.getElementById("interphase-ball-clickready");
var changetitle = document.getElementById("changingtitle");
var prometabutton = document.getElementById("pro-meta-button");
var prophasetip = document.getElementById("prophase-tip");
var prometaball = document.getElementById("pro-metaphase-ball");
var prophasetxt = document.getElementById("prophase-txt");
var mitosis_page = document.getElementById("mitosis_page");
var meiosis_page = document.getElementById("meiosis_page");
var mitosis_select_button = document.getElementById("choosemitosis");
var meiosis_select_button = document.getElementById("choosemeiosis");
var prophasetitle = document.getElementById("prophase-title");
var startprtitle = document.getElementById("startprocesstitle");
var anadragup = document.getElementById("anaphase_dragup");
var anadragdown = document.getElementById("anaphase_dragdown");
var ana_drag_up_box = document.getElementById("ana_up_dropbox");
var ana_drag_down_box = document.getElementById("ana_down_dropbox");
var metaanaball_up = document.getElementById("meta-anaphase_up-ball");
var metaanaball_down = document.getElementById("meta-anaphase_down-ball");
var phase = "pro";

function startprocess() {
    if (startprtitle.innerText == "Mitosis Process") {
    prestartpage.style.display = "none";
    infobox.style.display = "block";
    infobox.style.animationPlayState = "running";
    interphaseball.style.animationPlayState = "running";
    interphaseball.style.display = "block";
    startbutton.style.display = "none";
    intprobutton.style.display = "block";
    changingtitle.style.display = "block";
    changetitle.innerHTML = "Interphase";
    intprobutton.disabled = true;
    setTimeout(function() {
        intprobutton.disabled = false;
    }, 3000);
    } else if (startprtitle.innerText == "Meiosis Process") {
        alert("Meiosis N/A (Not enough time to complete)");
    }
}

function phasebutton() {
    if (phase == "pro") {
        prophase();
    } else if (phase == "meta") {
        metaphase();
    } else if (phase == "meta2") {
        metaphase_activate();
    }
}

function prophase() {
    changetitle.innerHTML = "Prophase";
    var iboxtr = document.getElementById("info-box-int-pro-transition");
    var pbox = document.getElementById("prophase-info-box");
    iboxtr.style.display = "block";
    infobox.style.display = "none";
    iboxtr.style.animationPlayState = "running";
    intprobutton.style.animationPlayState = "running";
    setTimeout(function(){
        iboxtr.remove();
        infobox.remove();
        infobox.style.display = "none";
        pbox.style.display = "block";
        pbox.style.animationPlayState = "running";
        intprobutton.style.display = "none";
        interphaseball.style.display = "none";
        intballclick.style.display = "block";
    }, 1250);
}

function clickprophase() {
    interphaseball.remove();
    intballclick.remove();
    prophaseball.style.display = "block";
    setTimeout(function() {
        prophasetip.innerText = "Well Done";
        setTimeout(function() {
            phase = "meta";
            prophasetip.innerText = "Click the button below to move onto Metaphase";
            setTimeout(function() {
                intprobutton.style.display = "block";
                intprobutton.style.opacity = 0;
                intprobutton.style.animationName = "button-fade-in";
                intprobutton.style.animationFillMode = "both";
            }, 1000);
        }, 3000);
    }, 6000);
}

function metaphase() {
    intprobutton.style.animationName = "button-fade-out";
    changetitle.innerText = "Metaphase";
    prophasetxt.style.animationPlayState = "running";
    prophasetitle.style.animationPlayState = "running";
    setTimeout(function() {
        phase = "meta2";
        prophasetxt.innerHTML = metaphase_info;
        prophasetitle.innerHTML = "Metaphase Stage";
        prophasetxt.style.animationName = "pro-meta-txt-fadein";
        prophasetitle.style.animationName = "pro-meta-txt-fadein";
        setTimeout(function() {
            prophasetxt.innerHTML = metaphase_info+"<br><br>Click the button below to start the process";
            intprobutton.style.animationName = "button-fade-in";
        }, 3500);
    }, 2500);
}

function metaphase_activate() {
    intprobutton.style.animationName = "button-fade-out";
    prophaseball.remove();
    prometaball.style.display = "block";
    prophasetxt.innerHTML = metaphase_info;
    setTimeout(function() {
        prophaseinfo.style.animationName = "meta-go-off";
        setTimeout(function() {
            prophasetxt.innerHTML = anaphase_info;
            prophasetitle.innerHTML = "Anaphase Stage";
            prophaseinfo.style.animationName = "ana-go-on";
            changetitle.innerHTML = "Anaphase";
            setTimeout(function() {
                prophasetxt.innerText = anaphase_info;
                ana_drag_up_box.style.display = "block";
                anadragup.style.display = "block";
                prophasetxt.innerText = anaphase_goup; 
            }, 4000);
        }, 2500);
    }, 4500);
}

function selectmitosis() {
    meiosis_page.style.display = "none";
    startbutton.style.display = "block";
    meiosis_select_button.style.color = "black";
    meiosis_select_button.style.backgroundColor = "gold";
    mitosis_select_button.style.color = "white";
    mitosis_select_button.style.backgroundColor = "goldenrod";
    mitosis_page.style.display = "block";
    startprtitle.innerText = "Mitosis Process";
}

function selectmeiosis() {
    mitosis_page.style.display = "none";
    mitosis_select_button.style.color = "black";
    mitosis_select_button.style.backgroundColor = "gold";
    meiosis_select_button.style.color = "white";
    meiosis_select_button.style.backgroundColor = "goldenrod";
    meiosis_page.style.display = "block";
    startprtitle.innerText = "Meiosis Process";
    startbutton.style.display = "none";
    document.getElementById("error1").style.display = "block";
    document.getElementById("error1").innerHTML = "<p><strong>Meiosis N/A (Not enough time to complete)</strong></p>";
}

function ana_drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function ana_drag_down(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function ana_drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    ana_drag_up_box.remove();
    anadragup.remove();
    anaphase_animate_up();
    prophasetxt.innerText = anaphase_info+"\n\nGreat, "+anaphase_godown;
}

function ana_drop_down(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    ana_drag_down_box.remove();
    anadragdown.remove();
    anaphase_animate_down();
    prophasetxt.innerText = metaphase_info+"\n\nNice!";
}

function ana_allow_drag(event) {
    event.preventDefault();
}

function ana_allow_drag_down(event) {
    event.preventDefault();
}

function anaphase_animate_up() {
    metaanaball_up.style.display = "block";
    prometaball.remove();
    setTimeout(function() {
        ana_drag_down_box.style.display = "block";
        anadragdown.style.display = "block";
    }, 2000);
}

function anaphase_animate_down() {
    metaanaball_down.style.display = "block";
    metaanaball_up.remove();
    setTimeout(function() {
        prophaseinfo.style.animationName = "ana-tele-1";
        prophaseinfo.style.animationDuration = "2s";
        setTimeout(function() {
            prophaseinfo.style.animationName = "ana-tele-2";
            prophaseinfo.style.animationDuration = "3s";
            prophaseinfo.style.animationFillMode = "both";
            prophasetxt.innerText = telephase_info;
            prophasetitle.innerText = "Telephase Stage";
            changetitle.innerText = "Telephase";
            metaanaball_down.remove();
            document.getElementById("meta-anaphase_readyclick").style.display = "block";
        }, 2500);
    }, 2000);
}

var tb1 = document.getElementById("telephase-breakball-p1");
var tb2 = document.getElementById("telephase-breakball-p2");
var tb3 = document.getElementById("telephase-breakball-p3");
var tb4 = document.getElementById("telephase-breakball-p4");
var tb5 = document.getElementById("telephase-breakball-p5");
var tb_animate = document.getElementById("telephase-breakball-animate");
var tb_before = document.getElementById("meta-anaphase_readyclick");

function tele_click_1() {
    tb_before.remove();
    tb1.style.display = "block";
}
function tele_click_2() {
    tb1.remove();
    tb2.style.display = "block";
}
function tele_click_3() {
    tb2.remove();
    tb3.style.display = "block";
}
function tele_click_4() {
    tb3.remove();
    tb4.style.display = "block";
}
function tele_click_5() {
    tb4.remove();
    tb5.style.display = "block";
}
function tele_click_final() {
    tb5.remove();
    tb_animate.style.display = "block";
    prophasetxt.style.animationName = "button-fade-out";
    setTimeout(function() {
        prophasetxt.innerText = "Now we have focused in on one of our two daughter cells. This takes us back to interphase, where the cells will replicate again.";
        prophasetxt.style.animationName = "button-fade-in";
        setTimeout(function() {
            prophaseinfo.style.animationName = "box-fade-out";
            setTimeout(function() {
                window.location = window.location;
            }, 3500);
        }, 7000);
    }, 3000);
}