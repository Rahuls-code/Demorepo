package com.myorg.app;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinitions {
 WebDriver driver;
 String url="http://tutorialsninja.com/demo/";
 @Given("^I open tutorials ninja site$")
 public void i_open_tutorials_ninja_site() throws Throwable {
   // Write code here that turns the phrase above into concrete actions
 System.setProperty("webdriver.chrome.driver","C:\\webDrivers\\chromedriver.exe");
 driver=new ChromeDriver();
 driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
 driver.manage().window().maximize();
   driver.navigate().to(url);
 }
 @When("^log in using email \"([^\"]*)\" and password \"([^\"]*)\"$")
 public void log_in_using_email_and_password(String user, String pass) throws Throwable {
   // Write code here that turns the phrase above into concrete actions
  driver.findElement(By.xpath("//span[contains(text(),'My Account')]")).click();
  driver.findElement(By.xpath("//a[contains(text(),'Login')]")).click();
  driver.findElement(By.xpath("//input[@id='input-email']")).sendKeys(user);
  Thread.sleep(6000);
  driver.findElement(By.xpath("//input[@id='input-password']")).sendKeys(pass);
    driver.findElement(By.xpath("//body/div[@id='account-login']/div[1]/div[1]/div[1]/div[2]/div[1]/form[1]/input[1]")).click();
 }

 @When("^I set Currency to US dollars$")
 public void i_set_Currency_to_US_dollars() throws Throwable {
   // Write code here that turns the phrase above into concrete actions
  driver.findElement(By.xpath("//span[contains(text(),'Currency')]")).click();
  driver.findElement(By.xpath("//button[contains(text(),'$ US Dollar')]")).click();
 }

 @When("^I click on Phones&PADs category$")
 public void i_click_on_Phones_PADs_category() throws Throwable {
   // Write code here that turns the phrase above into concrete actions
 Thread.sleep(6000);
   driver.findElement(By.xpath("//a[contains(text(),'Phones & PDAs')]")).click();
 }

 @Then("^ phones should be displayed$")
 public void iphones_phones_should_be_displayed() throws Throwable {
   // Write code here that turns the phrase above into concrete actions
 boolean result=false;
   WebElement search=driver.findElement(By.xpath("//a[contains(text(),'iPhone')]"));
   result=search.isDisplayed();
   Assert.assertTrue(result);
 }

 @Then("^I validate the price of the searched IPhone$")
 public void i_validate_the_price_of_the_searched_IPhone() throws Throwable {
   // Write code here that turns the phrase above into concrete actions
 boolean result=false;
 WebElement price=driver.findElement(By.xpath("//body/div[@id='product-category']/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/p[2]"));
   result=price.isDisplayed();
  Assert.assertTrue(result);
 }

 @When("^I add Iphone from search result to the cart$")
 public void i_add_Iphone_from_search_result_to_the_cart() throws Throwable {
   // Write code here that turns the phrase above into concrete actions
   driver.findElement(By.xpath("//body/div[@id='product-category']/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[2]/button[1]")).click();
 }

 @Then("^\"([^\"]*)\" should be added to cart$")
 public void should_be_added_to_cart(String expectedProduct) throws Throwable {
   // Write code here that turns the phrase above into concrete actions
 driver.findElement(By.xpath("//header/div[1]/div[1]/div[3]/div[1]/button[1]")).click();
 String productName=driver.findElement(By.xpath("//td[@class='text-left']/a[contains(text(),'iPhone')]")).getText();
   Assert.assertEquals(productName, expectedProduct);
 }

 @Then("^I fill information \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" to proceed with the order$")
 public void i_fill_information_to_proceed_with_the_order(String firstName, String lastName, String address, String city, String post, String country, String state) throws Throwable {
 // Write code here that turns the phrase above into concrete actions
   driver.findElement(By.xpath("//span[contains(text(),'Checkout')]")).click();
 driver.findElement(By.xpath("//input[@id='input-payment-firstname']")).sendKeys(firstName);
 driver.findElement(By.xpath("//input[@id='input-payment-lastname']")).sendKeys(lastName);
 driver.findElement(By.xpath("//input[@id='input-payment-address-1']")).sendKeys(address);
 driver.findElement(By.xpath("//input[@id='input-payment-city']")).sendKeys(city);
 driver.findElement(By.xpath("//input[@id='input-payment-postcode']")).sendKeys(post);
 Select sel=new Select(driver.findElement(By.id("input-payment-country")));
 sel.selectByVisibleText(country);
   Select sel1=new Select(driver.findElement(By.id("input-payment-zone")));
   sel1.selectByVisibleText(state);
   driver.findElement(By.xpath("//input[@id='button-payment-address']")).click();
   driver.findElement(By.xpath("//input[@id='button-shipping-address']")).click();
   driver.findElement(By.xpath("//input[@id='button-shipping-method']")).click();
   //terms and condition button below
   driver.findElement(By.xpath("//body/div[@id='checkout-checkout']/div[1]/div[1]/div[1]/div[5]/div[2]/div[1]/div[2]/div[1]/input[1]")).click();
   driver.findElement(By.xpath("//input[@id='button-payment-method']")).click();
 }

 @When("^I confirm the order$")
 public void i_confirm_the_order() throws Throwable {
   // Write code here that turns the phrase above into concrete actions
   driver.findElement(By.xpath("//input[@id='button-confirm']")).click();
 }

 @Then("^message should be displayed \"([^\"]*)\" to indicate transaction successful$")
 public void message_should_be_displayed_to_indicate_transaction_successful(String paymentSuccess) throws Throwable {
   // Write code here that turns the phrase above into concrete actions
   String actual=driver.findElement(By.xpath("//h1[contains(text(),'Your order has been placed!')]")).getText();
   Assert.assertEquals(actual, paymentSuccess);
 }

 @Then("^I logout from the application and \"([^\"]*)\" should be displayed$")
 public void i_logout_from_the_application_and_should_be_displayed(String expectedMessage) throws Throwable {
   // Write code here that turns the phrase above into concrete actions
 driver.findElement(By.xpath("//span[contains(text(),'My Account')]")).click();
   driver.findElement(By.xpath("//a[contains(text(),'Logout')]")).click();
   String accountLogOutmessage=driver.findElement(By.xpath("//h1[contains(text(),'Account Logout')]")).getText();
   Assert.assertEquals(accountLogOutmessage,expectedMessage);
 }

}