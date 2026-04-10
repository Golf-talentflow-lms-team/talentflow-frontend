 function format(command) {
      document.execCommand(command, false, null);
    }

    function addLink() {
      const url = prompt("Enter the URL:");
      if (url) document.execCommand("createLink", false, url);
    }

    document.getElementById("fileInput").addEventListener("change", function () {
      const fileName = this.files[0]?.name;
      document.getElementById("fileName").textContent = fileName
        ? `Selected: ${fileName}`
        : "";
    });

    function showToast(message) {
      const toast = document.getElementById("toast");
      document.getElementById("toastMsg").textContent = message;
      toast.style.display = "block";
      setTimeout(() => {
        toast.style.display = "none";
      }, 4000);
    }

    function saveDraft() {
      showToast("Saved as draft.");
    }

    function preview() {
      const title = document.getElementById("title").value;
      const instructions = document.getElementById("editor").innerHTML;
      const newWindow = window.open("", "_blank");
      newWindow.document.write(`
        <h1>${title}</h1>
        <div>${instructions}</div>
      `);
    }

    function publish() {
      const title = document.getElementById("title").value;
      if (!title) {
        alert("Please enter an assignment title.");
        return;
      }
      showToast("Understanding UX Foundation");
    }