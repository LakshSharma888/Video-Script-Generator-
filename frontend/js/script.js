document.addEventListener('DOMContentLoaded', function() {
    const promptInput = document.getElementById('promptInput');
    const closeBtn = document.querySelector('.close-btn');
    const notification = document.querySelector('.notification');

    // Auto-resize textarea
    promptInput.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
    });

    // Close notification
    closeBtn.addEventListener('click', function() {
        notification.style.display = 'none';
    });

    // Handle quick action buttons
    document.querySelectorAll('.action-btn').forEach(button => {
        button.addEventListener('click', function() {
            const action = this.textContent.trim();
            promptInput.value = `Help me ${action.toLowerCase()}`;
            promptInput.focus();
        });
    });

    // Handle form submission
    async function generateScript(prompt) {
        try {
            const response = await fetch('/api/generate/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt })
            });

            if (!response.ok) {
                throw new Error('API request failed');
            }

            const data = await response.json();
            // Handle the response data here
            console.log(data);

        } catch (error) {
            console.error('Error:', error);
        }
    }

    // Listen for Enter key (with Shift for new line)
    promptInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            const prompt = this.value.trim();
            if (prompt) {
                generateScript(prompt);
                this.value = '';
            }
        }
    });
});