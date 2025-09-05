
        const form = document.getElementById('teacherForm');
        const inputForm = document.getElementById('inputForm');
        const teacherCard = document.getElementById('teacherCard');
        const boardCard = document.getElementById('boardCard');
        const displayName = document.getElementById('displayName');
        const displaySubject = document.getElementById('displaySubject');
        const boardName = document.getElementById('boardName');

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const teacherName = document.getElementById('teacherName').value;
            const subject = document.getElementById('subject').value;

            displayName.textContent = teacherName;
            displaySubject.textContent = `Subject: ${subject}`;
            boardName.textContent = teacherName;

            inputForm.classList.add('hidden');

            setTimeout(() => {
                teacherCard.classList.add('show');
                setTimeout(() => {
                    teacherCard.classList.remove('show');
                    boardCard.classList.add('show');
                }, 3000);
            }, 300);
        });

        function goBack() {
            teacherCard.classList.remove('show');
            boardCard.classList.remove('show');
            inputForm.classList.remove('hidden');
            form.reset();
        }
    