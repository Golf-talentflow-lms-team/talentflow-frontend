document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.getElementById('submitGradeBtn');
    const toast = document.getElementById('successToast');
    const closeBtn = document.getElementById('closeToastBtn');

    if (submitBtn && toast && closeBtn) {
        submitBtn.addEventListener('click', () => {
            toast.classList.remove('hidden');
        });
        closeBtn.addEventListener('click', () => {
            toast.classList.add('hidden');
        });
    }

    const studentItems = Array.from(document.querySelectorAll('.student-item'));
    const detailStudentName = document.getElementById('detailStudentName');
    const gradingPanelHeader = document.getElementById('gradingPanelHeader');
    const prevStudentName = document.getElementById('prevStudentName');
    const nextStudentName = document.getElementById('nextStudentName');
    const prevStudentLink = document.getElementById('prevStudentLink');
    const nextStudentLink = document.getElementById('nextStudentLink');

    if (studentItems.length === 0) return;

    let currentIndex = studentItems.findIndex(item => item.classList.contains('active'));
    if (currentIndex === -1) currentIndex = 0;

    function getFirstName(fullName) {
        const parts = fullName.trim().split(' ');
        if (parts.length > 2) return parts[1];
        return parts[0];
    }

    function updateUI(index) {
        studentItems.forEach(item => item.classList.remove('active'));
        const currentItem = studentItems[index];
        currentItem.classList.add('active');

        const fullName = currentItem.querySelector('.student-name').textContent.trim();
        const firstName = getFirstName(fullName);

        if (detailStudentName) detailStudentName.textContent = fullName;
        if (gradingPanelHeader) gradingPanelHeader.textContent = `Grading Panel (${firstName})`;

        const prevIndex = (index - 1 + studentItems.length) % studentItems.length;
        const prevFullName = studentItems[prevIndex].querySelector('.student-name').textContent.trim();
        if (prevStudentName) prevStudentName.textContent = prevFullName;

        const nextIndex = (index + 1) % studentItems.length;
        const nextFullName = studentItems[nextIndex].querySelector('.student-name').textContent.trim();
        if (nextStudentName) nextStudentName.textContent = nextFullName;
    }

    if (prevStudentLink) {
        prevStudentLink.addEventListener('click', (e) => {
            e.preventDefault();
            currentIndex = (currentIndex - 1 + studentItems.length) % studentItems.length;
            updateUI(currentIndex);
        });
    }

    if (nextStudentLink) {
        nextStudentLink.addEventListener('click', (e) => {
            e.preventDefault();
            currentIndex = (currentIndex + 1) % studentItems.length;
            updateUI(currentIndex);
        });
    }

    studentItems.forEach((item, idx) => {
        item.addEventListener('click', () => {
            currentIndex = idx;
            updateUI(currentIndex);
        });
    });

    updateUI(currentIndex);
});
