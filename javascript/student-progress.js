

    const msgStudent = document.getElementById('msgStudent');
    const msgPop = document.getElementById('msgPop');
    const msgPopCancel = document.getElementById('msgPopCancel');
    const exportReport = document.getElementById('exportReport');
    const exportMsg = document.getElementById('exportMsg');
    const exportMsgCancel = document.getElementById('exportMsgCancel');
    const notes = document.getElementById('instructorNote');

    

// this is for export report
function exportReportUpdate() {

    exportReport.addEventListener('click', () => {
        exportMsg.classList.remove('hidden');
        exportMsgCancel.style.cursor = 'pointer';
    });

    exportMsgCancel.addEventListener('click', () => {
        exportMsg.classList.add('hidden');
    });
}
exportReportUpdate();


// this is for student message
function msgStudentUpdate() {

msgStudent.addEventListener('click', () => {


    if (notes.value === "" ) {
        notes.style.border = "1px solid red";
        notes.style.outline = "none";
        return;
    }
    else {
        notes.style.border = "1px solid green"
        msgPop.classList.remove('hidden')
        msgPopCancel.style.cursor = 'pointer';
    }

msgPopCancel.addEventListener('click', () => {
    msgPop.classList.add('hidden');
    notes.style.border = "1px solid #a6a6a6"
    notes.value = "";
});

});

}
msgStudentUpdate();




