document.addEventListener("DOMContentLoaded", () => {

  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {

      // switch active tab
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      // switch content
      contents.forEach(c => c.classList.remove("active"));

      const target = tab.dataset.tab;
      const activeContent = document.getElementById(target);

      if (activeContent) {
        activeContent.classList.add("active");
      }
    });
  });

});