# 🧠 General Knowledge Quiz – Interactive Web Game

This project is a responsive, JavaScript-powered interactive quiz focused on general knowledge. It aims to provide users with a fun, educational experience while testing their memory and trivia skills. Players receive instant feedback and can track their score as they progress.

---

## 💡 Purpose & Value

The site is built for curious minds and trivia lovers of all ages. It provides value by:

- Offering a fun and accessible brain-training experience
- Presenting multiple choice questions across a range of categories
- Using JavaScript to track and display the user's score
- Giving immediate feedback on whether the answer is right or wrong
- Promoting a responsive and accessible experience across all devices

---

## 🌐 Deployment Instructions

- **Live Website:** _TBC_
- **GitHub Repository:** _TBC_

### 🔧 Running the site locally:
1. Clone the repository or download it as a ZIP.
2. Extract the files if downloaded.
3. Open `index.html` in your browser.
4. No build tools or installations required — it's a static HTML/CSS/JS project.

---

## 🧩 User Stories

### 🧑‍🎓 User Story: Question & Answer Flow

**As a user**, I want to be shown one question at a time with clear answer options, not too indistinctive from several quiz shows.

**Acceptance Criteria:**
- Only one question displays at a time.
- Answer choices are easy to click and readable.

**Tasks:**
- Create a data array of question objects.
- Use JavaScript to update the DOM with each question.
- Add event listeners to buttons for answer selection.

---

### 🧠 User Story: Score Tracking

**As a user**, I want to see how many questions I've answered correctly, so I can monitor my progress and aim to beat my own score.

**Acceptance Criteria:**
- A score is displayed and updates after each question.
- The final score is shown at the end of the quiz.

**Tasks:**
- Use a variable to track score.
- Update score in real-time and display it in the UI.
- Show a message at the end with total points earned.

---

### 🎨 User Story: Visual Feedback & Engagement

**As a user**, I want to receive instant feedback when I answer a question, so I know if I was correct and stay engaged.

**Acceptance Criteria:**
- Correct/incorrect answers are colour-coded.

**Tasks:**
- Use JavaScript to compare selected answer to correct answer.
- Apply CSS class for feedback (e.g., green/red highlight).

---

## 🖼️ Wireframes _(WIP)_

<img width="299" height="269" alt="homepage" src="https://github.com/user-attachments/assets/ac74266f-3c4d-4b2e-9504-8bfcc01d9615" />
<img width="1024" height="1536" alt="question page" src="https://github.com/user-attachments/assets/e82ab127-7721-4a77-86a4-6be4d902a4e1" />
<img width="1024" height="1024" alt="results page" src="https://github.com/user-attachments/assets/7b151996-4030-4a83-b33c-6d9bab96c097" />


---

## 🧭 Navigation Structure _(WIP)_

The site will consist of a single main page with:

### 🏠 **Quiz Interface** (`index.html`)
- Welcome/start screen
- Question & answer section
- Live score display
- End-of-quiz summary

---

## 🔗 External Resources _(WIP)_
- Sound effects (e.g., [Zapsplat](https://www.zapsplat.com))
- Google Fonts or icons
- JavaScript references

---

## ✅ Testing _(WIP)_

Testing will be conducted across multiple devices and browsers to verify:

- Question and answer functionality
- Score calculation and display
- Colour-coded feedback
- Button interactions
- Layout responsiveness
- Accessibility for keyboard users

---

## 📱 Responsiveness _(WIP)_

Responsiveness will be tested using:

- Chrome DevTools (mobile/tablet/desktop modes)
- Manual testing on phone and tablet
- Relative units (%, rem) and media queries

---

## 🧪 Automated Testing _(WIP)_

<!-- Placeholder – if using Lighthouse or other tools -->

---

## 🧪 W3C Validation

### HTML Validation _(WIP)_

### CSS Validation _(WIP)_

---

## 📋 Test Summary Documentation _(WIP)_

| Feature                          | Tested Device/Browser       | Status      |
|----------------------------------|-----------------------------|-------------|
| Quiz loads & starts              |                             |             |
| Questions update dynamically     |                             |             |
| Score tracks correctly           |                             |             |
| Correct/incorrect feedback       |                             |             |
| End screen displays total score  |                             |             |
| Colour feedback is visible       |                             |             |
| Responsive on all screen sizes   |                             |             |
| HTML5 validity (W3C)             |                             |             |
| CSS3 validity (W3C)              |                             |             |

---
