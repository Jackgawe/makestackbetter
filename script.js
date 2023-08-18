const codingLanguages = [
  "Python", "CSS", "HTML", 
  "C", "C#", "C++", "C+", 
  "Java", "JavaScript"
];

const typingSpeed = 100;   // Adjust the typing speed (milliseconds per character)
const deletingSpeed = 50;  // Adjust the deleting speed (milliseconds per character)

function typeAndDeleteLanguages() {
  const languagesElement = document.getElementById("coding-languages");
  let currentLanguageIndex = 0;
  let currentLanguage = "";
  let isTyping = true;

  function typeText() {
    if (isTyping) {
      if (currentLanguage === codingLanguages[currentLanguageIndex]) {
        isTyping = false;
        setTimeout(deleteText, 1000); // Wait for 1 second before starting to delete
        return;
      }
      currentLanguage += codingLanguages[currentLanguageIndex][currentLanguage.length];
      languagesElement.textContent = `I code in: ${currentLanguage}`;
      setTimeout(typeText, typingSpeed);
    }
  }

  function deleteText() {
    if (!isTyping) {
      if (currentLanguage === "") {
        currentLanguageIndex = (currentLanguageIndex + 1) % codingLanguages.length;
        isTyping = true;
        setTimeout(typeText, 500); // Wait for 0.5 seconds before typing the next language
        return;
      }
      currentLanguage = currentLanguage.slice(0, -1);
      languagesElement.textContent = `I code in: ${currentLanguage}`;
      setTimeout(deleteText, deletingSpeed);
    }
  }

  typeText();
}

typeAndDeleteLanguages();

