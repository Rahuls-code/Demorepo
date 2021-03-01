 Feature: Login functionality of Tutorialsninja
 I should be able to login into the site if the username
 and password are correct.
 I sould be able to search and validate the products.
 I should be able to fill all the required information
 to proceed with order confirmation and also validate whether
 transaction was successful or not.
 I should be able to log out of the application.
 
 Scenario Outline: Login and purchase product
  Given I open tutorials ninja site
  When log in using email "<username>" and password "<password>"
  And I set Currency to US dollars
  And I click on Phones&PADs category
  Then IPhones phones should be displayed
  Then I validate the price of the searched IPhone
  When I add Iphone from search result to the cart
  Then "<product>" should be added to cart
  And I fill information "<firstname>" "<lastname>" "<address>" "<city>" "<post>" "<country>" "<state>" to proceed with the order
  When I confirm the order
  Then message should be displayed "Your order has been placed!" to indicate transaction successful
  Then I logout from the application and "Account Logout" should be displayed

  Examples:

   | username | password | product | firstname | lastname | address | city | post | country | state |
   | rg8017@gmail.com | 4242@e | iPhone | Rahul | Ghosh | 66 Park Street | Kolkata | 712202 | India | West Bengal |