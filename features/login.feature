Feature: The SnatchBot chat bot

  Scenario: As a user I can go to snatchbot.me and open the bot
    Given I am on the following url https://snatchbot.me/
    When I click on the SnatchBot chat bot
    Then I am welcomed by the chatbot

  Scenario Outline: As a user I want to see the conversation options the chatbot presents me
    Given I am on the following url https://snatchbot.me/
    And I click on the SnatchBot chat bot
    When I enter my name "Frank"
    Then the chat bot's response contains conversation option <options>

    Examples:
      | options           |
      | Explain chatbots  |
      | Make a chatbot    |
      | Use cases         |
      | Features          |
      | Contact SnatchBot |
      | Costs             |

  Scenario: As a user I want to be able to learn about costs to create a few chatbots
    Given I am on the following url https://snatchbot.me/
    And I click on the SnatchBot chat bot
    And I enter my name "John"
    When I choose chat option "Costs"
    And I choose chat option "A few"
    And I choose chat option "Approximately?"
    Then the approximate cost is "$3,000" with recurring fees of "$30" per month

  Scenario: As a user I want to be able to learn in detail about chatbot features
    Given I am on the following url https://snatchbot.me/
    And I click on the SnatchBot chat bot
    And I enter my name "John"
    When I choose chat option "Features"
    And I choose chat option "Absolutely"
    And I choose chat option "Great!"
    And I choose chat option "Go!"
    Then the chatbot lists feature "Natural Language Processing or just NLP"
    And I choose chat option "More"
    Then the chatbox explains the feature, "NLP means that the chatbot can process what someone tells it in natural language and determine what is the intent of the other party and what objects or entities are involved."