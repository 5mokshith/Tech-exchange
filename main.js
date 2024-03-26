/*document.addEventListener("DOMContentLoaded", function() {
    const main = document.querySelector("main");

    // Sample data (replace with actual data fetched from server)
    const questions = [
        { id: 1, text: "How to learn JavaScript effectively?", author: "John Doe", date: "2024-03-27" },
        { id: 2, text: "What are the best resources for learning Python?", author: "Jane Smith", date: "2024-03-28" },
        // Add more questions as needed
    ];

    // Function to create question cards
    function createQuestionCard(question) {
        const card = document.createElement("div");
        card.classList.add("question-card");

        card.innerHTML = `
            <div class="question-text">${question.text}</div>
            <div class="question-info">Author: ${question.author} | Date: ${question.date}</div>
            <button class="answer-btn" data-question-id="${question.id}">Answer</button>
        `;

        main.appendChild(card);
    }

    // Generate question cards
    questions.forEach(question => {
        createQuestionCard(question);
    });

    // Add event listener for answer buttons
    main.addEventListener("click", function(event) {
        if (event.target.classList.contains("answer-btn")) {
            const questionId = event.target.dataset.questionId;
            // Handle answering the question (e.g., show answer form)
            console.log("Answering question with ID:", questionId);
        }
    });
});
*/


/*document.addEventListener("DOMContentLoaded", function() {
    const main = document.querySelector("main");

    // Sample data (replace with actual data fetched from server)
    const questions = [
        { id: 1, text: "How to learn JavaScript effectively?", author: "John Doe", date: "2024-03-27" },
        { id: 2, text: "What are the best resources for learning Python?", author: "Jane Smith", date: "2024-03-28" },
        // Add more questions as needed
    ];

    // Function to create question cards
    function createQuestionCard(question) {
        const card = document.createElement("div");
        card.classList.add("question-card");

        card.innerHTML = `
            <div class="question-text">${question.text}</div>
            <div class="question-info">Author: ${question.author} | Date: ${question.date}</div>
            <button class="answer-btn" data-question-id="${question.id}">Answer</button>
        `;

        // Add event listener to answer button
        const answerBtn = card.querySelector(".answer-btn");
        answerBtn.addEventListener("click", function() {
            answerQuestion(question.id);
        });

        main.appendChild(card);
    }

    // Generate question cards
    questions.forEach(question => {
        createQuestionCard(question);
    });

    // Function to handle answering a question
    function answerQuestion(questionId) {
        // Find the closest parent question card associated with the question ID
        const questionCard = document.querySelector(`.question-card[data-question-id="${questionId}"]`);
        
        // Check if the question card is found
        if (questionCard) {
            // Create an answer form dynamically
            const answerForm = document.createElement("form");
            answerForm.classList.add("answer-form");
            answerForm.innerHTML = `
                <textarea id="answer" name="answer" rows="4" required></textarea>
                <button type="submit">Submit Answer</button>
            `;
    
            // Event listener for form submission
            answerForm.addEventListener("submit", function(event) {
                event.preventDefault(); // Prevent default form submission
    
                const answerInput = answerForm.querySelector("#answer").value;
                // Handle the submitted answer (e.g., send it to a server, update UI)
                console.log("Answer submitted for question ID:", questionId);
    
                // Optional: Clear the answer form after submission
                answerForm.reset();
            });
    
            // Append the answer form to the question card
            questionCard.appendChild(answerForm);
        } else {
            console.error(`Question card with ID ${questionId} not found.`);
        }
    }
});*/









document.addEventListener("DOMContentLoaded", function() {
    const main = document.querySelector("main");

    const questions = [
        { id: 1, text: "How to learn JavaScript effectively?", author: "John Doe", date: "2024-03-27" },
        { id: 2, text: "What are the best resources for learning Python?", author: "Jane Smith", date: "2024-03-28" },
    ];

    function createQuestionCard(question) {
        const card = document.createElement("div");
        card.classList.add("question-card");
        card.dataset.questionId = question.id;
        card.innerHTML = `
            <div class="question-text">${question.text}</div>
            <div class="question-info">Author: ${question.author} | Date: ${question.date}</div>
            <button class="answer-btn">Answer</button>
        `;
        main.appendChild(card);
    }

    questions.forEach(createQuestionCard);

    function answerQuestion(questionId) {
        const questionCard = document.querySelector(`.question-card[data-question-id="${questionId}"]`);

        if (questionCard) {
            const answerForm = document.createElement("form");
            answerForm.classList.add("answer-form");
            answerForm.innerHTML = `
                <textarea id="answer" name="answer" rows="4" required></textarea>
                <button type="submit">Submit Answer</button>
            `;

            answerForm.addEventListener("submit", function(event) {
                event.preventDefault();
                const answerInput = answerForm.querySelector("#answer").value;
                console.log("Answer submitted for question ID:", questionId);
                answerForm.reset();
            });

            questionCard.appendChild(answerForm);
        } else {
            console.error(`Question card with ID ${questionId} not found.`);
        }
    }

    main.addEventListener("click", function(event) {
        if (event.target.classList.contains("answer-btn")) {
            const questionId = event.target.closest(".question-card").dataset.questionId;
            answerQuestion(questionId);
        }
    });
});



let currentPage = window.location.pathname;

if (currentPage.includes("main.html") || currentPage === "/C:/Users/dell/Desktop/Tech%20exchange/main.html") {
    let questionBtn = document.getElementById("mAns");
    questionBtn.style.backgroundColor = "rgb(69, 236, 69)";
};


