const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
const panelContainer = document.querySelector(".panels");
const modalBtn = document.getElementById("modal-btn");
const menu = document.getElementById("menu");
const btnTopline = document.querySelector(".top-line");
const btnBottomline = document.querySelector(".bottom-line");

const showPanelContent = (e) => {
  //remove all bottom border on all tabs
  tabs.forEach((tab) => {
    tab.children[0].classList.remove("border-b-4", "border-softRed");
  });

  //add bottom border on clicked tab
  e.target.classList.add("border-b-4", "border-softRed");

  //get data for tab that being clicked
  const selectedTab = e.target.getAttribute("data-target");

  //hide all
  panels.forEach((panel) => {
    panel.classList.add("hidden");
  });

  const activePanel = panelContainer.getElementsByClassName(selectedTab)[0];
  activePanel.classList.remove("hidden");
};

const modalHandler = () => {
  modalBtn.classList.toggle("open");
  menu.classList.toggle("hidden");

  if (!menu.classList.contains("hidden")) {
    btnTopline.style.backgroundColor = "#fff";
    btnBottomline.style.backgroundColor = "#fff";
    modalBtn.classList.toggle("fixed");
    modalBtn.classList.toggle("absolute");
  } else {
    btnTopline.style.backgroundColor = "#333";
    btnBottomline.style.backgroundColor = "#333";
    modalBtn.classList.toggle("fixed");
    modalBtn.classList.toggle("absolute");
  }
};

tabs.forEach((tab) => tab.addEventListener("click", showPanelContent));
modalBtn.addEventListener("click", modalHandler);
