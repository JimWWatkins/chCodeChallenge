# SnatchBot Automation
  ## **To run:**  
    1. Clone project from this reprository  
    2. In terminal or IDE, CD to project  
    3. Run 'npm install' to install dependencies  
    4. Run tests by 'npm run wdio' 
  ## **Tech Stack:**
    1. Webdriver.io
    2. Typescript
    3. Cucumber

  ## Bug 1
   **Title:** SnatchBot does not respond appropriately to conversational questions.
  
   **Repro:**  
    1. Go to https://snatchbot.me/.  
    2. Wait for chatbot to appear in bottom right corner.  
    3. Click on chatbot.  
    4. Reply to chatbot prompt by entering name into text field.  
    5. Confirm name by clicking 'Yes'.  
    6. Enter "How are you today?" into text field.  
    
   **Expected:**  
      * Snatchbot responds: "I'm doing well, thank you for asking Jim" and then resumes it's prompts.  
    
   **Actual:**  
      * Snatchbot replies: "So, Bob you'd like me to guide you in making your own chatbot.👩‍🔧👨‍🔧Right?"  
      * Response has no relevance to asked question, not has user inquired about making own chatbot.  
    
   **Environment:**  
      * Chrome Version 110.0.5481.77  
      * macOS Ventura 13.1  
      * Apple M1 Max chip  
      
  ## Bug 2
   **Title:** SnatchBot does not respond appropriately to conversational questions.
  
   **Repro:**  
    1. Go to https://snatchbot.me/.  
    2. Wait for chatbot to appear in bottom right corner.  
    3. Click on chatbot.  
    4. Reply to chatbot prompt by entering name into text field.  
    5. Confirm name by clicking 'Yes'.  
    6. Click microphone next to text field.  
    7. Speak the following, “What umm is the cost umm of snatchbot?”  
    
   **Expected:**  
      * Snatchbot responds: "So, Jim, you'd like me to tell you about our costs. 💸Right?" and then resumes it's prompts.  
    
   **Actual:**  
      * Voice recognition software interprets inquiry as "what album is the costume was that spot?"
      * Snatchbot replies: "I'm sorry, Bob, I didn't get that. Let me tell you again what I can do for you."  
      * Snatchbot struggles with filler language common in conversation.  
    
   **Environment:**  
      * Chrome Version 110.0.5481.77  
      * macOS Ventura 13.1  
      * Apple M1 Max chip 
      
  ## Bug 3
   **Title:** SnatchBot does not respond appropriately to conversational questions.
  
   **Repro:**  
    1. Go to https://snatchbot.me/.  
    2. Wait for chatbot to appear in bottom right corner.  
    3. Click on chatbot.  
    4. Reply to chatbot prompt by entering name into text field.  
    5. Confirm name by clicking 'Yes'.  
    6. Into text field enter "Are you a chatbot?”  
    
   **Expected:**  
      * Snatchbot responds: "Yes I am Jim, can I tell you how you could create a chatbot like me?" and then resumes it's prompts.  
    
   **Actual:** 
      * Snatchbot replies: "I'm sorry, Bob, I didn't get that. Let me tell you again what I can do for you."  
      * Seems logical that a chatbot should know it's a chatbot and respond accordingly.  
    
   **Environment:**  
      * Chrome Version 110.0.5481.77  
      * macOS Ventura 13.1  
      * Apple M1 Max chip  
      
  ## Further SnatchBot Testing
    1. Language testing  
      - Ensure SnatchBot's voice processing can understand other languages
      - Can SnatchBot appropriately translate other languages typed into text field
      - Are the translations from English to other languages accurate  
      
    2. Accessibility testing
      - Can Snatchbot be used entirely by voice command (without the aid of a keyboard, or mouse). 
      - Is Snatchbot using appropriate contrast for text for those with low visibility.
      - Can Snatch be used entirely by a keyboard only for those with sight impairments and using a product such as VoiceOver.
      
  ## Additional test suites
    1. Functional  
      - Testing each one of the remaining prompts and ensure appropriate responses are returned
      - Test links on Snatchbot modal (Slack, Facebook, Email, Etc)
      
    2. Non-functional
      - Accessibility testing (is Snatchbot accessible to users with limitations)   
      - Performance testing (is Snatchbot performant under all circumstances)
      - Load testing (can Snatchbot handle users to scale)
      
  ## CI/CD Recommendations
    1. I would recommend that the test suites for Snatchbot were integrated into the CI/CD pipeline in which every PR that was submitted   
    would kick off a test build to ensure no regressions were triggered.
    2. Make it so a clean run is necessary to merge any PR into production code.
