const textEl = document.getElementById('text');
const responseButtonsEl = document.getElementById('option-buttons');


function start() {
    showQuestions(1);
}

function showQuestions(questionsIndex) {
    const question = questions.find(question => question.id === questionsIndex);
    textEl.innerText = question.text;
    while (responseButtonsEl.firstChild) {
        responseButtonsEl.removeChild(responseButtonsEl.firstChild);
    }
    question.responses.forEach(response => {
        if (showResponse(response)) {
            const button = document.createElement('button');
            button.innerText = response.text;
            button.classList.add('btn');
            button.addEventListener("click", () => selectResponse(response))
            responseButtonsEl.appendChild(button);
        }
    })
}

function showResponse(response) {
    return true;
}

function selectResponse(response) {
    const nextQuestionId = response.nextQuestion;
    showQuestions(nextQuestionId);

}

const questions = [
    {
        id: 1,
        text: "Did your child have COVID in the last 90 days?",
        responses: [
            {
                text: "Yes",
                nextQuestion: 2
            },
            {
                text: "No",
                nextQuestion: 13
            }
        ]
    },
    {
        id: 2,
        text: "Does the child have a lab-confirmed positive PCR result?",
        responses: [
            {
                text: "Yes",
                nextQuestion: 3
            },
            {
                text: "No",
                nextQuestion: 8
            }
        ]
    },
    {
        id: 3,
        text: "Is your child having any of the following symptoms: Fever of 100.4 or higher, sore throat, cough, diarrhea, vomiting, new onset of severe headache (especially with fever), or new loss of taste or smell.",
        responses: [
            {
                text: "Yes",
                nextQuestion: 4
            },
            {
                text: "No",
                nextQuestion: 5
            }
        ]
    },
    {
        id: 4,
        text: "PCR test on the day that their house is closed (Day 1 or 2). Your child can return to school once their PCR returns negative. Test and stay on Day 3 and 5 at Aya. Continue to wear a mask indoors."
    },
    {
        id: 5,
        text: "Is your child able to mask consistently and correctly?",
        responses: [
            {
                text: "Yes",
                nextQuestion: 6
            },
            {
                text: "No",
                nextQuestion: 7
            }
        ]
    },
    {
        id: 6,
        text: "No testing required. Your child can return to school the day that their house reopens. Test and stay on Day 3 and 5 at Aya. Continue to wear a mask indoors."
    },
    {
        id: 7,
        text: "10 day quarantine. Return on Day 11."
    },
    {
        id: 8,
        text: "Is your child vaccinated against COVID?",
        responses: [
            {
                text: "Yes",
                nextQuestion: 9
            },
            {
                text: "No",
                nextQuestion: 11
            }
        ]
    },
    {
        id: 9,
        text: "Was their second dose or booster dose within the last 6 months?",
        responses: [
            {
                text: "Yes",
                nextQuestion: 10
            },
            {
                text: "No",
                nextQuestion: 11
            }
        ]
    },
    {
        id: 10,
        text: "Is your child having any of the following symptoms: Fever of 100.4 or higher, sore throat, cough, diarrhea, vomiting, new onset of severe headache (especially with fever), or new loss of taste or smell.",
        responses: [
            {
                text: "Yes",
                nextQuestion: 4
            },
            {
                text: "No",
                nextQuestion: 5
            }
        ]
    },
    {
        id: 11,
        text: "Is your child having any of the following symptoms: Fever of 100.4 or higher, sore throat, cough, diarrhea, vomiting, new onset of severe headache (especially with fever), or new loss of taste or smell.",
        responses: [
            {
                text: "Yes",
                nextQuestion: 4
            },
            {
                text: "No",
                nextQuestion: 12
            }
        ]
    },
    {
        id: 12,
        text: "Is your child able to mask consistently and correctly?",
        responses: [
            {
                text: "Yes",
                nextQuestion: 4
            },
            {
                text: "No",
                nextQuestion: 7
            }
        ]
    },
    {
        id: 13,
        text: "Was your child exposed to someone from their house who tested positive for Covid?",
        responses: [
            {
                text: "Yes",
                nextQuestion: 8
            },
            {
                text: "No",
                nextQuestion: 14
            }
        ]
    },
    {
        id: 14,
        text: "Bring your child to school!"
    }
    
    
]

start();