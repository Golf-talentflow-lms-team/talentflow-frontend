function toggleExpandMode() {
    const sidebar = document.getElementById('sidebar');
    const mainContainer = document.getElementById('main-container');
    const lessonLayout = document.getElementById('lesson-layout');
    
    if (sidebar && mainContainer && lessonLayout) {
        sidebar.classList.toggle('collapsed');
        mainContainer.classList.toggle('expanded-main');
        lessonLayout.classList.toggle('expanded');
    }
}

function toggleNotes() {
    const panel = document.getElementById('notes-panel');
    if (panel) {
        panel.classList.toggle('active');
    }
}

function handleDiscussionKeyPress(event) {
    if (event.key === 'Enter') {
        postDiscussion();
    }
}

function handleDiscussionInput() {
    const input = document.getElementById('discussion-input');
    const sendBtn = document.getElementById('send-discussion-btn');
    if (input && sendBtn) {
        if (input.value.trim() !== '') {
            sendBtn.classList.add('active-submit');
        } else {
            sendBtn.classList.remove('active-submit');
        }
    }
}

function postDiscussion() {
    const input = document.getElementById('discussion-input');
    const text = input.value.trim();
    if (text === "") return;

    const emptyState = document.getElementById('discussion-empty');
    const discussionList = document.getElementById('discussion-list');

    // Hide empty state and show list
    if (emptyState && emptyState.style.display !== 'none') {
        emptyState.style.display = 'none';
        discussionList.style.display = 'flex';
    }

    // Create new comment element
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('discussion-comment');

    const userInfo = {
        name: 'Njoku Fortunatus',
        id: '@CAR123456',
        pic: '/assests/images/trainer.jpg'
    };

    commentDiv.innerHTML = `
        <img src="${userInfo.pic}" alt="User Pic" onerror="this.src='https://via.placeholder.com/35x35/05AB5B/ffffff?text=NF'">
        <div class="comment-content">
            <div class="comment-header">
                <span class="comment-name">${userInfo.name}</span>
                <span class="comment-id">${userInfo.id}</span>
            </div>
            <p class="comment-text">${text}</p>
        </div>
    `;

    discussionList.appendChild(commentDiv);
    
    // Clear input
    input.value = '';
    const sendBtn = document.getElementById('send-discussion-btn');
    if (sendBtn) {
        sendBtn.classList.remove('active-submit');
    }
    
    // Scroll to bottom
    discussionList.scrollTop = discussionList.scrollHeight;
}

document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('lesson-video');
    const overlay = document.getElementById('video-overlay');

    if (video && overlay) {
        // Show overlay when video ends
        video.addEventListener('ended', () => {
            overlay.style.display = 'flex';
        });
    }
});

function showCompletionOverlay() {
    const overlay = document.getElementById('video-overlay');
    if (overlay) {
        overlay.style.display = 'flex';
    }
}

function restartVideo() {
    const video = document.getElementById('lesson-video');
    const overlay = document.getElementById('video-overlay');
    
    if (video && overlay) {
        overlay.style.display = 'none';
        video.currentTime = 0;
        video.play();
    }
}

function startNextLesson() {
    const overlay = document.getElementById('video-overlay');
    if (overlay) {
        overlay.style.display = 'none';
    }
    alert("Navigating to User Research Basics...");
}
