// Store selected assignment data
const assignmentData = {
    1: {
        title: "Apply UX Principles to a Real Product",
        brief: "In this assignment, you will apply the UX principles covered in this module to analyze an existing product.",
        description: "Choose a product you use regularly and identify at least 3 usability issues. Then propose improvements based on UX best practices.",
        deliverables: [
            "A document or PDF outlining your analysis",
            "At least 3 usability issues identified",
            "Proposed improvements for each issue",
            "Optional: Screenshots or visuals to support your points"
        ],
        resources: [
            { name: "UX Evaluation Checklist", icon: "fa-solid fa-file-lines" },
            { name: "Example Submission", icon: "fa-solid fa-file-pdf" },
            { name: "Download Template", icon: "fa-solid fa-download" }
        ]
    },
    2: {
        title: "Apply UX Principles to a Real Product",
        brief: "Apply the UX principles you've learned to analyze an existing product and identify improvements.",
        description: "This assignment focuses on practical application of UX theory to real-world products.",
        deliverables: [
            "Analysis document",
            "At least 3 usability issues",
            "Improvement proposals"
        ],
        resources: [
            { name: "UX Evaluation Checklist", icon: "fa-solid fa-file-lines" },
            { name: "Example Submission", icon: "fa-solid fa-file-pdf" }
        ]
    },
    3: {
        title: "Apply UX Principles to a Real Product",
        brief: "Completed assignment demonstrating understanding of UX principles.",
        description: "This assignment was successfully completed and submitted.",
        deliverables: [
            "Completed analysis document",
            "Identified 3+ usability issues",
            "Provided improvement suggestions"
        ],
        resources: [
            { name: "UX Evaluation Checklist", icon: "fa-solid fa-file-lines" }
        ]
    }
};

// Sidebar menu active state
document.querySelectorAll('.menu-item:not(.logout)').forEach(item => {
    item.addEventListener('click', function () {
        document.querySelectorAll('.menu-item').forEach(m => m.classList.remove('active'));
        this.classList.add('active');
    });
});

// Assignment selection
function selectAssignment(element) {
    // Remove active styles
    document.querySelectorAll('.assignment-item').forEach(item => {
        item.style.backgroundColor = '';
        item.style.borderLeft = '';
    });

    // Apply active style
    element.style.backgroundColor = '#f0fdf4';
    element.style.borderLeft = '4px solid #10b981';

    // Get ID safely (IMPORTANT)
    const assignmentId = element.dataset.id;

    updateAssignmentBrief(assignmentId);
}

// Update right panel
function updateAssignmentBrief(assignmentId) {
    const data = assignmentData[assignmentId];
    const panel = document.querySelector('.sidebar-panel');

    panel.innerHTML = `
        <div class="panel-section">
            <div class="panel-title"><i class="fa-solid fa-file-lines"></i> Assignment Brief</div>
            <p class="panel-text">${data.brief}</p>
            <p class="panel-text" style="font-size: 12px; color: #999;">${data.description}</p>
        </div>

        <div class="panel-section">
            <div class="panel-title"><i class="fa-solid fa-box"></i> Deliverables</div>
            <ul class="deliverables-list">
                ${data.deliverables.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>

        <div class="panel-section">
            <div class="panel-title"><i class="fa-solid fa-book"></i> Resources</div>
            <ul class="resources-list">
                ${data.resources.map(resource => `
                    <li>
                        <a href="#" class="resource-link" onclick="downloadResource('${resource.name}'); return false;">
                            <span class="resource-icon">
                                <i class="${resource.icon}"></i>
                            </span>
                            ${resource.name}
                        </a>
                    </li>
                `).join('')}
            </ul>
        </div>

        <button class="submit-btn" onclick="submitAssignment(${assignmentId})">
            Submit Assignment
            <span><i class="fa-solid fa-arrow-right"></i></span>
        </button>
    `;
}

// Submit assignment
//function submitAssignment(assignmentId) {
    //const badge = document.querySelectorAll('.assignment-badge')[assignmentId - 1];
    //const status = badge.textContent.trim();

    //if (status.includes('DONE')) {
        //alert('✅ This assignment has already been submitted!');
    //} else {
        //alert('📤 Opening assignment submission form...\n\nYou can now upload your files here.');
    //}
//}

// Download resource
function downloadResource(resourceName) {
    alert(`📥 Downloading: ${resourceName}`);
}

// Search functionality
document.querySelector('.search-box input').addEventListener('input', function (e) {
    const query = e.target.value.toLowerCase();

    document.querySelectorAll('.assignment-item').forEach(item => {
        const title = item.querySelector('.assignment-title').textContent.toLowerCase();
        item.style.display = title.includes(query) ? '' : 'none';
    });
});

// Initialize first assignment
window.addEventListener('load', function () {
    const firstAssignment = document.querySelector('.assignment-item');

    if (firstAssignment) {
        selectAssignment(firstAssignment);
    }
});
const fileInput = document.getElementById("fileInput");
const fileNameDisplay = document.getElementById("fileName");

fileInput.addEventListener("change", function () {
  if (fileInput.files.length > 0) {
    fileNameDisplay.textContent = "Selected: " + fileInput.files[0].name;
  } else {
    fileNameDisplay.textContent = "";
  }
});
// OPEN MODAL
function submitAssignment() {
  document.getElementById("submissionModal").style.display = "block";
}

// CLOSE MODAL
function closeModal() {
  document.getElementById("submissionModal").style.display = "none";
}

// CLICK OUTSIDE CLOSE
window.onclick = function (e) {
  const modal = document.getElementById("submissionModal");
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

// FORM SUBMIT (REAL LOGIC)
document.getElementById("assignmentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const file = document.getElementById("fileInput").files[0];
  const link = document.getElementById("linkInput").value.trim();

  if (!file && !link) {
    showPopup("Error", "Please upload a file or provide a link.");
    return;
  }

  // ✅ RESET FORM
  this.reset();

  // clear file name display
  document.getElementById("fileName").textContent = "";

  closeModal();
  showPopup("Submission Successful!", "Your assignment has been submitted.");
});

// SAVE DRAFT
function saveDraft() {
  const file = document.getElementById("fileInput").files[0];
  const link = document.getElementById("linkInput").value.trim();

  // ❌ If nothing is provided
  if (!file && !link) {
    showPopup("Error", "Please upload a file or provide a link before saving.");
    return;
  }

  // ✅ If valid
  closeModal();
  showPopup("Draft Saved!", "Your progress has been saved.");
}
// POPUP
function showPopup(title, message) {
  document.getElementById("popupTitle").innerText = title;
  document.getElementById("popupMessage").innerText = message;
  document.getElementById("statusPopup").style.display = "block";
}

// CLOSE POPUP
function closePopup() {
  document.getElementById("statusPopup").style.display = "none";
}

// ASSIGNMENT SELECT FIX
function selectAssignment(element) {
  document.querySelectorAll('.assignment-item').forEach(item => {
    item.style.backgroundColor = '';
    item.style.borderLeft = '';
  });

  element.style.backgroundColor = '#f0fdf4';
  element.style.borderLeft = '4px solid #10b981';

  const assignmentId = element.dataset.id;
  updateAssignmentBrief(assignmentId);
}
function toggleSidebar() {
  document.querySelector(".sidebar").classList.toggle("active");
  document.getElementById("overlay").classList.toggle("active");
}

function closeSidebar() {
  document.querySelector(".sidebar").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
}